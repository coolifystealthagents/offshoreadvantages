# Service-led research link ledger

Updated: 2026-08-24

This ledger maps existing research intent to existing Philippines-based service routes. It is a source-only planning record, not a claim that a link is already rendered. Each candidate should be added through the `serviceHandoff` field in `ResearchPost`, followed by the route build and public verification required by the repository workflow.

| Priority | Research route and reader question | Existing service route | Why the handoff fits | Required copy boundary | Current route-local state |
| --- | --- | --- | --- | --- | --- |
| 1 | `/research/philippines-offshore-work-queue-signal-integrity` — Can the queue show its real state and next allowed action? | `/services/shared-services-administration` | The research explains role-safe queue states, inputs, ownership, and handoffs. Shared Services Administration is the closest existing service for putting that routine into a defined role. | The role can record, classify, and route work. The client keeps policy, payment, customer-commitment, and exception decisions. | No `serviceHandoff` field on the research record; no route-local service link is rendered. |
| 2 | `/research/philippines-offshore-manager-review-sampling-bias` — How can a manager sample work without confusing case conditions with quality? | `/services/back-office-quality-review` | The research covers review samples, reviewer calibration, case mix, and evidence. Back-Office Quality Review gives a relevant next step for leaders designing a review lane. | Sampling informs review and coaching. It does not authorize an offshore role to make employment, policy, access, or risk decisions. | No `serviceHandoff` field on the research record; no route-local service link is rendered. |
| 3 | `/research/offshore-operations-approval-latency-decomposition` — Which part of approval delay can the client change? | `/services/project-coordination-support` | The research separates preparation, owner wait, clarification, and rework. Project Coordination Support is the relevant existing service for maintaining decision records and handoffs across those dependencies. | The role can prepare records, track dependencies, and ask bounded questions. The client owns approvals, commercial commitments, and policy judgment. | No `serviceHandoff` field on the research record; no route-local service link is rendered. |

## Release checklist for each candidate

1. Add one `serviceHandoff` record to the specific research item, with route-local copy written for that reader question.
2. Keep `datePublished` unchanged and add a post-specific modified value before the content edit is released.
3. Verify the generated research article has its expected H1, canonical URL, Article dates, and the exact service href inside the article body.
4. Confirm the destination service route has the expected H1, canonical URL, and Philippines `areaServed` schema.
5. Parse the generated sitemap for both canonical route entries. This repository intentionally emits no `<lastmod>` values; record that contract rather than inventing date parity.
6. Push only after the repository gates pass. The site runbook permits a validated GitHub push and prohibits direct deployment activity; public verification is required only when a rendered route changes.
