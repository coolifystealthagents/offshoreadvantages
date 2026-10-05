// October 5 cycle draft. Do not route or add a publication date until the
// combined Blog + Research release is ready for its single production push.
const image = '/philippines-team.jpg';

type DraftArticle = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  image: string;
  citations: string[];
  keyTakeaways: string[];
  sections: { title: string; body: string }[];
  internalLinks: { label: string; href: string; note: string }[];
  banners: { label: string; title: string; body: string; href: string; linkText: string }[];
  sources: { name: string; url: string; note: string }[];
};

export const october5BlogDrafts: DraftArticle[] = [
  {
    slug: 'philippines-customer-support-refund-authority-matrix',
    title: 'Philippines customer support refund authority matrix: decide what agents can resolve safely',
    excerpt: 'A practical way to set refund limits by reason, amount, evidence, customer impact, and escalation path.',
    minutes: 10,
    image,
    citations: ['https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law', 'https://www.consumerfinance.gov/rules-policy/regulations/1026/13/'],
    keyTakeaways: [
      'Define authority with more than a dollar ceiling: reason, evidence, payment state, and exception risk all matter.',
      'Give agents a safe customer response when approval is pending instead of pressuring them to promise an outcome.',
      'Review refund patterns for broken policies, products, and workflows—not only individual agent behavior.',
    ],
    sections: [
      {
        title: 'Start with the decision, not the offshore location',
        body: `A refund matrix should answer one operating question: which cases may a support agent resolve, and which decisions must stay with the client? The agent's location in the Philippines does not determine the answer. Risk comes from the transaction, the promise already made, the evidence available, the payment method, and the consequences of a mistake. Begin with the client’s written return, cancellation, warranty, subscription, and goodwill policies. Map the systems that show order status, delivery, prior contacts, promotions, payment disputes, and account risk. Then separate work into preparation, decision, execution, and review. A Philippines-based agent can collect facts, classify the request, apply an approved rule, document the decision, and issue an authorized refund. The client retains policy ownership, legal interpretation, high-value exceptions, fraud decisions, and changes to financial controls. This split makes the role useful without turning every ticket into either a blank cheque or a manager interruption. It also prevents a common failure: publishing a simple amount limit that appears precise but ignores whether goods shipped, a chargeback exists, or a regulated promise applies.`,
      },
      {
        title: 'Build rows around recognizable refund situations',
        body: `List the reasons customers actually raise: duplicate charge, cancelled-before-fulfilment order, late shipment, item not received, damaged item, wrong item, service outage, subscription renewal, warranty claim, price adjustment, and goodwill request. For each row, record required evidence, normal remedy, maximum amount, payment and fulfilment conditions, exclusions, approval owner, and customer-language template. A duplicate charge may be refundable after two settled transactions are confirmed. A cancellation may be safe only before a warehouse cutoff. A non-delivery claim may require carrier status and a wait period. A warranty request may offer repair or replacement before cash. Keep “customer is upset” out of the evidence column; urgency changes communication, not the underlying authority. Use examples at each boundary. If an agent may refund up to $75 inclusive, show cases at $74.99, $75, and $75.01, plus tax, shipping, discounts, and multi-item orders. The examples expose ambiguity before it reaches a live conversation and give trainers material that reflects the real queue rather than generic role-play.`,
      },
      {
        title: 'Use several gates before the amount limit',
        body: `An amount ceiling is the last gate, not the first. Check identity using the client’s approved method. Confirm the transaction and currency. Determine whether the payment is pending, settled, already refunded, or disputed. Check fulfilment and return state. Look for earlier remedies on the same order. Apply the correct policy version for the purchase date and market. Only then test the agent’s monetary authority. Some conditions should always escalate regardless of value: suspected account takeover, threats, legal demands, injury, safety complaints, repeated refund patterns, restricted goods, a chargeback already filed, an executive account, or a request that conflicts with the published promise. Do not ask agents to improvise fraud findings from accent, geography, emotion, or other weak proxies. They should record observable facts and route the case to the named risk owner. Likewise, a system warning is a signal to review, not proof that the customer acted improperly. The matrix should make a correct escalation count as successful handling, because punishing escalation encourages unauthorized refunds or unfair denials.`,
      },
      {
        title: 'Design a clean approval handoff',
        body: `When a case falls outside authority, the agent should send a decision-ready packet instead of forwarding a long conversation. Include customer and order identifiers, verified contact channel, request reason, amount and currency, payment state, fulfilment facts, applicable policy and version, evidence links, previous remedies, deadline, recommended options, and the exact decision requested. Remove unnecessary payment or identity data from copied notes. The approver chooses from bounded outcomes—approve, deny with reason, offer another remedy, request specific evidence, or route to a specialist—and the result returns to the ticket. Chat approval without a case reference is hard to audit and easy to apply to the wrong order. Set response targets by customer consequence, not one blanket timer. A warehouse cancellation may need an answer in minutes; a goodwill exception might wait until the next business window. Give the agent an honest holding response that states what is being reviewed and when the next update is expected. Never promise the refund before approval merely to protect a response-time metric.`,
      },
      {
        title: 'Control execution and customer confirmation',
        body: `Approval should not automatically grant broad payment permissions. Use named accounts, role-based limits, multifactor authentication, and an immutable transaction reference. Where practical, separate unusual approval from execution and require an additional control for bank-detail changes or manual payments. The agent checks recipient, order, amount, currency, method, reason code, and approval reference before submitting. Afterward, the ticket records the processor identifier, time, expected posting window, and customer message. Say when the business submitted the refund and explain that a bank or card issuer may control when it appears; do not guarantee a date the company cannot control. If execution fails, keep the original approval and open a bounded exception rather than repeatedly clicking submit. A daily reconciliation should compare approved, attempted, successful, failed, reversed, and customer-confirmed states. That catches duplicate refunds and “approved but never issued” cases that a ticket-closure dashboard can hide. Access logs and financial records stay under the client’s retention and privacy rules.`,
      },
      {
        title: 'Review the matrix as a policy sensor',
        body: `Sample cases by reason, value band, outcome, agent, approver, market, product, and channel. Review both approvals and denials, including cases just below and above authority limits. Track repeat contacts, reversals, duplicate attempts, chargebacks after denial, processing failures, approval delays, and exceptions that recur. The purpose is not to reward the highest refund volume or lowest refund rate. A low rate can mean customers are being blocked; a high rate can mean the product or fulfilment process is failing. Look for system causes. Repeated late-shipment credits may point to unrealistic delivery promises. Frequent renewal disputes may expose weak reminders or cancellation design. A concentration of manager overrides may mean the written policy does not match ordinary customer situations. Update one controlled matrix, record the effective date, train with changed examples, and retire stale versions from macros and knowledge bases. The US Federal Trade Commission’s warranty guidance and the Consumer Financial Protection Bureau’s billing-error regulation are useful authoritative starting points for US-facing scenarios, but the client’s counsel must identify which rules apply to its products, promises, payment methods, and markets.`,
      },
      {
        title: 'Pilot with evidence before expanding authority',
        body: `Start with one queue, a narrow set of low-risk reasons, and enough cases to include awkward boundaries. Use synthetic transactions to test duplicate charges, partial shipments, discounts, tax, mixed currencies, expired return windows, prior credits, and failed processor responses. Then allow a supervised live pilot with daily review. Measure classification accuracy, required-evidence completeness, approval quality, execution errors, customer recontact, and reconciliation gaps. Expand authority only when the evidence shows the workflow is understood and the controls work. If results deteriorate, narrow the permission while fixing the rule or system; do not quietly rely on extra manager attention. Document who can pause refund access during an incident and how customers are updated while processing is unavailable. The finished matrix gives a Philippines-based support team meaningful resolution power while leaving policy, unusual judgment, and financial governance with accountable client owners. For help turning your real ticket reasons and payment workflow into a bounded role brief, use Offshore Advantages’ customer support planning path and bring anonymized examples to the scoping conversation.`,
      },
    ],
    internalLinks: [
      { label: 'Explore customer support staffing', href: '/services/customer-experience-support', note: 'Define the queue, authority, review, and escalation model.' },
      { label: 'Review customer support access controls', href: '/blog/philippines-customer-support-data-security-checklist', note: 'Keep refund permissions named, limited, and auditable.' },
    ],
    banners: [{ label: 'Role planning', title: 'Turn refund policy into a usable authority matrix', body: 'Bring the request reasons, systems, approval owners, and real boundary cases to a staffing discussion.', href: '/contact-us', linkText: 'Plan the support role' }],
    sources: [
      { name: 'FTC Businessperson’s Guide to Federal Warranty Law', url: 'https://www.ftc.gov/business-guidance/resources/businesspersons-guide-federal-warranty-law', note: 'Official US guidance on written and implied warranties; applicability depends on the offer and market.' },
      { name: 'CFPB Regulation Z §1026.13', url: 'https://www.consumerfinance.gov/rules-policy/regulations/1026/13/', note: 'Official billing-error resolution rule for covered open-end credit transactions.' },
    ],
  },
];
