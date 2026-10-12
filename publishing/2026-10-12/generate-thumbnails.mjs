import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'publishing/2026-10-12/manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const outputDir = path.join(root, 'public/october-12-2026');
fs.mkdirSync(outputDir, { recursive: true });

const palettes = [
  ['#061f2b', '#0b6973', '#55e0d5', '#f7fbfa'],
  ['#0b214a', '#22579c', '#b7f34a', '#f9fbff'],
  ['#17372f', '#0e7b62', '#f4c95d', '#fbfff9'],
  ['#382b5b', '#725ab0', '#ffb86b', '#fffaff'],
  ['#402437', '#a14570', '#ffd166', '#fff9fb'],
];

const hash = (value) => [...value].reduce((result, character) => Math.imul(result ^ character.charCodeAt(0), 16777619) >>> 0, 2166136261);
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function wrapTitle(title) {
  const words = title.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    // Keep the title inside the left text column; the right 300px is reserved
    // for the article-specific motif.
    if (candidate.length > 22 && current) {
      lines.push(current);
      current = word;
    } else current = candidate;
  }
  if (current) lines.push(current);
  if (lines.length > 3) {
    const merged = [lines[0], lines[1], lines.slice(2).join(' ')];
    return merged;
  }
  return lines;
}

for (const article of manifest.articles) {
  const seed = hash(article.slug);
  const [dark, mid, accent, ink] = palettes[seed % palettes.length];
  const lines = wrapTitle(article.title);
  const fontSize = lines.some((line) => line.length > 22) ? 44 : 48;
  const startY = 286 - (lines.length - 1) * 34;
  const titleLines = lines.map((line, index) => `<tspan x="92" y="${startY + index * 62}">${escapeXml(line)}</tspan>`).join('');
  const motif = seed % 4;
  const visual = motif === 0
    ? `<circle cx="1025" cy="238" r="120" fill="none" stroke="${accent}" stroke-width="28" opacity=".72"/><circle cx="1025" cy="238" r="54" fill="${accent}" opacity=".28"/><path d="M900 445h250" stroke="${accent}" stroke-width="18" stroke-linecap="round"/>`
    : motif === 1
      ? `<rect x="900" y="120" width="220" height="220" rx="46" fill="none" stroke="${accent}" stroke-width="26" opacity=".74" transform="rotate(12 1010 230)"/><path d="M900 444l64-56 54 38 92-96" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>`
      : motif === 2
        ? `<path d="M910 170h210M910 245h160M910 320h210M910 395h130" stroke="${accent}" stroke-width="22" stroke-linecap="round" opacity=".8"/><circle cx="1115" cy="395" r="34" fill="${accent}" opacity=".34"/>`
        : `<path d="M1015 110l125 72v145l-125 72-125-72V182z" fill="none" stroke="${accent}" stroke-width="25" opacity=".75"/><circle cx="1015" cy="254" r="55" fill="${accent}" opacity=".3"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc"><title id="title">${escapeXml(article.title)}</title><desc id="desc">Offshore Advantages ${article.section} thumbnail for ${escapeXml(article.title)}</desc><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${dark}"/><stop offset="1" stop-color="${mid}"/></linearGradient><pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0v44" fill="none" stroke="${ink}" stroke-opacity=".055"/></pattern></defs><rect width="1200" height="630" rx="24" fill="url(#bg)"/><rect width="1200" height="630" rx="24" fill="url(#grid)"/><rect x="70" y="64" width="248" height="46" rx="23" fill="${accent}"/><text x="194" y="95" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="800" letter-spacing="2" fill="${dark}">${article.section.toUpperCase()}</text><text font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="800" fill="${ink}">${titleLines}</text><text x="92" y="548" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" letter-spacing="2.2" fill="${accent}">OFFSHORE ADVANTAGES</text><path d="M92 510h650" stroke="${accent}" stroke-width="5" stroke-linecap="round" opacity=".8"/>${visual}</svg>`;
  fs.writeFileSync(path.join(outputDir, `${article.slug}.svg`), `${svg}\n`);
}

console.log(`Generated ${manifest.articles.length} exact-title thumbnails in ${path.relative(root, outputDir)}.`);
