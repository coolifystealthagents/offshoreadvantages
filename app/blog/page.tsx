import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';

export default function Blog() {
  return <><Header /><main className="section"><div className="container"><p className="eyebrow">{site.brand} field notes</p><h1>Practical guides to hiring Filipino talent</h1><p className="lead">Start with the role, then work through access, handoffs, onboarding, and review.</p><div className="cards">{blogPosts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}><h3>{post.title}</h3><p>{post.excerpt}</p><span className="pill">{post.minutes} min read</span></a>)}</div></div></main><Footer /></>;
}
