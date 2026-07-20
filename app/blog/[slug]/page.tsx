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
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug);
  return {
    title: p?.title || 'Guide',
    description: p?.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: p?.title,
      description: p?.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = blogPosts.find((x) => x.slug === slug) || blogPosts[0];
  const detail = detailsBySlug[slug];
  const url = `${siteUrl}/blog/${p.slug}`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: p.title,
        description: p.excerpt,
        url,
        mainEntityOfPage: url,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: detail?.sources?.map((source) => source.url),
        hasPart: detail?.sections?.map((section, index) => ({
          '@type': 'WebPageElement',
          position: index + 1,
          name: section.title,
        })),
      },
      ...(detail?.faqs?.length
        ? [{
          '@type': 'FAQPage',
          mainEntity: detail.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <article className="container" style={{ maxWidth: 920 }}>
          <JsonLd data={schema} />
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{p.title}</h1>
          <p className="lead">{p.excerpt}</p>

          {detail ? (
            <>
              <div className="card">
                <h2>Key takeaways</h2>
                <ul>
                  {detail.keyTakeaways.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              {detail.sections.map((section) => (
                <section className="card" key={section.title} style={{ marginTop: 18 }}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}

              {detail.comparisonRows ? (
                <section className="card" style={{ marginTop: 18, overflowX: 'auto' }}>
                  <h2>Provider call scorecard</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>Area</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>Question to ask</th>
                        <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>Good answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detail.comparisonRows.map(([area, question, answer]) => (
                        <tr key={area}>
                          <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}><b>{area}</b></td>
                          <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>{question}</td>
                          <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>{answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
              ) : null}

              {detail.quoteBox ? (
                <section className="card" style={{ marginTop: 18 }}>
                  <h2>Copy-ready provider note</h2>
                  <p className="quote">{detail.quoteBox}</p>
                </section>
              ) : null}

              {detail.faqs ? (
                <section className="card" style={{ marginTop: 18 }}>
                  <h2>FAQ</h2>
                  {detail.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </section>
              ) : null}

              {detail.sources ? (
                <section className="card" style={{ marginTop: 18 }}>
                  <h2>Sources</h2>
                  <ul>
                    {detail.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url}>{source.name}</a>{source.note ? `: ${source.note}` : ''}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </>
          ) : (
            <div className="card">
              <h2>The short answer</h2>
              <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
              <h2>What to prepare</h2>
              <ul>
                <li>Task examples and sample replies</li>
                <li>Tool access and permission rules</li>
                <li>Daily output target</li>
                <li>Escalation rules for anything sensitive</li>
              </ul>
              <h2>Questions to ask</h2>
              <ul>
                <li>Who screens the worker?</li>
                <li>Who checks quality?</li>
                <li>What happens if fit is poor?</li>
                <li>How are passwords and customer data handled?</li>
              </ul>
            </div>
          )}
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
