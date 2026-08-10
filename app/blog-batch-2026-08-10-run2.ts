const topics = [
  ['offshore-inbox-management-playbook', 'Offshore Inbox Management Playbook: Design a Queue That Stays Current'],
  ['philippines-bookkeeping-support-controls', 'Philippines Bookkeeping Support Controls: Separate Preparation From Approval'],
  ['offshore-lead-research-workflow', 'Offshore Lead Research Workflow: Define Evidence Before Outreach'],
  ['philippines-ecommerce-support-handoff', 'Philippines E-commerce Support Handoff: Keep Orders Moving Across Shifts'],
  ['outsourced-receptionist-call-routing', 'Outsourced Receptionist Call Routing: Make the Next Action Clear'],
  ['offshore-calendar-management-rules', 'Offshore Calendar Management Rules: Protect Focus Time and Decisions'],
  ['philippines-data-entry-quality-checks', 'Philippines Data Entry Quality Checks: Catch Errors at the Source'],
  ['offshore-vendor-follow-up-process', 'Offshore Vendor Follow-up Process: Track Promises Without Chasing Blindly'],
  ['remote-team-work-queue-prioritization', 'Remote Team Work Queue Prioritization: Rank Requests With Shared Rules'],
  ['philippines-appointment-setting-workflow', 'Philippines Appointment Setting Workflow: Qualify the Handoff Before Booking'],
  ['offshore-document-processing-checklist', 'Offshore Document Processing Checklist: Keep Review Evidence With the File'],
  ['outsourced-social-media-moderation-rules', 'Outsourced Social Media Moderation Rules: Escalate Risky Context'],
  ['philippines-market-research-assistant-brief', 'Philippines Market Research Assistant Brief: Scope a Checkable Question'],
  ['offshore-invoice-follow-up-controls', 'Offshore Invoice Follow-up Controls: Protect Customer and Vendor Context'],
  ['remote-team-backup-coverage-plan', 'Remote Team Backup Coverage Plan: Keep Critical Queues Moving'],
  ['philippines-hr-admin-workflow', 'Philippines HR Admin Workflow: Keep Employee Records Need-to-Know'],
  ['offshore-sales-operations-handoff', 'Offshore Sales Operations Handoff: Make Pipeline Updates Reviewable'],
  ['outsourced-content-brief-process', 'Outsourced Content Brief Process: Give Writers a Usable Starting Point'],
  ['philippines-claims-administration-support', 'Philippines Claims Administration Support: Set Boundaries Around Decisions'],
  ['offshore-returns-processing-workflow', 'Offshore Returns Processing Workflow: Resolve Cases With a Clear Trail'],
  ['remote-team-daily-standup-alternative', 'Remote Team Daily Standup Alternative: Report Work Without More Meetings'],
  ['philippines-recruiting-coordinator-checklist', 'Philippines Recruiting Coordinator Checklist: Protect Candidate Experience'],
  ['offshore-crm-cleanup-process', 'Offshore CRM Cleanup Process: Improve Records Without Losing History'],
  ['outsourced-reporting-close-checklist', 'Outsourced Reporting Close Checklist: Reconcile Before You Report'],
] as const;

export const run2BlogPosts = topics.map(([slug, title]) => ({
  slug,
  title,
  excerpt: `${title} gives leaders a practical workflow for assigning recurring work to Philippines-based support while keeping review and approval with the owner.`,
  minutes: 9,
  published: '2026-08-10',
  image: '/philippines-team.jpg',
  citations: ['https://www.nist.gov/cyberframework'],
}));

const related = ['offshore-outsourcing-sop-template', 'offshore-team-handoff-workflow', 'remote-team-coverage-planning'];

export const run2BlogDetails = Object.fromEntries(run2BlogPosts.map((post) => [post.slug, {
  keyTakeaways: [
    'Write the queue, inputs, finish line, and reviewer before assigning work.',
    'Give the role named access and keep judgment calls with a client owner.',
    'Review a useful sample and record exceptions as workflow improvements.',
  ],
  sections: [
    { title: 'Define the queue before hiring', body: `${post.title} starts with a queue someone can see. List the request types, required inputs, expected output, due time, and the person who accepts the result. This makes the role practical for a Philippines-based teammate and gives a manager a fair way to review the work.` },
    { title: 'Separate preparation from approval', body: 'Let the support role gather information, update the approved system, and prepare the next step. Keep refunds, customer promises, hiring decisions, legal interpretation, and unusual exceptions with a named client owner. Write the limit beside each task so an agent does not have to guess during a busy shift.' },
    { title: 'Use access that fits the work', body: 'Give each person a named account and only the permissions needed for the queue. Keep a short access register with the system, purpose, owner, review date, and offboarding action. The NIST Cybersecurity Framework is a useful authoritative reference for organizing these safeguards, but the role brief still needs to state the company-specific rules.' },
    { title: 'Review evidence, not activity', body: 'Choose a sample that includes normal requests and at least one exception. Check accuracy, completeness, timeliness, and whether the handoff contains enough context for the next owner. Record the result in the same place as the work instead of relying on a private message or a verbal update.' },
    { title: 'Make the next action obvious', body: 'End each completed item with status, owner, next action, due time, and unresolved risk. If the instruction is unclear, pause the risky step and send a precise question to the reviewer. Update the example or checklist after the decision so the same question does not return tomorrow.' },
  ],
  internalLinks: [
    { label: 'Use the operations support service', href: '/services/operations-support', note: 'Translate the queue into a role with a named reviewer.' },
    { label: 'Read the handoff workflow guide', href: '/blog/offshore-team-handoff-workflow', note: 'Keep status and ownership with the work.' },
  ],
  relatedArticles: related,
  externalBodyLink: { label: 'NIST Cybersecurity Framework', href: 'https://www.nist.gov/cyberframework' },
  banners: [
    { label: 'Role planning checkpoint', title: 'Turn the workflow into a role brief', body: 'Share the queue, tools, reviewer, and approval limits before launch.', href: '/contact-us', linkText: 'Contact us' },
    { label: 'Next step', title: 'Start with a controlled first week', body: 'Use a small sample that a manager can inspect before increasing volume.', href: '/contact-us', linkText: 'Plan the role' },
    { label: 'Ready to scope?', title: 'Make the handoff visible', body: 'Turn the checklist into a practical staffing plan for your team.', href: '/contact-us', linkText: 'Discuss the workflow' },
  ],
  sources: [{ name: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework', note: 'Reference for organizing governance, safeguards, and review.' }],
}])) as Record<string, any>;
