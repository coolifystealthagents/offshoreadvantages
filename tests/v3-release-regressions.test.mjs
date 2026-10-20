import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('V3 header and footer expose exact navigation and parent attribution', () => {
  const source = read('app/components.tsx');
  assert.match(source, /Powered by StealthAgents/g);
  assert.equal((source.match(/Powered by StealthAgents/g) || []).length >= 2, true);
  assert.match(source, /href="\/"[^>]*>Home/);
  assert.match(source, /href="\/services"[^>]*>Services/);
  assert.match(source, /href="\/contact-us"[^>]*>Contact Us/);
  assert.match(source, /stealth-agents-logo/);
  const css = read('app/globals.css') + read('app/v3.css');
  assert.match(css, /\.nav\s*\{[^}]*position:\s*sticky/s);
});

test('V3 review marquee has at least ten approved attributed reviews', () => {
  assert.ok(existsSync(new URL('../app/review-provenance.json', import.meta.url)));
  const reviews = JSON.parse(read('app/review-provenance.json'));
  assert.equal(reviews.records.length >= 10, true);
  for (const record of reviews.records) {
    assert.ok(record.headline && record.body && record.name && record.detail);
  }
  const contact = read('app/contact-us/page.tsx');
  assert.match(contact, /review-marquee/);
  assert.match(contact, /★★★★★/);
});

test('V3 contact page includes official team evidence below first-fold form', () => {
  const contact = read('app/contact-us/page.tsx');
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team\.webp/);
  assert.match(contact, /stealth-agents-logo-black\.png/);
  assert.ok(contact.indexOf('Official team, Bacolod') > contact.indexOf('StandardContactForm'));
});

test('V3 conversion journey includes form, booking, and confirmation routes', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.match(read('app/thank-you/page.tsx'), /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.ok(existsSync(new URL('../app/thanks-whats-next/page.tsx', import.meta.url)));
  assert.match(read('app/thanks-whats-next/page.tsx'), /Booking confirmed/i);
});

test('V3 service detail template covers every required long-form decision area', () => {
  const source = read('app/services/[slug]/page.tsx');
  for (const phrase of ['Who this service fits','Inputs and access','How the workflow runs','Deliverables','Human decisions and boundaries','Quality controls','Example engagement','Frequently asked questions','Related services']) {
    assert.match(source, new RegExp(phrase, 'i'));
  }
  assert.match(source, /service-hero-image/);
});

test('V3 blog and research articles have generated sticky useful sidebars and anchored TOCs', () => {
  const sidebar = read('app/ArticleSidebar.tsx');
  for (const path of ['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /ArticleSidebar/);
    assert.match(source, /id=\{/);
  }
  assert.match(sidebar, /Table of contents/);
  assert.match(sidebar, /article-sidebar/);
  const css = read('app/globals.css') + read('app/v3.css');
  assert.match(css, /\.article-sidebar\s*\{[^}]*position:\s*sticky/s);
  assert.match(css, /scroll-margin-top/);
});

test('V3 canonical redirects and security headers are configured', () => {
  const source = read('next.config.mjs');
  const middleware = read('middleware.ts');
  assert.match(source, /has:\s*\[\{\s*type:\s*['"]host['"]/s);
  assert.match(source, /destination:\s*['"]https:\/\/offshoreadvantages\.com\/:path\*['"]/);
  assert.match(middleware, /x-forwarded-proto/);
  assert.match(middleware, /cf-visitor/);
  for (const header of ['Strict-Transport-Security','X-Content-Type-Options','Referrer-Policy','Permissions-Policy','Content-Security-Policy']) {
    assert.match(source, new RegExp(header));
  }
});

test('V3 mobile articles wrap long headings and source URLs without hiding reduced-motion reviews', () => {
  const css = read('app/v3.css');
  assert.match(css, /\.article-shell[^\n{]*[\s\S]*?overflow-wrap:\s*anywhere/);
  assert.doesNotMatch(css, /review-card:nth-child\(n\+4\)\s*\{\s*display:\s*none/);
});

test('V3 blog role links emit canonical service URLs', () => {
  const source = read('app/blog/[slug]/page.tsx');
  assert.match(source, /canonicalServiceHref/);
  assert.match(source, /shared-services-administration/);
  assert.match(source, /href=\{canonicalServiceHref\(link\.href\)\}/);
});

test('V3 uses one subsidiary logo plus official parent assets', () => {
  const layout = read('app/layout.tsx');
  assert.match(layout, /icons:/);
  assert.match(layout, /logo\.svg/);
  assert.ok(existsSync(new URL('../public/images/stealth-agents-team.webp', import.meta.url)));
  assert.ok(existsSync(new URL('../public/images/stealth-agents-logo-black.png', import.meta.url)));
});
