export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
export type ResearchPost = { slug: string; title: string; excerpt: string; published: string; thumbnail: string; cluster: string; stats: readonly string[]; sections: readonly { heading: string; body: string }[]; sources: readonly { name: string; url: string }[] };

export const fleetServices: readonly FleetService[] = [
  { slug: 'shared-services-administration', title: 'Shared Services Administration', desc: 'Build a Philippines-based shared services administration workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'customer-experience-support', title: 'Customer Experience Support', desc: 'Build a Philippines-based customer experience support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'finance-operations-support', title: 'Finance Operations Support', desc: 'Build a Philippines-based finance operations support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'revenue-operations-support', title: 'Revenue Operations Support', desc: 'Build a Philippines-based revenue operations support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'procurement-administration', title: 'Procurement Administration', desc: 'Build a Philippines-based procurement administration workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'data-management-support', title: 'Data Management Support', desc: 'Build a Philippines-based data management support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'marketing-operations-support', title: 'Marketing Operations Support', desc: 'Build a Philippines-based marketing operations support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'technical-support-desk', title: 'Technical Support Desk', desc: 'Build a Philippines-based technical support desk workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'project-coordination-support', title: 'Project Coordination Support', desc: 'Build a Philippines-based project coordination support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'back-office-quality-review', title: 'Back-Office Quality Review', desc: 'Build a Philippines-based back-office quality review workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring offshore operations work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] }
];

const priorResearchPosts: readonly ResearchPost[] = [
  ['offshore-outsourcing-benefits-study','Offshore Outsourcing Benefits: A Decision Framework'],
  ['philippines-outsourcing-cost-study','Philippines Outsourcing Cost Planning: What to Compare'],
  ['offshore-handoff-reliability-study','Offshore Handoff Reliability: Where Context Gets Lost'],
  ['remote-team-access-control-study','Remote Team Access Control: A Practical Baseline'],
  ['offshore-support-quality-study','Offshore Support Quality: How to Make It Reviewable'],
  ['outsourcing-coverage-planning-study','Outsourcing Coverage Planning: Match Hours to Demand'],
  ['philippines-onboarding-study','Philippines Onboarding: What the First Week Should Prove'],
  ['offshore-process-documentation-study','Offshore Process Documentation: From Task to SOP'],
  ['outsourcing-review-sampling-study','Outsourcing Review Sampling: Evidence Without Noise'],
  ['offshore-publishing-qa-study','Offshore Publishing QA: A Repeatable Preflight']
].map(([slug, title]) => ({ slug, title, excerpt: 'Original research for leaders comparing offshore work, controls, handoffs, and review routines before launch.', published: '2026-08-07', thumbnail: '/philippines-team.jpg', cluster: 'Workflow Design', stats: ['Prior validated Research entry'], sections: [{ heading: 'Question and method', body: 'This earlier Research entry separates source-backed context from operating recommendations.' }, { heading: 'What the evidence supports', body: 'A reliable offshore workflow has a named owner, a defined queue, limited system access, written examples, and a review date.' }, { heading: 'Practical implication', body: 'Turn the finding into a short role brief with tasks, tools, approval limits, escalation rules, and a first-week sample.' }, { heading: 'Key takeaways', body: 'Keep customer promises, payments, legal judgment, and unusual exceptions with the client owner.' }, { heading: 'FAQs', body: 'Use the client owner for unusual or high-risk exceptions.' }], sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework' }, { name: 'International Labour Organization guidance', url: 'https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm' }] }));

const commonSources = [
  { name: 'PSA 2024 Annual Provincial Labor Market Statistics', url: 'https://psa.gov.ph/statistics/labor-force-survey/node/1684077703' },
  { name: 'PSA December 2024 Labor Force Survey', url: 'https://psa.gov.ph/statistics/labor-force-survey/node/1684066682' },
  { name: 'PSA 2024 Employment Rate Release', url: 'https://psa.gov.ph/statistics/labor-force-survey/press-release/node/1684077703' },
  { name: 'World Bank Philippines Digital Economy Report', url: 'https://documents1.worldbank.org/curated/en/796871601650398190/pdf/Philippines-Digital-Economy-Report-2020-A-Better-Normal-Under-COVID-19-Digitalizing-the-Philippine-Economy-Now.pdf' },
  { name: 'World Bank: Digital Technologies in the Philippines', url: 'https://www.worldbank.org/en/results/2021/01/14/building-a-better-normal-under-covid-19-harnessing-digital-technologies-in-the-philippines' },
  { name: 'ILO: Homeworking in the Philippines', url: 'https://researchrepository.ilo.org/esploro/outputs/995219318102676' },
  { name: 'NIST: Identity and Access Management for Small Business', url: 'https://www.nist.gov/video/identity-and-access-management-fundamentals-small-business' },
  { name: 'NIST: Multi-Factor Authentication', url: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/multi-factor-authentication' },
  { name: 'NIST SP 800-171 Rev. 3: Least Privilege', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html' },
  { name: 'NIST Small Business Cybersecurity Draft', url: 'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.50.ipd.pdf' }
];

// Reviewed, source-backed original research. Research is kept separate from Blog data.
const previousResearchBatch: readonly ResearchPost[] = [
  {
    slug: 'philippines-remote-operations-readiness', title: 'Philippines Remote Operations Readiness: The Evidence Checklist',
    excerpt: 'A source-backed checklist for deciding whether a recurring operations workflow is ready for distributed execution.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['64.4% 2024 Philippine labor-force participation rate', '57% of households lacked internet access in the World Bank\'s 2018 baseline'],
    sections: [
      { heading: 'Headline finding', body: 'Remote execution is a workflow-design decision before it is a hiring decision. The evidence points to two gates: a written task boundary and a connectivity contingency. This report treats the national labor and connectivity figures as context, not as a forecast for any individual candidate.' },
      { heading: 'What the data says', body: 'PSA reports a 64.4% labor-force participation rate for 2024. The World Bank\'s Philippines digital-economy work identified internet access as a material constraint, with about 57% of households offline in its 2018 baseline. Together, these sources support screening for both role fit and operating resilience.' },
      { heading: 'Operating design', body: 'Define inputs, a repeatable sequence, an exception rule, and a named reviewer. Give the worker only the accounts and permissions required for that sequence. Keep a fallback channel and a written outage procedure so one connectivity event does not silently become a missed handoff.' },
      { heading: 'Key takeaways', body: 'Use the evidence to test the system: can a new operator complete a representative task, show the source record, and escalate an exception without improvising? If not, improve the brief before adding headcount.' },
      { heading: 'FAQs', body: 'Is this a hiring scorecard? No. It is an operating-readiness screen. Does the national statistic predict performance? No; it frames the environment and should not replace an individual work sample.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-outsourcing-workflow-controls', title: 'Workflow Controls for Philippines-Based Support Teams',
    excerpt: 'How to convert least-privilege and identity guidance into daily review controls for an offshore support workflow.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST identifies least privilege as foundational', 'MFA adds a second verification factor beyond a password'],
    sections: [
      { heading: 'Headline finding', body: 'The strongest control is a small, explicit permission set paired with recurring review. It is easier to audit a narrow workflow than a broad “operations” role.' },
      { heading: 'Evidence and method', body: 'NIST small-business guidance recommends identity and access management, MFA, and least privilege. The practical inference is to map every task to the minimum system action, then review that map when the task changes or the worker exits.' },
      { heading: 'Control table', body: 'Task intake → named account and ticket reference. Routine action → standard user permissions. Sensitive change → client-side approval. Exception → documented escalation. End of assignment → access removal and artifact handoff.' },
      { heading: 'Key takeaways', body: 'Do not use shared credentials, permanent admin access, or an undocumented “ask the manager” step as a substitute for a control. Test the control with a real sample and record the reviewer.' },
      { heading: 'FAQs', body: 'Is MFA enough? No; NIST presents it as an important enhancement, not a complete program. Should every worker see every system? No; access should follow assigned responsibilities.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-customer-support-handoff-benchmark', title: 'Customer Support Handoffs: A Philippines Operations Benchmark',
    excerpt: 'A practical benchmark for measuring queue ownership, escalation quality, and documentation in customer support handoffs.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['40.9 average weekly hours worked in PSA December 2024 data', '3.1% unemployment rate in PSA December 2024 data'],
    sections: [
      { heading: 'Headline finding', body: 'A handoff is measurable when ownership, next action, evidence, and deadline are all visible. Volume alone is a weak benchmark because it hides rework and unresolved exceptions.' },
      { heading: 'Evidence and method', body: 'PSA reported 40.9 average weekly hours worked in December 2024 and a 3.1% unemployment rate. Those are labor-market context, not a service-level promise. We translate the context into a workflow benchmark: measure completed cases, reopened cases, aging exceptions, and reviewer-accepted handoffs.' },
      { heading: 'Measurement framework', body: 'Capture four fields per handoff: case identifier, decision or action taken, source record, and next owner with due time. Review a sample weekly for completeness, policy adherence, and avoidable rework.' },
      { heading: 'Key takeaways', body: 'Set a quality floor before a speed target. Separate customer-facing authority from back-office preparation, and route policy exceptions to the client owner.' },
      { heading: 'FAQs', body: 'Should hours worked set the target? No. Use workload and quality evidence from the actual queue. What is a good first benchmark? A complete, reviewable handoff on a representative sample.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-finance-operations-segregation', title: 'Finance Operations Segregation of Duties: A Research Brief',
    excerpt: 'A control-first design for separating preparation, approval, posting, and review in finance operations support.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST 800-171 requires only authorized access necessary for assigned tasks', 'PSA 2024 employment rate: 96.2%'],
    sections: [
      { heading: 'Headline finding', body: 'Finance support should be designed as a chain of constrained steps, not a single all-access role. Separation makes mistakes easier to detect and reduces the consequence of a compromised account.' },
      { heading: 'Evidence and method', body: 'NIST 800-171 describes least privilege and periodic privilege review. PSA\'s employment context does not determine finance capability, so this brief avoids treating labor statistics as a proxy for skill. The benchmark is control completeness.' },
      { heading: 'Control design', body: 'Preparation may include gathering source documents and coding a draft. Approval remains with the authorized client owner. Posting and reconciliation should be separately permissioned where the system supports it. Every exception needs a ticket and evidence link.' },
      { heading: 'Key takeaways', body: 'Write the approval boundary in the role brief, test it during onboarding, and remove access when the assignment changes. Review both permissions and sampled transactions.' },
      { heading: 'FAQs', body: 'Can one person prepare and post? Only if the client has explicitly accepted the risk and compensating review. Does a checklist replace approval? No; it makes approval auditable.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-data-management-quality-review', title: 'Data Management Quality Review in Distributed Teams',
    excerpt: 'A repeatable sampling method for accuracy, provenance, and exception handling in remote data work.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST calls for reviewing privileges assigned to roles', 'World Bank digital-economy research links connectivity to remote-work feasibility'],
    sections: [
      { heading: 'Headline finding', body: 'Distributed data work becomes trustworthy when every change has a source, a rule, and a review path. A quality score without provenance cannot tell a manager what to fix.' },
      { heading: 'Evidence and method', body: 'NIST access-control guidance supports constrained, reviewable access. World Bank research describes connectivity and digital adoption as practical constraints in the Philippines. We therefore benchmark both record quality and workflow continuity.' },
      { heading: 'Sampling protocol', body: 'Select a fixed weekly sample across new, edited, and exception records. Check source attachment, field-level rule compliance, duplicate handling, and reviewer disposition. Log the defect category rather than only a pass percentage.' },
      { heading: 'Key takeaways', body: 'Use a small sample early, increase it after defects, and publish the rulebook beside the task queue. Treat repeated ambiguity as a brief-design defect.' },
      { heading: 'FAQs', body: 'Is 100% review required? Not always; risk and defect history should determine sampling. What if the source is unavailable? Stop, mark the exception, and escalate rather than infer.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-revenue-operations-data-hygiene', title: 'Revenue Operations Data Hygiene: A Source-Backed Control Model',
    excerpt: 'How to structure CRM updates, enrichment, and exception review without turning data support into uncontrolled access.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends minimum necessary access for assigned tasks', 'PSA 2024 labor-force participation rate: 64.4%'],
    sections: [
      { heading: 'Headline finding', body: 'Revenue operations support should optimize for traceable updates, not the number of records touched. The smallest useful unit is a change with a source and a disposition.' },
      { heading: 'Evidence and method', body: 'NIST identity guidance supports named accounts, least privilege, and MFA. PSA labor statistics provide market context but do not establish a candidate\'s CRM skill. This report uses a control model instead of a productivity claim.' },
      { heading: 'Control model', body: 'Define editable fields, allowed values, source hierarchy, duplicate rule, and approval threshold. Make enrichment read-only where possible. Route ambiguous or sensitive changes to the revenue owner with the source attached.' },
      { heading: 'Key takeaways', body: 'Measure accepted changes, reversals, duplicate rate, and unresolved exceptions. Keep campaign or pricing decisions outside the data-maintenance role.' },
      { heading: 'FAQs', body: 'Can the operator change lifecycle stages? Only with a written rule and owner approval. Is enrichment automatically harmless? No; personal data and inaccurate attribution still create risk.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-procurement-administration-controls', title: 'Procurement Administration Controls for Offshore Workflows',
    excerpt: 'A practical evidence map for purchase-request intake, vendor records, and approval routing.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST least-privilege guidance applies to third parties', 'PSA December 2024 employment rate: 96.9%'],
    sections: [
      { heading: 'Headline finding', body: 'Procurement administration is safest when the offshore role prepares complete records and routes decisions, while the authorized buyer retains approval and commitment authority.' },
      { heading: 'Evidence and method', body: 'NIST specifically describes minimum necessary access and third-party access as part of least privilege. PSA employment indicators provide context only. The useful benchmark is whether every request can be traced from intake to decision.' },
      { heading: 'Workflow map', body: 'Intake → completeness check → vendor/source attachment → policy classification → approval route → status update → archive. Any request that changes supplier, price, terms, or payment details requires a named owner.' },
      { heading: 'Key takeaways', body: 'Do not let a coordinator approve their own prepared request. Review rejected and returned items as carefully as completed ones because they reveal unclear policy.' },
      { heading: 'FAQs', body: 'Can the role contact vendors? Yes, if the script and authority boundary are explicit. Can it change bank details? Treat that as a high-risk action requiring owner verification.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-marketing-operations-content-governance', title: 'Marketing Operations Content Governance Across Time Zones',
    excerpt: 'A research-led operating model for briefs, approvals, source records, and publishing handoffs.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['World Bank identified digital access as a constraint on remote work', 'NIST recommends MFA for sensitive systems and elevated privileges'],
    sections: [
      { heading: 'Headline finding', body: 'Time-zone coverage creates value only when the handoff is reviewable. A content operator should move approved work forward, not invent claims or silently change positioning.' },
      { heading: 'Evidence and method', body: 'The World Bank\'s Philippines digital-economy research describes access constraints relevant to remote work. NIST guidance supports strong identity controls. We apply both to a publication workflow with explicit source, approval, and rollback fields.' },
      { heading: 'Governance fields', body: 'Brief owner, audience, approved claim set, source list, draft status, reviewer, publish window, and rollback owner should travel with the task. Separate research, copy editing, and publication permissions where possible.' },
      { heading: 'Key takeaways', body: 'Measure approved-on-first-review, factual corrections, and late handoffs. Protect the brand by making “insufficient evidence” a valid stop state.' },
      { heading: 'FAQs', body: 'Can an operator select topics? Yes, within a documented cluster and approval boundary. Can a deadline justify an unsupported claim? No; evidence quality outranks schedule.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-technical-support-escalation-design', title: 'Technical Support Escalation Design for Distributed Teams',
    excerpt: 'A support escalation benchmark built around reproducible diagnostics, evidence capture, and safe permissions.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST says passwords alone are not effective for sensitive assets', 'PSA December 2024 average weekly hours: 40.9'],
    sections: [
      { heading: 'Headline finding', body: 'A technical support handoff is complete when the next owner can reproduce the issue or see why reproduction was impossible. Speed without evidence increases repeat contacts.' },
      { heading: 'Evidence and method', body: 'NIST small-business guidance supports MFA and appropriate access controls. PSA hours are contextual and should not become a universal shift target. The benchmark here is diagnostic completeness per case.' },
      { heading: 'Escalation standard', body: 'Capture environment, timestamp, user impact, reproduction steps, attempted fix, relevant logs or screenshots, and the exact question for the next owner. Do not request or store credentials in the ticket.' },
      { heading: 'Key takeaways', body: 'Track first-response completeness, avoidable escalations, reopened cases, and time to safe resolution. Give agents a stop rule for security-sensitive requests.' },
      { heading: 'FAQs', body: 'Should support staff have production admin access? Usually no; use scoped diagnostics and an authorized escalation path. Is a screenshot always enough? No; it is one evidence type, not a substitute for reproducible context.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-shared-services-documentation-standard', title: 'Shared Services Documentation: The Handoff-Ready Standard',
    excerpt: 'A compact standard for procedures that remain usable across people, shifts, and systems.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['PSA 2024 labor-force participation: 64.4%', 'World Bank baseline found about 57% of Philippine households without internet access in 2018'],
    sections: [
      { heading: 'Headline finding', body: 'A procedure is handoff-ready when another trained person can execute the normal path, recognize an exception, and locate the authoritative record without asking the author.' },
      { heading: 'Evidence and method', body: 'PSA labor statistics describe the workforce environment; World Bank research describes digital-access constraints. Neither source justifies a productivity guarantee. We use them to emphasize resilient documentation and continuity planning.' },
      { heading: 'Documentation standard', body: 'Include purpose, trigger, inputs, ordered steps, decision points, examples, exception routes, owner, revision date, and access prerequisites. Keep screenshots current and link to the source system rather than copying sensitive data.' },
      { heading: 'Key takeaways', body: 'Test the procedure with a fresh operator. Record where they hesitate, then revise the document. A short, tested procedure is more valuable than a long unmaintained manual.' },
      { heading: 'FAQs', body: 'Should every edge case be documented? Document recurring or high-risk exceptions and provide a safe escalation for the rest. Who owns updates? The client-side workflow owner should approve changes.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-project-coordination-remote-handoff', title: 'Project Coordination Handoffs in Philippines-Based Teams',
    excerpt: 'A source-backed coordination model for status, dependencies, decisions, and cross-time-zone continuity.', published: '2026-08-08', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['PSA reported 50.79 million Filipinos in the 2024 labor force', 'NIST recommends periodic privilege review'],
    sections: [
      { heading: 'Headline finding', body: 'Project coordination support works when it makes state visible: what changed, what is blocked, who owns the next action, and when the decision is due.' },
      { heading: 'Evidence and method', body: 'PSA provides national labor-force context, while NIST provides a control principle for access review. Neither is used as a claim about project speed. The benchmark is decision latency and handoff completeness in the client\'s actual workflow.' },
      { heading: 'Coordination scorecard', body: 'Track status freshness, dependency owner, decision log completeness, overdue action aging, and number of unresolved blockers. Review a sample of updates for evidence links and clear next actions.' },
      { heading: 'Key takeaways', body: 'Give the coordinator permission to surface and route information, not to make unapproved scope or budget commitments. Keep the client owner visible on decisions.' },
      { heading: 'FAQs', body: 'Can a coordinator run meetings? Yes, with an agenda, notes, and decision-owner boundary. Should “green” be accepted without evidence? No; status should link to the work record or explain the basis.' }
    ], sources: commonSources
  }
];

// Fresh 2026-08-09 batch. Kept separate from prior batches for family/count validation.
export const aug9ResearchBatch: readonly ResearchPost[] = [
  {
    slug: 'philippines-back-office-queue-design', title: 'Back-Office Queue Design for Philippines-Based Operations',
    excerpt: 'A source-backed queue model for making recurring administrative work visible, bounded, and reviewable.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['64.4% 2024 Philippine labor-force participation rate', 'NIST recommends minimum necessary access'],
    sections: [
      { heading: 'Headline finding', body: 'Queue design is a control surface: each item needs an owner, due state, source record, and explicit exception route. A queue that only tracks volume makes risk and rework invisible.' },
      { heading: 'Evidence and method', body: 'PSA labor data provides workforce context, while NIST guidance supports named accounts and least privilege. Neither source is treated as a performance guarantee; the benchmark is traceability across a representative queue sample.' },
      { heading: 'Queue standard', body: 'Use stable statuses for intake, ready, in progress, blocked, review, accepted, and returned. Require a source link, next action, and reviewer disposition before closing work.' },
      { heading: 'Key takeaways', body: 'Start with a narrow queue and a short service definition. Sample accepted and returned items, then revise the brief when the same ambiguity repeats.' },
      { heading: 'FAQs', body: 'Should every item have a deadline? Every item needs an agreed priority or due rule. What if source material is missing? Mark blocked and escalate; do not infer.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-virtual-assistant-sop-readiness', title: 'Virtual Assistant SOP Readiness: A Research Checklist',
    excerpt: 'How to test whether a procedure is ready for a Philippines-based operator before assigning recurring work.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST least privilege limits access to assigned tasks', 'World Bank digital-economy research identifies connectivity as an operating constraint'],
    sections: [
      { heading: 'Headline finding', body: 'An SOP is ready when a trained operator can complete the normal path, identify a boundary condition, and point to the authoritative record without relying on undocumented memory.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports constrained permissions and review. World Bank research supplies context for continuity planning. We test the SOP with a representative sample rather than infer capability from market statistics.' },
      { heading: 'Readiness test', body: 'Check purpose, trigger, inputs, ordered steps, examples, approval points, exception language, owner, revision date, and access prerequisites. Watch a fresh operator use it and log every clarification request.' },
      { heading: 'Key takeaways', body: 'Treat repeated questions as documentation defects. Keep customer promises, payments, legal judgment, and unusual exceptions with the authorized client owner.' },
      { heading: 'FAQs', body: 'Does more detail always improve an SOP? No; tested clarity matters more than length. Should screenshots contain sensitive data? Use redacted examples and link to the source system.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-remote-work-contingency-planning', title: 'Remote Work Contingency Planning for Offshore Support',
    excerpt: 'A practical continuity framework for connectivity, access, and handoff interruptions in distributed work.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['World Bank baseline found about 57% of Philippine households without internet access in 2018', 'NIST recommends MFA for sensitive systems'],
    sections: [
      { heading: 'Headline finding', body: 'Continuity should be designed into the workflow before an outage occurs. A fallback channel, safe stop rule, and visible ownership reduce silent failures without widening permissions.' },
      { heading: 'Evidence and method', body: 'World Bank digital-access research supports planning for connectivity variation; NIST guidance supports resilient identity controls. The report turns those contexts into a tabletop test, not a forecast of any individual worker.' },
      { heading: 'Contingency map', body: 'Define what may be completed offline, what must stop, how work is timestamped, where evidence is stored, and who confirms recovery. Never move sensitive data to an unapproved personal channel.' },
      { heading: 'Key takeaways', body: 'Run a short outage exercise, measure lost context and duplicate work, and update the procedure. The safest fallback is often a documented pause with an owner.' },
      { heading: 'FAQs', body: 'Should a backup channel bypass MFA? No. Does a backup internet connection solve process risk? No; permissions and evidence handling still apply.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-customer-service-quality-sampling', title: 'Customer Service Quality Sampling in Distributed Teams',
    excerpt: 'A review-sampling model that separates customer experience, policy adherence, and handoff completeness.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['40.9 average weekly hours worked in PSA December 2024 data', 'NIST supports periodic access review'],
    sections: [
      { heading: 'Headline finding', body: 'A quality sample is useful only when its dimensions are explicit. Speed, tone, policy adherence, evidence, and escalation should be scored separately so a strong average does not hide a dangerous defect.' },
      { heading: 'Evidence and method', body: 'PSA hours are contextual rather than a service promise. NIST control principles inform reviewer access and sampling records. We recommend a stratified sample across routine, returned, and escalated cases.' },
      { heading: 'Sampling design', body: 'Select cases by channel, age, outcome, and exception status. Record the rule applied, customer impact, evidence link, reviewer decision, and coaching action. Increase sampling after a material defect.' },
      { heading: 'Key takeaways', body: 'Set a quality floor before optimizing speed. Keep compensation, refunds, and policy exceptions with an authorized owner unless the written workflow says otherwise.' },
      { heading: 'FAQs', body: 'Is a five-case sample always enough? No; risk and defect history should determine the sample. Can customer sentiment replace policy review? No; it is one signal.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-crm-access-review-routine', title: 'CRM Access Review Routines for Philippines Support Roles',
    excerpt: 'A recurring access-review routine for CRM data entry, enrichment, and controlled customer-record changes.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends minimum necessary access for assigned tasks', 'NIST identifies MFA as an important additional control'],
    sections: [
      { heading: 'Headline finding', body: 'CRM access should follow the actual change set, not the broad job title. A quarterly review is useful only when it compares current permissions to current tasks and removes stale access.' },
      { heading: 'Evidence and method', body: 'NIST identity and access guidance supports least privilege, MFA, and review. We translate those principles into a role-to-field matrix and a sampled change audit.' },
      { heading: 'Review routine', body: 'List editable objects, fields, exports, integrations, and approval rights. Confirm named-account ownership, MFA, manager approval, exception tickets, and timely removal after role changes.' },
      { heading: 'Key takeaways', body: 'Prefer read-only enrichment where possible. Track reversals, duplicate creation, unapproved exports, and unresolved access exceptions.' },
      { heading: 'FAQs', body: 'Is an annual review enough? Risk and change frequency may require more frequent review. Does MFA permit broad access? No; it complements least privilege.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-invoice-processing-control-map', title: 'Invoice Processing Control Maps for Offshore Teams',
    excerpt: 'A control-first map for invoice intake, matching, exception routing, and review in distributed finance operations.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST 800-171 describes least privilege as necessary access for assigned tasks', 'PSA 2024 employment rate: 96.2%'],
    sections: [
      { heading: 'Headline finding', body: 'Invoice support is safest when intake, preparation, approval, posting, and reconciliation are visibly separated. The handoff record matters as much as the data entry step.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance informs the permissions map. PSA employment context is not a proxy for accounting skill. The proposed test is control completeness on representative invoices.' },
      { heading: 'Control map', body: 'Capture the source invoice, vendor identity, purchase reference, match result, exception reason, approval owner, posting status, and archive location. Never let an operator approve an item they prepared unless formally authorized with compensating review.' },
      { heading: 'Key takeaways', body: 'Sample matched and unmatched invoices. Review returned items because they expose unclear policy and incomplete source documentation.' },
      { heading: 'FAQs', body: 'Can the role contact vendors? Only within a written script and authority boundary. Can a checklist replace approval? No; it makes approval auditable.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-content-research-source-traceability', title: 'Content Research Source Traceability in Offshore Publishing',
    excerpt: 'A research workflow for claims, citations, review ownership, and safe publication handoffs across time zones.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends MFA for sensitive systems', 'World Bank research connects digital access with remote-work feasibility'],
    sections: [
      { heading: 'Headline finding', body: 'A content claim is publication-ready when its source, retrieval context, interpretation, reviewer, and approved wording are visible in the brief. Unsupported confidence is not a workflow shortcut.' },
      { heading: 'Evidence and method', body: 'World Bank research provides context for continuity, while NIST supports access separation and strong identity controls. The operating benchmark is traceability from claim to source record.' },
      { heading: 'Source workflow', body: 'Record the question, source authority, date checked, exact finding, interpretation limits, draft usage, reviewer, and correction path. Separate research access from final publishing permission where possible.' },
      { heading: 'Key takeaways', body: 'Make insufficient evidence a valid stop state. Track corrections, first-review acceptance, and claims whose source could not be reproduced.' },
      { heading: 'FAQs', body: 'Can a researcher paraphrase? Yes, while preserving meaning and limits. Can a deadline justify an unsupported statistic? No; evidence quality outranks schedule.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-technical-ticket-evidence-standard', title: 'Technical Ticket Evidence Standards for Remote Support',
    excerpt: 'A practical standard for diagnostics, safe escalation, and reproducible evidence in technical support queues.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST says passwords alone are not effective for sensitive assets', 'PSA December 2024 unemployment rate: 3.1%'],
    sections: [
      { heading: 'Headline finding', body: 'A technical ticket is complete when the next owner can reproduce the issue or understand why reproduction was impossible. A timestamped evidence trail prevents repeated troubleshooting.' },
      { heading: 'Evidence and method', body: 'NIST guidance supports MFA and scoped access. PSA labor context does not set a support target. We benchmark diagnostic completeness, safe handling, and escalation clarity.' },
      { heading: 'Evidence standard', body: 'Capture environment, impact, timestamp, reproduction steps, attempted changes, logs or redacted screenshots, and the exact next-owner question. Never request credentials in the ticket.' },
      { heading: 'Key takeaways', body: 'Track avoidable escalations, reopened tickets, and missing-evidence categories. Give operators an explicit security stop rule.' },
      { heading: 'FAQs', body: 'Should support staff have production admin access? Usually no. Is a screenshot enough? No; it is one evidence type, not reproducible context.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-project-status-reporting-standard', title: 'Project Status Reporting Across Philippines Time-Zone Handoffs',
    excerpt: 'A status-reporting standard for dependencies, decisions, blockers, and next actions in distributed projects.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['PSA reported 50.79 million Filipinos in the 2024 labor force', 'NIST recommends periodic privilege review'],
    sections: [
      { heading: 'Headline finding', body: 'Status is useful when it makes state inspectable: what changed, what is blocked, who owns the next action, and when a decision is due. Color alone is not evidence.' },
      { heading: 'Evidence and method', body: 'PSA labor-force data is national context, not a delivery forecast. NIST contributes a control principle for reviewing access as responsibilities change. We evaluate report completeness against actual project records.' },
      { heading: 'Reporting standard', body: 'Include reporting period, accomplished work, evidence link, dependency owner, decision needed, risk, next action, and due time. Mark stale information instead of silently carrying it forward.' },
      { heading: 'Key takeaways', body: 'Measure freshness, blocker aging, decision latency, and evidence completeness. Keep scope, budget, and customer commitments with the authorized client owner.' },
      { heading: 'FAQs', body: 'Can a coordinator run the report? Yes, if decision ownership is explicit. Should green status be accepted without evidence? No.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-procurement-vendor-record-hygiene', title: 'Vendor Record Hygiene for Philippines Procurement Support',
    excerpt: 'A traceable routine for vendor intake, duplicate prevention, sensitive changes, and approval routing.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST third-party access falls under least-privilege review', 'PSA December 2024 employment rate: 96.9%'],
    sections: [
      { heading: 'Headline finding', body: 'Vendor records need provenance and an approval boundary. The support role can improve completeness and route requests, while bank, tax, payment, and terms changes require independent verification.' },
      { heading: 'Evidence and method', body: 'NIST guidance supports minimum necessary access and review of third-party permissions. PSA indicators are context only. The benchmark is whether each record change can be traced to an authoritative request.' },
      { heading: 'Hygiene routine', body: 'Check required fields, duplicate candidates, source document, requester identity, approval owner, change reason, and effective date. Flag sensitive changes for out-of-band owner verification.' },
      { heading: 'Key takeaways', body: 'Review rejected and returned records, not only accepted ones. Keep payment authority and policy exceptions outside the administrative role.' },
      { heading: 'FAQs', body: 'Can the operator contact vendors? Yes, if the script and scope are explicit. Can bank details be changed from an email alone? Require the client-defined verification path.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-shared-inbox-triage-controls', title: 'Shared Inbox Triage Controls for Distributed Support',
    excerpt: 'How to turn shared-inbox work into a controlled queue with ownership, privacy boundaries, and review evidence.', published: '2026-08-09', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends named accounts and MFA', '64.4% 2024 Philippine labor-force participation rate'],
    sections: [
      { heading: 'Headline finding', body: 'Inbox triage should classify and route work without becoming an uncontrolled authority channel. Clear ownership, labels, retention rules, and escalation paths prevent duplicate or missed responses.' },
      { heading: 'Evidence and method', body: 'NIST identity guidance supports named accounts, MFA, and minimum necessary access. PSA labor data is background only. We evaluate triage using response ownership, routing accuracy, and exception evidence.' },
      { heading: 'Control design', body: 'Define intake categories, urgency rules, assignment owner, draft-versus-send permission, sensitive-data handling, escalation timer, and closure evidence. Use labels that describe workflow state rather than personal judgment.' },
      { heading: 'Key takeaways', body: 'Sample closed, reopened, and escalated messages. Keep commitments, refunds, legal responses, and unusual customer issues with the authorized owner.' },
      { heading: 'FAQs', body: 'Can triage staff send replies? Only with approved templates and authority. Should a shared password be used? No; named accounts are easier to review and revoke.' }
    ], sources: commonSources
  }
];

// Fresh 2026-08-10 batch. Kept separate from prior batches for family/count validation.
export const aug10PriorResearchBatch: readonly ResearchPost[] = [
  {
    slug: 'philippines-work-intake-definition-standard', title: 'Work Intake Definition for Philippines-Based Support Roles',
    excerpt: 'A source-backed standard for turning ambiguous requests into bounded, reviewable work before handoff.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends access limited to assigned tasks', 'PSA reported a 96.2% 2024 employment rate'],
    sections: [
      { heading: 'Headline finding', body: 'The safest intake record defines the requested outcome, source material, authority boundary, due rule, and reviewer before work begins. A vague request creates hidden judgment and makes quality difficult to inspect.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance supports matching access to assigned tasks. PSA labor statistics are context only, not a proxy for capability. We translate the evidence into an intake test against representative requests.' },
      { heading: 'Intake standard', body: 'Require requester, outcome, inputs, exclusions, priority, approval point, exception route, and evidence location. Mark missing information as blocked and name the owner who must resolve it.' },
      { heading: 'Key takeaways', body: 'Review returned work for recurring ambiguity. Improve the brief when operators repeatedly ask the same question, and keep customer promises, payments, and policy exceptions with the client owner.' },
      { heading: 'FAQs', body: 'Should intake capture every edge case? Capture recurring or high-risk exceptions and provide a safe escalation for the rest. Can a deadline replace a missing source? No; do not infer.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-operations-exception-register', title: 'Exception Registers for Philippines-Based Operations',
    excerpt: 'How to record unusual cases without turning an offshore workflow into an invisible private-message queue.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends periodic access review', 'World Bank digital-economy research identifies continuity constraints'],
    sections: [
      { heading: 'Headline finding', body: 'An exception register is useful when it captures the rule that failed, the evidence, the safe temporary action, the decision owner, and the next review date. It should expose learning rather than become a shadow approval system.' },
      { heading: 'Evidence and method', body: 'NIST access principles support constrained roles and reviewable actions. World Bank research supplies context for continuity planning. The benchmark is whether a second reviewer can understand and safely reproduce the disposition.' },
      { heading: 'Register design', body: 'Use a case identifier, category, rule reference, impact, evidence link, proposed action, owner, decision, expiry, and follow-up. Keep secrets and unnecessary personal data out of the record.' },
      { heading: 'Key takeaways', body: 'Sample open and closed exceptions. Escalate repeated exceptions as process defects, and do not let urgency widen access or bypass the named approver.' },
      { heading: 'FAQs', body: 'Can the operator close an exception? Only when the written role permits it. Should every unusual event trigger a policy change? No; review patterns and material risk first.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-support-escalation-quality-metrics', title: 'Support Escalation Quality Metrics for Distributed Teams',
    excerpt: 'A measurement model for whether escalations arrive with enough evidence, context, and a clear decision request.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST says passwords alone are not enough for sensitive assets', 'PSA reported 40.9 average weekly hours in December 2024'],
    sections: [
      { heading: 'Headline finding', body: 'Escalation quality is more informative than escalation volume. A useful escalation states customer or business impact, checks completed, evidence, safe next action, and the exact decision needed.' },
      { heading: 'Evidence and method', body: 'NIST authentication guidance informs safe handling and access boundaries. PSA hours are labor context, not a service-level target. We recommend measuring completeness and avoidable rework on a representative sample.' },
      { heading: 'Measurement model', body: 'Track missing evidence, wrong owner, duplicate escalation, policy mismatch, reopened case, and time to decision. Separate urgent impact from ordinary queue aging so the average does not hide risk.' },
      { heading: 'Key takeaways', body: 'Coach the missing field, not only the person. Keep security, legal, payment, and customer-compensation decisions with the authorized owner.' },
      { heading: 'FAQs', body: 'Is fewer escalation always better? No; a correct stop is safer than an unsafe resolution. Should speed be the first metric? No; completeness and policy adherence come first.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-document-review-provenance-checklist', title: 'Document Review Provenance for Offshore Administration',
    excerpt: 'A practical checklist for showing which source was reviewed, what changed, and who accepted the result.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends minimum necessary access', 'PSA reported 50.79 million people in the 2024 labor force'],
    sections: [
      { heading: 'Headline finding', body: 'A reviewed document is trustworthy when its source, version, reviewer, decision, and unresolved questions are visible. A polished file without provenance is difficult to correct or audit.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports limiting document access to the role and task. PSA labor-force figures provide national context only. The test is traceability from source artifact to accepted output.' },
      { heading: 'Review checklist', body: 'Record source location, retrieval date, version, scope checked, changes made, unresolved conflict, reviewer, approval status, and retention location. Use redacted examples for training.' },
      { heading: 'Key takeaways', body: 'Sample accepted and returned documents. Link to authoritative records rather than duplicating sensitive material, and require an owner for every unresolved discrepancy.' },
      { heading: 'FAQs', body: 'Can a filename prove version? Usually not; use repository or system metadata. Should the operator approve high-risk changes? Keep approval with the authorized client owner.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-shift-handoff-completeness-test', title: 'Shift Handoff Completeness Tests for Philippines Support',
    excerpt: 'A measurable handoff test for ownership, next action, evidence, customer promise, and safe stopping points.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends named accounts and MFA', 'World Bank research highlights digital-access constraints'],
    sections: [
      { heading: 'Headline finding', body: 'A handoff passes when the incoming operator can identify the current state, next permitted action, evidence, deadline, and escalation owner without asking the outgoing operator to reconstruct the case.' },
      { heading: 'Evidence and method', body: 'NIST identity guidance supports named access and MFA. World Bank research supports planning for continuity constraints. We define completeness fields and test them on routine, blocked, and escalated cases.' },
      { heading: 'Completeness test', body: 'Check owner, status, source link, work completed, customer promise, open risk, next action, due time, and approval boundary. A missing field should return the handoff or trigger a named escalation.' },
      { heading: 'Key takeaways', body: 'Review both successful and reopened cases. Keep credentials out of handoffs, and place final decisions in the approved system of record.' },
      { heading: 'FAQs', body: 'Is a chat message enough? Not when it is the only case record. Should every handoff be long? No; it should contain the fields needed for safe continuation.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-admin-access-offboarding-checklist', title: 'Administrative Access Offboarding for Philippines-Based Teams',
    excerpt: 'A same-day checklist for revoking access, transferring work, and retaining evidence when an assignment changes.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends reviewing privileges as responsibilities change', 'PSA 2024 labor-force participation was 64.4%'],
    sections: [
      { heading: 'Headline finding', body: 'Offboarding is complete only when access is revoked, active work is reassigned, devices and tokens are accounted for, and the record shows who checked each step. Removing one login is not the whole control.' },
      { heading: 'Evidence and method', body: 'NIST access-control guidance supports periodic privilege review and least privilege. PSA labor context does not predict individual risk. We convert the principle into a system-by-system checklist and evidence requirement.' },
      { heading: 'Offboarding sequence', body: 'Confirm trigger and time, disable identity provider access, revoke application sessions and MFA factors, collect company assets, transfer queues, preserve required records, and obtain independent confirmation.' },
      { heading: 'Key takeaways', body: 'Use named accounts so revocation is attributable. Treat urgent termination as an expedited control with a later completeness review, not as permission to skip evidence.' },
      { heading: 'FAQs', body: 'Can a manager rely on the provider to revoke everything? The owners should agree responsibilities and verify the result. Should all records be deleted? Follow the approved retention rule.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-research-brief-evidence-register', title: 'Evidence Registers for Philippines Staffing Research Briefs',
    excerpt: 'A source-traceability model for separating observed facts, interpretation limits, and operating recommendations.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends MFA for sensitive systems', 'World Bank research links digital adoption with operating context'],
    sections: [
      { heading: 'Headline finding', body: 'A research brief is reviewable when each material claim has an authoritative source, retrieval date, exact finding, interpretation limit, and approved use. Evidence registers prevent plausible wording from outrunning the source.' },
      { heading: 'Evidence and method', body: 'NIST provides access-control context and the World Bank provides digital-economy context. We treat both as source material, not as proof of provider performance. The workflow is evaluated by claim-to-source traceability.' },
      { heading: 'Register fields', body: 'Capture claim ID, source title and URL, date checked, relevant passage or table, paraphrase, limitation, reviewer, draft location, and correction owner. Mark claims unresolved rather than filling gaps with estimates.' },
      { heading: 'Key takeaways', body: 'Keep national statistics clearly labeled as context. Do not turn them into individual hiring or productivity predictions, and retain the reviewer decision beside the claim.' },
      { heading: 'FAQs', body: 'Can one source support every claim? Usually not; match source authority to the claim. Can a citation replace interpretation limits? No; readers need to know what the evidence does not establish.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-customer-support-approval-matrix', title: 'Customer Support Approval Matrices for Offshore Queues',
    excerpt: 'How to separate routine assistance from refunds, account changes, commitments, and other client-owned decisions.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST supports least privilege by assigned task', 'PSA December 2024 unemployment rate was 3.1%'],
    sections: [
      { heading: 'Headline finding', body: 'An approval matrix makes authority visible before a difficult contact arrives. It should distinguish preparation, recommendation, execution, escalation, and independent review for each action.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance supports limiting actions to assigned responsibilities. PSA unemployment data is contextual and does not measure support quality. We test the matrix against representative customer actions.' },
      { heading: 'Matrix design', body: 'List action, frontline permission, evidence required, approval owner, fallback route, notification, and audit record. Put refunds, payment details, account recovery, legal language, and unusual promises behind explicit client controls.' },
      { heading: 'Key takeaways', body: 'Train with realistic pressure cases and score whether the agent paused correctly. Review overrides separately from routine work because averages can hide authority failures.' },
      { heading: 'FAQs', body: 'Does a script grant approval? No; wording and authority are separate. Can a team lead approve every exception? Only when the client has assigned that authority in writing.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-operations-weekly-review-agenda', title: 'Weekly Review Agendas for Philippines-Based Operations',
    excerpt: 'A compact evidence-led agenda for checking throughput, defects, exceptions, access, and workflow changes.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends periodic privilege review', 'PSA 2024 employment rate was 96.2%'],
    sections: [
      { heading: 'Headline finding', body: 'A weekly review is valuable when it turns sampled work into owned decisions. Reporting activity alone can miss returned work, stale access, repeated exceptions, and unclear instructions.' },
      { heading: 'Evidence and method', body: 'NIST supports periodic access review. PSA employment context is not a target for output or quality. We recommend a recurring agenda tied to queue evidence, defect categories, and approved changes.' },
      { heading: 'Review agenda', body: 'Start with accepted and returned samples, aging items, material exceptions, access changes, customer-impact events, procedure questions, and next-week experiments. Record owner, decision, due date, and evidence link.' },
      { heading: 'Key takeaways', body: 'Keep the agenda short enough to run consistently. Treat repeated clarification requests as documentation work, and do not use the meeting to make undocumented policy decisions.' },
      { heading: 'FAQs', body: 'Should every metric be reviewed weekly? Only metrics tied to current risk and decisions. Can a provider own the meeting? Yes, while the client retains policy and approval authority.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-outsourcing-workflow-change-control', title: 'Workflow Change Control for Philippines Outsourcing Teams',
    excerpt: 'A change-control routine for updating instructions, permissions, examples, and reviewer ownership without breaking the handoff.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends reviewing privileges assigned to roles', 'World Bank research identifies connectivity as a continuity factor'],
    sections: [
      { heading: 'Headline finding', body: 'A workflow change is safe when its reason, affected steps, permissions, examples, owner, rollout date, and rollback path are explicit. Editing a procedure without updating the role and review controls creates drift.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports revisiting privileges as responsibilities change. World Bank research supports continuity planning. We frame change control as a traceability test across instructions, systems, and samples.' },
      { heading: 'Change sequence', body: 'Log the request, assess customer and access impact, draft the change, obtain the authorized approval, update the procedure and examples, brief operators, test a sample, and record the effective version.' },
      { heading: 'Key takeaways', body: 'Version the source of truth and archive superseded instructions. Keep emergency changes narrow and require a retrospective review so urgency does not become permanent ambiguity.' },
      { heading: 'FAQs', body: 'Can an operator change a checklist to fix a defect? They can propose it; the named owner approves the controlled version. Is a message announcing the change enough? No; the authoritative document must change.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-customer-data-minimization-workflow', title: 'Customer Data Minimization in Philippines Support Workflows',
    excerpt: 'A practical data-minimization routine for limiting what support operators see, copy, retain, and escalate.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends minimum necessary access', 'World Bank digital-economy research provides Philippines operating context'],
    sections: [
      { heading: 'Headline finding', body: 'Data minimization works when the workflow names the fields needed for the action, masks everything else, and gives sensitive cases a separate route. A broad screen is not automatically a better support tool.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports limiting permissions and information to assigned tasks. World Bank research is context for digital operations, not a performance claim. We test the rule against common support actions and exception paths.' },
      { heading: 'Minimization routine', body: 'List required fields by action, mask unused values, restrict exports and downloads, set retention rules, and record when a protected field is accessed. Keep full identity documents, payment details, and secrets out of ordinary notes.' },
      { heading: 'Key takeaways', body: 'Review false blocks alongside unnecessary exposure. Give agents a clear escalation when the normal workflow lacks enough information, rather than asking them to collect everything.' },
      { heading: 'FAQs', body: 'Does minimization mean agents cannot solve problems? No; it means the workflow supplies the minimum information needed for each permitted action. Should screenshots be unrestricted evidence? No; redact them and use the approved record.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-remote-work-sample-review-protocol', title: 'Work-Sample Review Protocols for Philippines-Based Roles',
    excerpt: 'A fair, evidence-led protocol for checking role fit with representative work before widening production access.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends access matched to assigned tasks', 'PSA 2024 labor-force participation rate was 64.4%'],
    sections: [
      { heading: 'Headline finding', body: 'A work sample is useful when it mirrors the real task, provides the same instructions and source material, and uses a rubric that separates accuracy, evidence handling, judgment boundaries, and communication.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance informs the rule that samples should use limited or synthetic access. PSA labor-force statistics provide national context only and cannot predict an individual result. The protocol measures the sample itself.' },
      { heading: 'Review protocol', body: 'Define the task, inputs, timebox, allowed tools, prohibited actions, rubric, reviewer, feedback record, and repeat rule. Use representative examples and redact customer data. Do not grade hidden expectations that were not in the brief.' },
      { heading: 'Key takeaways', body: 'Use the sample to improve the role definition as well as assess readiness. A failed sample should identify the missing instruction or skill evidence, not become a reason to widen access.' },
      { heading: 'FAQs', body: 'Should one sample decide hiring? Usually no; use a small set of representative tasks and the agreed process. Can a sample use live customer records? Prefer synthetic or redacted records and scoped permissions.' }
    ], sources: commonSources
  }
];

// Fresh 2026-08-10 batch for the current scheduled run. Kept separate from earlier same-day work.
export const researchBatch: readonly ResearchPost[] = [
  {
    slug: 'philippines-workflow-owner-accountability', title: 'Workflow Owner Accountability in Offshore Support',
    excerpt: 'A practical way to keep recurring offshore work attached to a real decision owner and review record.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends access matched to assigned tasks', 'PSA reported 64.4% labor-force participation in 2024'],
    sections: [
      { heading: 'Headline finding', body: 'A workflow needs one accountable owner for scope, approvals, and changes. Operators can complete assigned steps, but they should not have to guess who can resolve a policy question.' },
      { heading: 'Evidence and method', body: 'NIST access-control guidance supports assigning access to the task and role. PSA labor figures provide national context only. We turn those principles into a review of ownership, permissions, and escalation records.' },
      { heading: 'Owner model', body: 'Name the workflow owner, queue operator, reviewer, approval owner, and backup. Record the boundary between preparation and decision-making, then test it with a normal case and an exception.' },
      { heading: 'Key takeaways', body: 'A named owner is useful only when the queue and approval record point to that person. Review stale assignments and repeated escalations as process defects.' },
      { heading: 'FAQs', body: 'Can a vendor own the workflow? A vendor may operate it, while the client retains the policy and approval decisions unless the agreement says otherwise. Is a team inbox an owner? No, assign an accountable person.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-task-definition-acceptance-criteria', title: 'Task Acceptance Criteria for Philippines-Based Operations',
    excerpt: 'How to define done before recurring work moves between an offshore operator and a client reviewer.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends minimum necessary access', 'PSA reported a 96.2% 2024 employment rate'],
    sections: [
      { heading: 'Headline finding', body: 'Acceptance criteria make quality visible before a task enters review. They should describe the required result, supporting evidence, permitted exceptions, and the person who accepts the work.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance informs the permission boundary. PSA employment statistics are not a quality forecast. We assess criteria by applying them to representative routine and returned items.' },
      { heading: 'Acceptance test', body: 'Write the expected output, required fields, source record, validation rule, reviewer decision, and return reason. Keep subjective judgment out of the operator checklist unless the client has supplied examples and authority.' },
      { heading: 'Key takeaways', body: 'Track return reasons instead of hiding them in a pass rate. If the same criterion is disputed twice, update the instruction and obtain owner approval.' },
      { heading: 'FAQs', body: 'Should criteria measure speed? Only after the quality floor is clear. Can a reviewer accept missing evidence? Only under an explicit exception rule with an owner.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-queue-aging-review', title: 'Queue Aging Reviews for Offshore Support Work',
    excerpt: 'A simple aging review that separates ordinary backlog from blocked, risky, and owner-dependent work.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['PSA reported 40.9 average weekly hours in December 2024', 'NIST recommends periodic privilege review'],
    sections: [
      { heading: 'Headline finding', body: 'Aging is useful when every old item has a reason and an owner. A single average age can hide blocked work, unapproved decisions, and records that were returned without a clear next step.' },
      { heading: 'Evidence and method', body: 'PSA hours are contextual and do not establish a service promise. NIST access guidance informs the review of who can act on an item. We recommend checking age by state, risk, and dependency.' },
      { heading: 'Aging review', body: 'Group items by ready, in progress, blocked, review, and returned. For each older item, record the last action, next owner, evidence, due rule, and whether an approval is pending.' },
      { heading: 'Key takeaways', body: 'Do not ask an operator to clear an aged item by bypassing an approval boundary. Escalate missing inputs and repeated returns, then fix the queue rule.' },
      { heading: 'FAQs', body: 'Is an old item always a failure? No; a documented external dependency may be valid. Should the oldest item always come first? Follow the agreed risk and priority rule.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-workflow-reviewer-independence', title: 'Reviewer Independence in Offshore Workflow Controls',
    excerpt: 'When a second set of eyes improves a process, and how to keep review from becoming another unchecked approval.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST calls for reviewing assigned privileges', 'NIST recommends MFA for sensitive systems'],
    sections: [
      { heading: 'Headline finding', body: 'A review is stronger when the reviewer can inspect the evidence without simply approving their own work. Independence does not require a large team, but it does require a defined second check for material actions.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports separating permissions and reviewing them as responsibilities change. We test the control by mapping who prepares, approves, posts, and samples each work type.' },
      { heading: 'Review design', body: 'Set a risk threshold, reviewer role, evidence requirement, return code, and escalation route. For small teams, use a client-side sample review or rotate the reviewer instead of pretending the same-person check is independent.' },
      { heading: 'Key takeaways', body: 'Keep the review record tied to the source item. Study overrides and repeat defects separately from routine passes because averages can conceal authority failures.' },
      { heading: 'FAQs', body: 'Can a team lead review an operator they coached? Yes, if the assigned control permits it and the review is documented. Is every task high risk? No, scale review to the consequence of error.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-workflow-rollback-plan', title: 'Rollback Plans for Offshore Workflow Changes',
    excerpt: 'A change-control checklist for reversing a bad instruction, permission, or queue rule without losing work history.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends access review when responsibilities change', 'World Bank research identifies connectivity as a continuity factor'],
    sections: [
      { heading: 'Headline finding', body: 'A workflow change needs a rollback path before it is introduced. The path should identify the prior approved version, the trigger for reversal, the owner, and how work completed during the change will be reconciled.' },
      { heading: 'Evidence and method', body: 'NIST guidance supports revisiting privileges as work changes. World Bank research provides context for continuity planning. We assess rollback readiness across instructions, permissions, queue state, and evidence.' },
      { heading: 'Rollback checklist', body: 'Record the old version, affected records, access changes, pause rule, communication owner, recovery test, and follow-up review. Preserve the change record rather than overwriting it.' },
      { heading: 'Key takeaways', body: 'A rollback should narrow risk, not erase accountability. Reconcile duplicate or partially completed work and update the source procedure after the incident review.' },
      { heading: 'FAQs', body: 'Can an operator roll back a rule? They can stop work and escalate unless the role explicitly allows the change. Does restoring an old document restore old permissions? Not necessarily; check both.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-source-correction-log', title: 'Source Correction Logs for Offshore Publishing Research',
    excerpt: 'A traceable way to correct a research claim, its downstream wording, and the reviewer record before publication.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends MFA for sensitive systems', 'World Bank research links digital adoption with operating context'],
    sections: [
      { heading: 'Headline finding', body: 'A correction is complete when the source issue, affected claim, revised wording, reviewer, and downstream locations are recorded. Quietly editing one paragraph can leave the same error in a title, summary, or index.' },
      { heading: 'Evidence and method', body: 'NIST provides access-control context for editing and approval boundaries. World Bank research provides operating context, not proof of provider performance. We test the log by following a claim from source to published copy.' },
      { heading: 'Correction routine', body: 'Assign a claim ID, record the old and new interpretation, link the source, identify affected files, obtain review, and search for the original wording before closing the item. Keep the correction date visible.' },
      { heading: 'Key takeaways', body: 'Treat an unsupported statistic as a stop state. A clear correction history improves review speed and prevents the same weak claim from returning in a later draft.' },
      { heading: 'FAQs', body: 'Does a new citation fix a wrong claim? Not always; check whether the cited evidence supports the wording. Should corrections be deleted after publication? Keep the internal record under the approved retention rule.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-work-instruction-versioning', title: 'Work Instruction Versioning for Offshore Teams',
    excerpt: 'A versioning pattern that keeps examples, permissions, and reviewer expectations aligned as a routine changes.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST recommends review of privileges assigned to roles', 'PSA reported 50.79 million people in the 2024 labor force'],
    sections: [
      { heading: 'Headline finding', body: 'A work instruction is current only when its steps, examples, access requirements, owner, and effective date agree. A new paragraph cannot repair an old screenshot or a permission that no longer fits.' },
      { heading: 'Evidence and method', body: 'NIST access guidance supports matching permissions to assigned work. PSA labor-force figures are background context. We review versioning by comparing the source document to the operator brief and a sampled task.' },
      { heading: 'Version standard', body: 'Use a unique version, change reason, approver, effective date, affected systems, training note, and rollback reference. Archive the prior version and keep one authoritative location for active use.' },
      { heading: 'Key takeaways', body: 'Test the updated instruction with a fresh example. Log questions that reveal ambiguity and do not let an informal message become the permanent source of truth.' },
      { heading: 'FAQs', body: 'Can a minor wording change skip review? The owner should define that threshold. Is a timestamp enough for a version? No, include the approved version identifier and change record.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-workflow-risk-register', title: 'Risk Registers for Philippines-Based Support Workflows',
    excerpt: 'A compact risk register for tracking authority, data, continuity, and handoff risks in recurring offshore work.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends minimum necessary access', 'World Bank research describes connectivity as an operating constraint'],
    sections: [
      { heading: 'Headline finding', body: 'A risk register helps when each risk has a condition, consequence, control, owner, and review date. A list of worries without an action or decision owner does not change the workflow.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance informs access risks. World Bank research informs continuity risks. We keep the national context separate from provider or individual performance claims and test the register against actual task paths.' },
      { heading: 'Register fields', body: 'Record risk statement, trigger, affected task, current control, residual concern, owner, response, evidence, and next review. Include safe-stop language for security, payment, legal, and customer-impact cases.' },
      { heading: 'Key takeaways', body: 'Review the register after a material exception or workflow change. Close a risk only when the evidence shows the control changed, not because the item is old.' },
      { heading: 'FAQs', body: 'Should every possible risk be listed? Start with credible and consequential risks. Can the operator own a risk? They can report and manage assigned controls, while the authorized owner accepts the exposure.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-handoff-rework-analysis', title: 'Handoff Rework Analysis for Distributed Operations',
    excerpt: 'How to distinguish a training issue from a missing input, unclear authority, or broken handoff rule.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['PSA reported 3.1% unemployment in December 2024', 'NIST supports reviewable, least-privilege access'],
    sections: [
      { heading: 'Headline finding', body: 'Rework is a signal, not a diagnosis. The useful question is why the item returned: missing source, unclear instruction, authority boundary, data defect, or execution error.' },
      { heading: 'Evidence and method', body: 'PSA unemployment data is context and does not measure an operator. NIST access principles support checking whether the person had the right permission for the assigned task. We classify returned work by cause and evidence.' },
      { heading: 'Analysis method', body: 'Sample returned and accepted items, code the first material defect, identify the missing control, and assign a corrective action. Separate coaching from a change to the brief, queue, permission, or approval route.' },
      { heading: 'Key takeaways', body: 'Do not solve a missing-input problem with more training. Use the pattern to improve the workflow and monitor whether the same return reason declines.' },
      { heading: 'FAQs', body: 'Is all rework avoidable? No; some work changes after review. Should the operator be blamed for an unclear rule? Fix the rule first, then assess execution against the version they received.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-approval-evidence-retention', title: 'Approval Evidence Retention for Offshore Operations',
    excerpt: 'A retention checklist for showing who approved an action, what they reviewed, and which version governed it.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST recommends named accounts and MFA', 'NIST least-privilege guidance limits access to assigned tasks'],
    sections: [
      { heading: 'Headline finding', body: 'An approval record should let a later reviewer answer who decided, what evidence they saw, which rule applied, and when the decision took effect. A name without context is not a useful control record.' },
      { heading: 'Evidence and method', body: 'NIST identity and access guidance supports attributable actions and constrained permissions. We evaluate approval evidence by tracing a decision to the source item, role, instruction version, and retained record.' },
      { heading: 'Retention checklist', body: 'Keep the request, evidence link, decision, approver identity, timestamp, applicable version, exception reason, and follow-up. Restrict the record to people who need it and apply the approved retention rule.' },
      { heading: 'Key takeaways', body: 'Do not collect more customer data than the approval needs. If an approval cannot be reproduced, stop relying on it and route the item to the current owner.' },
      { heading: 'FAQs', body: 'Is a reaction or emoji an approval? Only if the process explicitly defines it and preserves the relevant context. Should every approval be permanent? Retain it according to risk and the approved policy.' }
    ], sources: commonSources
  },
  {
    slug: 'philippines-offshore-operator-readiness-gate', title: 'Operator Readiness Gates for Offshore Support Roles',
    excerpt: 'A staged gate for moving from training examples to limited production work with evidence at each step.', published: '2026-08-10', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends access matched to assigned tasks', 'PSA 2024 labor-force participation rate was 64.4%'],
    sections: [
      { heading: 'Headline finding', body: 'Readiness is easier to review when access expands in stages. A person can demonstrate task accuracy in a sample without being ready for live customer data, approvals, or exception handling.' },
      { heading: 'Evidence and method', body: 'NIST least-privilege guidance supports staged access. PSA labor statistics provide workforce context only. We define gates using the evidence from work samples, supervised tasks, review outcomes, and safe escalations.' },
      { heading: 'Gate sequence', body: 'Start with a redacted sample, move to supervised production, then limited routine work, and finally any explicitly approved extension. Record the rubric, reviewer, defects, permissions, and conditions for each move.' },
      { heading: 'Key takeaways', body: 'A failed gate should narrow the task or improve the instruction. Do not widen access to compensate for an unresolved quality or authority problem.' },
      { heading: 'FAQs', body: 'Does a completed training course prove readiness? No; the person must show the defined task and escalation behavior. Can every role use the same gate? Keep the pattern, but tailor evidence to the risk of the work.' }
    ], sources: commonSources
  }
];
const aug11ResearchBatch: readonly ResearchPost[] = [
  { slug: 'philippines-offshore-access-review', title: 'Access Review Design for Philippines-Based Support', excerpt: 'How to review role permissions against real offshore work without turning access review into a paperwork exercise.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST CSF 2.0 treats supplier risk as a governance concern', 'The Philippines Data Privacy Act requires protected personal information'], sections: [
    { heading: 'Finding', body: 'Access review is useful when it compares a person’s actual tasks with each permission, owner, and recent use. A quarterly export alone cannot show whether a role still needs a capability.' },
    { heading: 'Evidence and method', body: 'NIST CSF 2.0 supply-chain guidance supports defined supplier requirements and governance. Philippine privacy law covers personal information processed in the country. We translate those sources into a task-to-permission review.' },
    { heading: 'Review model', body: 'List the task, system, action, data class, approver, last-use evidence, and removal decision. Ask the client owner to approve exceptions and record why a permission remains.' },
    { heading: 'Key takeaways', body: 'Review permissions when duties change, not only on a calendar. Remove unused access, separate high-risk actions, and retain a concise decision record.' },
    { heading: 'FAQs', body: 'Is a provider report enough? No; the client should reconcile it with its own systems and role definition. Does read-only access carry no risk? It can still expose personal or confidential data.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-vendor-due-diligence', title: 'Vendor Due Diligence for Philippines Offshore Support', excerpt: 'A research-led way to evaluate provider controls, ownership, continuity, and evidence before a support role begins.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['NIST SP 1305 provides a supplier-risk framework', 'World Bank identifies connectivity as relevant to digital work'], sections: [
    { heading: 'Finding', body: 'Due diligence should test whether a provider can explain its people, systems, subcontractors, incident path, and continuity evidence for the specific role.' },
    { heading: 'Evidence and method', body: 'NIST’s CSF 2.0 supplier guide recommends communicating and operating supply-chain risk requirements. World Bank research shows why digital access and continuity matter in Philippine operations.' },
    { heading: 'Evidence map', body: 'Request role-specific access diagrams, named control owners, device standards, incident contacts, backup coverage, and a sample review record. Treat unsupported assurances as open questions.' },
    { heading: 'Key takeaways', body: 'Compare evidence to the work actually being delegated. Keep legal, payment, customer-promise, and policy authority with the authorized client owner.' },
    { heading: 'FAQs', body: 'Is a large provider automatically safer? No; fit and evidence matter more than a label. Should every document be collected? Request only material evidence needed for the decision.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-data-minimization', title: 'Data Minimization in Philippines-Based Operations Support', excerpt: 'How to narrow the records, fields, and retention an offshore operator needs to complete a defined task.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['Philippine privacy principles include proportionality', 'NIST recommends access matched to assigned tasks'], sections: [
    { heading: 'Finding', body: 'The safest useful dataset is the smallest one that lets the operator complete and evidence the assigned task. More visibility can create more exposure without improving the outcome.' },
    { heading: 'Evidence and method', body: 'The National Privacy Commission describes transparency, legitimate purpose, and proportionality under the Data Privacy Act. NIST access guidance supports minimum necessary access. We apply both to field-level task design.' },
    { heading: 'Minimization test', body: 'For every field, ask whether it is needed to act, validate, escalate, or retain evidence. Mask, omit, or route fields that do not pass the test. Review exports, screenshots, and local copies too.' },
    { heading: 'Key takeaways', body: 'Minimization is a role-design choice, not a vague promise. Pair it with named accounts, retention rules, and a safe escalation for missing context.' },
    { heading: 'FAQs', body: 'Can an operator see the whole customer record? Only when the defined task requires it. Is deletion always immediate? Follow the approved retention and legal requirements.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-connectivity-continuity', title: 'Connectivity Continuity for Philippines Remote Operations', excerpt: 'A practical continuity model for internet, power, system access, and handoff interruptions in distributed work.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['World Bank links connectivity with digital transformation', 'Continuity evidence should be tied to the actual work queue'], sections: [
    { heading: 'Finding', body: 'Continuity planning is credible when it names the failure, safe stopping point, communication path, and recovery evidence for each critical task.' },
    { heading: 'Evidence and method', body: 'World Bank work on Philippine digital transformation highlights the importance of internet access and infrastructure. We use that context to distinguish a connectivity plan from a generic promise of availability.' },
    { heading: 'Continuity design', body: 'Map primary and approved backup channels, queue ownership, offline limits, client notification, and reconciliation after recovery. Never ask staff to bypass security controls during an outage.' },
    { heading: 'Key takeaways', body: 'Test the plan with a representative queue item. Record what was paused, what was safely completed, and which owner reconciled duplicate or stale work.' },
    { heading: 'FAQs', body: 'Does a backup connection solve every outage? No; identity, application, power, and client-side dependencies can still fail. Should work continue offline? Only where the approved task explicitly permits it.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-customer-data-retention', title: 'Customer Data Retention Controls for Offshore Support', excerpt: 'A source-backed model for deciding what support records to keep, restrict, archive, and remove.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Hiring Controls', stats: ['The Data Privacy Act regulates storage and destruction of personal data', 'NIST CSF 2.0 supports governance of supplier risk'], sections: [
    { heading: 'Finding', body: 'Retention should follow purpose and obligation, not the storage capacity of a ticketing system. A support role needs a clear distinction between the case record, temporary working material, and unauthorized copies.' },
    { heading: 'Evidence and method', body: 'The National Privacy Commission describes controls over collection, storage, retrieval, use, and destruction. NIST supply-chain guidance supports communicating requirements to suppliers. We turn those principles into a record map.' },
    { heading: 'Record map', body: 'Define owner, purpose, system of record, retention trigger, access group, deletion or archive action, and exception approver. Include recordings, exports, screenshots, and training samples.' },
    { heading: 'Key takeaways', body: 'Give the Filipino support role a safe place for case context and forbid personal storage. Review retention exceptions with the client privacy owner.' },
    { heading: 'FAQs', body: 'Can a provider set its own retention period? It should follow the approved client and legal requirements. Are backups ignored? No; ask how backup expiry and restoration are handled.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-queue-priority-model', title: 'Queue Priority Models for Philippines-Based Operations', excerpt: 'How to prioritize offshore work using customer impact, risk, dependency, and due rules instead of raw age alone.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['Priority rules should be explicit and reviewable', 'PSA labor statistics provide context, not a service-level promise'], sections: [
    { heading: 'Finding', body: 'A priority label is useful only when it changes the next allowed action and can be explained later. “Urgent” without a rule encourages hidden judgment and inconsistent handoffs.' },
    { heading: 'Evidence and method', body: 'PSA labor data describes workforce context but does not establish output targets. We evaluate priority models by their treatment of customer impact, security, deadlines, dependencies, and approvals.' },
    { heading: 'Priority model', body: 'Define impact bands, escalation triggers, due rules, owner, evidence, and safe-stop conditions. Sample reprioritized items and compare the label with the decision record.' },
    { heading: 'Key takeaways', body: 'Keep policy and customer-impact decisions with the client owner. Let operators apply written rules and surface conflicts instead of improvising.' },
    { heading: 'FAQs', body: 'Should the oldest item always win? Not if impact or risk rules say otherwise. Can a manager change priority? Yes, if the decision and reason are recorded.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-approval-routing', title: 'Approval Routing for Philippines Offshore Workflows', excerpt: 'A practical separation between preparing a complete request, routing it, and making the authorized decision.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['NIST CSF 2.0 includes supplier requirements in governance', 'Approval evidence should identify the decision owner'], sections: [
    { heading: 'Finding', body: 'Routing works when the operator can make a request complete without quietly becoming the approver. The boundary must survive shifts, exceptions, and time-zone gaps.' },
    { heading: 'Evidence and method', body: 'NIST supplier-risk guidance emphasizes communicated requirements and governance. We test routing by tracing a request from intake through evidence, decision, notification, and record retention.' },
    { heading: 'Routing design', body: 'Specify required fields, evidence standards, approval thresholds, alternate owners, return reasons, and stop conditions. Make high-risk actions require a second approved check.' },
    { heading: 'Key takeaways', body: 'Measure complete submissions and avoidable returns, not just routed volume. Preserve the decision record in the system of record.' },
    { heading: 'FAQs', body: 'Can the operator approve routine items? Only when the authority is explicit and appropriate to the risk. Is forwarding an approval? No; preserve who decided and what they reviewed.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-work-sample-validity', title: 'Valid Work Samples for Philippines Staffing Decisions', excerpt: 'How to test role fit with representative, redacted tasks and a rubric that separates skill from missing instruction.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST recommends role-aligned access boundaries', 'A sample should measure the defined task, not hidden expectations'], sections: [
    { heading: 'Finding', body: 'A work sample is informative when the task, inputs, timebox, allowed tools, and scoring rules resemble the role. A vague test mostly measures guesswork.' },
    { heading: 'Evidence and method', body: 'NIST role and access principles support limiting a sample to the assigned task. We separate accuracy, evidence handling, escalation, and communication so a single score does not hide the reason for a result.' },
    { heading: 'Sample protocol', body: 'Use synthetic or redacted records, publish the rubric first, and ask the reviewer to log defects by category. Repeat with a second representative task before widening access.' },
    { heading: 'Key takeaways', body: 'Use failures to improve the brief as well as assess the candidate. Never require live customer access simply to make a sample feel realistic.' },
    { heading: 'FAQs', body: 'Does a course certificate prove fit? No; the person must demonstrate the actual bounded task. Should speed dominate? Establish accuracy and safe escalation before timing.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-research-source-hierarchy', title: 'Source Hierarchies for Offshore Operations Research', excerpt: 'A method for deciding which evidence should govern a claim when sources disagree, age, or use different definitions.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Workflow Design', stats: ['Official statistics and law answer different questions', 'Source dates and definitions belong in the research record'], sections: [
    { heading: 'Finding', body: 'A source hierarchy prevents a convenient figure from outranking a primary record. It should distinguish legal authority, official statistics, technical guidance, and interpretation.' },
    { heading: 'Evidence and method', body: 'PSA, the National Privacy Commission, NIST, and the World Bank publish different kinds of evidence. We classify each source by authority, scope, date, definition, and relevance before drawing a conclusion.' },
    { heading: 'Hierarchy model', body: 'Record the claim, preferred source type, exact definition, publication date, caveat, and reviewer. If sources conflict, state the difference instead of blending numbers into false precision.' },
    { heading: 'Key takeaways', body: 'Citations should let a reader reproduce the claim. Separate an observed fact from an operating recommendation and label inference plainly.' },
    { heading: 'FAQs', body: 'Is a current source always better? Not if it answers a different question. Can a secondary summary be used? Yes for orientation, but verify material claims against the primary source.' }
  ], sources: commonSources },
  { slug: 'philippines-offshore-exception-escalation', title: 'Exception Escalation Design for Philippines Support Roles', excerpt: 'How to make unusual cases safer by defining evidence, stop rules, response owners, and decision records.', published: '2026-08-11', thumbnail: '/research/research-default.svg', cluster: 'Scope Benchmarks', stats: ['NIST frames supplier controls as part of governance', 'Privacy decisions should follow purpose and proportionality'], sections: [
    { heading: 'Finding', body: 'An exception path is complete when an operator knows when to stop, what evidence to attach, who can decide, and how the final answer returns to the queue.' },
    { heading: 'Evidence and method', body: 'NIST governance guidance supports defined supplier requirements, while Philippine privacy principles support purpose-limited handling of personal information. We test exceptions against authority, data, customer impact, and continuity.' },
    { heading: 'Escalation standard', body: 'Capture the request, rule that failed, evidence available, risk, customer promise, decision needed, deadline, and next owner. Do not fill missing facts with assumptions.' },
    { heading: 'Key takeaways', body: 'Review exception patterns monthly. Repeated exceptions usually signal a missing rule, source, permission, or training example rather than an individual failure alone.' },
    { heading: 'FAQs', body: 'Should every exception go to the client? Route according to the written threshold. Can an operator suggest a solution? Yes, but label it as a recommendation and keep approval with the owner.' }
  ], sources: commonSources }
];

const frozenAug10Order = ['philippines-offshore-approval-evidence-retention', 'philippines-offshore-handoff-rework-analysis', 'philippines-offshore-operator-readiness-gate', 'philippines-offshore-queue-aging-review', 'philippines-offshore-source-correction-log', 'philippines-offshore-work-instruction-versioning', 'philippines-offshore-workflow-reviewer-independence', 'philippines-offshore-workflow-risk-register', 'philippines-offshore-workflow-rollback-plan', 'philippines-task-definition-acceptance-criteria', 'philippines-workflow-owner-accountability'];
export const researchPosts: readonly ResearchPost[] = [...priorResearchPosts, ...previousResearchBatch, ...aug9ResearchBatch, ...aug10PriorResearchBatch, ...researchBatch, ...aug11ResearchBatch].sort((a, b) => b.published.localeCompare(a.published)).sort((a, b) => a.published === b.published ? (a.published === '2026-08-10' ? ((frozenAug10Order.indexOf(a.slug) + 1 || Infinity) - (frozenAug10Order.indexOf(b.slug) + 1 || Infinity)) : 0) : 0);
export const postsPerPage = 20;
