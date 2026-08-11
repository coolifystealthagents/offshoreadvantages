const thumbnail = '/blog-batch-2026-08-10.svg';

const topics = [
  ['offshore-operations-workflow-mapping', 'Offshore Operations Workflow Mapping: A Practical Guide'],
  ['philippines-back-office-service-levels', 'Philippines Back Office Service Levels: What to Define'],
  ['offshore-admin-inbox-triage', 'Offshore Admin Inbox Triage: Build a Reliable Queue'],
  ['philippines-customer-support-knowledge-base', 'Philippines Customer Support Knowledge Base: Plan the First Version'],
  ['offshore-outsourcing-manager-scorecard', 'Offshore Outsourcing Manager Scorecard: Review the Right Signals'],
  ['remote-team-documentation-standards', 'Remote Team Documentation Standards: Make Work Transferable'],
  ['philippines-operations-shift-handoff', 'Philippines Operations Shift Handoff: Keep Work Moving'],
  ['offshore-outsourcing-approval-workflow', 'Offshore Outsourcing Approval Workflow: Set Clear Decision Rights'],
  ['outsourced-customer-support-escalation-matrix', 'Outsourced Customer Support Escalation Matrix: A Starter Model'],
  ['philippines-virtual-assistant-task-design', 'Philippines Virtual Assistant Task Design: Scope Work That Can Be Checked'],
  ['offshore-qa-calibration-meeting', 'Offshore QA Calibration Meeting: Turn Opinions Into Shared Standards'],
  ['remote-team-capacity-planning', 'Remote Team Capacity Planning: Match Demand With Coverage'],
  ['philippines-outsourcing-access-review', 'Philippines Outsourcing Access Review: A Monthly Checklist'],
  ['offshore-reporting-dashboard-requirements', 'Offshore Reporting Dashboard Requirements: Start With Decisions'],
  ['outsourcing-process-exception-log', 'Outsourcing Process Exception Log: Learn From the Work'],
  ['philippines-team-training-plan', 'Philippines Team Training Plan: Build Practice Around Real Cases'],
  ['offshore-customer-onboarding-support', 'Offshore Customer Onboarding Support: Define the Handoff'],
  ['remote-team-meeting-agenda', 'Remote Team Meeting Agenda: Keep Operating Reviews Useful'],
  ['philippines-admin-quality-review', 'Philippines Admin Quality Review: Sample Work Without Micromanaging'],
  ['offshore-outsourcing-continuity-plan', 'Offshore Outsourcing Continuity Plan: Prepare for Interruptions'],
  ['outsourced-operations-kpi-framework', 'Outsourced Operations KPI Framework: Choose Measures With Context'],
  ['philippines-support-team-feedback-loop', 'Philippines Support Team Feedback Loop: Improve the Runbook'],
  ['offshore-role-transition-checklist', 'Offshore Role Transition Checklist: Transfer Work Safely'],
] as const;

const batchBlogPublishedDates: Record<string, string> = {
  'offshore-operations-workflow-mapping': '2026-08-10',
};

export const batchBlogPosts = topics.map(([slug, title]) => ({
  slug,
  title,
  excerpt: `${title} helps leaders define repeatable work, review quality, and protect customer context across a Philippines-based support workflow.`,
  minutes: 10,
  published: slug === 'offshore-operations-workflow-mapping' ? batchBlogPublishedDates[slug] : '2026-08-10',
  image: thumbnail,
  citations: ['https://www.nist.gov/privacy-framework'],
}));

const related = ['offshore-outsourcing-sop-template', 'offshore-team-handoff-workflow', 'philippines-staffing-escalation-rules'];

export const batchBlogDetails = Object.fromEntries(batchBlogPosts.map((post) => [post.slug, {
  keyTakeaways: [
    'Define the queue, owner, and finish line before assigning the work.',
    'Use named access, written approval rules, and a review sample.',
    'Record exceptions so the workflow improves from evidence.',
  ],
  sections: [
    { title: 'Start with the work', body: `${post.title} works best when the recurring tasks are written as observable steps. List the inputs, the expected output, the deadline, and the person who accepts the result. This gives a Philippines-based teammate a clear starting point and gives a manager something concrete to review.` },
    { title: 'Set the control points', body: 'Name the systems the role may use and the actions that need approval. Give each teammate a named account with only the access required for the queue. Keep customer context in the approved work system, and send unusual requests to a named reviewer.' },
    { title: 'Review a useful sample', body: 'Choose a small sample that reflects normal work and exceptions. Compare it with written examples, record accuracy and timeliness, and use the findings to revise the instruction. The NIST Privacy Framework provides a useful authoritative structure for identifying privacy risk and selecting safeguards.' },
    { title: 'Make the handoff visible', body: 'A handoff should state the current status, work completed, open risk, next allowed action, and new owner. Avoid relying on private messages as the only record. A visible handoff protects continuity when coverage crosses time zones or the original owner is unavailable.' },
    { title: 'Turn findings into a next step', body: 'Keep the parts that work, clarify ambiguous steps, and assign an owner for every open decision. Review the workflow on a regular rhythm, then expand access or volume only when the evidence supports it.' },
  ],
  internalLinks: [
    { label: 'Review the operations support lane', href: '/services/operations-support', note: 'Use a defined workflow and a named reviewer.' },
    { label: 'Read the handoff workflow guide', href: '/blog/offshore-team-handoff-workflow', note: 'Keep context with the work as ownership changes.' },
  ],
  relatedArticles: related,
  banners: [
    { label: 'Role planning checkpoint', title: 'Turn this guide into a role brief', body: 'Share the work queue, tools, reviewer, and approval limits before launch.', href: '/contact-us', linkText: 'Contact us' },
    { label: 'Next step', title: 'Build a controlled first week', body: 'Start with a workflow small enough to inspect, then scale what works.', href: '/contact-us', linkText: 'Plan the role' },
    { label: 'Ready to scope?', title: 'Make the handoff visible', body: 'Turn the checklist into a practical staffing plan.', href: '/contact-us', linkText: 'Discuss the workflow' },
  ],
  sources: [{ name: 'NIST Privacy Framework', url: 'https://www.nist.gov/privacy-framework', note: 'Authoritative guidance for managing privacy risk.' }],
}])) as Record<string, any>;
