import fs from 'node:fs';
import crypto from 'node:crypto';
import vm from 'node:vm';
import ts from 'typescript';

const sourcePath = 'app/campaign-2026-10-05-blog-draft.ts';
const ledgerPath = 'ops/cycle-2026-10-05-topic-ledger.json';
const source = fs.readFileSync(sourcePath, 'utf8');
const ledger = JSON.parse(fs.readFileSync(ledgerPath, 'utf8'));
const javascript = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(javascript, sandbox);
const articles = sandbox.exports.october5BlogDrafts;
const fail = (message) => { throw new Error(message); };
const tokens = (value) => value.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? [];
const normalize = (value) => tokens(value).join(' ');

if (articles.length !== 12) fail(`expected 12 Blog drafts, found ${articles.length}`);
if (new Set(articles.map(({ slug }) => slug)).size !== 12) fail('duplicate Blog slug');
const ledgerSlugs = ledger.blog.map(({ slug }) => slug);
if (ledgerSlugs.some((slug) => !articles.some((article) => article.slug === slug))) fail('draft and topic ledger slugs differ');
if (/published\s*:|publicationDate\s*:\s*['"]/.test(source)) fail('draft source must not set a publication date');
if (source.includes('—') || source.includes('–')) fail('humanizer punctuation check failed');

const paragraphOwners = new Map();
const sentenceOwners = new Map();
const shingleSets = new Map();
for (const article of articles) {
  if (!article.title || !article.excerpt || !article.image) fail(`${article.slug}: metadata incomplete`);
  if (article.sources.length < 2 || article.sources.some(({ url }) => !url.startsWith('https://'))) fail(`${article.slug}: authoritative source shape failed`);
  if (!article.internalLinks.some(({ href }) => href.startsWith('/'))) fail(`${article.slug}: contextual internal link missing`);
  if (!article.banners.some(({ href }) => href === '/contact-us')) fail(`${article.slug}: contact CTA missing`);
  const body = article.sections.map(({ body }) => body).join(' ');
  const words = tokens(body);
  if (words.length < 900) fail(`${article.slug}: ${words.length} body words; minimum is 900`);
  for (const { body: paragraph } of article.sections) {
    const normalizedParagraph = normalize(paragraph);
    if (paragraphOwners.has(normalizedParagraph)) fail(`${article.slug}: repeated paragraph from ${paragraphOwners.get(normalizedParagraph)}`);
    paragraphOwners.set(normalizedParagraph, article.slug);
    for (const sentence of paragraph.split(/[.!?]+/)) {
      if (tokens(sentence).length < 12) continue;
      const normalizedSentence = normalize(sentence);
      if (sentenceOwners.has(normalizedSentence)) fail(`${article.slug}: repeated substantive sentence from ${sentenceOwners.get(normalizedSentence)}`);
      sentenceOwners.set(normalizedSentence, article.slug);
    }
  }
  shingleSets.set(article.slug, new Set(words.slice(0, -4).map((_, index) => words.slice(index, index + 5).join(' '))));
  const hash = crypto.createHash('sha256').update(body).digest('hex');
  console.log(`PASS words ${article.slug}: ${words.length}; sha256 ${hash}`);
}

let maximum = { score: 0, pair: '' };
for (let left = 0; left < articles.length; left++) {
  for (let right = left + 1; right < articles.length; right++) {
    const a = shingleSets.get(articles[left].slug);
    const b = shingleSets.get(articles[right].slug);
    let intersection = 0;
    for (const value of a) if (b.has(value)) intersection++;
    const score = intersection / (a.size + b.size - intersection);
    if (score > maximum.score) maximum = { score, pair: `${articles[left].slug} <> ${articles[right].slug}` };
    if (score >= 0.5) fail(`five-word-shingle overlap ${score.toFixed(4)} requires rewriting: ${articles[left].slug}, ${articles[right].slug}`);
  }
}

console.log('PASS exact Blog draft count: 12');
console.log('PASS exact and near repeated substantive paragraphs/sentences: none');
console.log(`PASS maximum pairwise five-word-shingle Jaccard: ${maximum.score.toFixed(4)} (${maximum.pair})`);
console.log('PASS publication date intentionally unset pending first public verification');
