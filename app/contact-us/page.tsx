import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./image-fix.css";

export const metadata: Metadata = {
  title: "Contact Us | Plan an Offshore Team",
  description: "Submit an inquiry to map a controlled Philippines staffing role, handoff, and review plan.",
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: "Contact Us | Plan an Offshore Team | Offshore Advantages",
    description: "Submit an inquiry to map a controlled Philippines staffing role, handoff, and review plan.",
    url: "https://offshoreadvantages.com/contact-us",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const advantages = [
  ["Role design", "Define the outcome, recurring tasks, tools, and decision boundaries before recruiting."],
  ["Philippines talent", "Share your role details with a provider suited to your schedule, systems, and working style."],
  ["Controlled handoffs", "Launch with clear examples, access rules, escalation paths, and named reviewers."],
  ["Scalable support", "Add dependable capacity without losing visibility into quality or ownership."],
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
            <p className="tc-lead">Tell us what needs to move, who approves it, and what success looks like. Use those details to shape a practical offshore staffing brief for a provider conversation.</p>
            <div className="tc-proof-row"><span>Role-first planning</span><span>Philippines-focused inquiry</span><span>No commitment to submit</span></div>
            <a className="tc-text-link" href="#what-you-get">See what your plan includes →</a>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>
      <section className="tc-strip" aria-label="Role-planning inputs"><div className="container tc-strip-grid"><strong>A clearer first step</strong><span>✓ Role scope</span><span>✓ Talent fit</span><span>✓ Handoff controls</span><span>✓ Next-step plan</span></div></section>
      <section className="tc-section" id="what-you-get">
        <div className="container"><div className="tc-section-head"><div><p className="tc-kicker">What to bring</p><h2>Four inputs turn an idea into a hireable role.</h2></div><p>Bring the work as it exists today. We’ll help identify the repeatable responsibilities, necessary experience, coverage window, and review rhythm.</p></div>
          <div className="tc-card-grid">{advantages.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
          <div className="tc-inline-cta"><strong>Already have the role mapped?</strong><a href="#contactPageForm">Submit the role details</a></div>
        </div>
      </section>

      <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Built into the conversation</p><h2>A practical capability checklist.</h2><p>We focus on the operating details that make an offshore relationship durable—not just a job title.</p></div><ul><li>Recurring task inventory and ownership</li><li>Required tools, permissions, and data boundaries</li><li>Working hours and time-zone overlap</li><li>Examples, quality standards, and review cadence</li><li>Escalation triggers and decision rights</li><li>Ramp plan and measurable first-month outcomes</li></ul></div></section>
      <section className="tc-why"><div className="container tc-why-grid"><img src="/philippines-team.jpg" width="1200" height="800" alt="Philippines professionals collaborating on an offshore staffing plan" /><div><p className="tc-kicker">Why plan first</p><h2>Offshore support should feel accountable, not distant.</h2><p>A clear staffing brief gives the provider, your team, and a future hire shared boundaries, useful overlap, and a visible finish line.</p><a href="#contactPageForm">Start my role plan →</a></div></div></section>
      <section className="tc-about"><div className="container tc-about-grid"><div><p className="tc-kicker">How inquiries are handled</p><h2>From role brief to staffing conversation</h2><p>Qualified inquiries may be routed to the staffing team for a practical discussion of role scope, candidate fit, onboarding, and review ownership.</p></div><a href="https://stealthagents.com" rel="noopener noreferrer">Learn about the staffing team</a></div></section>
      <section className="container tc-final"><div><p className="tc-kicker">Ready when you are</p><h2>Turn recurring work into a reviewable role.</h2><p>Share the tasks, systems, schedule, and approval needs for a Philippines-based support role.</p></div><a href="#contactPageForm">Submit role details</a></section>
    </main>
    <Footer />
  </>;
}
