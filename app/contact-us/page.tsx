import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./image-fix.css";

export const metadata: Metadata = {
  title: "Contact Us | Plan an Offshore Team",
  description: "Book a free consultation to map a controlled Philippines staffing role, handoff, and review plan.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
};

const advantages = [
  ["Role design", "Define the outcome, recurring tasks, tools, and decision boundaries before recruiting."],
  ["Philippines talent", "Match experienced professionals to your schedule, systems, and working style."],
  ["Controlled handoffs", "Launch with clear examples, access rules, escalation paths, and named reviewers."],
  ["Scalable support", "Add dependable capacity without losing visibility into quality or ownership."],
];

const testimonials = [
  ["The role brief made our expectations concrete before the first interview.", "Operations leader, professional services"],
  ["We gained reliable overlap and a handoff process our whole team could follow.", "Founder, growth-stage company"],
  ["The strongest part was the focus on ownership, review, and measurable outcomes.", "COO, distributed team"],
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="trusted-contact">
      <section className="tc-hero">
        <div className="container tc-hero-grid">
          <div className="tc-copy">
            <p className="tc-kicker">Build the role before you hire</p>
            <h1>Put the Philippines advantage to work.</h1>
            <p className="tc-lead">Tell us what needs to move, who approves it, and what success looks like. We’ll help shape a practical offshore staffing plan built for dependable delivery.</p>
            <div className="tc-proof-row"><span>35+ industries</span><span>Philippines specialists</span><span>Free consultation</span></div>
            <a className="tc-text-link" href="#what-you-get">See what your plan includes →</a>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>
      <section className="tc-strip" aria-label="Consultation benefits"><div className="container tc-strip-grid"><strong>A clearer first step</strong><span>✓ Role scope</span><span>✓ Talent fit</span><span>✓ Handoff controls</span><span>✓ Next-step plan</span></div></section>
      <section className="tc-section" id="what-you-get">
        <div className="container"><div className="tc-section-head"><div><p className="tc-kicker">What to bring</p><h2>Four inputs turn an idea into a hireable role.</h2></div><p>Bring the work as it exists today. We’ll help identify the repeatable responsibilities, necessary experience, coverage window, and review rhythm.</p></div>
          <div className="tc-card-grid">{advantages.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="tc-inline-cta"><strong>Already have the role mapped?</strong><a href="#contactPageForm">Book your consultation</a></div>
        </div>
      </section>
      <section className="tc-testimonials"><div className="container"><p className="tc-kicker">What clients value</p><h2>Clarity before capacity.</h2><div className="tc-quote-grid">{testimonials.map(([quote, by]) => <figure key={quote}><div aria-label="5 out of 5 stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption>{by}</figcaption></figure>)}</div></div></section>
      <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Built into the conversation</p><h2>A practical capability checklist.</h2><p>We focus on the operating details that make an offshore relationship durable—not just a job title.</p></div><ul><li>Recurring task inventory and ownership</li><li>Required tools, permissions, and data boundaries</li><li>Working hours and time-zone overlap</li><li>Examples, quality standards, and review cadence</li><li>Escalation triggers and decision rights</li><li>Ramp plan and measurable first-month outcomes</li></ul></div></section>
      <section className="tc-why"><div className="container tc-why-grid"><img src="/philippines-team.jpg" width="1200" height="800" alt="Philippines professionals collaborating on an offshore staffing plan" /><div><p className="tc-kicker">Why plan with us</p><h2>Offshore support should feel accountable, not distant.</h2><p>We help translate a staffing need into a role with clear boundaries, useful overlap, and a visible finish line. That gives your team and your future hire a stronger start.</p><a href="#contactPageForm">Start my role plan →</a></div></div></section>
      <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">Powered by a proven team</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Powered by Stealth Agents</a></div></section>
      <section className="container tc-final"><div><p className="tc-kicker">Ready when you are</p><h2>Turn recurring work into a role your team can trust.</h2><p>Share your goals today and leave with a clearer path to hiring Philippines-based support.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
    </main>
    <Footer />
  </>;
}
