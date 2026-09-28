import {createHash} from 'node:crypto';
import {readFile,readdir} from 'node:fs/promises';
const source=await readFile('app/campaign-2026-09-28-research.ts','utf8');
const fleet=await readFile('app/fleet-data.ts','utf8');
const slugs=[...source.matchAll(/slug:'([^']+)'/g)].map(m=>m[1]);
if(slugs.length!==5||new Set(slugs).size!==5) throw new Error(`Expected 5 unique slugs, got ${slugs.length}`);
if(!source.includes("september28ResearchDate = '2026-09-28'")||source.includes('modified:')) throw new Error('Publication metadata mismatch');
if(!fleet.includes("import { september28ResearchPosts } from './campaign-2026-09-28-research';")||!fleet.includes('...september28ResearchPosts')) throw new Error('Research catalog integration missing');
const historical=(await Promise.all((await readdir('app')).filter(n=>n.endsWith('.ts')&&n!=='campaign-2026-09-28-research.ts').map(n=>readFile(`app/${n}`,'utf8')))).join('\n');
for(const slug of slugs) if(historical.includes(slug)) throw new Error(`${slug} already exists`);
const bodies=text=>[...text.matchAll(/body:`([^`]*)`/gs)].map(m=>m[1]);
const shared=bodies(source.slice(source.indexOf('const sharedSections'),source.indexOf('const studies')));
const docs=[];
for(let i=0;i<slugs.length;i++){
 const start=source.indexOf(`slug:'${slugs[i]}'`),end=i+1<slugs.length?source.indexOf(`slug:'${slugs[i+1]}'`):source.indexOf('\n];',start);
 const own=bodies(source.slice(start,end<0?source.length:end)); const text=[...own,...shared].join(' '); const words=text.trim().split(/\s+/).filter(Boolean).length;
 if(words<1200) throw new Error(`${slugs[i]} has ${words} body words; requires 1200`);
 docs.push({slug:slugs[i],text,words,hash:createHash('sha256').update(text).digest('hex')});
}
const shingles=text=>{const w=text.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().split(/\s+/);return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')))};
let maximum={pair:'',overlap:0};
for(let i=0;i<docs.length;i++)for(let j=i+1;j<docs.length;j++){const a=shingles(docs[i].text),b=shingles(docs[j].text);let intersection=0;for(const x of a)if(b.has(x))intersection++;const overlap=intersection/(a.size+b.size-intersection);if(overlap>maximum.overlap)maximum={pair:`${docs[i].slug} <> ${docs[j].slug}`,overlap};}
if(maximum.overlap>=.5) throw new Error(`Maximum five-word-shingle Jaccard is ${maximum.overlap}`);
for(const d of docs) console.log(`${d.slug}\t${d.words}\tsha256:${d.hash}`);
console.log(JSON.stringify({status:'PASS',family:'Research',required:5,actual:5,date:'2026-09-28',timezone:'UTC',maximumPairwiseFiveWordShingleJaccard:maximum},null,2));
