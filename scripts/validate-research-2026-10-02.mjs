import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';

const source = await readFile('app/campaign-2026-10-02-research.ts', 'utf8');
const fleet = await readFile('app/fleet-data.ts', 'utf8');
const expected = [
  ['offshore-access-recertification-evidence-quality-study', 'Access Recertification Evidence Quality in Offshore Operations Support', '/services/shared-services-administration'],
  ['philippines-processor-inventory-contract-alignment-research', 'Processor Inventory and Contract Alignment for Philippines Data Operations', '/services/data-management-support'],
  ['offshore-customer-complaint-taxonomy-reliability-study', 'Customer Complaint Taxonomy Reliability in Offshore Support Review', '/services/customer-experience-support'],
  ['philippines-sales-commission-exception-traceability-research', 'Sales Commission Exception Traceability in Philippines Revenue Support', '/services/revenue-operations-support'],
  ['offshore-business-continuity-contact-tree-test-research', 'Business Continuity Contact-Tree Testing for Offshore Service Teams', '/services/project-coordination-support'],
];
const slugs = [...source.matchAll(/slug:'([^']+)'/g)].map((match) => match[1]);

if (slugs.length !== expected.length || new Set(slugs).size !== expected.length) throw new Error(`Expected 5 unique slugs, got ${slugs.length}`);
if (slugs.some((slug, index) => slug !== expected[index][0])) throw new Error('Research slug inventory or order changed');
if (!source.includes("october2ResearchDate='2026-10-02'") || source.includes('modified:')) throw new Error('Date mismatch');
if (!fleet.includes("import { october2ResearchPosts } from './campaign-2026-10-02-research';") || !fleet.includes('...october2ResearchPosts')) throw new Error('Catalog integration missing');
if (/const\s+(?:common|articleSpecificExtensions)\b|\.\.\.common\b/.test(source)) throw new Error('Shared research body generator remains');

const historicalFiles = (await readdir('app')).filter((name) => name.endsWith('.ts') && name !== 'campaign-2026-10-02-research.ts');
const historical = (await Promise.all(historicalFiles.map((name) => readFile(`app/${name}`, 'utf8')))).join('\n');
for (const slug of slugs) if (historical.includes(slug)) throw new Error(`Historical duplicate ${slug}`);

const bodies = (text) => [...text.matchAll(/body:`([^`]*)`/gs)].map((match) => match[1].trim()).filter(Boolean);
const normalizeParagraph = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const shingles = (text) => {
  const words = normalizeParagraph(text).split(/\s+/).filter(Boolean);
  return new Set(words.slice(0, Math.max(0, words.length - 4)).map((_, index) => words.slice(index, index + 5).join(' ')));
};

const docs = [];
for (let index = 0; index < expected.length; index += 1) {
  const [slug, title, service] = expected[index];
  const start = source.indexOf(`slug:'${slug}'`);
  const end = index + 1 < expected.length ? source.indexOf(`slug:'${expected[index + 1][0]}'`) : source.indexOf('\n];', start);
  const studySource = source.slice(start, end);
  if (!studySource.includes(`title:'${title}'`) || !studySource.includes(`service:'${service}'`)) throw new Error(`Inventory metadata changed for ${slug}`);
  if ((studySource.match(/name:'[^']+',url:'https:\/\//g) || []).length !== 2) throw new Error(`Expected two sources for ${slug}`);
  const paragraphs = bodies(studySource);
  const text = paragraphs.join(' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  if (words < 1200) throw new Error(`${slug} has ${words} substantive body words`);
  docs.push({ slug, paragraphs, text, words, hash: createHash('sha256').update(text).digest('hex') });
}

const paragraphOwners = new Map();
for (const doc of docs) {
  for (const paragraph of doc.paragraphs) {
    const normalized = normalizeParagraph(paragraph);
    const owners = paragraphOwners.get(normalized) ?? [];
    owners.push(doc.slug);
    paragraphOwners.set(normalized, owners);
  }
}
const repeated = [...paragraphOwners.entries()].filter(([, owners]) => new Set(owners).size > 1);
if (repeated.length) throw new Error(`Repeated normalized paragraph across studies: ${[...new Set(repeated[0][1])].join(' <> ')}`);

const pairwise = [];
for (let left = 0; left < docs.length; left += 1) {
  for (let right = left + 1; right < docs.length; right += 1) {
    const a = shingles(docs[left].text);
    const b = shingles(docs[right].text);
    let intersection = 0;
    for (const value of a) if (b.has(value)) intersection += 1;
    const jaccard = intersection / (a.size + b.size - intersection);
    pairwise.push({ pair: `${docs[left].slug} <> ${docs[right].slug}`, jaccard });
  }
}
const maximum = pairwise.reduce((highest, item) => item.jaccard > highest.jaccard ? item : highest, { pair: '', jaccard: 0 });
if (maximum.jaccard >= 0.5) throw new Error(`Five-word-shingle overlap ${maximum.jaccard} for ${maximum.pair}`);

for (const doc of docs) console.log(`${doc.slug}\t${doc.words}\tsha256:${doc.hash}`);
for (const item of pairwise) console.log(`${item.pair}\tfive-word-shingle-jaccard:${item.jaccard.toFixed(6)}`);
console.log(JSON.stringify({ status: 'PASS', required: 5, actual: docs.length, date: '2026-10-02', timezone: 'UTC', maximum }, null, 2));
