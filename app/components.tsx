import * as data from './data';
const site = (data as any).site || {};
const footerItems = ((data as any).services || []).slice(0, 4);
const domain = site.domain || 'OffshoreAdvantages.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand}</span></span>;
}

export function Header() {
  return <header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><nav className="links" aria-label="Main navigation"><a href="/#advantage">Advantages</a><a href="/#advantage">Roles</a><a href="/blog">Guides</a><a href="/contact">Contact</a></nav><a className="btn nav-cta" href="/contact">Map my Philippines role</a></div></header>;
}

export function Footer() {
  return <footer className="legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand} home`}><LogoMark /></a><p>Independent planning guidance for businesses considering Filipino talent. We help you define the role before your inquiry reaches a Philippines staffing team.</p><p className="footer-note">The staffing providers we work with recruit, hire, and provide talent exclusively from the Philippines. Submitted inquiries may be routed to a suitable provider for follow-up.</p></div><div><h3>Role briefs</h3><div className="footer-links">{footerItems.map((item: any) => <a href={`/services/${item.slug}`} key={item.slug}>{item.title}</a>)}</div></div><div><h3>Site</h3><div className="footer-links"><a href="/contact">Contact</a><a href="/blog">Guides</a><a href="/privacy">Privacy policy</a><a href="/terms">Terms & conditions</a><a href="/cancellation-policy">Cancellation policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand}. All rights reserved.</span><span>{domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow light">Plan a Philippines role</p><h2>Put the handoff on paper before you hire.</h2><p>Share the work, tools, schedule, and review needs. Qualified inquiries may be routed to a Philippines staffing provider.</p><a className="btn coral" href="/contact">Map my Philippines role</a></section>;
}
