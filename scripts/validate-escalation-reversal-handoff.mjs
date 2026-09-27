import { existsSync, readFileSync } from 'node:fs';

const sourcePath = 'app/research-batch-2026-08-23.ts';
const artifactPath = '.next/server/app/research/offshore-support-escalation-reversal-analysis.html';
const slug = 'offshore-support-escalation-reversal-analysis';
const href = '/services/customer-experience-support';
const label = 'Plan a customer support escalation path';
const bodyMarker = 'Customer Experience Support can help you keep the case record, approved escalation steps, and owner questions clear.';
const canonical = `https://offshoreadvantages.com/research/${slug}`;

const source = readFileSync(sourcePath, 'utf8');
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf('\n  }', start);
if (start < 0 || end < start) throw new Error('Target research record is missing or cannot be bounded.');
const record = source.slice(start, end);
for (const expected of ["published: '2026-08-23'", "modified: '2026-09-27'", `href: '${href}'`, `label: '${label}'`, bodyMarker]) {
  if (!record.includes(expected)) throw new Error(`Target record is missing: ${expected}`);
}
if (!record.includes('Your client keeps refunds, policy interpretation, customer commitments, and final exception decisions.')) {
  throw new Error('Target record must retain the client decision boundary.');
}

if (process.argv.includes('--source-only') || !existsSync(artifactPath)) {
  console.log('PASS: escalation-reversal handoff source contract verified; build artifact check deferred until after npm run build.');
  process.exit(0);
}
const html = readFileSync(artifactPath, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
for (const expected of [href, label, bodyMarker, 'When Does an Offshore Support Escalation Need to Be Reopened?']) {
  if (!main.includes(expected)) throw new Error(`Route-local main is missing: ${expected}`);
}
if ((main.match(new RegExp(href, 'g')) ?? []).length !== 1) throw new Error('Route-local main must contain the service handoff exactly once.');
if (!html.includes(`<link rel="canonical" href="${canonical}"`)) throw new Error('Route canonical is missing or incorrect.');
if (!html.includes('article:modified_time" content="2026-09-27"')) throw new Error('Open Graph modified date is missing or incorrect.');
const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1].replaceAll('&quot;', '"')));
const article = jsonLd.find((node) => node?.['@type'] === 'Article' && node.headline === 'When Does an Offshore Support Escalation Need to Be Reopened?');
if (!article || article.datePublished !== '2026-08-23' || article.dateModified !== '2026-09-27') throw new Error('Route Article publication or modification date is missing or incorrect.');
const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
for (const route of [`/research/${slug}`, href]) {
  if (!sitemap.includes(`https://offshoreadvantages.com${route}`)) throw new Error(`Generated sitemap is missing: ${route}`);
}
console.log('PASS: escalation-reversal handoff source, built route, Article/OG dates, and sitemap contract verified.');