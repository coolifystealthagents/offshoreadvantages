import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { findEditorialRecord, imageResponseOptions, resolveEditorialImagePolicy } from '../app/editorial-image-policy.mjs';
import { BoundedWindowLimiter, readBoundedText } from '../app/request-guards.mjs';
const root = process.cwd();
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

const cssBlock = (source, selector) => {
  const start = source.indexOf(selector);
  assert.notEqual(start, -1, `missing selector ${selector}`);
  const open = source.indexOf('{', start);
  const close = source.indexOf('}', open);
  return source.slice(open + 1, close);
};

test('legacy service URLs permanently redirect to canonical fleet services', () => {
  const config = read('next.config.mjs');
  for (const [source, destination] of [
    ['/services/operations-support', '/services/shared-services-administration'],
    ['/services/customer-support', '/services/customer-experience-support'],
  ]) {
    assert.ok(config.includes(`source: '${source}'`), source);
    assert.ok(config.includes(`destination: '${destination}'`), destination);
  }
  assert.ok(config.includes('permanent: true'));
});

test('provider questions article is present in the routed blog catalog', () => {
  const data = read('app/data.ts');
  const catalog = data.slice(data.indexOf('export const blogPosts'), data.indexOf('export const todayBlogPosts'));
  assert.ok(catalog.includes("slug: 'offshore-advantages-provider-questions'"));
});

test('October 2 internal links target existing semantic destinations', () => {
  const activeBlogs = new Set([
    ...read('app/campaign-2026-10-05.ts').matchAll(/slug:\s*['"]([^'"]+)['"]/g),
    ...read('app/campaign-2026-10-02.ts').matchAll(/slug:\s*['"]([^'"]+)['"]/g),
    ...read('app/data.ts').slice(read('app/data.ts').indexOf('export const blogPosts'), read('app/data.ts').indexOf('export const todayBlogPosts')).matchAll(/slug:\s*['"]([^'"]+)['"]/g),
  ].map((match) => match[1]));
  const activeResearch = new Set([
    ...read('app/campaign-2026-10-05-research.ts').matchAll(/slug:\s*['"]([^'"]+)['"]/g),
    ...read('app/campaign-2026-10-02-research.ts').matchAll(/slug:\s*['"]([^'"]+)['"]/g),
  ].map((match) => match[1]));
  for (const file of ['app/campaign-2026-10-05.ts', 'app/campaign-2026-10-02.ts']) {
    for (const [, family, slug] of read(file).matchAll(/href:\s*['"]\/(blog|research)\/([^'"]+)['"]/g)) {
      assert.ok((family === 'blog' ? activeBlogs : activeResearch).has(slug), `${file}: /${family}/${slug}`);
    }
  }
});

test('all static top-level pages declare route-specific canonical metadata', () => {
  for (const file of [
    'app/page.tsx',
    'app/services/page.tsx',
    'app/blog/page.tsx',
    'app/research/page.tsx',
    'app/privacy/page.tsx',
    'app/terms/page.tsx',
    'app/cancellation-policy/page.tsx',
  ]) assert.ok(read(file).includes('alternates:'), file);
});

test('research articles expose their unique excerpt as HTML metadata', () => {
  const source = read('app/research/[slug]/page.tsx');
  const metadataReturn = source.slice(source.indexOf('return {', source.indexOf('generateMetadata')), source.indexOf('openGraph:'));
  assert.match(metadataReturn, /description:\s*post\.excerpt[\s,]/);
});

test('numbered blog pages exclude page one and have unique metadata and canonicals', () => {
  const source = read('app/blog/page/[page]/page.tsx');
  assert.ok(source.includes('generateMetadata'));
  assert.ok(source.includes('Blog page ${n}'));
  assert.doesNotMatch(source, /title:\s*`Blog page \$\{n\} \| \$\{site\.brand\}`/);
  assert.ok(source.includes('alternates:'));
  assert.match(source, /i\s*\+\s*2/);
  assert.ok(source.includes("permanentRedirect('/blog')") || source.includes('permanentRedirect("/blog")'));
});

test('shared green controls use an accessible white-text background', () => {
  const css = read('app/globals.css');
  for (const selector of [
    '.article-rotation-banner .btn',
    '.pagination a[aria-current="page"]',
    '.research-cluster-tabs a.active',
  ]) assert.match(cssBlock(css, selector), /background:\s*(?:var\(--accessible-green\)|#0b765f)/i, selector);
});

test('responsive fixes wrap pagination and contain long cards and outbound CTAs', () => {
  const css = read('app/globals.css');
  assert.match(cssBlock(css, '.pagination'), /flex-wrap:\s*wrap/);
  assert.match(cssBlock(css, '.research-library-card'), /min-width:\s*0/);
  assert.match(css, /\.research-library-card h2[\s\S]*?overflow-wrap:\s*anywhere/);
  assert.match(cssBlock(css, '.tc-about a'), /max-width:\s*100%/);
  assert.match(cssBlock(css, '.tc-about a'), /white-space:\s*normal/);
});

test('generic editorial fallbacks resolve through one deterministic accessible helper', () => {
  const resolver = read('app/editorial-images.ts') + read('app/editorial-image-policy.mjs');
  for (const fallback of ['/philippines-team.jpg', '/research/research-default.svg', '/blog-batch-2026-08-10.svg']) {
    assert.ok(resolver.includes(fallback), fallback);
  }
  assert.ok(resolver.includes('resolveEditorialImage'));
  assert.ok(resolver.includes('alt:'));
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  for (const source of [blog, research]) {
    assert.ok(source.includes('resolveEditorialImage'));
    assert.match(source, /alt=\{(?:editorialImage|image)\.alt\}/);
  }
});

test('homepage names the VA offer, professional-services audience, and concrete outcome', () => {
  const home = read('app/page.tsx').toLowerCase();
  assert.ok(home.includes('virtual assistant'));
  assert.ok(home.includes('professional-services'));
  assert.ok(home.includes('reviewable'));
});

test('public catalogs retain the strongest recent library above the 12 blog and 5 research floor', () => {
  const data = read('app/data.ts');
  const blogCatalog = data.slice(data.indexOf('export const allBlogPosts'), data.indexOf('export const campaignBlogDetails'));
  for (const required of ['october5BlogPosts', 'october2BlogPosts', 'blogPosts']) assert.ok(blogCatalog.includes(required));
  for (const retired of ['september18BlogPosts', 'batchBlogPosts', 'todayBlogPosts']) assert.ok(!blogCatalog.includes(retired));

  const fleet = read('app/fleet-data.ts');
  const researchCatalog = fleet.slice(fleet.indexOf('export const researchPosts'), fleet.indexOf('export const postsPerPage'));
  for (const required of ['october5ResearchPosts', 'october2ResearchPosts']) assert.ok(researchCatalog.includes(required));
  assert.ok(!researchCatalog.includes('august18ResearchBatch'));
});

test('retired generated article URLs permanently redirect to maintained library indexes', () => {
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  assert.match(blog, /retiredBlogSlugs\.has\(slug\)[\s\S]*?permanentRedirect\(["']\/blog["']\)/);
  assert.match(research, /retiredResearchSlugs\.has\(slug\)[\s\S]*?permanentRedirect\(["']\/research["']\)/);
  assert.match(blog, /if \(!post\) notFound\(\)/);
  assert.match(research, /if \(!post\) notFound\(\)/);

  const aug19 = JSON.parse(read('app/aug19-meta.json'));
  for (const [slug, record] of Object.entries(aug19)) {
    assert.equal(fs.existsSync(path.join(root, 'app', record.family, slug, 'page.tsx')), false, slug);
  }
});

test('sitemap publishes only maintained catalogs and no retired batch metadata', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.ok(!sitemap.includes('aug19Meta'));
  assert.ok(!sitemap.includes('aug20Meta'));
  assert.ok(sitemap.includes('allBlogPosts'));
  assert.ok(sitemap.includes('researchPosts'));
});

test('editorial image endpoint is catalog-only raster output with revalidation caching', () => {
  assert.equal(fs.existsSync(path.join(root, 'app/editorial-image/[slug]/route.ts')), false);
  const route = read('app/editorial-image/[slug]/route.tsx');
  assert.ok(route.includes('ImageResponse'));
  assert.match(route, /if \(!record\)[\s\S]*?status:\s*404/);
  assert.ok(!route.includes('immutable'));
  assert.ok(!route.includes('formatFallbackTitle'));
});

test('research index does not promise a fixed unsupported source count', () => {
  const source = read('app/research/page.tsx');
  assert.ok(!source.includes('10 sources per report'));
});

test('contact routes consolidate on a claim-safe canonical consultation page', () => {
  const config = read('next.config.mjs');
  const page = read('app/contact-us/page.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  assert.match(config, /source:\s*['"]\/contact['"][\s\S]*?destination:\s*['"]\/contact-us['"][\s\S]*?permanent:\s*true/);
  assert.doesNotMatch(page, /testimonials|35\+ industries|featured on Forbes|top rated/i);
  assert.match(form, /button\{[^}]*background:#0b765f/);
});

test('blog conversion blocks are canonical and article-specific instead of sitewide duplicates', () => {
  const layout = read('app/blog/layout.tsx');
  const article = read('app/blog/[slug]/page.tsx');
  const profile = read('app/blog-banner-profile.json');
  assert.ok(!layout.includes('BlogBanner'));
  assert.match(article, /Plan support for \{post\.title\}/);
  assert.match(article, /Bring examples from .\{post\.title\}./);
  assert.ok(!profile.includes('"href": "/contact"'));
});

test('route titles and Open Graph metadata do not inherit homepage identity', () => {
  const layout = read('app/layout.tsx');
  const home = read('app/page.tsx');
  assert.doesNotMatch(layout, /openGraph\s*:/);
  assert.match(home, /openGraph\s*:/);
  assert.match(home, /title:\s*\{\s*absolute:\s*['"]Virtual Assistant Planning for Professional Services \| Offshore Advantages['"]\s*\}/);
  for (const file of ['app/page.tsx', 'app/blog/page.tsx', 'app/services/page.tsx', 'app/research/page.tsx']) {
    const metadata = read(file).slice(0, read(file).indexOf('export default'));
    assert.doesNotMatch(metadata, /title\s*:\s*`[^`]*\$\{site\.brand\}/, file);
  }
});

test('unsupported provider ranking is retired from discovery and permanently consolidated', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  const config = read('next.config.mjs');
  assert.ok(!sitemap.includes('/blog/top-50-offshore-outsourcing-companies'));
  assert.match(config, /source:\s*['"]\/blog\/top-50-offshore-outsourcing-companies['"][\s\S]*?destination:\s*['"]\/blog['"][\s\S]*?permanent:\s*true/);
});

test('generic library links use labels that describe browsing a library', () => {
  for (const file of ['app/data.ts', 'app/campaign-2026-10-02.ts', 'app/campaign-2026-10-05.ts']) {
    const source = read(file);
    const links = [...source.matchAll(/\{[^{}]*href:\s*['"]\/(blog|research)['"][^{}]*\}/g)];
    for (const match of links) {
      const family = match[1];
      const labels = [...match[0].matchAll(/(?:label|linkText):\s*['"]([^'"]+)['"]/g)].map((item) => item[1]);
      assert.ok(labels.some((label) => new RegExp(`^Browse the ${family} library$`, 'i').test(label)), `${file}: ${match[0]}`);
    }
  }
});

test('contact form has one submission owner and unambiguous phone controls', () => {
  const acr = read('app/acr-client.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  assert.match(form, /data-acr-managed=["']true["']/);
  assert.match(acr, /form\.dataset\.acrManaged\s*===\s*['"]true['"]/);
  assert.match(form, /for\s*\(let i\s*=\s*0;\s*i\s*<\s*20\s*&&[^;]*acrTracker/);
  assert.match(form, /aria-label=["']Country code["']/);
  assert.match(form, /aria-label=["']Phone number["']/);
});

test('editorial image policy behavior gates slugs, fallbacks, dimensions, and cache', () => {
  const records = [{ slug: 'known', title: 'Known' }];
  assert.deepEqual(findEditorialRecord('known', records), records[0]);
  assert.equal(findEditorialRecord('unknown', records), undefined);
  for (const image of [undefined, '/philippines-team.jpg', '/research/research-default.svg', '/blog-batch-2026-08-10.svg']) {
    assert.equal(resolveEditorialImagePolicy({ slug: 'a/b', title: 'Guide', image }).src, '/editorial-image/a%2Fb');
  }
  assert.equal(resolveEditorialImagePolicy({ slug: 'known', title: 'Guide', image: '/specific.png' }).src, '/specific.png');
  assert.equal(resolveEditorialImagePolicy({ slug: 'known', title: 'Guide' }).alt, 'Guide — editorial guide illustration');
  const options = imageResponseOptions();
  assert.equal(options.width, 1200);
  assert.equal(options.height, 630);
  assert.equal(options.headers['Content-Type'], 'image/png');
  assert.equal(options.headers['X-Content-Type-Options'], 'nosniff');
  assert.equal(options.headers['Cache-Control'], 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
});
test('contact and homepage copy avoid unsupported commercial claims', () => {
  const publicCopy = [
    read('app/page.tsx'),
    read('app/contact-us/page.tsx'),
    read('app/contact-us/StandardContactForm.tsx'),
  ].join('\n');
  assert.doesNotMatch(publicCopy, /industry experienced|Philippines specialists|free consultation|exclusively in the Philippines|find growth/i);
});

test('mobile contact layout preserves visual and semantic reading order', () => {
  const css = read('app/globals.css');
  assert.doesNotMatch(css, /\.tc-hero-grid>\.sa-form-card\s*\{\s*order\s*:\s*-1/);
});

test('contact kicker colors cover every light and dark section context', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.tc-kicker\{[^}]*color:#08727a/);
  assert.match(css, /\.tc-hero \.tc-kicker,\.tc-why \.tc-kicker,\.tc-final \.tc-kicker\{color:#67e4e8\}/);
});

test('thank-you page avoids unverified testimonials and outcome claims', () => {
  const page = read('app/thank-you/page.tsx');
  assert.doesNotMatch(page, /TestimonialsRail|expert guidance|no risk/i);
});

test('managed contact form reports API failures instead of treating analytics as delivery', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const failureStart = form.lastIndexOf('} catch {');
  const failurePath = form.slice(failureStart, form.indexOf('setSubmitting(false);', failureStart) + 'setSubmitting(false);'.length);
  assert.doesNotMatch(failurePath, /trackLead|thank-you/);
  assert.match(form, /aria-busy=\{submitting\}/);
  assert.match(form, /aria-live="polite"/);
});

test('contact API preserves user referral attribution and only redirects after acknowledged ingestion', () => {
  const route = read('app/api/contact/route.ts');
  assert.match(route, /text\(form, 'referral'/);
  assert.match(route, /text\(form, 'referralSpecify'/);
  assert.match(route, /result\?\.ok !== true/);
  assert.ok(route.lastIndexOf('return accepted(request)') > route.indexOf('result?.ok !== true'));
  assert.match(route, /source_page:\s*pageUrl/);
  assert.match(route, /landing_page:\s*pageUrl/);
  assert.match(route, /page_journey:\s*\['Contact form'\]/);
});

test('public POST routes stream-limit bodies and use bounded global throttles', async () => {
  const oversized = new Request('https://example.test/api/contact', {
    method: 'POST',
    body: new ReadableStream({ start(controller) { controller.enqueue(new TextEncoder().encode('1234')); controller.enqueue(new TextEncoder().encode('5678')); controller.close(); } }),
    duplex: 'half',
  });
  await assert.rejects(readBoundedText(oversized, 7), /too large/i);
  const acceptable = new Request('https://example.test/api/contact', { method: 'POST', body: 'abc' });
  assert.equal(await readBoundedText(acceptable, 3), 'abc');
  const limiter = new BoundedWindowLimiter({ windowMs: 1000, maxKeys: 2 });
  assert.equal(limiter.hit('a', 1, 0), false);
  assert.equal(limiter.hit('a', 1, 1), true);
  for (let attempt = 0; attempt < 10_000; attempt += 1) assert.equal(limiter.hit('a', 1, 2), true);
  assert.equal(limiter.storedHits, 1);
  assert.equal(limiter.hit('b', 1, 1), false);
  assert.equal(limiter.hit('c', 1, 1), true);
  assert.equal(limiter.size, 2);
  assert.equal(limiter.storedHits, 2);
  assert.equal(limiter.hit('c', 1, 2000), false);
  assert.equal(limiter.size, 1);
  assert.equal(limiter.storedHits, 1);
  for (const file of ['app/api/contact/route.ts', 'app/ingest/track/route.ts']) {
    const source = read(file);
    assert.match(source, /readBoundedText/);
    assert.match(source, /new BoundedWindowLimiter/);
    assert.match(source, /mediaType !==/);
    assert.match(source, /PUBLIC_ORIGINS/);
    assert.doesNotMatch(source, /cf-connecting-ip|x-real-ip|x-forwarded-for/);
  }
});

test('editorial image route canonicalizes query variants and negatively caches unknown slugs', () => {
  const route = read('app/editorial-image/[slug]/route.tsx');
  assert.match(route, /requestUrl\.search[\s\S]*?Response\.redirect[\s\S]*?308/);
  assert.match(route, /PUBLIC_ORIGIN\s*=\s*'https:\/\/offshoreadvantages\.com'/);
  assert.doesNotMatch(route, /Response\.redirect\(new URL\([^)]*,\s*requestUrl\.origin\)/);
  assert.match(route, /status:\s*404[\s\S]*?s-maxage=300/);
});

test('legal contact links remain crawlable without email-protection pseudo-routes', () => {
  for (const path of ['app/privacy/page.tsx', 'app/terms/page.tsx', 'app/cancellation-policy/page.tsx']) {
    const source = read(path);
    assert.match(source, /href="\/contact-us"/);
    assert.doesNotMatch(source, /mailto:|\{email\}/);
  }
});

test('service schema does not claim the information site is the staffing provider', () => {
  const route = read('app/services/[slug]/page.tsx');
  assert.match(route, /'@type': 'Service'/);
  assert.doesNotMatch(route, /provider:\s*\{/);
  assert.doesNotMatch(route, /organizationId/);
});

test('customer-support related links have unique destinations and labels', () => {
  const data = read('app/data.ts');
  for (const slug of ['philippines-customer-support-data-security-checklist', 'philippines-customer-support-accessibility-quality-checklist']) {
    const start = data.indexOf(`'${slug}'`);
    const links = data.slice(data.indexOf('internalLinks:', start), data.indexOf('banners:', start));
    const rows = [...links.matchAll(/label:\s*'([^']+)'[\s\S]*?href:\s*'([^']+)'/g)].map((match) => `${match[1]}|${match[2]}`);
    assert.equal(new Set(rows).size, rows.length, slug);
  }
});

test('managed contact form requires authoritative API acknowledgement before analytics or navigation', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const route = read('app/api/contact/route.ts');
  assert.match(form, /Accept: "application\/json"/);
  assert.match(form, /result\?\.ok !== true/);
  assert.match(form, /aria-busy=\{submitting\}/);
  assert.match(form, /aria-live="polite"/);
  assert.match(route, /result\?\.ok !== true/);
  assert.match(route, /accept[^\n]+application\/json[\s\S]*?NextResponse\.json\(\{ ok: true \}/);
  assert.match(route, /text\(form, 'referral'/);
  assert.match(route, /text\(form, 'referralSpecify'/);
});

test('phone controls preserve country code and number without client JavaScript', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const route = read('app/api/contact/route.ts');
  assert.match(form, /name="countryCode"/);
  assert.match(form, /name="phone"/);
  assert.doesNotMatch(form, /name="phoneLocal"/);
  assert.match(route, /text\(form, 'countryCode'/);
  assert.match(route, /countryCode && !localPhone\.startsWith\(countryCode\)/);
});
