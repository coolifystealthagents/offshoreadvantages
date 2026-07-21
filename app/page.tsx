import { Header, Footer, JsonLd } from './components';
import { services, stats, staffingProcess, site } from './data';

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
    <main data-design="philippines-advantage-board-2026">
      <JsonLd data={schema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">A clearer case for Filipino talent</p>
            <h1>The Philippines advantage starts with the right work.</h1>
            <p className="hero-lead">Map the role, handoff, access, and review plan before you hire. We connect qualified inquiries with staffing teams that recruit and hire exclusively in the Philippines.</p>
            <div className="actions">
              <a className="btn primary" href="/contact">Map my Philippines role</a>
              <a className="text-link" href="#advantage">See the decision board <span aria-hidden="true">↓</span></a>
            </div>
            <p className="disclosure">OffshoreAdvantages.com is an independent informational site. Your inquiry may be shared with a suitable Philippines staffing provider.</p>
          </div>
          <div className="hero-visual">
            <img src={site.heroImage} alt={site.alt} />
            <div className="image-stamp"><small>Role plan</small><strong>Work → owner → review</strong></div>
            <div className="orbit orbit-one">PH</div>
            <div className="orbit orbit-two">✓</div>
          </div>
        </div>
        <div className="container advantage-strip">
          {stats.map((item) => <article key={item.label}><span>{item.label}</span><strong>{item.value}</strong><p>{item.note}</p></article>)}
        </div>
      </section>

      <section className="section decision" id="advantage">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">The decision board</p><h2>Four advantages. Four controls to get right.</h2></div><p>Filipino talent can give a team dependable coverage and capable support. The upside lasts when the role has boundaries, examples, and someone who reviews the work.</p></div>
          <div className="advantage-grid">
            {services.map((service, index) => <a href={`/services/${service.slug}`} className="advantage-card" key={service.slug}>
              <span className="card-number">0{index + 1}</span>
              <div><h3>{service.title}</h3><p>{service.desc}</p><b>Open the role brief <span aria-hidden="true">→</span></b></div>
            </a>)}
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="container fit-grid">
          <div className="fit-intro"><p className="eyebrow light">Good fit / poor fit</p><h2>Move repeatable work, not unfinished thinking.</h2><p>A Philippines staffing role is easier to launch when the result is visible and the approval line is written down.</p></div>
          <div className="fit-board">
            <article><span>Good fit</span><h3>The task has an example.</h3><p>The Filipino team member can compare their output with something your team already considers correct.</p></article>
            <article><span>Good fit</span><h3>The finish line is clear.</h3><p>Everyone knows when the work is complete and which exceptions need escalation.</p></article>
            <article className="warning"><span>Pause first</span><h3>The process changes every day.</h3><p>Document the decisions before handing the work to a new Philippines-based hire.</p></article>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-head compact"><div><p className="eyebrow">A controlled handoff</p><h2>Build the role in this order.</h2></div><a className="btn outline compact-cta" href="/contact">Map my Philippines role</a></div>
          <div className="process-grid">{staffingProcess.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      </section>

      <section className="container closing-panel">
        <div><p className="eyebrow light">Philippines only</p><h2>Know what you want the role to own?</h2><p>Send the tasks, tools, schedule, and review needs. We will route qualified inquiries to a team that recruits and hires Filipino talent.</p></div>
        <a className="btn coral" href="/contact">Map my Philippines role</a>
      </section>
    </main>
    <Footer />
  </>;
}
