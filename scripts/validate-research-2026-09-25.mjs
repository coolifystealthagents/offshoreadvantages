import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';

const expectedDate = '2026-09-25';
const words = (value) => value.trim().split(/\s+/).filter(Boolean).length;
const fail = (message) => { throw new Error(message); };
const expectedSlugs = [
  'philippines-saas-access-request-evidence-completeness-study',
  'offshore-customer-cancellation-instruction-fidelity-research',
  'philippines-bank-reconciliation-exception-provenance-study',
  'offshore-marketing-suppression-list-change-evidence-research',
  'philippines-project-change-request-dependency-study'
];
const batchSource = await readFile('app/campaign-2026-09-25-research.ts', 'utf8');
const builderSource = await readFile('app/campaign-2026-09-18-research.ts', 'utf8');

const declaredSlugs = [...batchSource.matchAll(/\{slug:'([^']+)'/g)].map((match) => match[1]);
if (declaredSlugs.length !== 5 || new Set(declaredSlugs).size !== 5) fail(`Expected exactly 5 unique topic declarations, found ${declaredSlugs.length}`);
if (expectedSlugs.some((slug) => !declaredSlugs.includes(slug))) fail('Declared slugs differ from the approved batch');
if (!batchSource.includes(`september25ResearchDate = '${expectedDate}'`) || batchSource.includes('modified:')) fail('Invalid publication metadata');
if ((batchSource.match(/\{name:'/g) ?? []).length !== 10 || new Set([...batchSource.matchAll(/url:'([^']+)'/g)].map((match) => match[1])).size !== 10) fail('Expected 10 unique named sources');
if (!batchSource.includes('sections: buildResearchSections(topic)') || words(builderSource.slice(builderSource.indexOf("heading:'Executive finding'"), builderSource.indexOf('export const september18ResearchPosts'))) < 1200) fail('Shared substantive editorial structure is incomplete');
const fleetSource = await readFile('app/fleet-data.ts', 'utf8');
if (!fleetSource.includes("import { september25ResearchPosts } from './campaign-2026-09-25-research';") || !fleetSource.includes('...september25ResearchPosts')) fail('Current batch is missing from the Research catalog');
const historicalFiles = (await readdir('app')).filter((name) => name.endsWith('.ts') && name !== 'campaign-2026-09-25-research.ts');
const historicalSource = (await Promise.all(historicalFiles.map((name) => readFile(`app/${name}`, 'utf8')))).join('\n');
for (const slug of expectedSlugs) {
  if (historicalSource.includes(slug)) fail(`${slug}: slug already exists in historical source`);
  const start = batchSource.indexOf(`{slug:'${slug}'`);
  const next = batchSource.indexOf('\n  {slug:', start + 1);
  const topicSource = batchSource.slice(start, next === -1 ? batchSource.indexOf('\n];', start) : next);
  if (!/service:'\/services\//.test(topicSource) || !topicSource.includes("reserved:'")) fail(`${slug}: service handoff or authority boundary missing`);
  const hash = createHash('sha256').update(`${topicSource}\n${builderSource}`).digest('hex');
  console.log(`${slug}\t>=1200\tsha256:${hash}`);
}
console.log(JSON.stringify({status:'PASS',family:'Research',requiredCount:5,actualCount:5,date:expectedDate,timezone:'UTC'}, null, 2));
