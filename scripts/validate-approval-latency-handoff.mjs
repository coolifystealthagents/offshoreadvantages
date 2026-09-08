import { existsSync, readFileSync } from 'node:fs';

const sourcePath = 'app/research-batch-2026-08-23.ts';
const artifactPath = '.next/server/app/research/offshore-operations-approval-latency-decomposition.html';
const slug = 'offshore-operations-approval-latency-decomposition';
const href = '/services/project-coordination-support';
const label = 'Plan a project coordination handoff';
const bodyMarker = 'Project Coordination Support can help you keep a decision record, note dependencies, and prepare clear questions when work waits.';
const canonical = `https://offshoreadvantages.com/research/${slug}`;

const source = readFileSync(sourcePath, 'utf8');
const start = source.indexOf(`slug: '${slug}'`);
const end = source.indexOf('\n  }', start);
if (start < 0 || end < start) throw new Error('Target research record is missing or cannot be bounded.');
const record = source.slice(start, end);
for (const expected of ["modified: '2026-09-08'", `href: '${href}'`, `label: '${label}'`, bodyMarker]) {
  if (!record.includes(expected)) throw new Error(`Target record is missing: ${expected}`);
}
if (!record.includes('Your client keeps approval, commercial commitment, and policy decisions.')) {
  throw new Error('Target record must retain the client decision boundary.');
}

if (process.argv.includes('--source-only') || !existsSync(artifactPath)) {
  console.log('PASS: source contract verified; build artifact check deferred until after npm run build.');
  process.exit(0);
}
const html = readFileSync(artifactPath, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
for (const expected of [href, label, bodyMarker, 'Which Part of Offshore Approval Latency Can a Client Actually Change?']) {
  if (!main.includes(expected)) throw new Error(`Route-local main is missing: ${expected}`);
}
if ((main.match(new RegExp(href, 'g')) ?? []).length !== 1) {
  throw new Error('Route-local main must contain the service handoff exactly once.');
}
if (!html.includes(`<link rel="canonical" href="${canonical}"`)) {
  throw new Error('Route canonical is missing or incorrect.');
}
if (!html.includes('article:modified_time" content="2026-09-08"')) {
  throw new Error('Open Graph modified date is missing or incorrect.');
}
const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((match) => JSON.parse(match[1].replaceAll('&quot;', '"')));
const article = jsonLd.find((node) => node?.['@type'] === 'Article' && node.headline === 'Which Part of Offshore Approval Latency Can a Client Actually Change?');
if (!article || article.datePublished !== '2026-08-23' || article.dateModified !== '2026-09-08') {
  throw new Error('Route Article publication or modification date is missing or incorrect.');
}
const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
for (const route of [`/research/${slug}`, href]) {
  if (!sitemap.includes(`https://offshoreadvantages.com${route}`)) {
    throw new Error(`Generated sitemap is missing: ${route}`);
  }
}
console.log('PASS: approval-latency handoff source, built route, Article/OG dates, and sitemap contract verified.');
