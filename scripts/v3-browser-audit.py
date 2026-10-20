import asyncio, json, os
from pathlib import Path
from playwright.async_api import async_playwright

BASE='https://offshoreadvantages.com:3443'
OUT=Path('/workspace/audits/offshoreadvantages-v3-local')
OUT.mkdir(parents=True,exist_ok=True)
ARTICLE='/blog/offshore-queue-ownership-transition'
ROUTES=['/','/services','/contact-us','/about','/services/customer-experience-support',ARTICLE,'/research/offshore-handoff-acknowledgement-study-2026-10-08','/thank-you','/thanks-whats-next','/definitely-not-a-route']
VIEWS=[('mobile',360,800),('tablet',768,1024),('desktop',1440,900)]

async def main():
  report={'base':BASE,'routes':{},'screenshots':[]}
  async with async_playwright() as p:
    chromium=os.environ.get('CHROMIUM_EXECUTABLE') or p.chromium.executable_path
    browser=await p.chromium.launch(headless=True,executable_path=chromium,args=['--host-resolver-rules=MAP offshoreadvantages.com 127.0.0.1'])
    for label,width,height in VIEWS:
      context=await browser.new_context(viewport={'width':width,'height':height},ignore_https_errors=True)
      for route in ROUTES:
        page=await context.new_page()
        errors=[]
        page.on('console',lambda msg: errors.append(f'console:{msg.type}:{msg.text}') if msg.type=='error' else None)
        page.on('pageerror',lambda err: errors.append(f'pageerror:{err}'))
        response=await page.goto(BASE+route,wait_until='domcontentloaded',timeout=30000)
        await page.wait_for_timeout(500)
        status=response.status if response else None
        if route in ['/','/contact-us','/services/customer-experience-support',ARTICLE,'/definitely-not-a-route']:
          name=(route.strip('/').replace('/','-') or 'home')
          shot=OUT/f'{label}-{name}.png'
          await page.screenshot(path=str(shot),full_page=True)
          report['screenshots'].append(str(shot))
        await page.evaluate("""async () => {
          for (const image of document.images) {
            image.scrollIntoView({block:'center'});
            try { await Promise.race([image.decode(), new Promise((_,reject)=>setTimeout(()=>reject(new Error('decode timeout')),2000))]); } catch (_) {}
          }
          window.scrollTo(0,0);
        }""")
        await page.wait_for_timeout(250)
        result=await page.evaluate("""() => {
          const body=document.body, html=document.documentElement;
          const h1=[...document.querySelectorAll('h1')].map(x=>x.textContent.trim());
          const imgs=[...document.images].map(i=>({src:i.getAttribute('src'),alt:i.getAttribute('alt'),naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight,complete:i.complete}));
          const nav=[...document.querySelectorAll('nav[aria-label="Main navigation"] a')].map(a=>a.textContent.trim());
          const visible=(el)=>!!(el&&el.getBoundingClientRect().width&&el.getBoundingClientRect().height);
          const submit=document.querySelector('#contactPageForm button[type="submit"]');
          const rect=submit?.getBoundingClientRect();
          const sidebar=document.querySelector('.article-sidebar');
          const clippedText=[...document.querySelectorAll('h1,h2,h3,p,a,li')].filter(el=>el.clientWidth>0&&el.scrollWidth>el.clientWidth+1&&getComputedStyle(el).overflowX!=='auto').map(el=>({tag:el.tagName,text:(el.textContent||'').trim().slice(0,80),clientWidth:el.clientWidth,scrollWidth:el.scrollWidth}));
          return {title:document.title,h1,nav,main:!!document.querySelector('main#main-content'),horizontalOverflow:html.scrollWidth-innerWidth,bodyOverflow:body.scrollWidth-innerWidth,clippedText,images:imgs,submitVisibleInFold:rect?rect.bottom<=innerHeight:null,submitBottom:rect?Math.round(rect.bottom):null,sidebarPosition:sidebar?getComputedStyle(sidebar).position:null,reviewCount:document.querySelectorAll('.review-card').length,parentBrandCount:document.querySelectorAll('.parent-brand').length,visible404:document.body.innerText.includes('This route is not on the map.')};
        }""")
        result.update({'status':status,'errors':errors})
        key=f'{label}:{route}'
        report['routes'][key]=result
        await page.close()
      await context.close()
    reduced=await browser.new_context(viewport={'width':360,'height':800},ignore_https_errors=True,reduced_motion='reduce')
    reduced_page=await reduced.new_page(); await reduced_page.goto(BASE+'/contact-us',wait_until='domcontentloaded',timeout=30000)
    report['reducedMotionVisibleReviews']=await reduced_page.locator('.review-card').evaluate_all("els=>els.filter(el=>getComputedStyle(el).display!=='none'&&el.getBoundingClientRect().width>0).length")
    await reduced.close()
    await browser.close()
  failures=[]
  for key,r in report['routes'].items():
    route=key.split(':',1)[1]
    expected=404 if route=='/definitely-not-a-route' else 200
    if r['status']!=expected: failures.append(f'{key}: status {r["status"]}, expected {expected}')
    if len(r['h1'])!=1: failures.append(f'{key}: h1 count {len(r["h1"])}')
    if r['nav']!=['Home','Services','Contact Us']: failures.append(f'{key}: nav {r["nav"]}')
    if not r['main']: failures.append(f'{key}: skip-link target main#main-content missing')
    if r['horizontalOverflow']>1: failures.append(f'{key}: overflow {r["horizontalOverflow"]}')
    if r['clippedText']: failures.append(f'{key}: clipped text {r["clippedText"]}')
    badimgs=[i for i in r['images'] if not i['complete'] or i['naturalWidth']==0]
    if badimgs: failures.append(f'{key}: bad images {badimgs}')
    relevant_errors=[e for e in r['errors'] if not (route=='/definitely-not-a-route' and 'status of 404' in e)]
    if relevant_errors: failures.append(f'{key}: errors {relevant_errors}')
  contact=report['routes']['desktop:/contact-us']
  if not contact['submitVisibleInFold']: failures.append(f'desktop contact submit below fold at {contact["submitBottom"]}')
  if contact['reviewCount']<10: failures.append(f'contact review count {contact["reviewCount"]}')
  if report['reducedMotionVisibleReviews']<10: failures.append(f'reduced-motion visible reviews {report["reducedMotionVisibleReviews"]}')
  if report['routes'][f'desktop:{ARTICLE}']['sidebarPosition']!='sticky': failures.append('desktop blog sidebar is not sticky')
  if not report['routes']['desktop:/definitely-not-a-route']['visible404']: failures.append('branded 404 copy missing')
  report['failures']=failures
  (OUT/'report.json').write_text(json.dumps(report,indent=2))
  print(json.dumps({'failures':failures,'routeChecks':len(report['routes']),'screenshots':len(report['screenshots'])},indent=2))
  if failures: raise SystemExit(1)

asyncio.run(main())
