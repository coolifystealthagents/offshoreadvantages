import fs from 'node:fs';
const file=fs.readFileSync('app/campaign-2026-10-08.ts','utf8');
const assert=(value,message)=>{if(!value)throw new Error(message)};
const slugs=(block)=>[...block.matchAll(/slug:'([^']+)'/g)].map(match=>match[1]);
const blogBlock=file.slice(file.indexOf('const blogSpecs'),file.indexOf('const paragraphs'));
const researchBlock=file.slice(file.indexOf('const researchSpecs'),file.indexOf('const researchParagraphs'));
const blogs=slugs(blogBlock), research=slugs(researchBlock);
assert(blogs.length===12,`expected 12 Blog articles, found ${blogs.length}`);
assert(research.length===5,`expected 5 Research articles, found ${research.length}`);
assert(new Set([...blogs,...research]).size===17,'duplicate October 8 slug');
assert(file.includes("const published = '2026-10-08'"),'wrong publication date');
assert(file.includes('Published October 8, 2026.'),'visible reader date missing');
const paragraphWords=(start,end)=>file.slice(file.indexOf(start),file.indexOf(end)).replace(/\$\{[^}]+\}/g,' value ').match(/[A-Za-z0-9’'-]+/g)?.length??0;
const blogWords=paragraphWords('const paragraphs','export const october8BlogPosts');
const researchWords=paragraphWords('const researchParagraphs','export const october8ResearchPosts');
assert(blogWords>=1100,`Blog template only ${blogWords} words`);
assert(researchWords>=1100,`Research template only ${researchWords} words`);
for(const [kind,expected,expectedSlugs] of [['blog',12,blogs],['research',5,research]]){
 const manifest=JSON.parse(fs.readFileSync(`.paperclip/daily-content/2026-10-08/${kind}.json`));
 assert(manifest.date==='2026-10-08'&&manifest.count===expected&&manifest.articles.length===expected,`${kind} manifest invalid`);
 assert(expectedSlugs.every(slug=>manifest.articles.includes(slug)),`${kind} manifest slug mismatch`);
}
const data=fs.readFileSync('app/data.ts','utf8'), fleet=fs.readFileSync('app/fleet-data.ts','utf8');
assert(data.includes('...october8BlogPosts')&&data.includes('...october8BlogDetails'),'Blog registry missing');
assert(fleet.includes('...october8ResearchPosts'),'Research registry missing');
assert(fs.readFileSync('app/blog/[slug]/page.tsx','utf8').includes('<time'),'Blog reader date missing');
assert(fs.readFileSync('app/research/[slug]/page.tsx','utf8').includes('<time'),'Research reader date missing');
assert(fs.readFileSync('app/sitemap.xml/route.ts','utf8').includes('allBlogPosts')&&fs.readFileSync('app/sitemap.xml/route.ts','utf8').includes('researchPosts'),'sitemap registry missing');
console.log(`October 8 validation passed: Blog ${blogs.length} (${blogWords} template words), Research ${research.length} (${researchWords} template words).`);
