import { Header, Footer, JsonLd } from './components';
import { services, staffingProcess, site } from './data';
import { fleetServices } from './fleet-data';

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

const planningNotes = [
  ['Start with the work', 'Name the recurring queue, expected output, and finish line before discussing a job title.'],
  ['Keep access bounded', 'Open named accounts only after the task, system, and approval boundary are written down.'],
  ['Make handoffs visible', 'Put status, source evidence, next action, and the next owner in the shared work record.'],
  ['Review real samples', 'Inspect representative work in week one instead of relying on activity totals or assumptions.'],
  ['Route exceptions', 'Keep unusual customer, payment, legal, and policy decisions with the authorized client owner.'],
  ['Expand from evidence', 'Add scope only after the normal path, review rhythm, and escalation route are working.'],
];

const readinessCards = [
  ['Scope', 'Named tasks', 'A role brief starts with recurring work and an observable output.'],
  ['Access', 'Limited systems', 'Each system has a named account, allowed action, and approval boundary.'],
  ['Review', 'Visible evidence', 'The client owner can inspect samples, exceptions, and accepted work.'],
  ['Handoff', 'Clear ownership', 'Every blocked or unusual item has a next owner and due rule.'],
];

const trustPoints = [
  ['Role brief', 'Work, examples, tools, hours, and finish lines'],
  ['Access map', 'Named systems, permissions, approvals, and removal'],
  ['Review plan', 'First-week samples, feedback timing, and evidence'],
  ['Escalation route', 'Exceptions that stay with the authorized owner'],
  ['Continuity check', 'Shift handoffs, blocked work, and fallback rules'],
];

const evidenceCards = [
  ['A reviewable role brief', 'Bring a narrow task list, representative examples, the tools involved, the required hours, and the person who accepts the work.'],
  ['A controlled first week', 'Practice the normal path with redacted samples, then record clarifications, exceptions, and access gaps before live work expands.'],
  ['A manager-owned rhythm', 'Review a useful sample on a fixed schedule and revise the workflow when the same ambiguity or defect repeats.'],
];

const industries = ['Professional services', 'Technology', 'Financial operations', 'Customer experience', 'Marketing', 'E-commerce', 'Real estate', 'Healthcare administration', 'Education', 'Hospitality', 'Construction', 'Logistics', 'Retail', 'Nonprofit', 'Consulting', 'Media'];

const canonicalServiceHrefs = [
  '/services/shared-services-administration',
  '/services/customer-experience-support',
  '/services/finance-operations-support',
  '/services/revenue-operations-support',
  '/services/procurement-administration',
  '/services/data-management-support',
  '/services/marketing-operations-support',
  '/services/technical-support-desk',
  '/services/project-coordination-support',
  '/services/back-office-quality-review',
];

const faqs = [
  ['What should be defined before contacting a staffing provider?', 'List the recurring work, examples of acceptable output, systems, schedule, approval limits, escalation owner, and how the first samples will be reviewed.'],
  ['Does Offshore Advantages employ virtual assistants?', 'No. Offshore Advantages is an independent informational site. Qualified inquiries may be routed to a suitable Philippines staffing provider, which handles hiring and service terms separately.'],
  ['Can a Philippines-based role cover US business hours?', 'It can when the schedule is explicitly agreed with the provider and candidate. Coverage should be confirmed for the actual role rather than assumed from location.'],
  ['How should system access be planned?', 'Use named accounts, minimum necessary permissions, strong authentication, written approval rules, and a same-day removal process when the assignment changes or ends.'],
  ['What should the first week prove?', 'A trained person should be able to complete a representative normal task, identify an exception, preserve evidence, and route the item to the correct owner.'],
  ['Which decisions should remain with the client?', 'Keep unusual customer promises, payments, legal or financial judgment, policy exceptions, and other high-risk decisions with an authorized client owner unless a written workflow says otherwise.'],
  ['How do we know when to expand the role?', 'Expand only after accepted samples show that the normal path, access controls, review rhythm, and escalation route are working reliably.'],
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
    <main id="main-content" className="sa-home sa-home-v2" data-design="stealth-family-2026-v2">
      <JsonLd data={schema} />

      <section className="sa-hero">
        <div className="container sa-hero-grid">
          <div className="sa-hero-copy">
            <h1>Build An Offshore Role <span>Your Team Can Review</span></h1>
            <ul className="sa-checks">
              {roleChecks.map(item => <li key={item}>{item}</li>)}
            </ul>
            <a className="sa-button sa-button-red" href="/contact-us">Map Your Philippines Role <span aria-hidden="true">→</span></a>
            <p className="sa-assurance">Clear scope before candidate conversations</p>
          </div>
          <figure className="sa-hero-media">
            <img src={site.heroImage} width="1200" height="800" alt={site.alt} />
          </figure>
        </div>
      </section>

      <section className="sa-note-rail" aria-labelledby="notes-title">
        <div className="sa-heading container"><p className="sa-section-label">Planning notes</p><h2 id="notes-title">What a reviewable role needs</h2></div>
        <div className="sa-note-track">
          {planningNotes.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="sa-readiness" aria-labelledby="readiness-title">
        <div className="container"><h2 id="readiness-title">Four checks before capacity is added</h2><div className="sa-readiness-grid">
          {readinessCards.map(([label, value, body]) => <article key={label}><span>{label}</span><strong>{value}</strong><p>{body}</p></article>)}
        </div></div>
      </section>

      <section className="sa-section sa-roles" id="roles">
        <div className="container">
          <div className="sa-heading"><p className="sa-section-label">Common role lanes</p><h2>Find the right support for recurring work</h2><p>Start with a narrow, observable workflow. Add scope only after the handoff and review rhythm are working.</p></div>
          <div className="sa-role-grid sa-role-grid-dense">
            {fleetServices.map((service, index) => <article key={service.slug}>
              <span className="sa-role-icon" aria-hidden="true">{['⌂','◌','↗','✓','◇','□','◎','△','○','＋'][index]}</span>
              <h3>{service.title}</h3><p>{service.desc.replace('Build a Philippines-based ', '').replace(' workflow with documented responsibilities, access limits, and manager review.', ' with documented scope, access, and review.')}</p>
              <a href={canonicalServiceHrefs[index]}>Explore the service <span aria-hidden="true">→</span></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="sa-trust-strip" aria-label="Planning coverage">
        <div className="container"><p>Designed around the operating details a manager must review</p><div>{trustPoints.map(([title]) => <span key={title}>{title}</span>)}</div></div>
      </section>

      <section className="sa-metrics" aria-label="Offshore role planning principles">
        <div className="container sa-metric-grid">
          <article><strong>1</strong><span>defined role to begin</span></article>
          <article><strong>10</strong><span>documented service lanes</span></article>
          <article><strong>Named</strong><span>review and escalation owner</span></article>
          <article><strong>Controlled</strong><span>access before expansion</span></article>
        </div>
      </section>

      <section className="sa-section sa-process">
        <div className="container">
          <div className="sa-heading"><p className="sa-section-label">The process</p><h2>Move from recurring work to a controlled launch</h2></div>
          <div className="sa-process-grid">{staffingProcess.slice(0, 3).map(item => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          <div className="sa-centered-action"><a className="sa-button sa-button-blue" href="/contact-us">Plan Your Role <span aria-hidden="true">→</span></a><small>No test lead or booking is created until you submit.</small></div>
        </div>
      </section>

      <section className="sa-evidence" aria-labelledby="evidence-title">
        <div className="container"><div className="sa-heading"><p className="sa-section-label">Operating evidence</p><h2 id="evidence-title">A clear plan leaves a record</h2></div><div className="sa-evidence-grid">
          {evidenceCards.map(([title, body], index) => <article key={title} className={index < 2 ? 'featured' : ''}><span aria-hidden="true">✓ ✓ ✓ ✓ ✓</span><h3>{title}</h3><p>{body}</p><strong>{['Scope and ownership','Samples and exceptions','Review and improvement'][index]}</strong></article>)}
        </div></div>
      </section>

      <section className="sa-talent">
        <div className="container sa-talent-grid">
          <div><p className="sa-section-label">A role that can be managed</p><h2>Choose work that is repeatable, visible, and bounded</h2><p>Good offshore roles make the expected result clear and keep unusual decisions with the right owner. That gives a Philippines-based teammate room to execute without hiding risk.</p><div className="sa-bars" aria-label="Role-readiness indicators"><div><span>Example output</span><b style={{width:'94%'}} /></div><div><span>Named reviewer</span><b style={{width:'89%'}} /></div><div><span>Escalation rule</span><b style={{width:'97%'}} /></div></div><div className="sa-dark-stats"><span><strong>10</strong>service lanes</span><span><strong>1</strong>role owner</span><span><strong>3</strong>launch steps</span></div><a className="sa-button sa-button-light" href="/services">Explore Offshore Services <span aria-hidden="true">→</span></a></div>
          <div className="sa-talent-board"><p className="sa-section-label">Good-fit signals</p>{services.map(service => <article key={service.slug}><span aria-hidden="true">✓</span><div><h3>{service.title}</h3><p>{service.desc}</p></div></article>)}</div>
        </div>
      </section>

      <section className="sa-section sa-explainer">
        <div className="container sa-explainer-grid">
          <article><p className="sa-section-label">What we do</p><h2>What is role planning?</h2><p>Role planning turns a broad request for “help” into named tasks, tools, hours, examples, approval limits, and review ownership.</p><p>It gives candidate conversations a real operating context and makes the first week easier to inspect.</p><a className="sa-button sa-button-blue" href="/services">Explore Our Services <span aria-hidden="true">→</span></a></article>
          <article className="sa-explainer-accent"><p className="sa-section-label">Our edge</p><h2>Why define the work first?</h2><p>A clear role helps everyone distinguish routine execution from decisions that must stay with qualified or authorized personnel.</p><div className="sa-mini-stats"><span><strong>Scope</strong>Tasks and finish lines</span><span><strong>Access</strong>Named systems and limits</span><span><strong>Review</strong>Evidence and ownership</span></div></article>
        </div>
      </section>

      <section className="sa-system" aria-labelledby="system-title"><div className="container"><div className="sa-heading"><p className="sa-section-label">How it works for you</p><h2 id="system-title">A system before a staffing conversation</h2><p>Each part is designed to make the role easier to explain, control, and review.</p></div><div className="sa-system-grid">{trustPoints.map(([title, body]) => <article key={title}><div aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

      <section className="sa-industries" aria-labelledby="industries-title"><div className="container"><div className="sa-heading"><p className="sa-section-label">Workflow coverage</p><h2 id="industries-title">Planning patterns across industries</h2></div><div className="sa-industry-grid">{industries.map(item => <span key={item}>□ &nbsp; {item}</span>)}</div></div></section>

      <section className="sa-final-wrap"><div className="container sa-final-panel"><div><p className="sa-section-label">Ready to map the role?</p><h2>Build a Philippines support plan around real work</h2><p>Share the tasks, tools, schedule, access boundaries, and review needs. Qualified inquiries may be routed to a Philippines staffing provider.</p><a className="sa-button sa-button-blue" href="/contact-us">Start Your Role Plan <span aria-hidden="true">→</span></a></div><ul><li>Role brief grounded in recurring work</li><li>Candidate discussion based on real systems</li><li>Controlled first-week review plan</li></ul></div></section>

      <section className="sa-faq" aria-labelledby="faq-title"><div className="container"><div className="sa-heading"><p className="sa-section-label">FAQ</p><h2 id="faq-title">Frequently asked questions</h2></div><div className="sa-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div><p>Still have questions? <a href="/contact-us">Talk to our team →</a></p></div></section>

      <p className="container sa-disclosure">OffshoreAdvantages.com is an independent informational site. Qualified inquiries may be shared with a suitable Philippines staffing provider. Hiring and service terms are handled separately by that provider.</p>
    </main>
    <Footer />
  </>;
}
