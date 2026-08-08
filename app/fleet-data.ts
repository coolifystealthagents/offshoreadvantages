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
export const researchBatch: readonly ResearchPost[] = [
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
export const researchPosts: readonly ResearchPost[] = [...priorResearchPosts, ...researchBatch];
export const postsPerPage = 20;
