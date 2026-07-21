import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';
const siteUrl = 'https://offshoreadvantages.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const url = `${siteUrl}/services/${slug}`;

  return {
    title: service?.title || 'Service',
    description: service?.desc,
    alternates: { canonical: url },
    openGraph: {
      title: service?.title,
      description: service?.desc,
      url,
      type: 'website',
    },
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const url = `${siteUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.desc,
        mainEntity: { '@id': `${url}#service` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: `Philippines ${service.title}`,
        description: service.desc,
        url,
        provider: {
          '@type': 'Organization',
          name: site.brand,
          url: siteUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: service.title, item: url },
        ],
      },
    ],
  };

  return <><Header/><main><JsonLd data={schema}/><section className='service-hero'><div className='container two'><div><p className='eyebrow'>Philippines role brief</p><h1>{service.title}</h1><p className='lead'>{service.desc}</p><a className='btn primary' href='/contact'>Map this Philippines role</a></div><div className='hero-card'><img src={site.serviceImage} alt="Colleagues planning work around a table"/></div></div></section><section className='section'><div className='container cards'><div className='card'><h3>Start with these tasks</h3><ul><li>Recurring work with a good example</li><li>Inbox, ticket, report, update, or follow-up work</li><li>Tasks with clear approval rules</li></ul></div><div className='card'><h3>Set the review rhythm</h3><ul><li>A short daily handoff note</li><li>A named weekly reviewer</li><li>One escalation list</li></ul></div><div className='card'><h3>Prepare the first week</h3><ul><li>Named tool accounts</li><li>Sample work</li><li>A scheduled feedback call</li></ul></div></div></section><CTA/></main><Footer/></>;
}
