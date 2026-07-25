export const site = {
  domain: 'OffshoreAdvantages.com',
  slug: 'offshoreadvantages',
  brand: 'Offshore Advantages',
  primary: 'Philippines staffing planning',
  audience: 'leaders deciding whether Filipino talent fits a defined role',
  angle: 'role fit, coverage, handoffs, access, and quality control',
  dark: '#071f2b',
  color: '#15c8d1',
  accent: '#ff6b6b',
  heroImage: '/philippines-team.jpg',
  serviceImage: '/philippines-team.jpg',
  alt: 'Colleagues working through a planning session around a table',
} as const;

export const services = [
  { slug: 'operations-support', title: 'Operations support', desc: 'Build a Filipino operations role around recurring reports, handoffs, vendor follow-up, and documented checks.' },
  { slug: 'customer-support', title: 'Customer support', desc: 'Plan Philippines-based inbox, chat, or ticket support with clear tone, escalation, and review rules.' },
  { slug: 'admin-support', title: 'Admin support', desc: 'Move calendar, inbox, research, and coordination work to Filipino talent without losing approval control.' },
  { slug: 'reporting-and-qa', title: 'Reporting and QA', desc: 'Give a Philippines-based reporting specialist defined source data, deadlines, exception rules, and a named reviewer.' },
] as const;

export const blogPosts = [
  { slug: 'offshore-advantages-planning', title: 'How to plan a Philippines staffing role', excerpt: 'Turn a loose wish list into a role that a Filipino professional can own.', minutes: 6 },
  { slug: 'offshore-advantages-tasks-to-outsource', title: 'Which tasks should move first?', excerpt: 'Choose recurring work with examples, a clear finish line, and sensible access.', minutes: 7 },
  { slug: 'offshore-advantages-provider-questions', title: 'Questions to ask a Philippines staffing provider', excerpt: 'Use these questions to uncover who recruits, employs, manages, and checks the work.', minutes: 8 },
  { slug: 'offshore-advantages-onboarding-checklist', title: 'A practical first-week checklist', excerpt: 'Set up tools, sample work, feedback, and escalation before the role goes live.', minutes: 9 },
  { slug: 'philippines-customer-support-data-security-checklist', title: 'Philippines customer support data security checklist', excerpt: 'A practical access, shift handoff, and offboarding plan for Filipino customer support teams.', minutes: 12 },
] as const;

export const blogDetails = {
  'offshore-advantages-provider-questions': {
    keyTakeaways: [
      'Ask who recruits and employs the Filipino talent.',
      'Write down what the person can decide and what still needs your approval.',
      'Treat passwords, customer data, and admin access as part of the role plan.',
    ],
    sections: [
      { title: 'Start with the work', body: 'Bring a short task list, two examples of good output, the tools involved, and the hours that need coverage. Ask the Philippines staffing provider who would own each task and who checks the first drafts. If the answer stays vague, the role is not ready.' },
      { title: 'Ask who checks the first two weeks', body: 'The first two weeks tell you whether the handoff works. Name the person reviewing tickets, reports, calls, or inbox replies. Agree on when feedback happens and what triggers an escalation.' },
      { title: 'Protect accounts before the handoff', body: 'Filipino talent may need inboxes, CRMs, file drives, or bookkeeping systems. Use named accounts and limited permissions. Keep a written list of actions that need approval. NIST and the FTC both publish useful small-business guidance for account access and data safety.' },
      { title: 'Keep judgment with the right person', body: 'A Philippines staffing team can help with recruitment, onboarding, and day-to-day support. Your business still owns its rules. Define approval lines for refunds, customer promises, payments, hiring decisions, and legal or financial matters.' },
    ],
    comparisonRows: [
      ['Recruitment', 'Who finds and screens the Filipino candidates?', 'The provider explains its screening steps and who makes the final hiring decision.'],
      ['Management', 'Who checks quality in week one?', 'A named reviewer checks real output against an agreed example.'],
      ['Security', 'How will this person access our tools?', 'Each person gets a named account, limited access, and written approval rules.'],
      ['Fit', 'What happens if the match is wrong?', 'The provider explains the review and replacement process before launch.'],
    ],
    quoteBox: 'We need Philippines-based help with these recurring tasks. Here are two examples of good work. Please explain who would do the work, who checks it in week one, and what access they need.',
    faqs: [
      { question: 'What should I ask first?', answer: 'Ask who recruits, employs, and manages the Filipino talent. Then walk through the actual work and its approval rules.' },
      { question: 'What is a warning sign?', answer: 'Be wary when nobody can name who reviews early work. That usually leaves the client managing every detail.' },
      { question: 'Can Filipino talent work in sensitive systems?', answer: 'It depends on the role. Use named accounts, limited permissions, and manager review before expanding access.' },
    ],
    sources: [
      { name: 'NIST Small Business Cybersecurity Corner', url: 'https://www.nist.gov/itl/smallbusinesscyber', note: 'Guidance for accounts, passwords, and basic security controls.' },
      { name: 'FTC Cybersecurity for Small Business', url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity', note: 'Guidance on protecting devices, accounts, and customer data.' },
    ],
  },
  'philippines-customer-support-data-security-checklist': {
    keyTakeaways: [
      'Give every Filipino support agent a named account with only the access the role needs.',
      'Keep the handoff inside the ticket or case system. Never pass passwords, MFA codes, screenshots, or local files between shifts.',
      'Treat offboarding as a same-day control with a named owner, a revocation record, and a check for open customer cases.',
    ],
    sections: [
      { title: 'Location is a boundary, not a security control', body: 'A Philippines-only customer support team gives you a clear labor location. It does not prove that customer data stays in the Philippines, because the ticket platform, backups, recordings, administrators, and other vendors may sit elsewhere. Map those systems before the first Filipino agent opens a real case. Start with the work a support agent will actually do. List the ticket fields they can read, the actions they can take, the customer promises they can make, and the cases that must go to a client manager. Include chat, email, phone, CRM records, recordings, file storage, identity tools, and logs. The client and provider should also name who decides why personal information is used and who processes it under those instructions.' },
      { title: 'Put the control owners in writing', body: 'The Philippine Data Privacy Act says a personal information controller must use contractual or other reasonable means to provide comparable protection when a third party processes information. That makes the access plan a client responsibility as well as a provider task. A contract should name the approved systems, Philippine work locations, data types, subprocessors, security duties, incident contacts, audit evidence, and end-of-service deletion steps. Give each control a person, not a department name. One client owner should approve access, one provider owner should confirm the agent and device, and one privacy or security contact should receive incidents. Add a backup for each role so a night shift is not left waiting.' },
      { title: 'Build access around real support roles', body: 'Frontline agents, team leads, quality reviewers, trainers, and system administrators do different work. Their permissions should be different too. A frontline Filipino agent may need to read a customer profile and update a ticket, while a team lead may review a recording or reopen a closed case. Bulk exports, account recovery, refunds, payment actions, user administration, and recording downloads should sit behind separate approval. Use one account per person and require strong authentication for the CRM, ticketing platform, telephony tools, remote access, and systems that hold customer information. Shared accounts hide who viewed or changed a record. Shared MFA makes offboarding harder because removing one person can disrupt everyone.' },
      { title: 'Use managed devices and narrow data paths', body: 'An approved device should run supported software, current security updates, disk encryption, screen locking, and endpoint protection. The provider should identify the device tied to each Filipino agent and remove its access when needed. Decide whether the role needs downloads, printing, clipboard transfer, removable drives, screenshots, browser extensions, or access outside an approved Philippine location. Block what the work does not need. These controls are not universal commands from Philippine law, but they can help a company use reasonable safeguards. Keep sensitive details out of open ticket notes when a protected field exists. Payment data, identity documents, health details, and account recovery evidence may need a tighter path, shorter retention, masking, or a client-side specialist.' },
      { title: 'Make every shift handoff visible', body: 'A good handoff moves case ownership, not credentials. Before the outgoing agent signs off, the ticket should show the current status, checks already completed, customer promise, open risk, next allowed action, and new owner. The incoming agent accepts the case through a separate named account. This matters in a Philippines support operation that covers US, UK, or Australian hours, because the next shift may begin while the client manager is asleep. A clear record stops the new agent from asking the customer to repeat the story or taking an action that was already rejected. It also gives a quality reviewer something concrete to inspect. Personal chat should not become the hidden case file. If agents discuss a hard case in an approved team channel, the final decision and useful context still belong in the ticket. That keeps customer data in systems with defined access and retention.' },
      { title: 'Watch the actions that carry more risk', body: 'Log sign-ins, failed authentication, permission changes, record edits, exports, recording retrieval, and administrator actions when the systems support it. A named reviewer should look for patterns such as bulk viewing, access outside the assigned shift, repeated account recovery attempts, unusual downloads, or a login from an unapproved location. A signal starts a review; it does not prove misconduct. Current global breach research shows why basic controls deserve attention. Verizon reported in its 2026 Data Breach Investigations Report that software vulnerabilities started 31 percent of breaches, ransomware appeared in 48 percent, and mobile lures had 40 percent higher click rates. These are global findings, not incident rates for Philippine support providers. They support practical choices: patch managed endpoints, limit local data, plan recovery, and teach agents to verify unexpected texts or calls through a known channel.' },
      { title: 'Train with the cases agents will see', body: 'Generic annual training is not enough for a customer support queue. Filipino agents should practice the identity checks, refund limits, account recovery steps, recording rules, and escalation path they will use. Give them redacted examples of normal cases and awkward exceptions. Include phishing sent by email, text, voice, and collaboration tools. The Data Privacy Act also requires people who process nonpublic personal information to keep it confidential, including after employment or a contract ends. Explain that duty in plain language, then connect it to daily behavior: lock the screen, avoid personal messaging, do not copy a customer record into a private note, and report a mistaken send quickly.' },
      { title: 'Rehearse incidents before customers arrive', body: 'Define what agents report immediately: a lost device, suspicious login, malware warning, misdirected message, exposed recording, improper export, or customer information sent through the wrong channel. The provider should notify the client contact with enough facts to assess the event, while avoiding a wider copy of the affected data. The client then decides with its privacy and security advisers whether legal notification rules apply. Not every security event is a notifiable personal data breach. The National Privacy Commission circular sets conditions and timing for breach evaluation and notification, so the runbook should point to that process rather than making an automatic claim. Test the contact path with a short exercise before launch. Start at an inconvenient hour. Record who answered, what facts were missing, and how long it took to disable an account or preserve a log.' },
      { title: 'Close access with the same care used to open it', body: 'Offboarding starts when an agent resigns, transfers, becomes inactive, or leaves the account. Disable identity, CRM, ticketing, telephony, remote access, quality tools, file storage, and administrator permissions. Revoke active sessions, API tokens, recovery methods, and assigned authenticators. Then remove the person from queues, groups, distribution lists, and password vault collections. Reassign open cases through the case system and recover company devices, badges, and security keys. Preserve records the business must keep, but delete unauthorized local copies through the approved process. The owner should record what was revoked, when it happened, who completed it, and any exception still open. For a provider exit, ask for a return or deletion statement and keep the logs needed to support it. A checklist that ends with evidence is easier to trust than an email that only says access is done.' },
    ],
    tableTitle: 'Customer support access control table',
    tableHeaders: ['Support activity', 'Agent access', 'Manager control'],
    comparisonRows: [
      ['Routine ticket reply', 'Read assigned cases and use approved reply tools.', 'Review samples, tone, and promised next steps.'],
      ['Account recovery', 'Collect only the approved verification fields.', 'Approve exceptions and watch repeated attempts.'],
      ['Refund request', 'Record the reason and prepare the case.', 'Keep final approval above the written limit with the client.'],
      ['Call recording', 'Open only assigned recordings for a stated purpose.', 'Limit downloads and review retrieval logs.'],
      ['Customer data export', 'No default export permission.', 'Require a named request, purpose, and time limit.'],
      ['Shift handoff', 'Update the case and assign the next owner.', 'Check that credentials and local files did not move.'],
    ],
    threatChart: true,
    handoffGraphic: true,
    expertQuote: {
      quote: 'The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats',
      person: 'Laurie E. Locascio',
      title: 'Under Secretary of Commerce for Standards and Technology and NIST Director',
      sourceName: 'NIST, February 26, 2024',
      sourceUrl: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework',
    },
    quoteBox: 'Please confirm the Filipino support agent, approved device, role permissions, assigned queues, and manager. Open one named account, test the escalation path with a sample case, and send the access record before live customer work begins.',
    internalLinks: [
      { label: 'Customer support service plan', href: '/services/customer-experience-support', note: 'match access to the queue, hours, and escalation rules.' },
      { label: 'Philippines staffing role guide', href: '/blog/offshore-advantages-planning', note: 'turn recurring support work into one clear role.' },
      { label: 'Provider questions', href: '/blog/offshore-advantages-provider-questions', note: 'ask who recruits, employs, reviews, and supports the agent.' },
      { label: 'First-week checklist', href: '/blog/offshore-advantages-onboarding-checklist', note: 'prepare sample work, tools, feedback, and handoffs.' },
    ],
    banners: [
      { label: 'Role planning', title: 'Map the queue before opening access.', body: 'List the systems, customer data, shift hours, and approval points a Filipino support agent will handle.', href: '/contact', linkText: 'Plan the role' },
      { label: 'Manager check', title: 'Test one case before the live queue.', body: 'Use a redacted example to test access, tone, escalation, logging, and shift handoff.', href: '/blog/offshore-advantages-onboarding-checklist', linkText: 'Use the first-week checklist' },
      { label: 'Provider review', title: 'Ask who owns each control.', body: 'Bring the access table to the provider call and name the person responsible for every answer.', href: '/blog/offshore-advantages-provider-questions', linkText: 'Open the question list' },
    ],
    faqs: [
      { question: 'Does Philippines-only staffing mean the data stays in the Philippines?', answer: 'No. Agent location and data location are different. Check the systems, backups, administrators, subprocessors, and storage regions before making a data residency claim.' },
      { question: 'Should agents share one queue login across shifts?', answer: 'No. Each agent should use a named account, while the ticketing system moves case ownership between shifts. This keeps the activity record clear and makes revocation safer.' },
      { question: 'Does every security incident require notice to the National Privacy Commission?', answer: 'No. The organization must evaluate the facts under the applicable Philippine rules. Its privacy or legal team should decide whether the event meets the conditions for notification.' },
      { question: 'What should a client check on the first day?', answer: 'Check the agent identity, device, assigned role, systems, authentication, sample ticket, escalation contact, and log visibility. Fix gaps before the agent handles a real customer case.' },
    ],
    sources: [
      { name: 'Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Sections 20 and 21 cover security, confidentiality, third-party processing, and accountability.' },
      { name: 'National Privacy Commission implementing rules for RA 10173', url: 'https://privacy.gov.ph/wp-content/uploads/2016/07/updatedirr.pdf', note: 'Rule VI covers organizational, physical, and technical safeguards.' },
      { name: 'NPC Circular No. 16-03, Personal Data Breach Management', url: 'https://privacy.gov.ph/wp-content/uploads/2016/12/NPC-Circular-16-03-Personal-Data-Breach-Management.pdf', note: 'Official breach evaluation, management, and notification guidance.' },
      { name: 'NIST Cybersecurity Framework 2.0 announcement', url: 'https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework', note: 'Published February 26, 2024, with the exact Laurie E. Locascio quote used above.' },
      { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Account management, least privilege, authentication, logging, termination, and transfer controls.' },
      { name: 'Verizon 2026 Data Breach Investigations Report', url: 'https://www.verizon.com/business/resources/reports/dbir/', note: 'Global figures for vulnerability entry, ransomware involvement, and mobile click rates.' },
    ],
  },
} as const;

export const stats = [
  { label: 'Sourcing location', value: 'Philippines', note: 'Every staffing plan is built for Filipino talent.' },
  { label: 'Better starting point', value: 'One role', note: 'Begin with a clear owner and a short recurring task list.' },
  { label: 'Control to define', value: 'Access', note: 'Set permissions and approval rules before launch.' },
] as const;

export const staffingOffer = {
  promise: 'Get a Philippines staffing plan built around the work you need handled.',
  fit: [
    'owners who want Filipino talent but need help shaping the role',
    'teams that want recruitment, onboarding, and a clear support path',
    'companies moving admin, operations, customer support, or reporting work to the Philippines',
  ],
  included: [
    'a role brief tied to tasks, tools, schedule, and decision limits',
    'candidate matching focused on Filipino talent',
    'an onboarding outline for sample work, feedback, and safe access',
    'a review path for attendance, quality, and fit questions',
  ],
  proof: ['clear scope before interviews', 'named review owner', 'written access rules', 'a practical handoff plan'],
} as const;

export const leadQuestions = [
  'What work should the Filipino team member own first?',
  'Which tools or inboxes will they use?',
  'What hours and response windows matter?',
  'Who reviews work during the first two weeks?',
  'Which decisions must stay with your team?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the work', body: 'Turn recurring tasks into one role with examples, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Meet Filipino talent', body: 'Review candidates against the work, schedule, and communication style instead of a vague job title.' },
  { step: '3', title: 'Set the controls', body: 'Create named accounts, approval rules, feedback times, and one escalation path.' },
  { step: '4', title: 'Expand carefully', body: 'Add work only after the first handoff is stable and the review rhythm feels manageable.' },
] as const;

export const staffingFitNote = 'We focus exclusively on Filipino talent. Each plan still depends on the role, tools, schedule, access, and support you need.';
