import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const target = '2026-08-10';
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') throw new Error('Invalid repair manifest header');
if (manifest.family !== 'blog' || manifest.domain !== 'offshoreadvantages.com' || manifest.repository !== 'coolifystealthagents/offshoreadvantages' || manifest.branch !== 'main') throw new Error('Manifest identity mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length < 22) throw new Error('Accepted count is below minimum');
const slugs = new Set();
const sourceCache = new Map();
for (const entry of manifest.entries) {
  if (slugs.has(entry.slug)) throw new Error(`Duplicate slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (entry.route !== `/blog/${entry.slug}` || !/^\/blog\/[a-z0-9-]+$/.test(entry.route)) throw new Error(`Invalid Blog route: ${entry.route}`);
  if (entry.provenance !== 'original-aug10-batch' || !/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) throw new Error(`Invalid provenance: ${entry.slug}`);
  if (entry.sourceDateField !== 'published' || entry.sourceDate !== target || entry.renderedDate !== target) throw new Error(`Invalid date audit fields: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`Rendered fields incomplete: ${entry.slug}`);
  if (!existsSync(entry.sourcePath)) throw new Error(`Missing source: ${entry.sourcePath}`);
  const source = sourceCache.get(entry.sourcePath) ?? readFileSync(entry.sourcePath, 'utf8');
  sourceCache.set(entry.sourcePath, source);
  const record = new RegExp(`\\['${entry.slug}',[\\s\\S]*?published: ['"](${target})['"]`).test(source);
  if (!record) throw new Error(`Current source date record missing: ${entry.slug}`);
  const parent = `${entry.introducedByCommit}^`;
  let before = '';
  try { before = execFileSync('git', ['show', `${parent}:${entry.sourcePath}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch (error) {
    if (error.status !== 128) throw error;
  }
  const after = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  if (before.includes(entry.slug) || !after.includes(entry.slug)) throw new Error(`Git introduction proof failed: ${entry.slug}`);
  const htmlPath = `${process.cwd()}/.next/server/app${entry.route}.html`;
  if (!existsSync(htmlPath)) throw new Error(`Built route missing: ${entry.route}`);
  const html = readFileSync(htmlPath, 'utf8');
  if (!html.includes('datePublished') || !html.includes('2026-08-10') || !html.includes('dateTime="2026-08-10"') || !html.includes('Published')) throw new Error(`Rendered date missing: ${entry.slug}`);
  if (!html.includes(`rel="canonical"`) || !html.includes(`https://offshoreadvantages.com${entry.route}`)) throw new Error(`Canonical missing: ${entry.slug}`);
}
const sitemapSource = readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (!sitemapSource.includes('allBlogPosts')) throw new Error('Sitemap is not sourced from the complete Blog catalog');
const dataSource = readFileSync('app/data.ts', 'utf8');
if (!dataSource.includes('allBlogPosts = [...batchBlogPosts, ...run2BlogPosts, ...todayBlogPosts, ...blogPosts]')) throw new Error('Blog index is not newest-first');
console.log(`PASS: ${manifest.entries.length} accepted Blog entries, Git provenance, built dates, canonicals, sitemap eligibility, and newest-first index`);
