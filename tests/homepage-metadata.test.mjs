import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const title = source.match(/title: \{ absolute: '([^']+)' \}/)?.[1];
const openGraphTitle = source.match(/openGraph:\s*\{\s*title: '([^']+)'/s)?.[1];

test('homepage title stays within the 30–60 character audit target', () => {
  assert.ok(title, 'homepage title is missing');
  assert.ok(title.length >= 30 && title.length <= 60, `title length is ${title.length}`);
  assert.equal(openGraphTitle, title);
});