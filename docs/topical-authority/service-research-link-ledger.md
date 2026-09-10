# Service-led research link ledger

Updated: 2026-09-07

This ledger maps existing research intent to existing Philippines-based service routes. It distinguishes a locally rendered handoff from a candidate that is still absent. Add an absent candidate through the `serviceHandoff` field in `ResearchPost`, then follow the repository build and public-verification workflow.

| Priority | Research route and reader question | Existing service route | Why the handoff fits | Required copy boundary | Current route-local state |
| --- | --- | --- | --- | --- | --- |
| Delivered | `/research/philippines-offshore-work-queue-signal-integrity` — Can the queue show its real state and next allowed action? | `/services/shared-services-administration` | The research explains role-safe queue states, inputs, ownership, and handoffs. Shared Services Administration is the closest existing service for putting that routine into a defined role. | The role can record, classify, and route work. The client keeps policy, payment, customer-commitment, and exception decisions. | Rendered once in the route-local main through `serviceHandoff`; source commit `51150bb1afcbcc5f60b9809a10da554fb043af58`. Do not add a duplicate. |
| Delivered | `/research/philippines-offshore-manager-review-sampling-bias` — How can a manager sample work without confusing case conditions with quality? | `/services/back-office-quality-review` | The research covers review samples, reviewer calibration, case mix, and evidence. Back-Office Quality Review gives a relevant next step for leaders designing a review lane. | Sampling informs review and coaching. It does not authorize an offshore role to make employment, policy, access, or risk decisions. | Rendered once in the route-local main through `serviceHandoff`; source commit `c642d86045081832c5dd41fb1715b3454a39dc67`. Do not add a duplicate. |
| Delivered | `/research/offshore-operations-approval-latency-decomposition` — Which part of approval delay can the client change? | `/services/project-coordination-support` | The research separates preparation, owner wait, clarification, and rework. Project Coordination Support is the relevant existing service for maintaining decision records and handoffs across those dependencies. | The role can prepare records, track dependencies, and ask bounded questions. The client owns approvals, commercial commitments, and policy judgment. | Rendered once in the route-local main through `serviceHandoff`; source commit `4b2203204dd1721ef389daca1953428c67782768`. Publicly verified on apex and www on 2026-09-09. Do not add a duplicate. |
| Delivered locally | `/research/philippines-offshore-policy-exception-aging-analysis` — How long do correctly escalated policy exceptions wait for an owner? | `/services/project-coordination-support` | The research creates a decision record for the owner queue, reminders, pauses, and resolution. Project Coordination Support is the closest current service for keeping that follow-up lane reviewable. | The role can maintain the record, send approved reminders, and surface the next review. The client keeps policy interpretation, risk acceptance, and the final decision. | Rendered once in the route-local main through `serviceHandoff`; source commit `ed7f620f5e9cf935025db38910352b9233046d4d`. Public proof is unavailable because apex, www, and both sitemap endpoints returned HTTP 403 on 2026-09-10. Do not add a duplicate. |

## Release checklist for each candidate

1. Add one `serviceHandoff` record to the specific research item, with route-local copy written for that reader question.
2. Keep `datePublished` unchanged and add a post-specific modified value before the content edit is released.
3. Verify the generated research article has its expected H1, canonical URL, Article dates, and the exact service href inside the article body.
4. Confirm the destination service route has the expected H1, canonical URL, and Philippines `areaServed` schema.
5. Parse the generated sitemap for both canonical route entries. This repository intentionally emits no `<lastmod>` values; record that contract rather than inventing date parity.
6. Push only after the repository gates pass. The site runbook permits a validated GitHub push and prohibits direct deployment activity; public verification is required only when a rendered route changes.

## Release status — 2026-09-08

- Rendered source: `4b2203204dd1721ef389daca1953428c67782768` added the approval-latency handoff and passed lint, routine validation, the focused source/artifact validator, the production build, and the existing repair validator.
- Local artifact: the route-local main has one `Plan a project coordination handoff` link to `/services/project-coordination-support`; the emitted H1 and canonical are correct; Article and Open Graph modified dates are `2026-09-08`; the source and destination are in the generated sitemap. This sitemap intentionally has no `<lastmod>` values.
- Public evidence: cache-busted apex and www each returned `200 text/html` with the expected H1 and canonical, but neither route-local main contained the marker or service href and neither response had the `2026-09-08` modified date. The canonical sitemap returned `200 application/xml` and includes the route.
- Deployment policy: this repository uses the validated GitHub-push path and prohibits direct deployment activity. Classification: `deployment_pending_public_verification / public_stale`.
- Preserve rendered-source commit `4b2203204dd1721ef389daca1953428c67782768`; this status-only record does not change the reader-facing route.

## Release status — 2026-09-10

- Rendered source: `ed7f620f5e9cf935025db38910352b9233046d4d` added one route-local policy-exception handoff to Project Coordination Support. Lint, content-routine validation, focused source and emitted-artifact validation, the production build, and the existing repair and approval-latency validators passed.
- Local artifact: the route-local main has the marker `Set up a policy-exception follow-up lane` and one `/services/project-coordination-support` href. The emitted H1 and canonical are correct; Article and Open Graph modified dates are `2026-09-10`; the source and destination appear once in the generated sitemap. This sitemap intentionally has no `<lastmod>` values.
- Public evidence: cache-busted apex and www research-route probes and both sitemap probes each returned HTTP `403`; no denied response body was interpreted as route or sitemap evidence. Classification: `deployment_pending_public_verification / public_unavailable`.
- Deployment policy: this repository uses the validated GitHub-push path and prohibits direct deployment activity. No deployment target was inferred or triggered.
- Preserve rendered-source commit `ed7f620f5e9cf935025db38910352b9233046d4d`; this status-only record does not change the reader-facing route.
