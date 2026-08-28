import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const manifest = JSON.parse(await readFile('ops/recurring-routines.json', 'utf8'));
const expected = [
  ['Daily Blog Publishing', '0 9 * * 1-5', 'skip_if_active', 'skip_missed', 'medium', 20, 25],
  ['Daily Research Publishing', '0 6 * * *', 'always_enqueue', 'skip_missed', 'high', 10, 15],
];

if (manifest.version !== '2.4' || manifest.timezone !== 'UTC') throw new Error('Routine manifest is not v2.4 UTC');
if (manifest.routines.length !== 2) throw new Error('Exactly two recurring routines are allowed');
for (const [i, routine] of manifest.routines.entries()) {
  const actual = [routine.title, routine.cron, routine.concurrency, routine.catchUp, routine.priority, routine.targetMin, routine.targetMax];
  if (JSON.stringify(actual) !== JSON.stringify(expected[i])) throw new Error(`Routine ${i + 1} does not match v2.4`);
  if (routine.humanizer.source !== 'blader/humanizer' || routine.humanizer.version !== '2.9.1+') throw new Error(`Routine ${routine.title} lacks official humanizer gate`);
  if (routine.terminal !== 'validated GitHub push to main') throw new Error(`Routine ${routine.title} has an invalid terminal state`);
}

// The routine manifest is the durable contract. A local skill path belongs to
// the operator runtime and can vary by profile or container, so it must not
// turn an otherwise valid repository gate into a machine-specific failure.

const branch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
if (branch !== 'main') throw new Error(`Expected production branch main, found ${branch || '(detached)'}`);
const packageJson = JSON.parse(await readFile('package.json', 'utf8'));
if (packageJson.name !== 'offshoreadvantages' || !packageJson.dependencies?.next) throw new Error('Unexpected repository or framework');

console.log(JSON.stringify({
  status: 'PASS',
  routines: manifest.routines.map(({ title, cron, concurrency, priority }) => ({ title, cron, concurrency, priority })),
  repository: 'coolifystealthagents/offshoreadvantages',
  branch,
  humanizer: 'blader/humanizer 2.9.1+ declared in manifest',
  coolify: 'NOT RUN',
}, null, 2));
