import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const assert = (condition, message) => { if (!condition) throw new Error(message); };
const manifest = JSON.parse(read('publishing/2026-10-12/manifest.json'));
const campaign = read('app/campaign-2026-10-12.ts');
const data = read('app/data.ts');
const fleet = read('app/fleet-data.ts');
const blogRoute = read('app/blog/[slug]/page.tsx');
const researchRoute = read('app/research/[slug]/page.tsx');
const sitemap = read('app/sitemap.xml/route.ts');

assert(manifest.date === '2026-10-12', 'manifest date mismatch');
assert(manifest.visibleDate === 'October 12, 2026', 'manifest visible date mismatch');
assert(manifest.counts.Blog === 12 && manifest.counts.Research === 5 && manifest.counts.total === 17, 'manifest count mismatch');
assert(manifest.articles.length === 17, 'manifest must contain 17 articles');
assert(campaign.includes("const published = '2026-10-12'"), 'campaign publication date missing');
assert(campaign.match(/Published October 12, 2026\./g)?.length === 2, 'visible date must be present in Blog and Research templates');

const blogs = manifest.articles.filter((item) => item.section === 'Blog');
const research = manifest.articles.filter((item) => item.section === 'Research');
assert(blogs.length === 12, `expected 12 Blog items, found ${blogs.length}`);
assert(research.length === 5, `expected 5 Research items, found ${research.length}`);
assert(new Set(manifest.articles.map((item) => item.slug)).size === 17, 'duplicate slug in manifest');
assert(new Set(manifest.articles.map((item) => item.title)).size === 17, 'duplicate title in manifest');

const forbiddenDate = /(?:oct(?:ober)?\s+12|2026[-/]10[-/]12)/i;
for (const article of manifest.articles) {
  assert(!forbiddenDate.test(article.title), `date appears in title: ${article.title}`);
  assert(campaign.includes(`slug: '${article.slug}'`), `campaign missing slug ${article.slug}`);
  assert(campaign.includes(`title: '${article.title}'`), `campaign missing title ${article.title}`);
  const thumbnailPath = `public/october-12-2026/${article.slug}.svg`;
  assert(fs.existsSync(path.join(root, thumbnailPath)), `missing thumbnail ${thumbnailPath}`);
  const svg = read(thumbnailPath);
  assert(svg.includes('width="1200"') && svg.includes('height="630"'), `wrong thumbnail dimensions for ${article.slug}`);
  assert(svg.includes(`<title id="title">${article.title}</title>`), `thumbnail title mismatch for ${article.slug}`);
  const visibleTitle = [...svg.matchAll(/<tspan[^>]*>([^<]+)<\/tspan>/g)].map((match) => match[1]).join(' ');
  assert(visibleTitle === article.title, `visible thumbnail text mismatch for ${article.slug}`);
  assert(!forbiddenDate.test(visibleTitle), `date appears on thumbnail ${article.slug}`);
}

assert(data.includes("from './campaign-2026-10-12'"), 'Blog campaign import missing');
assert(data.includes('...october12BlogPosts') && data.includes('...october12BlogDetails'), 'Blog registry wiring missing');
assert(fleet.includes("from './campaign-2026-10-12'"), 'Research campaign import missing');
assert(fleet.includes('...october12ResearchPosts'), 'Research registry wiring missing');
assert(blogRoute.includes('allBlogPosts') && blogRoute.includes('campaignBlogDetails') && blogRoute.includes('<time'), 'Blog route/date wiring missing');
assert(researchRoute.includes('researchPosts') && researchRoute.includes('<time'), 'Research route/date wiring missing');
assert(sitemap.includes('allBlogPosts') && sitemap.includes('researchPosts'), 'sitemap registry wiring missing');

const sourceUrlMatches = [...campaign.matchAll(/url: '(https:\/\/[^']+)'/g)].map((match) => match[1]);
assert(sourceUrlMatches.every((url) => new URL(url).protocol === 'https:'), 'all sources must use HTTPS');
const commonBlock = campaign.slice(campaign.indexOf('const commonResearchSources'), campaign.indexOf('const researchSpecs'));
const commonSourceCount = (commonBlock.match(/name: '/g) ?? []).length;
assert(commonSourceCount === 7, `expected 7 common Research sources, found ${commonSourceCount}`);
const researchBlock = campaign.slice(campaign.indexOf('const researchSpecs'), campaign.indexOf('const researchSections'));
for (const article of research) {
  const start = researchBlock.indexOf(`slug: '${article.slug}'`);
  const next = researchBlock.indexOf('\n  {', start + 1);
  const block = researchBlock.slice(start, next === -1 ? undefined : next);
  const specificSourceCount = (block.match(/name: '/g) ?? []).length;
  assert(commonSourceCount + specificSourceCount === 10, `${article.slug} must have 10 Research sources; found ${commonSourceCount + specificSourceCount}`);
}

const wordCount = (value) => value.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g)?.length ?? 0;
for (const [items, startToken, endToken, minimum, label] of [
  [blogs, 'const blogSpecs', 'const blogSections', 250, 'Blog-specific prose'],
  [research, 'const researchSpecs', 'const researchSections', 300, 'Research-specific prose'],
]) {
  const corpus = campaign.slice(campaign.indexOf(startToken), campaign.indexOf(endToken));
  for (const article of items) {
    const start = corpus.indexOf(`slug: '${article.slug}'`);
    const next = corpus.indexOf('\n  {', start + 1);
    const block = corpus.slice(start, next === -1 ? undefined : next);
    assert(wordCount(block) >= minimum, `${label} too thin for ${article.slug}: ${wordCount(block)} words`);
  }
}

const strings = [...campaign.matchAll(/(?:body|problem|records|boundary|procedure|exception|handoff|verification|measure|scenario|question|population|unit|design|measures|analysis|threats|decision|pilot): '([^']{120,})'/g)]
  .map((match) => match[1].replace(/\s+/g, ' ').trim().toLowerCase());
const duplicates = strings.filter((value, index) => strings.indexOf(value) !== index);
assert(duplicates.length === 0, `duplicate substantive paragraphs found: ${duplicates.length}`);

const existingFiles = [
  ...fs.readdirSync(path.join(root, 'app')).filter((name) => /^campaign-.*\.ts$/.test(name) && name !== 'campaign-2026-10-12.ts').map((name) => `app/${name}`),
  'app/data.ts',
  'app/fleet-data.ts',
];
const existingCorpus = existingFiles.map(read).join('\n').toLowerCase();
for (const article of manifest.articles) {
  assert((existingCorpus.match(new RegExp(article.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length === 0, `pre-existing slug collision: ${article.slug}`);
  assert((existingCorpus.match(new RegExp(article.title.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) ?? []).length === 0, `pre-existing title collision: ${article.title}`);
}

console.log('October 12 validation passed');
console.log(`Blog: ${blogs.length}; Research: ${research.length}; thumbnails: ${manifest.articles.length}; Research sources: 10 each`);
console.log(`Substantive paragraph strings checked: ${strings.length}; exact duplicates: ${duplicates.length}`);
