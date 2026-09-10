import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync('app/campaign-2026-09-10.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const slug = 'philippines-offshore-policy-exception-aging-analysis';
const start = source.indexOf(`slug === '${slug}'`);
if (start < 0) throw new Error(`Missing ${slug} handoff contract.`);
const record = source.slice(start, source.indexOf(': {}),', start));
for (const expected of [
  "modified: september10CampaignDate",
  "href: '/services/project-coordination-support'",
  "label: 'Set up a policy-exception follow-up lane'",
  'Your client keeps policy interpretation, risk acceptance, and the final decision.',
]) {
  if (!record.includes(expected)) throw new Error(`Missing selected-record contract: ${expected}`);
}
for (const expected of [
  'post.serviceHandoff ? (',
  '<a href={post.serviceHandoff.href}>',
  '{post.serviceHandoff.label}',
  'modifiedTime: modified',
  'dateModified: modified',
]) {
  if (!renderer.includes(expected)) throw new Error(`Missing reusable renderer contract: ${expected}`);
}

const built = path.join('.next/server/app/research', `${slug}.html`);
if (!process.argv.includes('--source-only') && fs.existsSync(built)) {
  const html = fs.readFileSync(built, 'utf8');
  const main = html.match(/<main(?:\s[^>]*)?>[\s\S]*?<\/main>/)?.[0] ?? '';
  if (!main.includes('Set up a policy-exception follow-up lane')) throw new Error('Built main is missing the handoff marker.');
  if ((main.match(/href="\/services\/project-coordination-support"/g) ?? []).length !== 1) throw new Error('Built main must contain one Project Coordination Support handoff.');
  if (!html.includes('article:modified_time" content="2026-09-10"')) throw new Error('Built Open Graph modified date is missing.');
  if (!html.includes('"dateModified":"2026-09-10"')) throw new Error('Built Article modified date is missing.');
}
console.log('PASS: policy-exception research handoff source contract verified.');
