import * as data from './data';
import { fleetServices } from './fleet-data';
const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg?v=20260730-niche-logo" alt="" width="44" height="44" />
    <span className="logo-copy"><strong>{site.brand}</strong><small>Philippines staffing planning</small></span>
  </span>;
}

export function ParentBrand({ placement }: { placement: 'header' | 'footer' }) {
  return <a className={`parent-brand parent-brand-${placement}`} href="https://stealthagents.com" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, opens the StealthAgents website in a new tab"><img src="/images/stealth-agents-logo-black.png" alt="StealthAgents" width="120" height="35" /><span>Powered by StealthAgents</span></a>;
}

export function Header() {
  return <><a className="skip-link" href="#main-content">Skip to main content</a><header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
      <nav className="links fleet-nav" aria-label="Main navigation">
        <a href="/">Home</a><a href="/services">Services</a><a href="/blog">Insights</a><a href="/contact-us">Contact Us</a>
      </nav>
      <a className="nav-cta" href="/contact-us">Plan Your Role <span aria-hidden="true">→</span></a>
      <details className="mobile-nav"><summary aria-label="Open navigation"><span /><span /><span /></summary><nav><a href="/">Home</a><a href="/services">Services</a><a href="/blog">Insights</a><a href="/contact-us">Contact Us</a></nav></details>
    </div>
  </header></>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><ParentBrand placement="footer" /><p>Practical guidance for teams planning clearly scoped Philippines-based support roles.</p><p className="footer-note">Offshore Advantages is a subsidiary information site in the StealthAgents portfolio. Qualified requests may be routed to the StealthAgents managed staffing team; hiring and service terms are confirmed during consultation.</p></div>
      <div><h3>Services</h3><div className="footer-links">{fleetServices.slice(0, 6).map(s => <a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div></div>
      <div><h3>Resources</h3><div className="footer-links"><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Philippines-based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us">Plan Your Role →</a></section>;
}
