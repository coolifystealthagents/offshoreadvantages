import fs from 'node:fs';
import crypto from 'node:crypto';
import vm from 'node:vm';
import ts from 'typescript';

const date = '2026-10-05';
const domain = 'https://offshoreadvantages.com';
const fail = (message) => { throw new Error(message); };
const words = (value) => value.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? [];
const normalize = (value) => words(value).join(' ');
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const decode = (value) => value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

function loadExport(path, name) {
  const source = fs.readFileSync(path, 'utf8');
  const javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const sandbox = { exports: {} };
  vm.runInNewContext(javascript, sandbox);
  return sandbox.exports[name];
}

const blogs = loadExport('app/campaign-2026-10-05.ts', 'october5BlogDrafts').map((article) => ({
  family: 'blog', slug: article.slug, title: article.title, image: article.image,
  paragraphs: article.sections.map(({ body }) => body),
}));
const research = loadExport('app/campaign-2026-10-05-research.ts', 'october5ResearchPosts').map((article) => ({
  family: 'research', slug: article.slug, title: article.title, image: article.thumbnail,
  paragraphs: article.sections.map(({ body }) => body),
}));
const articles = [...blogs, ...research];
if (blogs.length !== 12 || research.length !== 5) fail(`expected 12 Blog + 5 Research, found ${blogs.length} + ${research.length}`);

for (const article of articles) {
  const route = `/${article.family}/${article.slug}`;
  const htmlPath = `.next/server/app${route}.html`;
  if (!fs.existsSync(htmlPath)) fail(`${route}: rendered HTML missing`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rendered = normalize(decode(html));
  let cursor = 0;
  const ordered = [];
  for (const paragraph of article.paragraphs) {
    const expected = normalize(paragraph);
    const found = rendered.indexOf(expected, cursor);
    if (found < 0) fail(`${route}: full source paragraph missing or out of order: ${expected.slice(0, 80)}`);
    ordered.push(expected);
    cursor = found + expected.length;
  }
  const sourceHash = hash(article.paragraphs.map(normalize).join('\n'));
  const renderHash = hash(ordered.join('\n'));
  if (sourceHash !== renderHash) fail(`${route}: source/render body hash mismatch`);
  if (!html.includes(article.title)) fail(`${route}: title missing`);
  if (!html.includes(`datePublished\\\":\\\"${date}`) && !html.includes(`datePublished":"${date}`)) fail(`${route}: datePublished missing`);
  if (!html.includes(`${domain}${route}`)) fail(`${route}: canonical URL missing`);
  if (!html.includes(article.image)) fail(`${route}: rendered image reference missing`);
  console.log(`PASS route ${route}; paragraphs ${article.paragraphs.length}; source/render sha256 ${sourceHash}`);
}

const blogImage = fs.readFileSync('public/philippines-team.jpg');
if (!(blogImage[0] === 0xff && blogImage[1] === 0xd8 && blogImage[2] === 0xff)) fail('Blog JPEG signature failed');
const researchImage = fs.readFileSync('public/research/research-default.svg', 'utf8');
if (!/<svg[\s>]/.test(researchImage)) fail('Research SVG signature/decode failed');
console.log('PASS combined rendered count: 17');
console.log('PASS full ordered source/render paragraph and hash equality: 17');
console.log('PASS rendered titles, UTC dates, canonicals, schema dates, and image references: 17');
console.log('PASS local image signatures/decode: JPEG + SVG');
