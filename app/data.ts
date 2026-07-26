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
  { slug: 'philippines-customer-support-accessibility-quality-checklist', title: 'Philippines customer support accessibility quality checklist', excerpt: 'A practical scorecard for reviewing how Filipino support agents handle customers with access needs.', minutes: 12 },
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
  'philippines-customer-support-accessibility-quality-checklist': {
    keyTakeaways: [
      'Give Filipino support agents more than one way to help: voice, chat, email, and a manager-approved relay path when the first channel does not work.',
      'Score the result of the interaction, including whether the customer understood the next step, instead of rewarding speed by itself.',
      'Test the queue with customers who use screen readers, captions, keyboards, speech, magnification, or extra processing time before the role goes live.',
    ],
    sections: [
      { title: 'Accessibility belongs in the support plan', body: 'A Philippines-based customer support role may serve people in the United States, United Kingdom, Australia, and other markets. The agent location is the Philippines, but the access needs come from the customers using the product, account, or service. Write those needs into the role brief before recruiting or training starts. Disability is common enough that it cannot sit in an exception folder. The World Health Organization estimated on March 7, 2023 that 1.3 billion people, or 16 percent of the global population, experience a significant disability. A quality plan should cover barriers tied to vision, hearing, mobility, speech, cognition, and mental health without asking agents to diagnose anyone. The useful question is simple: can the customer understand the answer and complete the next allowed step through an available channel?' },
      { title: 'Define what the Filipino agent owns', body: 'Start with the real contacts the Filipino agent will handle, such as account questions, order updates, troubleshooting, appointment changes, or document requests. For each contact type, name the channels, identity checks, tools, answer limits, and point where a client manager must take over. An accessibility request should not remove normal privacy or approval controls. Keep judgment with the right owner. A Filipino frontline agent can describe approved options and record the customer\'s stated preference, while the client handles policy exceptions, legal questions, medical judgments, payment approvals, and changes that affect other customers. The scorecard should reward a correct handoff instead of pushing the agent to improvise outside the role.' },
      { title: 'Offer a usable channel change', body: 'A customer may begin on a channel that does not work well for them. A caller who cannot hear part of a voice response may need chat or email, while a customer using speech input may need more time and fewer interruptions. Give the Filipino agent an approved sentence for offering another channel without making the customer explain a diagnosis. The handoff must preserve the case. Record the question, checks already completed, promised action, preferred contact method, and next owner inside the ticket so the customer does not need to start over. Test every advertised path. An email option that is never watched, a chat widget that traps keyboard focus, or a phone line that rejects relay calls is not a real alternative.' },
      { title: 'Use plain language without talking down', body: 'Clear support writing helps customers who use translation tools, screen magnification, speech software, or extra time to process information. Ask agents to put the action first, use familiar words, keep one instruction per step, and name the button or field exactly as it appears. Plain language is not baby talk. The Filipino agent should keep the customer\'s tone, avoid unnecessary jargon, and explain an acronym the first time it appears. A written recap should state what happened, what the customer needs to do, what the company will do, and when the next update is due. Links need useful labels, images need meaningful text alternatives when they carry instructions, and headings should describe the section that follows. The client\'s product and content owners must fix inaccessible interfaces; the agent should not promise that a workaround solves the underlying problem.' },
      { title: 'Score the interaction, not the clock', body: 'Speed can matter in a queue, but it is a poor single measure of accessible support. An agent may need extra time to confirm a relay call, describe a visual step, wait through speech input, or send a clean written recap. Penalizing that time teaches people to rush the customer. Use a short scorecard with observable evidence. Check whether the agent confirmed the issue, used the requested or workable channel, followed identity rules, gave an accurate answer, explained the next step, recorded the preference, and escalated any blocked path. Sample both ordinary and difficult cases. Include contacts that changed channel, used captions or relay services, required a written summary, or exposed an inaccessible client tool. Compare agent behavior only when the case type is similar, because a password reset and a multi-step accessibility complaint do not carry the same work.' },
      { title: 'Use market figures as planning signals', body: 'Customer populations differ, and disability surveys use different legal definitions, ages, and methods. The figures below are planning signals for teams serving broad markets, not a forecast of how many contacts will ask for an adjustment. In the United Kingdom Family Resources Survey for 2023 to 2024, 16.8 million people, or 25 percent, were classified as disabled. Australia\'s national statistics office reported on July 4, 2024 that 5.5 million Australians, or 21.4 percent, had disability in 2022. The US Centers for Disease Control and Prevention says more than one in four US adults have some type of disability. They do show why a Philippines support plan serving these markets needs tested alternatives, not a rare-exception script. Track the company\'s own barriers by channel and case type, but do not ask agents to collect medical details that the support task does not need.' },
      { title: 'Train with realistic access barriers', body: 'Use redacted cases that match the actual queue. One practice ticket might involve a customer who cannot read a code shown only in an image, while another might involve a caller using a relay service or a person who needs instructions one step at a time. The Filipino agent should practice the normal identity check, the accessible path, and the escalation point together. Include awkward cases. Test what happens when captions miss a product name, a screen reader announces a button poorly, a form times out, the customer cannot use voice, or the approved document is an image-only file. The agent records the barrier and offers the allowed alternative without blaming the customer. Record which template, product screen, policy, or channel caused trouble, then assign the fix to the person who owns it.' },
      { title: 'Run a monthly barrier review', body: 'Bring the client owner and Philippines team lead together once a month to review a small, balanced sample. Look at cases where customers changed channel, repeated the same question, abandoned a contact, requested an adjustment, or reported that a document or interface did not work. Separate agent coaching from product defects. If the Filipino agent skipped an approved recap, coach the behavior with an example. If the chat tool trapped keyboard focus or the client sent an image-only form, send that defect to the product or content owner and track it to closure. The World Wide Web Consortium publishes WCAG 2.2 as a shared standard for web content, while the US Department of Justice explains that businesses open to the public have disability nondiscrimination duties under the ADA. The support scorecard is an operating check, not a legal opinion or accessibility certification.' },
    ],
    tableTitle: 'Accessible support quality scorecard',
    tableHeaders: ['Review area', 'Evidence in the case', 'Pass condition'],
    comparisonRows: [
      ['Channel fit', 'The ticket shows the customer\'s workable contact method.', 'The agent used it or offered an approved alternative.'],
      ['Understanding', 'The recap states the answer and next step in plain words.', 'The customer can act without decoding jargon.'],
      ['Identity and privacy', 'Required checks appear before account details or changes.', 'Accessibility did not weaken the normal control.'],
      ['Case continuity', 'The issue, work completed, promise, and next owner are recorded.', 'A channel or shift change does not restart the case.'],
      ['Accuracy', 'The answer matches the approved source or named manager decision.', 'The agent did not guess beyond the role.'],
      ['Barrier reporting', 'A failed channel, document, or interface has a useful defect note.', 'The client owner can reproduce and assign the fix.'],
    ],
    accessibilityChart: true,
    accessiblePathGraphic: true,
    expertQuote: {
      quote: 'The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.',
      person: 'Tim Berners-Lee',
      title: 'W3C Founding Director and inventor of the World Wide Web',
      sourceName: 'W3C accessibility mission page',
      sourceUrl: 'https://www.w3.org/mission/accessibility/',
    },
    quoteBox: 'Thanks for telling me what is not working. I can continue here, send a plain-language written recap, or move the case to our approved alternate channel. Which option works best for you?',
    internalLinks: [
      { label: 'Customer support service plan', href: '/services/customer-experience-support', note: 'define the channels, cases, schedule, and escalation rules.' },
      { label: 'Philippines staffing role guide', href: '/blog/offshore-advantages-planning', note: 'turn the queue into one clear Filipino support role.' },
      { label: 'First-week checklist', href: '/blog/offshore-advantages-onboarding-checklist', note: 'test tools, sample cases, feedback, and handoffs before launch.' },
      { label: 'Customer support security checklist', href: '/blog/philippines-customer-support-data-security-checklist', note: 'keep named accounts and privacy controls in every accessible path.' },
    ],
    banners: [
      { label: 'Role planning', title: 'Put access needs into the role brief.', body: 'List the support channels, common barriers, approved alternatives, and manager decisions a Filipino agent will handle.', href: '/contact', linkText: 'Plan the role' },
      { label: 'Quality review', title: 'Test the path with a real sample case.', body: 'Use the scorecard to review channel fit, understanding, privacy, continuity, accuracy, and barrier reporting.', href: '/blog/offshore-advantages-onboarding-checklist', linkText: 'Open the first-week checklist' },
      { label: 'Queue design', title: 'Fix the channel, not the customer.', body: 'When an interface or document blocks the case, give the client owner a clear defect note and a named next step.', href: '/services/customer-experience-support', linkText: 'Review customer support' },
    ],
    faqs: [
      { question: 'Should a support agent ask what disability a customer has?', answer: 'Usually the agent only needs to ask what is not working and which available option works better. The client should define any limited situations where other information is required.' },
      { question: 'Does accessible support mean skipping identity checks?', answer: 'No. Use an approved identity path that the customer can complete, and send exceptions to a named client manager instead of weakening the normal rule.' },
      { question: 'Who fixes an inaccessible website or document?', answer: 'The client owner for the product, content, or channel owns the fix. The Filipino support agent records the barrier, offers an approved alternative, and preserves the case context.' },
      { question: 'Should handle time be removed from the scorecard?', answer: 'Teams can still watch queue time, but they should review it beside case type and outcome. Extra time used for a workable channel or clear recap should not count as a quality failure.' },
    ],
    sources: [
      { name: 'World Health Organization, Disability and health', url: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health', note: 'March 7, 2023 global estimate of 1.3 billion people, or 16 percent of the population.' },
      { name: 'UK Department for Work and Pensions, Family Resources Survey 2023 to 2024', url: 'https://www.gov.uk/government/statistics/family-resources-survey-financial-year-2023-to-2024/family-resources-survey-financial-year-2023-to-2024', note: 'Reports 16.8 million people, or 25 percent, classified as disabled in the survey year.' },
      { name: 'Australian Bureau of Statistics, Disability, Ageing and Carers 2022', url: 'https://www.abs.gov.au/statistics/health/disability/disability-ageing-and-carers-australia-summary-findings/latest-release', note: 'Released July 4, 2024; reports 5.5 million Australians, or 21.4 percent, had disability.' },
      { name: 'US CDC, Disability Impacts All of Us', url: 'https://www.cdc.gov/disability-and-health/articles-documents/disability-impacts-all-of-us-infographic.html', note: 'States that more than one in four US adults have some type of disability.' },
      { name: 'W3C Web Content Accessibility Guidelines 2.2', url: 'https://www.w3.org/TR/WCAG22/', note: 'Technical recommendations for making web content more accessible.' },
      { name: 'W3C accessibility mission', url: 'https://www.w3.org/mission/accessibility/', note: 'Contains the exact Tim Berners-Lee quotation used above.' },
      { name: 'US Department of Justice, Guidance on Web Accessibility and the ADA', url: 'https://www.ada.gov/resources/web-guidance/', note: 'Explains web accessibility duties for state and local governments and businesses open to the public.' },
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
