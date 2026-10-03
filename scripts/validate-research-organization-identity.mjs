import { existsSync, readFileSync } from 'node:fs';

const rendererPath = 'app/research/[slug]/page.tsx';
const artifactPath = '.next/server/app/research/offshore-access-recertification-evidence-quality-study.html';
const headline = 'Access Recertification Evidence Quality in Offshore Operations Support';
const organization = {
  '@type': 'Organization',
  name: 'Offshore Advantages',
  url: 'https://offshoreadvantages.com',
};

const source = readFileSync(rendererPath, 'utf8');
for (const expected of [
  'const organization = {',
  '"@type": "Organization"',
  'name: site.brand',
  'url: `https://${site.domain.toLowerCase()}`',
  'author: organization',
  'publisher: organization',
]) {
  if (!source.includes(expected)) throw new Error(`Research renderer identity contract is missing: ${expected}`);
}

if (process.argv.includes('--source-only') || !existsSync(artifactPath)) {
  console.log('PASS: shared Research Article Organization author/publisher source contract verified; artifact check deferred until after npm run build.');
  process.exit(0);
}

const html = readFileSync(artifactPath, 'utf8');
const jsonLd = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((match) => JSON.parse(match[1].replaceAll('&quot;', '"')));
const article = jsonLd.find((node) => node?.['@type'] === 'Article' && node.headline === headline);
if (!article) throw new Error('Expected generated Research Article JSON-LD is missing.');
for (const role of ['author', 'publisher']) {
  if (JSON.stringify(article[role]) !== JSON.stringify(organization)) {
    throw new Error(`Research Article ${role} must match the canonical Organization identity.`);
  }
}
if (JSON.stringify(article.author) !== JSON.stringify(article.publisher)) {
  throw new Error('Research Article author and publisher must be identical Organization identities.');
}
console.log('PASS: generated Research Article has equal canonical Organization author and publisher identities.');
