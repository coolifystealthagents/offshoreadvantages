import {readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
const manifest=JSON.parse(await readFile('.paperclip/aug10-2026/research.json','utf8'));
const source=await readFile('app/fleet-data.ts','utf8');
const page=await readFile('app/research/[slug]/page.tsx','utf8');
const sitemap=await readFile('app/sitemap.xml/route.ts','utf8');
if(manifest.schemaVersion!==1||manifest.contract!=='sites3-aug10-public-date-v6'||manifest.family!=='research'||manifest.domain!=='offshoreadvantages.com'||manifest.branch!=='main')throw new Error('Invalid manifest identity');
if(manifest.entries.length<manifest.minimum)throw new Error('Count below minimum');
if(!source.includes('.sort((a, b) => b.published.localeCompare(a.published))'))throw new Error('Index not newest-first');
if(!page.includes('datePublished:post.published')||!page.includes('dateTime={post.published}')||!page.includes('alternates:{canonical'))throw new Error('Rendered contract missing');
if(!sitemap.includes('researchPosts.map'))throw new Error('Sitemap route missing');
const seen=new Set();
for(const e of manifest.entries){if(seen.has(e.slug))throw new Error(`Duplicate ${e.slug}`);seen.add(e.slug);if(e.route!==`/research/${e.slug}`||!/^\/research\/[a-z0-9-]+$/.test(e.route))throw new Error(`Bad route ${e.route}`);if(e.sourcePath!=='app/fleet-data.ts'||!existsSync(e.sourcePath)||e.sourceDate!=='2026-08-10'||e.renderedDate!=='2026-08-10')throw new Error(`Bad record ${e.slug}`);if(!new RegExp(`slug: '${e.slug}'[\\s\\S]{0,240}published: '2026-08-10'`).test(source))throw new Error(`Missing source record ${e.slug}`);if(!e.renderedDateFields.includes('datePublished')||!e.renderedDateFields.includes('time[datetime]'))throw new Error(`Missing rendered fields ${e.slug}`);const html=`.next/server/app/research/${e.slug}.html`;if(!existsSync(html))throw new Error(`Missing build ${e.slug}`);const built=await readFile(html,'utf8');if(!built.includes('2026-08-10')||!built.includes('datePublished')||!built.includes('canonical'))throw new Error(`Built audit failed ${e.slug}`)}
console.log(JSON.stringify({status:'PASS',family:'research',acceptedCount:manifest.entries.length,sourceDateAudit:'PASS',renderedDateAudit:'PASS',canonicalAudit:'PASS',sitemapAudit:'PASS',indexOrderAudit:'PASS'},null,2));
