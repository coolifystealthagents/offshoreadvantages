import Oct22MobileToc from '../../oct22-mobile-toc';
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { Header, Footer } from "../../components";
import { ArticleSidebar } from "../../ArticleSidebar";
import { researchPosts, ResearchPost } from "../../fleet-data";
import { site } from "../../data";
import { resolveEditorialImage } from "../../editorial-images";
import { retiredResearchSlugs } from "../../retired-slugs";
const readerDate=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"});
const formatReaderDate=(value:string)=>readerDate.format(new Date(`${value}T00:00:00Z`));
const headingId=(value:string)=>value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
export function generateStaticParams(){return researchPosts.map((p)=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=researchPosts.find((p)=>p.slug===slug);if(!post)return{};const editorialImage=resolveEditorialImage({slug:post.slug,title:post.title,image:post.thumbnail});return{title:post.title,description:post.excerpt,alternates:{canonical:`/research/${post.slug}`},openGraph:{type:"article",url:`https://${site.domain}/research/${post.slug}`,title:post.title,description:post.excerpt,...(post.modified?{modifiedTime:post.modified}:{}),images:[{url:editorialImage.src}]}};}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const post:ResearchPost|undefined=researchPosts.find((p)=>p.slug===slug);if(retiredResearchSlugs.has(slug))permanentRedirect("/research");if(!post)notFound();
 const editorialImage=resolveEditorialImage({slug:post.slug,title:post.title,image:post.thumbnail});
 const organization={"@type":"Organization",name:site.brand,url:`https://${site.domain.toLowerCase()}`};
 const jsonLd={"@context":"https://schema.org","@type":"Article",headline:post.title,description:post.excerpt,datePublished:post.published,...(post.modified?{dateModified:post.modified}:{}),mainEntityOfPage:`https://${site.domain}/research/${post.slug}`,author:organization,publisher:organization};
 const tocItems=[{id:"key-stats",label:"Key stats"},...post.sections.map(s=>({id:headingId(s.heading),label:s.heading})),...(post.serviceHandoff?[{id:"role-brief",label:"Put this into a role brief"}]:[]),{id:"sources",label:"Sources"},{id:"related-research",label:"Related research"}];
 const related=researchPosts.filter(p=>p.slug!==post.slug).slice(0,3);
 return <><Header/><main id="main-content"><Oct22MobileToc /><article className="section"><div className="container article-layout"><div className="article-shell"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/><p className="eyebrow">{site.brand} research · {post.cluster}</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><img className="article-hero-image" src={editorialImage.src} alt={editorialImage.alt}/><p><time dateTime={post.published}>Published {formatReaderDate(post.published)}</time> · {post.sources.length} sources · Research methodology</p>
 <section className="card" id="key-stats"><h2>Key stats</h2><ul>{post.stats.map(stat=><li key={stat}>{stat}</li>)}</ul></section>
 {post.sections.map(s=><section className="card" id={headingId(s.heading)} key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}
 {post.serviceHandoff?<section className="card" id="role-brief"><h2>Put this control into a role brief</h2><p>{post.serviceHandoff.body}</p><a href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a></section>:null}
 <section className="card" id="sources"><h2>Sources</h2><ol>{post.sources.map(s=><li key={s.url}><a href={s.url} rel="noreferrer">{s.name}</a></li>)}</ol></section>
 <section className="card" id="related-research"><h2>Related research</h2><ul>{related.map(p=><li key={p.slug}><a href={`/research/${p.slug}`}>{p.title}</a></li>)}</ul></section></div>
 <ArticleSidebar items={tocItems} published={formatReaderDate(post.published)} sourceCount={post.sources.length} kind="Research" related={related.map(p=>({href:`/research/${p.slug}`,label:p.title}))}/></div></article></main><Footer/></>;
}
