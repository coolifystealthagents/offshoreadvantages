import { Header, Footer, JsonLd } from './components';
import { services, staffingProcess, site } from './data';

export const metadata = {
  title: { absolute: 'Virtual Assistant Planning for Professional Services | Offshore Advantages' },
  description: 'Plan a Philippines-based virtual assistant role for a professional-services team with clear work, handoffs, access, and review.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Virtual Assistant Planning for Professional Services | Offshore Advantages',
    description: 'Plan a Philippines-based virtual assistant role with clear work, handoffs, access, and review.',
    url: 'https://offshoreadvantages.com/',
    type: 'website',
  },
};

const roleChecks = [
  'Recurring work with a clear finish line',
  'Named systems and access boundaries',
  'USA-time-zone coverage when required',
  'A client-side owner for review and exceptions',
];

const trustPoints = [
  ['Philippines focused', 'Role planning built around Filipino talent'],
  ['Control first', 'Scope, access, approvals, and escalation before launch'],
  ['Reviewable work', 'Examples and first-week evidence instead of vague activity'],
  ['Provider routing', 'Qualified inquiries may be introduced to a staffing provider'],
];

const fitCards = [
  ['Documented administration', 'Calendar, inbox, records, coordination, and recurring back-office work with an observable output.'],
  ['Customer experience', 'Inbox, chat, and ticket support with approved answers, tone guidance, and clear escalations.'],
  ['Operations support', 'Reports, handoffs, vendor follow-up, and queue ownership supported by written checks.'],
  ['Reporting and quality review', 'Prepared reports, sampled work, exception logs, and evidence for an authorized reviewer.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${site.domain}`,
    description: 'Independent guidance and inquiry routing for businesses planning Philippines-based staffing roles.',
  };

  return <>
    <Header />
    <main className="sa-home" data-design="stealth-family-2026">
      <JsonLd data={schema} />

      <section className="sa-hero">
        <div className="container sa-hero-grid">
          <div className="sa-hero-copy">
            <p className="sa-kicker">Philippines virtual assistant planning</p>
            <h1>Build An Offshore Role <span>Your Team Can Review</span></h1>
            <p className="sa-hero-lead">Turn recurring administration, customer support, and operations work into a clear role with named tools, approval limits, and a practical first-week review.</p>
            <ul className="sa-checks">
              {roleChecks.map(item => <li key={item}>{item}</li>)}
            </ul>
            <a className="sa-button sa-button-red" href="/contact-us">Map Your Philippines Role <span aria-hidden="true">→</span></a>
            <p className="sa-assurance">Clear scope before candidate conversations</p>
          </div>
          <figure className="sa-hero-media">
            <img src={site.heroImage} width="1200" height="800" alt={site.alt} />
            <figcaption>Define the work, owner, systems, and review path before hiring.</figcaption>
          </figure>
        </div>
      </section>

      <section className="sa-trust" aria-labelledby="trust-title">
        <div className="container">
          <p className="sa-section-label">A practical starting point</p>
          <h2 id="trust-title">Plan the role before you add capacity</h2>
          <div className="sa-trust-grid">
            {trustPoints.map(([title, body]) => <article key={title}><span aria-hidden="true">✓</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="sa-section sa-roles" id="roles">
        <div className="container">
          <div className="sa-heading">
            <p className="sa-section-label">Common role lanes</p>
            <h2>Find the right support for recurring work</h2>
            <p>Start with a narrow, observable workflow. Add scope only after the handoff and review rhythm are working.</p>
          </div>
          <div className="sa-role-grid">
            {fitCards.map(([title, body], index) => <article key={title}>
              <span className="sa-role-icon" aria-hidden="true">{['⌂','◌','↗','✓'][index]}</span>
              <h3>{title}</h3><p>{body}</p>
              <a href="/services">Explore the service <span aria-hidden="true">→</span></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="sa-metrics" aria-label="Offshore role planning principles">
        <div className="container sa-metric-grid">
          <article><strong>1</strong><span>defined role to begin</span></article>
          <article><strong>4</strong><span>core support lanes</span></article>
          <article><strong>Named</strong><span>review and escalation owner</span></article>
          <article><strong>Controlled</strong><span>access before expansion</span></article>
        </div>
      </section>

      <section className="sa-section sa-process">
        <div className="container">
          <div className="sa-heading">
            <p className="sa-section-label">The process</p>
            <h2>Move from recurring work to a controlled launch</h2>
          </div>
          <div className="sa-process-grid">
            {staffingProcess.slice(0, 3).map(item => <article key={item.step}>
              <span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p>
            </article>)}
          </div>
          <div className="sa-centered-action"><a className="sa-button sa-button-blue" href="/contact-us">Plan Your Role <span aria-hidden="true">→</span></a><small>No test lead or booking is created until you submit.</small></div>
        </div>
      </section>

      <section className="sa-talent">
        <div className="container sa-talent-grid">
          <div>
            <p className="sa-section-label">A role that can be managed</p>
            <h2>Choose work that is repeatable, visible, and bounded</h2>
            <p>Good offshore roles make the expected result clear and keep unusual decisions with the right owner. That gives a Philippines-based teammate room to execute without hiding risk.</p>
            <div className="sa-bars" aria-label="Role-readiness indicators">
              <div><span>Example output</span><b style={{width:'94%'}} /></div>
              <div><span>Named reviewer</span><b style={{width:'89%'}} /></div>
              <div><span>Escalation rule</span><b style={{width:'97%'}} /></div>
            </div>
            <a className="sa-button sa-button-light" href="/services">Explore Offshore Services <span aria-hidden="true">→</span></a>
          </div>
          <div className="sa-talent-board">
            <p className="sa-section-label">Good-fit signals</p>
            {services.map(service => <article key={service.slug}><span aria-hidden="true">✓</span><div><h3>{service.title}</h3><p>{service.desc}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="sa-section sa-explainer">
        <div className="container sa-explainer-grid">
          <article><p className="sa-section-label">What we do</p><h2>What is role planning?</h2><p>Role planning turns a broad request for “help” into named tasks, tools, hours, examples, approval limits, and review ownership.</p><p>It gives candidate conversations a real operating context and makes the first week easier to inspect.</p><a className="sa-button sa-button-blue" href="/services">Explore Our Services <span aria-hidden="true">→</span></a></article>
          <article className="sa-explainer-accent"><p className="sa-section-label">Our edge</p><h2>Why define the work first?</h2><p>A clear role helps everyone distinguish routine execution from decisions that must stay with qualified or authorized personnel.</p><div className="sa-mini-stats"><span><strong>Scope</strong>Tasks and finish lines</span><span><strong>Access</strong>Named systems and limits</span><span><strong>Review</strong>Evidence and ownership</span></div></article>
        </div>
      </section>

      <section className="sa-final-wrap">
        <div className="container sa-final-panel">
          <div><p className="sa-section-label">Ready to map the role?</p><h2>Build a Philippines support plan around real work</h2><p>Share the tasks, tools, schedule, access boundaries, and review needs. Qualified inquiries may be routed to a Philippines staffing provider.</p><a className="sa-button sa-button-blue" href="/contact-us">Start Your Role Plan <span aria-hidden="true">→</span></a></div>
          <ul><li>Role brief grounded in recurring work</li><li>Candidate discussion based on real systems</li><li>Controlled first-week review plan</li></ul>
        </div>
      </section>

      <p className="container sa-disclosure">OffshoreAdvantages.com is an independent informational site. Qualified inquiries may be shared with a suitable Philippines staffing provider. Hiring and service terms are handled separately by that provider.</p>
    </main>
    <Footer />
  </>;
}
