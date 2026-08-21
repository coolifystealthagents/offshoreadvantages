import { notFound } from 'next/navigation';
import { Header, Footer } from './components';
import { august21BlogPosts } from './blog-batch-2026-08-21';

export function renderAugust21Article(slug: string) {
  const post = august21BlogPosts.find(item => item.slug === slug); if (!post) return notFound();
  const url = `https://offshoreadvantages.com/blog/${post.slug}`;
  const schema = {'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,datePublished:'2026-08-21',dateModified:'2026-08-21',mainEntityOfPage:url,canonicalUrl:url,image:`https://offshoreadvantages.com${post.image}`};
  return <><link rel="canonical" href={url}/><Header/><main className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">Offshore Advantages · Blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p><time dateTime="2026-08-21">August 21, 2026</time></p><img src={post.image} alt={`${post.title} editorial illustration`} width="1536" height="1024" style={{width:'100%',height:'auto',borderRadius:'18px'}}/>{post.sections.map(section=><section className="card" key={section.title}><h2>{section.title}</h2>{section.body.split(/(?<=[.!?])\s+/).reduce<string[][]>((groups,sentence)=>{const last=groups[groups.length-1];if(!last||last.length>=3)groups.push([sentence]);else last.push(sentence);return groups},[]).map((paragraph,i)=><p key={i}>{paragraph.join(' ')}</p>)}</section>)}</article></main><Footer/></>;
}
