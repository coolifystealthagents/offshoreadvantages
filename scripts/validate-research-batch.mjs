import { readFile } from 'node:fs/promises';
import { researchBatch } from '../app/fleet-data.ts';

const min = 10;
const max = 15;
if (researchBatch.length < min || researchBatch.length > max) throw new Error(`Research count ${researchBatch.length} is outside ${min}-${max}`);
const slugs = researchBatch.map((post) => post.slug);
if (new Set(slugs).size !== slugs.length) throw new Error('Duplicate Research slug');
for (const post of researchBatch) {
  if (!/^2026-08-09$/.test(post.published)) throw new Error(`${post.slug}: invalid publication date`);
  if (!post.thumbnail.endsWith('.svg')) throw new Error(`${post.slug}: missing deterministic thumbnail`);
  const thumbnail = await readFile(`public${post.thumbnail}`, 'utf8');
  if (!thumbnail.includes('width="1200"') || !thumbnail.includes('height="630"')) throw new Error(`${post.slug}: thumbnail is not 1200x630`);
  if (post.sources.length < 10) throw new Error(`${post.slug}: fewer than 10 sources`);
  if (post.sections.length < 5 || !post.sections.some((s) => s.heading === 'FAQs')) throw new Error(`${post.slug}: incomplete Research structure`);
  if (post.stats.length < 2) throw new Error(`${post.slug}: missing Key Stats`);
  if (post.slug.includes('blog')) throw new Error(`${post.slug}: Research/Blog family collision`);
}
console.log(JSON.stringify({ status: 'PASS', family: 'research', selectedTarget: researchBatch.length, actualCount: researchBatch.length, sourcesPerArticle: 10, thumbnail: 'PASS - deterministic 1200x630 SVG', liveSite: 'NOT RUN' }, null, 2));
