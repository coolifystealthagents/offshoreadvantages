# October 5 corrective validation

Production remains frozen at `9a4bdbc3b8b8e0e88d7b2d424b14d6c91d1809bb`. This report describes a local correction only. The configured site timezone is UTC. The `2026-10-05` publication date passed local rendering checks but must be reconciled to the actual first-publication date immediately before any authorized push.

## Inventory and originality

The routed inventory is exactly 12 Blog and 5 Research articles. The seven rejected Blog routes are excluded and replaced by the seven corrective routes below. Blog body lengths are 904 to 1,273 words; Research body lengths are 1,221 to 1,505 words. No exact or near-repeated substantive sentence or paragraph was found. Maximum pairwise five-word-shingle Jaccard is 0.0022 for Blog and 0.002019 for Research.

Each nearest-prior comparison was reviewed for topic, argument, worked example, and reader decision:

| Article | Nearest prior article | Decision |
|---|---|---|
| offshore-kpi-definition-change-control | offshore-operations-change-control-record | Accept: metric-definition versioning and denominator restatement, not general change evidence; worked case is a response-time KPI; reader decides whether a definition change preserves comparability. |
| offshore-inventory-reorder-exception-review | offshore-operations-exception-queue-triage | Accept: purchasing thresholds and stock exposure, not a generic exception queue; worked case is a reorder crossing lead-time and stock-cover limits; reader decides buy, defer, or escalate. |
| philippines-executive-inbox-delegation-rules | philippines-shared-inbox-triage-controls | Accept: executive authority boundaries and delegate permissions, not shared-inbox deduplication; worked case is a sensitive executive request; reader decides which messages may be delegated. |
| philippines-crm-lead-ownership-transfer-workflow | offshore-real-estate-lead-coordination | Accept: auditable CRM ownership transfer across queues, not industry lead coordination; worked case is a lead reassigned during absence; reader decides when custody has validly transferred. |
| offshore-customer-support-quality-calibration-session | philippines-offshore-call-quality-calibration | Accept: facilitator-led evidence calibration across channels, not call-score coaching; worked case compares reviewers on one ambiguous support interaction; reader decides how to resolve rubric disagreement. |
| philippines-deceased-customer-account-intake | philippines-customer-support-identity-verification-checklist | Accept replacement: bereavement intake, authority evidence, privacy, and service holds, not ordinary customer authentication; worked case separates notification from account authority; reader decides what can proceed before authority is proven. |
| offshore-preorder-deposit-release-reconciliation | philippines-returns-refund-reconciliation | Accept replacement: preorder liability release at shipment or cancellation, not post-sale refund matching; worked case splits a partially fulfilled preorder; reader decides when each deposit amount becomes releasable. |
| philippines-supplier-sanctions-screening-handoff | offshore-operations-supplier-onboarding-readiness-review | Accept replacement: sanctions name-match disposition and escalation custody, not general onboarding readiness; worked case is an ambiguous alias match; reader decides clear, hold, or escalate. |
| offshore-corporate-annual-filing-evidence-calendar | offshore-admin-document-retention-map | Accept replacement: jurisdiction-specific filing triggers, evidence, and completion proof, not retention classification; worked case handles an entity whose due date depends on anniversary; reader decides whether the filing obligation is ready and closed. |
| philippines-merchant-processor-reserve-reconciliation | philippines-reporting-reconciliation-controls | Accept replacement: processor rolling reserves, releases, and withheld balances, not a general reporting reconciliation; worked case traces a reserve cohort across settlement periods; reader decides whether a variance is timing, fee, or unresolved withholding. |
| offshore-field-service-appointment-readiness-handoff | philippines-offshore-patient-appointment-intake | Accept replacement: technician, parts, access, and site-readiness handoff, not patient intake; worked case blocks dispatch when site access is unconfirmed; reader decides ready, conditional, or reschedule. |
| philippines-board-conflict-disclosure-routing | philippines-executive-assistant-briefing-pack | Accept replacement: confidential conflict disclosure routing and recusal evidence, not meeting briefing; worked case isolates a director's declared interest; reader decides who may receive, assess, and record the disclosure. |
| supplier-scorecard-evidence-reliability-research | philippines-offshore-supplier-record-reconciliation | Accept: research tests evidence reliability, denominators, and reviewer agreement, not supplier master reconciliation; example is a bidirectional scorecard trace; reader decides whether findings are decision-grade. |
| customer-commitment-register-accuracy-research | customer-service escalation content | Accept: research tests completeness and semantic accuracy of promises across systems, not escalation operations; example is an amended delivery commitment; reader decides whether the register can support follow-through. |
| financial-close-checklist-dependency-integrity-research | philippines-month-end-close-handoff-board | Accept: research evaluates dependency-graph integrity and false completion, not operating a close handoff board; example reconstructs predecessor evidence; reader decides whether checklist status is trustworthy. |
| campaign-utm-attribution-change-evidence-research | marketing reporting content | Accept: research isolates attribution-rule and UTM-definition changes, not campaign production; example compares pre/post rule populations; reader decides whether performance movement is operational or methodological. |
| policy-exception-expiry-renewal-controls-research | offshore-operations-exception-taxonomy | Accept: research tests expiry, renewal authorization, and residual access after exceptions, not classifying exception types; example follows an expired exception through downstream controls; reader decides whether renewal governance is effective. |

## Render and route receipts

All source paragraphs appeared in order in the generated HTML and the normalized source/render hashes matched:

| Route | Ordered body SHA-256 |
|---|---|
| /blog/offshore-kpi-definition-change-control | 115d472a8da6a25ee88afe95494d14efb7df8a731ef0f6096d495c46f4ac63ad |
| /blog/offshore-inventory-reorder-exception-review | fbdf6fdc05633c1725ca75b1a14d93c28d38d67cd290e58a16fbe21a7f6698a1 |
| /blog/philippines-executive-inbox-delegation-rules | 0e01d8719985a4e090576641f771e36fa0b0537d3b5996f79aa43eb6e832d28a |
| /blog/philippines-crm-lead-ownership-transfer-workflow | 89f2006a9abf479c8aef8a822c0f090e8c42997e7de91e7745965762f7917a4d |
| /blog/offshore-customer-support-quality-calibration-session | 64de617f556ac60f601b49e071a284e0b2d53ce64db93b856f50e1ab673e381a |
| /blog/philippines-deceased-customer-account-intake | 83eaa89132b894ac7bdff24c273333563668efd63920c6a8d4d6f57c10aac14e |
| /blog/offshore-preorder-deposit-release-reconciliation | d59dad589510460ca974e6691d071d8235b538956584b847cc3d449e432f3cb4 |
| /blog/philippines-supplier-sanctions-screening-handoff | 55c8287fca9b1653880c8ea4a6a62bd7a610aabe3efb9d10a0e9375b5662aae3 |
| /blog/offshore-corporate-annual-filing-evidence-calendar | ba6966767d22e63c3ed4eb2607ba1335f1907704862d53b2e84111cbef5d8fff |
| /blog/philippines-merchant-processor-reserve-reconciliation | ab71f648b1d94cc3cf08f9f326be7872a28bfc740cf452369e5f0b009adc70bb |
| /blog/offshore-field-service-appointment-readiness-handoff | 8e296c43a5a3af5d885b65a20e119cd2310d6bc0edfed148bbfe814bbd7cf760 |
| /blog/philippines-board-conflict-disclosure-routing | c0e8919673a6d58c8aacdb831345aaf771bf728d3fecb96bfdfdcaf2177c8a5d |
| /research/supplier-scorecard-evidence-reliability-research | 47ed57679435ecd5f439274afbb54f5c9eae04fee539ae9ab3b06c3626e74262 |
| /research/customer-commitment-register-accuracy-research | b3cf0c5a3b1db216d8e879aefa143a3da265e2671c2bd2625b1bbf861274d87e |
| /research/financial-close-checklist-dependency-integrity-research | c75af0240a1621de9dac621626ddddb39be1eefb25fa87fe8dee5e0fa00cfc4d |
| /research/campaign-utm-attribution-change-evidence-research | 2c81c0a8de0b79de141b67200a172d9740ea980adc3cb151b79309ce21867e5d |
| /research/policy-exception-expiry-renewal-controls-research | 809389eb06d7626d51e4246966417f692fe8acae13d0b05a1ac8212e7e47ab0f |

Every route and contextual internal destination returned HTTP 200 from the clean local production server. Blog and Research indexes and sitemap returned 200. Every rendered title, canonical, datePublished/schema date, image reference, and sitemap entry passed. The Blog JPEG returned `image/jpeg`, had signature `ffd8ffe0`, and decoded at 1600 by 1067. The Research SVG returned `image/svg+xml`, decoded with dimensions 1200 by 630 and viewBox `0 0 1200 630`.

All 26 distinct authoritative destinations returned HTTP 200 after redirects. The moved OFAC search citation was corrected to `https://sanctionssearch.ofac.treas.gov/`; it and the OFAC FAQ both returned 200. GAO Green Book and both FTC Research citations returned 200.

## Build receipts

- Locked install: `npm ci --include=dev`, 29 packages, clean.
- Full audit: zero vulnerabilities.
- TypeScript: `tsc --noEmit`, pass.
- Regression tests: 3 of 3 pass.
- Clean production build: pass, 710 static pages generated.
- Blog, Research, and combined validators: pass.
- Diff whitespace validation: pass.

