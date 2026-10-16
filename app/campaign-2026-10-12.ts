const published = '2026-10-12';

type BlogSpec = {
  slug: string;
  title: string;
  excerpt: string;
  service: string;
  records: string;
  boundary: string;
  procedure: string;
  exception: string;
  handoff: string;
  verification: string;
  measure: string;
  scenario: string;
};

const blogSpecs: BlogSpec[] = [
  {
    slug: 'offshore-benefits-enrollment-change-intake',
    title: 'Offshore Benefits Enrollment Change Intake',
    excerpt: 'A controlled intake design for collecting employee benefit-change evidence without letting preparation work become eligibility judgment.',
    service: 'HR administration support',
    records: 'the employee identifier, requested plan action, qualifying-event category, event date, submission deadline, required evidence, benefit platform record, and named plan administrator',
    boundary: 'An offshore coordinator may check completeness, label documents, update an intake state, and prepare a question. The employer or plan administrator retains eligibility decisions, interpretation of plan terms, exception approval, and final enrollment release.',
    procedure: 'Open one case for each employee request and preserve the original submission. Compare the request with the current plan checklist, record each missing item separately, and send a neutral deficiency notice that does not predict eligibility. When documents arrive, retain their receipt time and link them to the same case rather than opening parallel email threads.',
    exception: 'Stop when dates conflict, the employee identity is uncertain, a document contains unexpected medical detail, the request falls outside the published window, or the platform would require an irreversible election. Route a bounded question to the plan owner and keep the case in evidence-pending status.',
    handoff: 'The decision packet should show the requested change, timeline, checklist result, evidence locations, unresolved discrepancy, deadline, and exact administrator decision needed. Avoid copying sensitive attachments into chat; give the owner controlled links and the minimum facts needed to decide.',
    verification: 'After the administrator acts, compare the authorized decision with the platform confirmation, effective date, deduction instruction, and employee notice. Record who verified each destination and reopen the case if payroll or carrier output differs from the approved action.',
    measure: 'Track complete-at-first-review rate, missing-item categories, administrator wait time, returned decisions, correction rate, and verified downstream completion. Separate coordinator handling time from time spent waiting for the employee, plan owner, carrier, or system.',
    scenario: 'A marriage-related request arrives with an event date but no dependent document. The coordinator records the request, issues the approved missing-evidence notice, and asks the plan administrator whether the received date preserves the deadline. No enrollment is entered until that owner answers.',
  },
  {
    slug: 'philippines-sales-proposal-version-control',
    title: 'Philippines Sales Proposal Version Control',
    excerpt: 'A versioning workflow that keeps approved pricing, scope, legal language, and customer-facing files aligned.',
    service: 'revenue operations support',
    records: 'the opportunity ID, customer legal name, proposal owner, pricing source, scope version, approval ticket, legal clause set, file checksum, expiration date, and delivery event',
    boundary: 'A Philippines-based sales coordinator may assemble approved components and run comparison checks. Sales leadership owns commercial concessions, finance owns pricing exceptions, legal owns clause changes, and the account owner approves what is sent.',
    procedure: 'Create the proposal from the controlled template and name the working file with the opportunity and revision number. Pull quantities and terms from cited systems, lock approved sections, and create a difference report whenever a reviewer returns a revision. Superseded PDFs remain marked as withdrawn so they cannot be mistaken for the customer copy.',
    exception: 'Pause delivery when the CRM amount differs from the pricing workbook, a clause was pasted from another deal, approval is older than the revision, the customer entity changed, or the expiration date is missing. A near meeting does not authorize the coordinator to choose the more favorable version.',
    handoff: 'Give the account owner a release note containing the revision history, material changes, active approvals, unresolved comments, delivery address, and exact attachment hash. This lets the owner confirm the customer receives the same file that reviewers approved.',
    verification: 'After release, store the transmitted file and delivery timestamp, then reconcile the final proposal with the CRM amount and approval record. If the customer counters, begin a new revision instead of editing the released document in place.',
    measure: 'Report proposals released, revisions per proposal, stale-approval catches, source mismatches, withdrawn-file incidents, approval latency, and customer-copy reconciliation. Do not treat fewer revisions as success when corrections are being hidden outside the record.',
    scenario: 'A customer asks for a different payment schedule after finance approval. The coordinator creates the next revision, highlights the changed schedule, and routes only that commercial decision back to finance before the account owner sends anything.',
  },
  {
    slug: 'offshore-customer-credit-memo-request-packet',
    title: 'Offshore Customer Credit Memo Request Packet',
    excerpt: 'A finance-support packet for documenting disputed charges while keeping accounting approval with the client.',
    service: 'finance operations support',
    records: 'the customer and invoice identifiers, disputed line, contract reference, shipment or service evidence, tax treatment, prior adjustments, requested reason code, amount, currency, approver, and posting period',
    boundary: 'The offshore preparer can gather and reconcile evidence, calculate a proposed amount from approved rules, and draft the request. The controller or delegated finance owner decides whether a credit is valid, which ledger period is used, and how tax is treated.',
    procedure: 'Link the request to the original invoice and preserve the customer message. Recalculate the disputed line from quantity, rate, discount, tax, and prior credits, citing every source. Use a checklist for contract entitlement, fulfillment evidence, duplicate requests, and open cash applications before asking for approval.',
    exception: 'Escalate mismatched currencies, unidentified payments, credits that exceed the invoiced balance, disputes involving legal interpretation, changed bank details, or a request to backdate the posting. Keep the account from being silently netted while the owner reviews the facts.',
    handoff: 'The packet should distinguish customer allegation, verified fact, preparer calculation, proposed reason code, accounting consequence, and decision requested. Include the original invoice and evidence links but redact payment credentials and unrelated customer data.',
    verification: 'Match the posted credit memo to the approved customer, amount, currency, tax, reason, and period. Confirm the receivable ledger, customer statement, dispute queue, and customer communication all reflect the same disposition.',
    measure: 'Track packets complete at submission, duplicate requests caught, amount corrections, approval wait time, posting mismatches, unapplied-credit aging, and reopened disputes. Analyze by root cause rather than ranking preparers on raw closure speed.',
    scenario: 'A customer disputes a service fee after a partial cancellation. The preparer traces the contract date and cancellation record, calculates the disputed portion, and asks the controller to decide the entitlement and posting period before any adjustment is entered.',
  },
  {
    slug: 'philippines-field-service-parts-request-coordination',
    title: 'Philippines Field Service Parts Request Coordination',
    excerpt: 'A coordination playbook for matching technician requests, equipment identity, stock, shipment, and return evidence.',
    service: 'operations support',
    records: 'the service order, equipment serial number, diagnosed symptom, requested part, compatibility source, urgency, stock location, ship-to site, technician, warranty state, and return-material authorization',
    boundary: 'A Philippines coordinator may validate identifiers, check approved catalogs, reserve stock under documented rules, and arrange a shipment after authorization. A technician or engineering owner confirms diagnosis and compatibility; inventory and warranty owners approve exceptions.',
    procedure: 'Start from the service order rather than a free-form message. Confirm the installed asset and approved parts list, then record stock status, cut-off time, carrier option, destination contact, and whether the removed part must return. Keep substitute-part suggestions separate from authorized selections.',
    exception: 'Stop for an unknown serial number, safety-related failure, conflicting compatibility records, unavailable stock, controlled component, changed delivery address, or a request to cannibalize another job. Route the evidence to the technical or inventory owner without presenting a guess as a recommendation.',
    handoff: 'The release note should identify the approved part, quantity, asset, work order, ship-to address, service window, tracking owner, and return obligation. The technician receives operational facts; commercial prices or unrelated customer details remain restricted.',
    verification: 'Confirm carrier acceptance, delivery, technician receipt, installed-part record, removed-part disposition, and inventory movement. A delivered package is not closure if the wrong asset record remains open or a warranty return has no owner.',
    measure: 'Measure first-pass identifier completeness, compatibility escalations, cut-off misses, wrong-part prevention, delivery exceptions, unreturned components, inventory reconciliation, and service-order closure after installation.',
    scenario: 'A technician requests a controller board using a photo but omits the serial number. The coordinator holds the request, links the asset record, and asks the technician to confirm the identifier before inventory reserves the approved compatible part.',
  },
  {
    slug: 'offshore-legal-hold-notice-acknowledgement-tracker',
    title: 'Offshore Legal Hold Notice Acknowledgement Tracker',
    excerpt: 'An administrative tracker for delivery, acknowledgement, reminders, and exceptions without interpreting legal scope.',
    service: 'shared services administration',
    records: 'the matter identifier, counsel-approved recipient list, notice version, delivery channel, sent time, acknowledgement state, reminder schedule, departure or leave status, exception owner, and preservation-system link',
    boundary: 'The offshore administrator may send counsel-approved text, maintain recipient status, issue scheduled reminders, and prepare exception reports. Counsel decides scope, recipients, preservation duties, release timing, and responses to substantive questions.',
    procedure: 'Load the approved recipient list from a controlled source and freeze the notice version before sending. Record delivery results separately from acknowledgements, reconcile bounced messages and duplicate identities, and retain the exact notice each person received. Never edit counsel language to improve response rates.',
    exception: 'Escalate a recipient who left the company, is on extended leave, uses an inaccessible channel, disputes inclusion, reports missing data, or asks what must be preserved. Do not answer the legal question or remove the person from the population without counsel direction.',
    handoff: 'The exception report should show recipient identity, organizational relationship, notice version, delivery attempts, acknowledgement state, reported issue, and precise counsel decision requested. Use matter-controlled storage instead of a general operations folder.',
    verification: 'Reconcile the tracker to the approved population and preservation platform. Confirm that additions, removals, reminders, and releases have attributable counsel instructions and that the final report preserves unresolved exceptions.',
    measure: 'Track delivery success, acknowledgement aging, bounce resolution, population changes, counsel wait time, reminder effectiveness, and unresolved exceptions. Do not publish names or matter details in a general performance dashboard.',
    scenario: 'A departing employee appears on the approved list but their mailbox is disabled. The administrator records the failed delivery and departure status, then asks counsel and IT for the authorized preservation and contact path rather than marking the person complete.',
  },
  {
    slug: 'philippines-webinar-registration-reconciliation',
    title: 'Philippines Webinar Registration Reconciliation',
    excerpt: 'A marketing-operations process for reconciling consent, registration, attendance, and follow-up eligibility.',
    service: 'marketing operations support',
    records: 'the campaign ID, registration source, attendee email, consent fields, suppression state, event platform ID, attendance duration, questions submitted, CRM contact, follow-up segment, and import result',
    boundary: 'A Philippines coordinator may normalize approved fields, match records, apply documented segmentation rules, and prepare exceptions. Marketing and privacy owners define lawful contact rules, suppression handling, scoring, and any customer-facing promise.',
    procedure: 'Freeze exports from the form, webinar platform, CRM, and suppression service with retrieval times. Match on approved identifiers, retain unmatched records, and keep attendance evidence separate from marketing permission. Apply the current field map and record every rejected import row.',
    exception: 'Hold records with conflicting consent, shared addresses, role accounts, missing source attribution, active suppression, unexpected sensitive questions, or a mismatch between attendee and registrant. Do not infer permission from attendance or manually bypass an import rule.',
    handoff: 'Provide campaign owners with counts that reconcile from registration through eligible follow-up, plus an exception file showing the source conflict and required decision. Questions containing personal detail should move to the approved restricted channel.',
    verification: 'Sample contacts in the CRM and automation platform after import. Confirm source, consent, attendance, segment, owner, and suppression behavior, then reconcile totals back to the frozen inputs and rejected rows.',
    measure: 'Report match rate, unmatched causes, suppression catches, duplicate merges, import failures, segment corrections, and eligible-follow-up totals with explicit denominators. Avoid presenting registration count as attendance or sales impact.',
    scenario: 'A registrant attends using a colleague’s forwarded link. The coordinator preserves both identifiers, avoids merging on name alone, and routes the ownership question to marketing before any follow-up sequence begins.',
  },
  {
    slug: 'offshore-executive-expense-preapproval-log',
    title: 'Offshore Executive Expense Preapproval Log',
    excerpt: 'A transparent log for proposed travel and business spend that preserves approval authority and audit evidence.',
    service: 'executive administration support',
    records: 'the requester, business purpose, vendor, estimated amount, currency, cost center, policy category, attendee or traveler, quote date, approval threshold, approver, decision, and expiration',
    boundary: 'The offshore assistant may collect quotes, compare them with published policy, prepare the request, and record an approval. The budget owner authorizes spend; finance interprets policy and tax treatment; the traveler accepts itinerary constraints.',
    procedure: 'Open the log before booking or purchase and attach current quotes with terms and cancellation conditions. Show policy alignment and differences without hiding inconvenient options. Record the approver response against the specific amount and scope so a later price change cannot inherit stale authority.',
    exception: 'Pause when the vendor changes, price exceeds tolerance, personal travel is mixed in, attendees are unclear, payment instructions are unverified, the approver may have a conflict, or a booking is nonrefundable. Urgency belongs in the request but does not substitute for authority.',
    handoff: 'The approval card should present the business purpose, options, total exposure, policy variance, deadline, cancellation risk, and requested decision. Keep passport, card, and loyalty details out of the general log.',
    verification: 'Before purchase, recheck price, scope, traveler, dates, approver, and approval validity. After purchase, link the receipt and confirmation, then flag differences for finance rather than silently rewriting the original estimate.',
    measure: 'Track requests complete at intake, quote refreshes, policy questions, approval time, expired decisions, post-approval price changes, booking corrections, and receipt attachment. Savings claims require a defined comparison, not the cheapest unused quote.',
    scenario: 'An airline fare rises after approval and crosses the documented tolerance. The assistant refreshes the comparison and returns the difference to the budget owner instead of treating the earlier approval as unlimited.',
  },
  {
    slug: 'philippines-subscription-usage-report-preparation',
    title: 'Philippines Subscription Usage Report Preparation',
    excerpt: 'A reporting workflow that separates source extraction, identity matching, usage definitions, and owner decisions.',
    service: 'reporting and QA support',
    records: 'the subscription account, contract period, licensed quantity, active-user definition, usage window, product events, identity map, excluded accounts, renewal date, unit price, and report owner',
    boundary: 'A Philippines analyst may extract approved fields, apply the documented metric, reconcile identities, and prepare scenarios. Product owners define usage events, finance owns commercial calculations, and account owners decide customer or renewal actions.',
    procedure: 'Freeze contract and event extracts, label their timezones, and retain the query or report version. Build an identity bridge for users, service accounts, test accounts, and merged profiles. Calculate each metric exactly as defined and show exclusions rather than deleting inconvenient records.',
    exception: 'Escalate missing event periods, changed metric definitions, unknown account merges, negative quantities, late contract amendments, test traffic that cannot be isolated, or requests to label low activity as churn. Keep source limitations next to the result.',
    handoff: 'The report should pair each chart with definition, population, observation window, exclusions, source timestamp, and decision owner. Deliver a separate exception appendix so the headline number remains reproducible.',
    verification: 'Re-run a sample from raw events to the reported account total, compare licensed quantities with the contract, and check that dashboard filters reproduce the exported population. Record differences and the owner-approved correction.',
    measure: 'Monitor source-arrival completeness, identity-match rate, excluded-account reasons, query changes, reviewer agreement, corrected totals, and days from period close to verified report. Avoid unsupported forecasts from a single usage window.',
    scenario: 'A customer has duplicate user profiles after an identity migration. The analyst shows both records, documents the proposed bridge, and asks the product data owner to approve the merge rule before calculating active seats.',
  },
  {
    slug: 'offshore-recruiting-reference-check-coordination',
    title: 'Offshore Recruiting Reference Check Coordination',
    excerpt: 'A candidate-respectful coordination process for consent, scheduling, approved questions, and attributable results.',
    service: 'recruiting administration support',
    records: 'the requisition, candidate consent, referee identity and relationship, approved question set, contact attempts, response channel, completion state, restriction, recruiter, and hiring decision owner',
    boundary: 'The offshore recruiting coordinator may confirm consent, schedule contacts, use the approved script, and record attributable responses. Recruiters and hiring managers evaluate evidence; legal or HR owners decide restricted questions, disputes, and local requirements.',
    procedure: 'Confirm the candidate authorized each referee and the relevant contact details. Send a purpose-limited invitation, verify the respondent before recording answers, and keep opinion distinct from dates or role facts. Use the same approved core questions for comparable roles while allowing documented follow-up.',
    exception: 'Stop if the referee identity cannot be verified, the respondent discloses sensitive information outside scope, the candidate withdraws consent, the employer allows only written verification, or a response raises a legal or safety concern. Route the issue without diagnosing credibility.',
    handoff: 'The recruiter receives a structured record showing attempts, verified relationship, questions asked, attributable answers, limitations, and unresolved follow-up. Do not circulate private contact information or unsupported character labels.',
    verification: 'Confirm the completed record belongs to the correct candidate and requisition, consent remained active, required questions were covered, and any limitation is visible to the decision owner. Correct transcription errors while preserving the original response.',
    measure: 'Track consent completeness, verified-contact rate, attempts to response, scheduling delays, restricted-response incidents, recruiter returns, and completed checks by stage. Do not turn response speed into a proxy for candidate quality.',
    scenario: 'A referee replies from an address different from the one supplied by the candidate. The coordinator verifies the relationship through the approved route and records the method before using the response.',
  },
  {
    slug: 'philippines-facilities-badge-return-tracker',
    title: 'Philippines Facilities Badge Return Tracker',
    excerpt: 'A physical-access closeout tracker for employees, contractors, visitors, and remote equipment returns.',
    service: 'shared services administration',
    records: 'the person, sponsor, badge identifier, access zones, status-change date, final work time, return method, facility owner, identity-system ticket, equipment list, exception, and destruction or recovery evidence',
    boundary: 'A Philippines administrator may reconcile rosters, send approved return instructions, coordinate shipping, and update a tracker. Security owns access revocation and risk decisions; HR or vendor management confirms status; facilities validates recovery or destruction.',
    procedure: 'Reconcile the departure or transfer feed against badge and visitor systems each day. Open one closeout case per person, identify every credential and issued asset, and assign separate owners for digital disablement, physical recovery, and facility confirmation. Retain failed delivery and replacement-badge history.',
    exception: 'Escalate a missing badge, disputed departure date, after-hours access need, unknown credential, inaccessible location, lost shipment, or sponsor request to keep access active. Never extend physical access because an email chain lacks a decision.',
    handoff: 'The closeout record should show what was issued, what was disabled, what was returned, which evidence was checked, and which residual item has an owner. Limit address and identity details to the approved fulfillment system.',
    verification: 'Compare the final tracker with the badge system, sponsor roster, courier proof, recovered inventory, and destruction record. A shipping label is not proof of return, and a returned badge is not proof that system access ended.',
    measure: 'Track same-day disablement, recovered credentials, overdue returns, sponsor exceptions, lost shipments, unmatched roster entries, and time to verified closeout. Report high-risk zones separately from ordinary visitor badges.',
    scenario: 'A contractor finishes Friday but the sponsor requests weekend access. The administrator records the conflict and asks security for a time-bounded decision rather than changing the termination date in the tracker.',
  },
  {
    slug: 'offshore-content-embargo-release-check',
    title: 'Offshore Content Embargo Release Check',
    excerpt: 'A publishing control for release time, approved assets, destination pages, and rollback readiness.',
    service: 'marketing operations support',
    records: 'the campaign, content owner, approved copy, asset hashes, destination URLs, audience, embargo timestamp and timezone, legal approval, accessibility check, analytics tags, release operator, and rollback owner',
    boundary: 'The offshore publishing operator may stage approved material, run technical checks, and release it at the authorized time. Content, legal, brand, and communications owners approve substance, claims, audience, and embargo changes.',
    procedure: 'Create a release record that points to immutable approved copy and assets. Test links, metadata, accessibility basics, tracking, cache behavior, and scheduled timezone in preview. Compare the final staged version with the approval hash immediately before release.',
    exception: 'Hold release for a changed claim, missing approval, wrong timezone, broken destination, uncaptioned required media, stale price, leaked preview, or asset mismatch. Do not repair substantive copy in production without returning it to the owner.',
    handoff: 'The go-live note should state what will publish, where, when, to whom, under which approval, and who can pause or roll back. Include screenshots as convenience evidence but retain source versions and hashes.',
    verification: 'After release, inspect the public page, canonical metadata, primary links, media, analytics event, and audience delivery. Compare the live asset to the approved version and capture rollback or correction decisions.',
    measure: 'Track releases on authorized time, preflight defects, owner wait time, asset mismatches, rollback events, post-release corrections, broken links, and verified analytics. A release is not successful solely because the scheduler ran.',
    scenario: 'A launch scheduled in Eastern Time appears in the tool as UTC. The operator converts the approved timestamp, records both zones, and obtains confirmation before changing the scheduler rather than assuming the intended day.',
  },
  {
    slug: 'philippines-grant-reporting-document-chase',
    title: 'Philippines Grant Reporting Document Chase',
    excerpt: 'A document-control workflow for grant reporting inputs, certifications, deadlines, and unresolved evidence.',
    service: 'project coordination support',
    records: 'the award identifier, reporting period, funder checklist, responsible contributor, requested artifact, source system, due date, received version, certification requirement, reviewer, submission owner, and retention location',
    boundary: 'A Philippines coordinator may issue approved requests, track receipt, organize evidence, and prepare a completeness report. Program and finance owners attest accuracy; authorized officers certify; legal owners interpret award conditions.',
    procedure: 'Translate the funder checklist into an artifact register without changing its meaning. Name one contributor and reviewer per item, schedule reminders before the internal deadline, and retain source links and versions. Mark estimates and draft narratives clearly so they cannot enter the final packet unnoticed.',
    exception: 'Escalate missing source records, conflicting totals, expired certifications, changed award terms, unsupported outcomes, personally identifiable participant data, or a contributor who cannot attest the period. Never fabricate a placeholder to make the checklist appear complete.',
    handoff: 'The submission owner receives a reconciled checklist showing received, reviewed, missing, not applicable, and decision-required items. Each gap includes its impact, contributor, last request, safe interim treatment, and next decision date.',
    verification: 'Before submission, compare the assembled packet with the current funder checklist, approved financial report, certified narrative, and attachment list. After submission, retain the confirmation, exact files sent, correction requests, and final disposition.',
    measure: 'Track artifacts complete by internal deadline, reminder cycles, version replacements, reviewer returns, unsupported-claim catches, submission corrections, and retrieval of the final evidence set. Keep participant data out of general performance reporting.',
    scenario: 'A program total differs from the finance ledger two days before the internal deadline. The coordinator freezes both sources, documents the difference, and routes a reconciliation question to the program and finance owners instead of selecting the larger number.',
  },
];

const blogSections = (s: BlogSpec) => [
  { title: 'Define the record before assigning the work', body: `${s.scenario} This is a ${s.service} workflow, so the intake record must make the real object of work visible. Capture ${s.records}. A message that says “please handle this” is not a controlled intake. The record should let a backup operator identify the source, current state, deadline, and accountable owner without reconstructing a private conversation.` },
  { title: 'Keep preparation separate from judgment', body: `${s.boundary} Write that division into the procedure and the access profile. The offshore role should be rewarded for a complete, accurate packet and a timely controlled stop, not for making a decision that belongs to the client. Missing authority is itself an exception to expose, not permission to improvise.` },
  { title: 'Run the operating procedure', body: `${s.procedure} Use named accounts and source links, preserve receipt times and timezones, and avoid copying restricted data into a general queue. If a source can change after review, record its version or export time so the later reviewer knows exactly what supported the work.` },
  { title: 'Design the exception path first', body: `${s.exception} Every exception needs the affected item, evidence checked, immediate safeguard, named decision owner, exact question, and next review time. Broad labels such as “blocked” or “needs review” hide the work that has already been done and force the owner to ask for context again.` },
  { title: 'Hand off one decision-ready packet', body: `${s.handoff} Use explicit states such as evidence pending, owner decision pending, authorized for action, verification pending, corrected, or closed. If the owner changes, retain both identities, the transfer time, the active deadline, and acknowledgement by the new owner.` },
  { title: 'Verify the destination, not the checkbox', body: `${s.verification} Closure requires evidence at the destination that matters, not only a completed task status. Preserve the approver, action time, before-and-after state, dependent systems, communication, and residual risk. If new facts arrive, reopen the affected control rather than applying an old approval to a changed case.` },
  { title: 'Measure the mechanism fairly', body: `${s.measure} Review a balanced sample that includes ordinary, returned, escalated, corrected, and unresolved cases. Report denominators and observation windows. Managers should use the findings to improve source quality, role design, delegation, system access, and examples instead of treating every delay as an operator performance problem.` },
  { title: 'Put the guide into practice', body: `Published October 12, 2026. Test this procedure with one ordinary case, one missing source, one conflicting source, one absent owner, and one late change. Give the retained record to a backup reviewer and ask that person to reconstruct the scope, authority boundary, exception, decision, action, and result. Any step that requires memory or a private message belongs in the next revision.` },
];

const blogSources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'Governance, identification, protection, detection, response, and recovery context.' },
  { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Privacy risk and data-processing context.' },
  { name: 'US GAO Green Book', url: 'https://www.gao.gov/green-book', note: 'Control design, documentation, and monitoring context.' },
];

export const october12BlogPosts = blogSpecs.map((s) => ({
  slug: s.slug,
  title: s.title,
  excerpt: s.excerpt,
  minutes: 10,
  image: `/october-12-2026/${s.slug}.svg`,
  citations: blogSources.map((source) => source.url),
  published,
}));

export const october12BlogDetails = Object.fromEntries(blogSpecs.map((s, index) => [s.slug, {
  keyTakeaways: [
    `Build the ${s.title.toLowerCase()} around attributable source evidence.`,
    'Keep approval and judgment with the named client owner.',
    'Verify the authorized result in every affected destination before closure.',
  ],
  sections: blogSections(s),
  relatedArticles: blogSpecs.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map((item) => item.slug),
  internalLinks: [
    { label: 'Explore operations support', href: '/services/operations-support', note: 'Define the queue, access, owner, and review cadence.' },
    { label: 'Browse the research library', href: '/research', note: 'Use source-backed methods for testing offshore controls.' },
  ],
  banners: [
    { label: 'Role design', title: 'Turn the workflow into a bounded role brief', body: 'Bring the source systems, representative case, approval owner, exception path, and proof of completion.', href: '/contact-us', linkText: 'Plan the role' },
    { label: 'Pilot review', title: 'Test the handoff with real evidence', body: 'Run a small sample and repair gaps before the queue expands.', href: '/contact-us', linkText: 'Review the pilot' },
    { label: 'Next step', title: 'Build an offshore workflow that can be inspected', body: 'Define the work, permissions, owner decisions, and verification before launch.', href: '/contact-us', linkText: 'Discuss the workflow' },
  ],
  sources: blogSources,
}]));

type ResearchSpec = {
  slug: string;
  title: string;
  excerpt: string;
  modified?: string;
  question: string;
  population: string;
  unit: string;
  design: string;
  measures: string;
  analysis: string;
  threats: string;
  decision: string;
  pilot: string;
  sources: readonly { name: string; url: string }[];
  serviceHandoff?: { href: string; label: string; body: string };
};

const commonResearchSources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
  { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final' },
  { name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' },
  { name: 'US GAO Green Book', url: 'https://www.gao.gov/green-book' },
  { name: 'CISA Cybersecurity Performance Goals', url: 'https://www.cisa.gov/cyber-guidance/cybersecurity-performance-goals' },
  { name: 'International Labour Organization teleworking guide', url: 'https://www.ilo.org/publications/teleworking-during-covid-19-pandemic-and-beyond-practical-guide' },
  { name: 'Philippine Statistics Authority Labor Force Survey', url: 'https://psa.gov.ph/statistics/labor-force-survey' },
];

const researchSpecs: ResearchSpec[] = [
  {
    slug: 'offshore-supervisor-span-of-control-research',
    title: 'Offshore Supervisor Span of Control Research',
    excerpt: 'A workload-based method for testing how many distinct queues and decision dependencies a supervisor can review reliably.',
    question: 'At what combination of operators, queues, exception types, and client decision dependencies does supervisory review begin to lose timeliness or consistency?',
    population: 'Include every queue assigned to the supervisor during a fixed eight-week window: routine work, escalations, returns, absences, training samples, and unresolved items. Do not sample only completed work because the missing and aging populations carry the strongest capacity signal.',
    unit: 'The primary unit is a supervisor-review opportunity, defined as an item that required sampling, coaching, approval routing, escalation acknowledgement, or quality disposition. Preserve operator, queue, risk tier, arrival time, review due time, actual review, result, rework, and owner wait separately.',
    design: 'Stratify by queue and risk tier, then select a planned weekly sample before reading outcomes. Compare ordinary weeks with launches, absences, client policy changes, and demand peaks. Record scheduled supervisory hours and interruptions, but do not equate calendar availability with usable review capacity.',
    measures: 'Calculate review completion by due window, median and upper-quartile review delay, returned-packet rate, disagreement after secondary review, unresolved escalation age, coaching follow-through, and queues with no sampled work. Show counts and denominators for every rate.',
    analysis: 'Model capacity as a set of mechanisms rather than a universal headcount ratio. A supervisor with one stable queue may review more operators than a supervisor coordinating several clients, languages, tools, or regulated decisions. Compare like work and inspect threshold changes rather than forcing one benchmark onto every team.',
    threats: 'Selection can be biased if supervisors choose their easiest samples. Outcomes can also improve temporarily because people know the study is running. Policy changes, new hires, outages, and client response time confound the relationship, so retain those events and avoid causal claims from simple correlation.',
    decision: 'Use the result to adjust queue ownership, secondary reviewers, escalation coverage, protected review time, and launch sequencing. Do not use the study to justify hidden overtime or reduce review depth without a risk-owner decision.',
    pilot: 'Pilot with two supervisors and two contrasting queues. Have an independent reviewer rescore a planned subset, compare disagreements, and verify that every late or skipped review has a recorded mechanism rather than a retrospective excuse.',
    sources: [...commonResearchSources,
      { name: 'US Bureau of Labor Statistics, Administrative Services Managers', url: 'https://www.bls.gov/ooh/management/administrative-services-managers.htm' },
      { name: 'OECD Compendium of Productivity Indicators', url: 'https://www.oecd.org/en/publications/oecd-compendium-of-productivity-indicators-2024_b96cd88a-en.html' },
      { name: 'NIST Engineering Statistics Handbook', url: 'https://www.itl.nist.gov/div898/handbook/' },
    ],
  },
  {
    slug: 'offshore-evidence-retrieval-time-study',
    title: 'Offshore Evidence Retrieval Time Study',
    excerpt: 'A traceable study of how quickly an authorized reviewer can retrieve the source evidence behind completed offshore work.',
    modified: '2026-10-16',
    question: 'Can a reviewer who did not perform the task retrieve and understand the decisive evidence within the organization’s required review window?',
    population: 'Build a frozen population of completed, returned, corrected, reopened, and disputed items from several workflows. Include low-frequency exceptions and older records; a study limited to fresh routine work will overstate retrievability.',
    unit: 'The unit is one evidence request tied to a stable work-item identifier. Record request time, requester role, expected artifacts, systems searched, access needed, first relevant evidence, complete packet time, missing artifact, and final usability judgment.',
    design: 'Give trained reviewers only the retained record and standard access available to their role. Randomize item order and prevent the original operator from coaching the search. Run a second pass on a subset with a different reviewer to distinguish storage defects from individual familiarity.',
    measures: 'Report time to first relevant artifact, time to complete packet, percent complete within target, number of systems opened, inaccessible links, ambiguous versions, orphan attachments, and reviewer agreement about whether the evidence supports the recorded disposition.',
    analysis: 'Separate retrieval delay caused by poor naming, missing links, expired permissions, fragmented storage, ambiguous versions, unavailable systems, and unclear decision records. A fast search is not sufficient when it returns the wrong version; completeness and provenance remain co-primary outcomes.',
    threats: 'Reviewers may learn folder patterns during the study, while recently audited teams may temporarily improve filing. Access differences can dominate search time. Declare those conditions, use the same start rule, and avoid converting a small convenience sample into an enterprise benchmark.',
    decision: 'Use findings to repair retention maps, stable identifiers, naming rules, link durability, version controls, access roles, and closure checklists. Training is appropriate only when the repository and procedure already make the correct evidence available.',
    pilot: 'Start with thirty items across three workflows and two age bands. Require the reviewer to cite the source that proves scope, authority, action, and result. Repeat after repairs and retain both rounds rather than replacing the baseline.',
    sources: [...commonResearchSources,
      { name: 'US National Archives records management guidance', url: 'https://www.archives.gov/records-mgmt' },
      { name: 'CISA Logging Made Easy', url: 'https://www.cisa.gov/resources-tools/services/logging-made-easy' },
      { name: 'Federal Trade Commission data security guidance', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security' },
    ],
    serviceHandoff: {
      href: '/services/back-office-quality-review',
      label: 'Explore Back-Office Quality Review',
      body: 'Use Back-Office Quality Review to define the evidence list, access boundaries, review sample, and escalation path. The client still decides retention, access, correction, and any release of the record.',
    },
  },
  {
    slug: 'philippines-calendar-coverage-forecast-research',
    title: 'Philippines Calendar Coverage Forecast Research',
    excerpt: 'A demand-and-capacity protocol for testing whether planned overlap covers real queue arrivals, absences, and decision-owner availability.',
    question: 'How accurately does the planned Philippines coverage calendar predict periods when work can be accepted, completed, reviewed, and escalated without unsafe carryover?',
    population: 'Include every thirty-minute interval in a declared twelve-week window, including weekends, local and client holidays, training, planned leave, unplanned absence, outages, launches, and intervals with zero demand. Retain daylight-saving transitions explicitly.',
    unit: 'The unit is a coverage interval linked to arrivals, ready work, assigned operators, productive availability, reviewer coverage, client-owner availability, completions, carryover, and oldest open item. Keep staffing schedules separate from actual usable capacity.',
    design: 'Freeze the forecast before each week, then compare it with observed arrivals and available coverage. Segment by work type and priority. Use rolling back-tests so managers can see whether error comes from volume, handle effort, absence, schedule adherence, or unavailable approval owners.',
    measures: 'Calculate forecast error for arrivals and ready workload, uncovered intervals, overlap utilization, carryover age, owner-wait share, urgent work received without authority coverage, schedule changes, and the percentage of intervals where demand and decision capacity were both available.',
    analysis: 'Examine under-forecast and over-forecast separately. Excess scheduled capacity may be an intentional resilience margin, while repeated uncovered windows may reflect a wrong timezone conversion, missing holiday data, volatile arrivals, or approval dependency. Do not optimize to full utilization at the cost of recovery capacity.',
    threats: 'Ticket timestamps can reflect system routing rather than customer arrival, and status rules may hide ready work. Launches and outages create nonstationary demand. Document these changes and avoid attributing every mismatch to employee attendance.',
    decision: 'Use the result to change overlap windows, cross-training, backup reviewer coverage, holiday plans, queue cutoffs, and escalation expectations. Any extension of working hours requires an employment and wellbeing review by the responsible owner.',
    pilot: 'Back-test the last four complete weeks, then prospectively forecast four more. Review the largest errors with operators and owners, classify the mechanism, change one planning assumption at a time, and measure whether the next forecast improves.',
    sources: [...commonResearchSources,
      { name: 'US Department of Labor hours worked guidance', url: 'https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked' },
      { name: 'US Bureau of Labor Statistics productivity program', url: 'https://www.bls.gov/productivity/' },
      { name: 'NIST contingency planning guide', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final' },
    ],
  },
  {
    slug: 'offshore-role-expansion-control-study',
    title: 'Offshore Role Expansion Control Study',
    excerpt: 'A staged evaluation of whether new tasks, data, permissions, and decision dependencies can be added without weakening control.',
    question: 'Does a proposed expansion preserve task clarity, least privilege, review quality, and accountable decisions when an offshore role moves beyond its original pilot?',
    population: 'Include every proposed task addition during the study window, not only approved expansions. Retain rejected, deferred, rolled-back, and informally attempted work so the analysis can distinguish control behavior from final approval.',
    unit: 'The unit is one expansion request with task definition, business purpose, source systems, data classes, permissions, decision owner, representative cases, training evidence, pilot sample, acceptance criteria, approval, and rollback result.',
    design: 'Score readiness before granting new access, run a bounded sample in a non-destructive environment where possible, and require independent review for a planned subset. Compare results with the original role baseline and keep task performance separate from the manager’s commercial desire to expand quickly.',
    measures: 'Report requests complete at intake, permission changes, boundary escalations, reviewer agreement, error and rework, unsupported decisions prevented, rollback triggers, verified access removal, and time from request to attributable disposition.',
    analysis: 'Analyze whether failures arise from unclear acceptance criteria, missing examples, source quality, access design, workload interaction, reviewer capacity, or genuinely unsuitable work. An operator who stops at the documented boundary may demonstrate readiness even when the task does not complete.',
    threats: 'Managers may select easy pilot cases or provide extra coaching that will not exist in production. Short pilots miss rare exceptions and cumulative workload. Declare support given, include difficult cases, and avoid claims that the pilot proves long-term performance.',
    decision: 'Approve only the tested scope and permissions, with an owner, review date, exception path, and revocation step. Defer or reject expansions whose decision authority, data exposure, review capacity, or rollback path remains unclear.',
    pilot: 'Use five ordinary cases, two missing-source cases, two conflicting-source cases, and one urgent exception. Give the record to a backup reviewer, test permission removal after the sample, and document every assumption required to reproduce the result.',
    sources: [...commonResearchSources,
      { name: 'NIST least privilege guidance', url: 'https://csrc.nist.gov/glossary/term/least_privilege' },
      { name: 'CISA Identity and Access Management', url: 'https://www.cisa.gov/topics/cybersecurity-best-practices/identity-and-access-management' },
      { name: 'Federal Trade Commission Start with Security', url: 'https://www.ftc.gov/business-guidance/resources/start-security-guide-business' },
    ],
  },
  {
    slug: 'philippines-approval-packet-reading-time-research',
    title: 'Philippines Approval Packet Reading Time Research',
    excerpt: 'A study of whether evidence packets are concise enough to review without omitting the facts needed for an accountable decision.',
    question: 'How much reviewer time is required to reach an attributable decision, and which packet features reduce rereading without hiding uncertainty or risk?',
    population: 'Include approved, rejected, returned, expired, reassigned, and unanswered packets across several decision types. Preserve urgent and ordinary items, different reviewers, and packets created by experienced and newly trained Philippines coordinators.',
    unit: 'The unit is one reviewer encounter with packet version, item type, word and attachment counts, required decision, first-open time, active reading intervals, questions asked, source opens, disposition, confidence note, and later correction or reopening.',
    design: 'Freeze packet versions and assign a representative set to reviewers without creator coaching. Use screen or event timestamps only where policy permits and pair them with reviewer confirmation. Independently score completeness before examining reading time so a short but inadequate packet cannot appear efficient.',
    measures: 'Report active reading time distribution, time to first decision, questions per packet, source opens, returned-packet rate, reviewer agreement, correction rate, and completeness score. Segment by decision complexity instead of comparing a routine approval with a novel exception.',
    analysis: 'Test whether length, table structure, chronology, source linking, explicit question, exception count, and attachment design are associated with time or returns. Treat associations as diagnostic signals; reviewer familiarity and decision difficulty can explain the same pattern.',
    threats: 'Reviewers may skim because they know they are timed, while event logs can confuse idle time with reading. Packet creators may overfit to the scoring rubric. Use multiple evidence sources, disclose missing timing, and never rank individuals on a small sample.',
    decision: 'Revise packet templates only when changes preserve scope, source provenance, uncertainty, authority, and requested decision. Use layered summaries and linked evidence rather than deleting facts merely to reduce word count.',
    pilot: 'Select forty packets across four decision types and two reviewers. Conduct a second independent decision on a subset, compare disagreement and returns, then test a revised template prospectively before adopting it across the operation.',
    sources: [...commonResearchSources,
      { name: 'PlainLanguage.gov guidelines', url: 'https://www.plainlanguage.gov/guidelines/' },
      { name: 'Digital.gov plain language introduction', url: 'https://digital.gov/guides/plain-language' },
      { name: 'NIST human-centered cybersecurity program', url: 'https://www.nist.gov/programs-projects/human-centered-cybersecurity-program' },
    ],
  },
];

const researchSections = (s: ResearchSpec) => [
  { heading: 'Research question', body: `${s.question} Published October 12, 2026. The study evaluates an operating mechanism, not whether a nationality, vendor, or remote-work arrangement is inherently effective. The organization remains responsible for policy, employment, privacy, security, legal, financial, and customer decisions.` },
  { heading: 'Population and sampling frame', body: s.population },
  { heading: 'Unit of analysis and evidence schema', body: s.unit },
  { heading: 'Study design', body: s.design },
  { heading: 'Measures and calculations', body: s.measures },
  { heading: 'Analysis plan', body: s.analysis },
  { heading: 'Threats to validity', body: s.threats },
  { heading: 'Decision rule', body: s.decision },
  { heading: 'Pilot protocol', body: s.pilot },
  { heading: 'Interpretation limits', body: 'Results describe the declared population, systems, controls, and observation window. Missing data, changed definitions, owner delays, outages, and unusual events must remain visible. The study does not prove compliance, causation, future savings, employee quality, or suitability for another organization. Reproduce the method before transferring a threshold.' },
];

export const october12ResearchPosts = researchSpecs.map((s) => ({
  slug: s.slug,
  title: s.title,
  excerpt: s.excerpt,
  published,
  ...(s.modified ? { modified: s.modified } : {}),
  thumbnail: `/october-12-2026/${s.slug}.svg`,
  cluster: 'Workflow Design',
  stats: [
    'One frozen population and declared observation window',
    'At least one independent review subset',
    'Mechanism-level findings with explicit limitations',
  ],
  sections: researchSections(s),
  sources: s.sources,
  serviceHandoff: s.serviceHandoff ?? {
    href: '/contact-us',
    label: 'Turn the study into a bounded pilot',
    body: 'Bring the population definition, source systems, permissions, decision owners, sample plan, acceptance rule, and rollback condition to the role-design review.',
  },
}));

export const october12ManifestEntries = [
  ...october12BlogPosts.map((post) => ({ section: 'Blog' as const, ...post, thumbnail: post.image })),
  ...october12ResearchPosts.map((post) => ({ section: 'Research' as const, ...post })),
];
