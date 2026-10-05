import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const source=await readFile('app/campaign-2026-10-05-research.ts','utf8');
const fleet=await readFile('app/fleet-data.ts','utf8');
const slugs=[...source.matchAll(/slug: '([^']+-research)'/g)].map(m=>m[1]);
if(slugs.length!==5||new Set(slugs).size!==5)throw new Error(`Expected 5 unique studies, found ${slugs.length}`);
if(!fleet.includes("import { october5ResearchPosts } from './campaign-2026-10-05-research';")||!fleet.includes('...october5ResearchPosts'))throw new Error('Catalog integration missing');
const historical=(await Promise.all((await readdir('app')).filter(n=>n.endsWith('.ts')&&n!=='campaign-2026-10-05-research.ts').map(n=>readFile(`app/${n}`,'utf8')))).join('\n');
const norm=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); const docs=[]; const paragraphs=new Map();
for(let i=0;i<slugs.length;i++){const a=source.indexOf(`slug: '${slugs[i]}'`),b=i+1<slugs.length?source.indexOf(`slug: '${slugs[i+1]}'`):source.indexOf('\n];',a),block=source.slice(a,b),ps=[...block.matchAll(/body: `([^`]*)`/gs)].map(m=>m[1].trim()),text=ps.join(' '),words=text.split(/\s+/).filter(Boolean).length;if(words<1200)throw new Error(`${slugs[i]}: ${words} words`);if(historical.includes(slugs[i]))throw new Error(`Prior slug collision: ${slugs[i]}`);for(const p of ps){const n=norm(p);if(paragraphs.has(n))throw new Error(`Repeated paragraph: ${slugs[i]} <> ${paragraphs.get(n)}`);paragraphs.set(n,slugs[i])}const w=norm(text).split(/\s+/),sh=new Set(w.slice(0,-4).map((_,j)=>w.slice(j,j+5).join(' ')));docs.push({slug:slugs[i],words,hash:createHash('sha256').update(text).digest('hex'),sh});}
let maximum={pair:'',jaccard:0};for(let i=0;i<docs.length;i++)for(let j=i+1;j<docs.length;j++){let n=0;for(const x of docs[i].sh)if(docs[j].sh.has(x))n++;const q=n/(docs[i].sh.size+docs[j].sh.size-n);if(q>maximum.jaccard)maximum={pair:`${docs[i].slug} <> ${docs[j].slug}`,jaccard:q};}if(maximum.jaccard>=.5)throw new Error(`Overlap ${maximum.jaccard}`);
console.log(JSON.stringify({status:'PASS',count:docs.length,docs:docs.map(({sh,...d})=>d),maximum},null,2));
