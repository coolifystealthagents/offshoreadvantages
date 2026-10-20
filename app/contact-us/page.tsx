import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import reviewData from "../review-provenance.json";
import "./image-fix.css";

export const metadata: Metadata = {
  title: "Contact Us | Plan an Offshore Team",
  description: "Submit an inquiry to map a controlled Philippines staffing role, handoff, and review plan.",
  alternates: { canonical: "/contact-us" },
  openGraph: { title: "Contact Us | Plan an Offshore Team | Offshore Advantages", description: "Submit an inquiry to map a controlled Philippines staffing role, handoff, and review plan.", url: "https://offshoreadvantages.com/contact-us", type: "website" },
  robots: { index: true, follow: true },
};

const advantages = [
  ["Role design", "Define the outcome, recurring tasks, tools, and decision boundaries before recruiting."],
  ["Philippines talent", "Match the role to a schedule, systems, and working style before interviews begin."],
  ["Controlled handoffs", "Launch with clear examples, access rules, escalation paths, and named reviewers."],
  ["Scalable support", "Add dependable capacity without losing visibility into quality or ownership."],
];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="trusted-contact" id="main-content">
      <section className="tc-hero">
        <div className="container tc-hero-grid">
          <div className="tc-copy">
            <p className="tc-kicker">Build the role before you hire</p>
            <h1>Put the Philippines advantage to work.</h1>
            <p className="tc-lead">Tell us what needs to move, who approves it, and what success looks like. We will use those details to shape a practical role brief for a staffing conversation.</p>
            <div className="tc-proof-row"><span>Role-first planning</span><span>Philippines-focused inquiry</span><span>No commitment to submit</span></div>
            <div className="review-heading"><strong>StealthAgents reviews</strong><span>Approved client experiences from the official StealthAgents website</span></div>
            <div className="review-marquee" aria-label="StealthAgents client reviews" tabIndex={0}>
              <div className="review-track">
                {reviewData.records.map((review) => <article className="review-card" key={review.name}>
                  <div className="review-stars" aria-label="5 out of 5 stars"><span aria-hidden="true">★★★★★</span></div>
                  <h2>{review.headline}</h2><p>“{review.body}”</p><footer><strong>{review.name}</strong><span>{review.detail}</span></footer>
                </article>)}
              </div>
            </div>
            <p className="review-source">Source: <a href={reviewData.source} target="_blank" rel="noopener noreferrer">official StealthAgents website</a>, verified {reviewData.verifiedOn}.</p>
          </div>
          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>

      <section className="parent-proof" aria-labelledby="parent-proof-title">
        <div className="container parent-proof-grid">
          <img className="parent-team-photo" src="/images/stealth-agents-team.webp" width="1600" height="900" alt="StealthAgents managed staffing team in Bacolod, Philippines" />
          <div><p className="tc-kicker">The managed team behind the inquiry</p><h2 id="parent-proof-title">Supported by StealthAgents.</h2><p>StealthAgents provides managed virtual assistant staffing with recruitment, candidate matching, onboarding support, and an operating relationship designed around the client’s role. Offshore Advantages helps you define the work and routes qualified inquiries to that team for a practical fit conversation.</p>
            <div className="official-team-plate"><img src="/images/stealth-agents-logo-black.png" width="180" height="52" alt="StealthAgents logo"/><strong>Official team, Bacolod</strong></div>
          </div>
        </div>
      </section>

      <section className="tc-section" id="what-you-get"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">What to bring</p><h2>Four inputs turn an idea into a hireable role.</h2></div><p>Bring the work as it exists today. The discussion can identify recurring responsibilities, necessary experience, coverage windows, and a review rhythm.</p></div>
        <div className="tc-card-grid">{advantages.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="tc-inline-cta"><strong>Already have the role mapped?</strong><a href="#contactPageForm">Submit the role details</a></div>
      </div></section>
      <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Built into the conversation</p><h2>A practical capability checklist.</h2><p>The useful details are the ones that make an offshore relationship inspectable, not just the job title.</p></div><ul><li>Recurring task inventory and ownership</li><li>Required tools, permissions, and data boundaries</li><li>Working hours and time-zone overlap</li><li>Examples, quality standards, and review cadence</li><li>Escalation triggers and decision rights</li><li>Ramp plan and measurable first-month outcomes</li></ul></div></section>
      <section className="container tc-final"><div><p className="tc-kicker">Ready when you are</p><h2>Turn recurring work into a reviewable role.</h2><p>Share the tasks, systems, schedule, and approval needs for a Philippines-based support role.</p></div><a href="#contactPageForm">Submit role details</a></section>
    </main>
    <Footer />
  </>;
}
