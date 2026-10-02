import fs from 'node:fs';

const source = fs.readFileSync(new URL('../app/campaign-2026-10-02.ts', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../ops/campaign-2026-10-02-blog-manifest.json', import.meta.url), 'utf8'));
const expected = manifest.topics.map((topic) => topic.slug);
const starts = [...source.matchAll(/\n\s*slug:\s*'([^']+)'/g)].map((match) => ({ slug: match[1], index: match.index }));
const records = starts.map((item, index) => ({ slug: item.slug, text: source.slice(item.index, starts[index + 1]?.index ?? source.indexOf('\n];', item.index)) }));
const words = (text) => (text.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? []);
const normalize = (text) => words(text).join(' ');
const fail = (message) => { throw new Error(message); };
if (records.length !== 12) fail(`expected 12 records, found ${records.length}`);
if (new Set(records.map((record) => record.slug)).size !== records.length) fail('duplicate campaign slug');
if (expected.some((slug) => !records.some((record) => record.slug === slug))) fail('manifest and source slugs differ');
const paragraphs = [];
for (const record of records) {
  if (!/image\s*[:,]/.test(record.text)) fail(`${record.slug}: image missing`);
  if (!/href:\s*'\/contact-us'/.test(record.text) && !/banners:\s*contact\(/.test(record.text)) fail(`${record.slug}: contact CTA missing`);
  const bodies = [...record.text.matchAll(/body:\s*`([\s\S]*?)`/g)].map((match) => match[1]);
  const count = words(bodies.join(' ')).length;
  if (count < 900) fail(`${record.slug}: ${count} body words; minimum is 900`);
  if (!/sources:\s*\[/.test(record.text) || !/url:\s*'https:\/\//.test(record.text)) fail(`${record.slug}: malformed sources`);
  if (!/internalLinks:\s*\[/.test(record.text) || !/href:\s*'\//.test(record.text)) fail(`${record.slug}: malformed internal links`);
  paragraphs.push(...bodies.map((body) => ({ slug: record.slug, value: normalize(body) })).filter((item) => item.value));
  console.log(`PASS words ${record.slug}: ${count}`);
}
if (!source.includes("published: '2026-10-02'")) fail('October 2 UTC publication date missing');
const seen = new Map();
for (const paragraph of paragraphs) {
  if (seen.has(paragraph.value)) fail(`repeated normalized paragraph: ${paragraph.slug} and ${seen.get(paragraph.value)}`);
  seen.set(paragraph.value, paragraph.slug);
}
const shingles = (record) => {
  const tokens = words([...record.text.matchAll(/body:\s*`([\s\S]*?)`/g)].map((match) => match[1]).join(' '));
  return new Set(tokens.slice(0, -4).map((_, index) => tokens.slice(index, index + 5).join(' ')));
};
let maximum = { score: 0, pair: '' };
for (let left = 0; left < records.length; left++) for (let right = left + 1; right < records.length; right++) {
  const a = shingles(records[left]); const b = shingles(records[right]);
  let intersection = 0; for (const value of a) if (b.has(value)) intersection++;
  const score = intersection / (a.size + b.size - intersection);
  if (score > maximum.score) maximum = { score, pair: `${records[left].slug} <> ${records[right].slug}` };
  if (score > 0.08) fail(`five-word-shingle Jaccard ${score.toFixed(4)} exceeds 0.08: ${records[left].slug}, ${records[right].slug}`);
}
console.log(`PASS exact count: 12`);
console.log(`PASS duplicate slugs: none`);
console.log(`PASS source/link shape: 12`);
console.log(`PASS repeated normalized paragraphs: none`);
console.log(`PASS maximum pairwise five-word-shingle Jaccard: ${maximum.score.toFixed(4)} (${maximum.pair})`);
