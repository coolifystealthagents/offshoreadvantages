import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header, Footer } from '../../../components';
import { allBlogPosts, site } from '../../../data';
import { postsPerPage } from '../../../fleet-data';

const pageCount = () => Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
const parsePage = (value: string) => {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) ? page : null;
};

export function generateStaticParams() {
  const pages = pageCount();
  return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  if (n === 1) return {};
  if (n === null || n > pageCount()) return {};
  return {
    title: `Blog page ${n}`,
    description: `Browse page ${n} of Philippines staffing and offshore workflow guides from ${site.brand}.`,
    alternates: { canonical: `/blog/page/${n}` },
    openGraph: {
      title: `Blog page ${n} | Offshore Advantages`,
      description: `Browse page ${n} of Philippines staffing and offshore workflow guides.`,
      url: `https://offshoreadvantages.com/blog/page/${n}`,
      type: 'website',
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const n = parsePage(page);
  const pages = pageCount();
  if (n === 1) permanentRedirect('/blog');
  if (n === null || n > pages) notFound();

  const posts = allBlogPosts.slice((n - 1) * postsPerPage, n * postsPerPage);
  return (
    <>
      <Header />
      <main>
        <section className="fleet-hero">
          <div className="container">
            <p className="eyebrow">Blog page {n}</p>
            <h1>{site.brand} guides</h1>
            <p className="lead">Browse Philippines-based staffing and workflow articles.</p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-service-grid">
            {posts.map((post) => (
              <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <b>Read article →</b>
              </a>
            ))}
          </div>
          <nav className="pagination" aria-label="Blog pages">
            {Array.from({ length: pages }, (_, i) => (
              <a
                aria-current={i + 1 === n ? 'page' : undefined}
                href={i === 0 ? '/blog' : `/blog/page/${i + 1}`}
                key={i}
              >
                {i + 1}
              </a>
            ))}
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
