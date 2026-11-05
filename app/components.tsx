import * as data from './data';
import { fleetServices } from './fleet-data';
const site = (data as any).site || {};
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg?v=20260730-niche-logo" alt="" />
    <span className="logo-copy"><strong>{site.brand}</strong><small>Philippines staffing planning</small></span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a>
      <nav className="links fleet-nav" aria-label="Main navigation">
        <a href="/">Home</a><a href="/services">Services</a><a href="/blog">Insights</a><a href="/contact-us">Contact Us</a>
      </nav>
      <a className="nav-cta" href="/contact-us">Plan Your Role <span aria-hidden="true">→</span></a>
      <details className="mobile-nav"><summary aria-label="Open navigation"><span /><span /><span /></summary><nav><a href="/">Home</a><a href="/services">Services</a><a href="/blog">Insights</a><a href="/contact-us">Contact Us</a></nav></details>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand"><a className="footer-logo" href="/"><LogoMark /></a><p>Practical guidance for teams planning clearly scoped Philippines-based support roles.</p><p className="footer-note">This independent information site provides planning guidance. Qualified requests may be routed to a staffing provider; hiring and service terms are handled separately.</p></div>
      <div><h3>Services</h3><div className="footer-links">{fleetServices.slice(0, 6).map(s => <a href={`/services/${s.slug}`} key={s.slug}>{s.title}</a>)}</div></div>
      <div><h3>Resources</h3><div className="footer-links"><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{site.domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta fleet-final"><p className="eyebrow">Philippines-based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us">Plan Your Role →</a></section>;
}
