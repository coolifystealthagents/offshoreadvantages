import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const siteUrl = 'https://offshoreadvantages.com';

type BlogDetail = {
  keyTakeaways: readonly string[];
  sections: readonly { title: string; body: string }[];
  comparisonRows?: readonly (readonly [string, string, string])[];
  quoteBox?: string;
  faqs?: readonly { question: string; answer: string }[];
  sources?: readonly { name: string; url: string; note?: string }[];
};

const detailsBySlug = blogDetails as Record<string, BlogDetail>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: 'article',
    },
  };
}

function sectionParagraphs(body: string) {
  const sentences = body.match(/[^.!?]+[.!?]+(?:["']|$)?/g)?.map((sentence) => sentence.trim()) ?? [body];
  if (sentences.length < 4) return [body];

  const paragraphs: string[] = [];
  for (let index = 0; index < sentences.length;) {
    const remaining = sentences.length - index;
    const size = remaining === 4 ? 2 : Math.min(3, remaining);
    paragraphs.push(sentences.slice(index, index + size).join(' '));
    index += size;
  }
  return paragraphs;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const detail = detailsBySlug[slug];
  const url = `${siteUrl}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: url,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        ...(detail?.sources?.length ? { citation: detail.sources.map((source) => source.url) } : {}),
        ...(detail?.sections?.length ? {
          hasPart: detail.sections.map((section, index) => ({
            '@type': 'WebPageElement',
            position: index + 1,
            name: section.title,
          })),
        } : {}),
      },
      ...(detail?.faqs?.length ? [{
        '@type': 'FAQPage',
        mainEntity: detail.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }] : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <article className="section">
          <div className="container article-shell">
            <JsonLd data={schema} />
            <p className="eyebrow">{site.brand} guide</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>

            {detail ? (
              <>
                <section className="card">
                  <h2>Key takeaways</h2>
                  <ul>{detail.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul>
                </section>

                {detail.sections.map((section) => (
                  <section className="card" key={section.title}>
                    <h2>{section.title}</h2>
                    {sectionParagraphs(section.body).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </section>
                ))}

                {detail.comparisonRows?.length ? (
                  <section className="card table-card">
                    <h2>Provider call scorecard</h2>
                    <div className="table-scroll" role="region" aria-label="Provider call scorecard" tabIndex={0}>
                      <table>
                        <thead><tr><th>Area</th><th>Question to ask</th><th>Good answer</th></tr></thead>
                        <tbody>{detail.comparisonRows.map(([area, question, answer]) => (
                          <tr key={area}><td><b>{area}</b></td><td>{question}</td><td>{answer}</td></tr>
                        ))}</tbody>
                      </table>
                    </div>
                    <p className="table-cue">On a small screen, swipe the table to see every column.</p>
                  </section>
                ) : null}

                {detail.quoteBox ? (
                  <section className="card">
                    <h2>Copy-ready provider note</h2>
                    <blockquote>{detail.quoteBox}</blockquote>
                  </section>
                ) : null}

                {detail.faqs?.length ? (
                  <section className="card">
                    <h2>Common questions</h2>
                    {detail.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}
                  </section>
                ) : null}

                {detail.sources?.length ? (
                  <section className="card">
                    <h2>Sources</h2>
                    <ul>{detail.sources.map((source) => (
                      <li key={source.url}><a href={source.url}>{source.name}</a>{source.note ? `: ${source.note}` : ''}</li>
                    ))}</ul>
                  </section>
                ) : null}
              </>
            ) : (
              <section className="card">
                <h2>Start with a defined workflow</h2>
                <p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p>
                <h2>Prepare representative examples</h2>
                <p>Use real, redacted examples to explain quality. Review early work together and update the written process when an exception appears.</p>
                <h2>Plan access and handoffs</h2>
                <p>Provide only the access needed for the position and use named accounts where possible. Write down which questions must be escalated and who receives them.</p>
              </section>
            )}
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
