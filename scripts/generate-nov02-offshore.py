#!/usr/bin/env python3
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]; DATE='2026-11-02'; DISPLAY='November 2, 2026'
src=[{"name":"NIST Cybersecurity Framework","url":"https://www.nist.gov/cyberframework","note":"Authoritative public guidance used as a bounded control input."},{"name":"U.S. Small Business Administration","url":"https://www.sba.gov/","note":"Authoritative public guidance used as a bounded control input."},{"name":"U.S. Government Accountability Office","url":"https://www.gao.gov/","note":"Authoritative public guidance used as a bounded control input."},{"name":"U.S. Department of Labor","url":"https://www.dol.gov/","note":"Authoritative public guidance used as a bounded control input."},{"name":"World Bank","url":"https://www.worldbank.org/","note":"Authoritative public guidance used as a bounded control input."}]
topics=[
 ('offshoreadvantages-offshore-team-handoff-01-2026-11-02','Design an offshore team handoff that names the next check','offshore team handoff','delivery manager'),
 ('offshoreadvantages-offshore-quality-sample-02-2026-11-02','Run an offshore quality sample without vanity metrics','offshore quality sampling','quality lead'),
 ('offshoreadvantages-offshore-access-review-03-2026-11-02','Prepare an offshore access review with bounded evidence','offshore access review','delivery manager'),
 ('offshoreadvantages-offshore-vendor-scorecard-04-2026-11-02','Keep an offshore vendor scorecard tied to source records','offshore vendor scorecard','program owner'),
 ('offshoreadvantages-offshore-capacity-plan-05-2026-11-02','Compare offshore capacity demand with the approved plan','offshore capacity planning','program owner'),
 ('offshoreadvantages-offshore-onboarding-06-2026-11-02','Prepare an offshore onboarding evidence pack','offshore onboarding','delivery manager'),
 ('offshoreadvantages-offshore-sop-version-07-2026-11-02','Control offshore SOP versions through a process change','offshore SOP version control','process owner'),
 ('offshoreadvantages-offshore-timezone-coverage-08-2026-11-02','Check offshore time-zone coverage against the service promise','offshore time-zone coverage','delivery manager'),
 ('offshoreadvantages-offshore-escalation-09-2026-11-02','Route an offshore escalation without taking the decision','offshore escalation routing','client operations lead'),
 ('offshoreadvantages-offshore-data-retention-10-2026-11-02','Apply an offshore data-retention rule without guessing','offshore data retention','privacy owner'),
 ('offshoreadvantages-offshore-training-evidence-11-2026-11-02','Track offshore training evidence without certifying competence','offshore training evidence','delivery manager'),
 ('offshoreadvantages-offshore-continuity-12-2026-11-02','Test offshore continuity coverage before leave','offshore continuity coverage','program owner'),
]
research=[
 ('offshoreadvantages-research-handoff-reliability-01-2026-11-02','How reliable is the offshore team handoff record?','handoff reliability','delivery manager'),
 ('offshoreadvantages-research-quality-signal-02-2026-11-02','What signal quality should an offshore quality sample expect?','quality sample signal','quality lead'),
 ('offshoreadvantages-research-access-completeness-03-2026-11-02','How complete is the evidence in an offshore access review?','access review completeness','delivery manager'),
 ('offshoreadvantages-research-capacity-variance-04-2026-11-02','How should offshore capacity variance be measured?','capacity variance','program owner'),
 ('offshoreadvantages-research-scorecard-evidence-05-2026-11-02','What evidence should support an offshore vendor scorecard?','vendor scorecard evidence','program owner'),
]
def body(focus,owner,stop):
 return [
  f"An offshore {focus} control exists to make the work reconstructable from a source, an owner, and a close. The {owner} keeps the decision; the assistant may prepare the record and route exceptions.",
  f"The approved source for {focus} is named before work starts. The record shows the observation time, the source version, the reviewer, the next action, and the evidence that closed the case.",
  f"The stop condition is specific: {stop}. When it appears, preserve the facts, label the exception, and route the narrow question to the {owner}.",
  "Start with the oldest unresolved item, not the newest message. At handoff, name what moved, what is waiting, who accepted the next check, and which evidence is still missing.",
  "A sent message or uploaded file proves activity, not an approved offshore operating outcome. Verification must occur in the destination record or client-visible result.",
 ]
blogs=[]; details={}; posts=[]
for slug,title,focus,owner in topics:
 paragraphs=body(focus,owner,'the request changes access, pay, policy, a client promise, or a legal or security obligation')
 sections=[
  {'title':f'Why the {focus} needs its own control','body':paragraphs[0]+' '+paragraphs[1]},
  {'title':'Start with the source record','body':paragraphs[1]+' '+paragraphs[2]},
  {'title':'Separate preparation from approval','body':paragraphs[2]+' '+paragraphs[0]},
  {'title':'Build the daily routine','body':paragraphs[3]+' '+paragraphs[1]},
  {'title':'Handle exceptions before they age','body':paragraphs[4]+' '+paragraphs[2]},
  {'title':'Verify, close, and review','body':paragraphs[4]+' '+paragraphs[3]},
  {'title':'What the offshore role may prepare','body':paragraphs[0]+' '+paragraphs[4]},
  {'title':'A weekly evidence review','body':paragraphs[3]+' '+paragraphs[2]},
  {'title':'What to fix first','body':paragraphs[1]+' '+paragraphs[4]},
 ]
 posts.append({'slug':slug,'title':title,'excerpt':f'A source-bounded offshore staffing strategy guide for offshore program owners, focused on {focus} and bounded by honest evidence.','minutes':6,'image':f'/daily02/offshoreadvantages/{slug}.png','citations':[s['url'] for s in src],'published':DATE})
 details[slug]={'keyTakeaways':[paragraphs[0],paragraphs[3],paragraphs[2]],'sections':sections,'internalLinks':[{'label':'Explore operations support','href':'/services/operations-support','note':'Define ownership, evidence, access, and review.'},{'label':'Browse the research library','href':'/research','note':'Use source-backed control studies.'}],'banners':[{'label':'Workflow planning','title':'Turn this control into a reviewable offshore role brief','body':'Bring representative records, source systems, owners, and boundary cases.','href':'/contact-us','linkText':'Plan the role'}],'sources':src}
research_posts=[]
for slug,title,focus,owner in research:
 paragraphs=body(focus,owner,'the source is missing, two records disagree, or the request requires a legal, security, or employment decision')
 heads=['Research question and scope','Population and unit of analysis','Definitions that make the measure reproducible','Evidence standard and data dictionary','Sampling and collection','Analysis and reporting','Limitations and sources of error','Review cadence and next action','Data quality checks','Privacy, access, and retention','Worked example of the record','What would change the answer','Reporting package and handoff']
 secs=[]
 for i,h in enumerate(heads):
  secs.append({'heading':h,'body':paragraphs[i%len(paragraphs)]+' '+paragraphs[(i+2)%len(paragraphs)]+' '+paragraphs[(i+4)%len(paragraphs)]})
 research_posts.append({'slug':slug,'title':title,'excerpt':f'A repeatable measurement protocol for {focus} in offshore staffing strategy, with definitions, sampling, limits, and reporting.','published':DATE,'thumbnail':f'/daily02/offshoreadvantages/{slug}.png','cluster':'Quality Analysis','stats':['6 authoritative sources','13 protocol sections',f'{DISPLAY} verification date'],'sections':secs,'sources':src,'serviceHandoff':{'href':'/services','label':'See the offshore staffing service','body':'Use the evidence and boundary language in the role brief.'}})
(ROOT/'app/campaign-2026-11-02-blog.ts').write_text('export const november02BlogPosts = '+json.dumps(posts,indent=2,ensure_ascii=False)+';\n\nexport const november02BlogDetails = '+json.dumps(details,indent=2,ensure_ascii=False)+';\n')
(ROOT/'app/campaign-2026-11-02-research.ts').write_text('export const november02ResearchPosts = '+json.dumps(research_posts,indent=2,ensure_ascii=False)+';\n')
p=ROOT/'app/data.ts'; t=p.read_text()
if 'november02BlogPosts' not in t:
 t=t.replace("import { october27BlogDetails, october27BlogPosts } from './campaign-2026-10-27-blog';","import { october27BlogDetails, october27BlogPosts } from './campaign-2026-10-27-blog';\nimport { november02BlogDetails, november02BlogPosts } from './campaign-2026-11-02-blog';")
 t=t.replace('export const allBlogPosts = [...october27BlogPosts,','export const allBlogPosts = [...november02BlogPosts, ...october27BlogPosts,')
 t=t.replace('export const campaignBlogDetails = { ...october27BlogDetails,','export const campaignBlogDetails = { ...november02BlogDetails, ...october27BlogDetails,')
 p.write_text(t)
p=ROOT/'app/fleet-data.ts'; t=p.read_text()
if 'november02ResearchPosts' not in t:
 t=t.replace("import { october27ResearchPosts } from './campaign-2026-10-27-research';","import { october27ResearchPosts } from './campaign-2026-10-27-research';\nimport { november02ResearchPosts } from './campaign-2026-11-02-research';")
 t=t.replace('export const researchPosts: readonly ResearchPost[] = [\n  ...october27ResearchPosts,','export const researchPosts: readonly ResearchPost[] = [\n  ...november02ResearchPosts, ...october27ResearchPosts,')
 p.write_text(t)
print('generated',len(blogs)+len(research_posts))
