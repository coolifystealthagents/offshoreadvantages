import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-data';
import { site } from '../../data';

const base = `https://${site.domain.toLowerCase()}`;

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) return { title: 'Not found' };

  const url = `${base}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | ${site.brand}`,
      description: service.desc,
      url,
      siteName: site.brand,
      type: 'website',
    },
  };
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);

  if (!service) notFound();

  const url = `${base}/services/${service.slug}`;
  const organizationId = `${base}/#organization`;

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': `${url}/#service`,
                name: service.title,
                serviceType: service.title,
                description: service.desc,
                url,
                areaServed: {
                  '@type': 'Country',
                  name: 'Philippines',
                },
                provider: {
                  '@type': 'Organization',
                  '@id': organizationId,
                  name: site.brand,
                  url: base,
                },
              },
              {
                '@type': 'BreadcrumbList',
                '@id': `${url}/#breadcrumb`,
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: base,
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Services',
                    item: `${base}/services`,
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    name: service.title,
                    item: url,
                  },
                ],
              },
            ],
          }}
        />
        <section className="fleet-hero variant-0">
          <div className="container">
            <p className="eyebrow">Philippines-based offshore operations support</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn primary" href="/contact">
              Discuss this service
            </a>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-detail-grid">
            <div className="card">
              <h2>Work to include</h2>
              <ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Controls to retain</h2>
              <ul>{service.controls.map((control) => <li key={control}>{control}</li>)}</ul>
            </div>
            <div className="card">
              <h2>First-week plan</h2>
              <ul>{service.firstWeek.map((step) => <li key={step}>{step}</li>)}</ul>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
