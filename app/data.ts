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
