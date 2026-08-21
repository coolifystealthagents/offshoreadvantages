import { notFound } from 'next/navigation';
import { Header, Footer } from './components';
import { august20RepairBlogPosts } from './aug20-repair-batch';

export function renderAugust20Article(slug:string){
  const post = august20RepairBlogPosts.find(item=>item.slug===slug); if(!post) return notFound();
  const url = `https://offshoreadvantages.com/blog/${post.slug}`;
  const schema = {'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,datePublished:'2026-08-20',dateModified:'2026-08-20',mainEntityOfPage:url,canonicalUrl:url,image:`https://offshoreadvantages.com${post.image}`};
  return <><link rel="canonical" href={url}/><Header/><main className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">Offshore Advantages · Blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p><time dateTime="2026-08-20">August 20, 2026</time></p><img src={post.image} alt={`${post.title} editorial illustration`} width="1536" height="1024" style={{width:'100%',height:'auto',borderRadius:'18px'}}/>{post.sections.map(section=><section className="card" key={section.title}><h2>{section.title}</h2>{section.body.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}</section>)}</article></main><Footer/></>;
}
