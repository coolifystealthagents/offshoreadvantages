import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { allBlogPosts, blogDetails, site, todayBlogDetails } from '../../data';
import { batchBlogDetails } from '../../blog-batch-2026-08-10';
import { run2BlogDetails } from '../../blog-batch-2026-08-10-run2';
import { august11BlogDetails } from '../../blog-batch-2026-08-11';
import { august13BlogDetails } from '../../blog-batch-2026-08-13';

const siteUrl = 'https://offshoreadvantages.com';
const readerDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatReaderDate = (value: string) => readerDate.format(new Date(`${value}T00:00:00Z`));

type BlogDetail = {
  keyTakeaways: readonly string[];
  sections: readonly { title: string; body: string }[];
  comparisonRows?: readonly (readonly [string, string, string])[];
  tableTitle?: string;
  tableHeaders?: readonly [string, string, string];
  quoteBox?: string;
  expertQuote?: { quote: string; person: string; title: string; sourceName: string; sourceUrl: string };
  threatChart?: boolean;
  handoffGraphic?: boolean;
  accessibilityChart?: boolean;
  accessiblePathGraphic?: boolean;
  identityFraudChart?: boolean;
  verificationPathGraphic?: boolean;
  internalLinks?: readonly { label: string; href: string; note: string }[];
  relatedArticles?: readonly string[];
  externalBodyLink?: { label: string; href: string };
  banners?: readonly { label: string; title: string; body: string; href: string; linkText: string }[];
  faqs?: readonly { question: string; answer: string }[];
  sources?: readonly { name: string; url: string; note?: string }[];
};

const detailsBySlug = { ...blogDetails, ...todayBlogDetails, ...batchBlogDetails, ...run2BlogDetails, ...august11BlogDetails, ...august13BlogDetails } as Record<string, BlogDetail>;

export function generateStaticParams() { return allBlogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}` }, openGraph: { title: post.title, description: post.excerpt, url: `${siteUrl}/blog/${slug}`, type: 'article' } };
}

function sectionParagraphs(body: string) {
  const sentences = body.match(/(?:[^.!?]|\.(?=\d))+[.!?]+(?:["']|$)?/g)?.map((sentence) => sentence.trim()) ?? [body];
  if (sentences.length < 4) return [body];
  const paragraphs: string[] = [];
  for (let index = 0; index < sentences.length;) {
    const remaining = sentences.length - index;
    const size = remaining === 4 ? 2 : Math.min(3, remaining);
    paragraphs.push(sentences.slice(index, index + size).join(' '));
    index += size;
  }
  return paragraphs;
}

function ThreatChart() {
  return <section className="card visual-card" aria-labelledby="threat-chart-title"><h2 id="threat-chart-title">2026 global breach signals</h2><div className="visual-scroll" role="region" aria-label="Bar chart of three global breach signals" tabIndex={0}><svg className="article-visual" viewBox="0 0 760 360" role="img" aria-labelledby="chart-title chart-desc"><title id="chart-title">Three findings from the 2026 Verizon Data Breach Investigations Report</title><desc id="chart-desc">Software vulnerabilities start 31 percent of breaches. Ransomware appears in 48 percent of breaches. Mobile lures get a 40 percent higher click rate.</desc><line x1="190" y1="40" x2="190" y2="300" className="axis"/><line x1="190" y1="300" x2="710" y2="300" className="axis"/>{[[70,'Software vulnerabilities',31],[160,'Ransomware involvement',48],[250,'Mobile click uplift',40]].map(([y,label,value])=><g key={String(label)}><text x="18" y={Number(y)+25}>{label}</text><rect x="190" y={y} width={Number(value)*9} height="42" rx="8"/><text className="bar-value" x={205+Number(value)*9} y={Number(y)+27}>{value}%</text></g>)}</svg></div><p className="method-note">Units: percent. Method note: these are three separate global findings from Verizon's 2026 DBIR, not a combined scale and not Philippines-specific incident rates.</p></section>;
}

function HandoffGraphic() {
  const steps = [['1','Approve','Named owner and role'],['2','Open','One account per agent'],['3','Work','Ticket holds the record'],['4','Review','Logs and exceptions'],['5','Close','Revoke and attest']];
  return <section className="card visual-card" aria-labelledby="handoff-title"><h2 id="handoff-title">The access handoff path</h2><div className="visual-scroll" role="region" aria-label="Five step access lifecycle graphic" tabIndex={0}><svg className="article-visual" viewBox="0 0 900 250" role="img" aria-labelledby="flow-title flow-desc"><title id="flow-title">Access lifecycle for a Philippines customer support role</title><desc id="flow-desc">Approve, open, work, review, and close access in five documented steps.</desc>{steps.map(([n,title,note],i)=>{const x=22+i*176;return <g key={n}><rect className="flow-box" x={x} y="55" width="150" height="130" rx="18"/><circle cx={x+28} cy="83" r="17"/><text className="step-number" x={x+28} y="89" textAnchor="middle">{n}</text><text className="flow-title" x={x+18} y="126">{title}</text><text className="flow-note" x={x+18} y="153">{note}</text>{i<4?<path className="flow-arrow" d={`M ${x+150} 120 L ${x+174} 120`}/>:null}</g>})}</svg></div><p className="method-note">The ticket or case system carries the customer context. Passwords, MFA codes, screenshots, and local files do not move between agents.</p></section>;
}

function AccessibilityChart() {
  const data = [['WHO global estimate', 16], ['UK survey', 25], ['Australia survey', 21.4]] as const;
  return <section className="card visual-card" aria-labelledby="accessibility-chart-title"><h2 id="accessibility-chart-title">Disability prevalence planning signals</h2><div className="visual-scroll" role="region" aria-label="Bar chart of disability prevalence planning signals" tabIndex={0}><svg className="article-visual" viewBox="0 0 760 360" role="img" aria-labelledby="access-chart-title access-chart-desc"><title id="access-chart-title">Reported disability prevalence in three authoritative sources</title><desc id="access-chart-desc">The World Health Organization global estimate is 16 percent. The United Kingdom survey reports 25 percent. The Australia survey reports 21.4 percent.</desc><line x1="210" y1="40" x2="210" y2="300" className="axis"/><line x1="210" y1="300" x2="710" y2="300" className="axis"/>{data.map(([label,value],index)=>{const y=70+index*90;return <g key={label}><text x="18" y={y+25}>{label}</text><rect x="210" y={y} width={value*16} height="42" rx="8"/><text className="bar-value" x={225+value*16} y={y+27}>{value}%</text></g>})}</svg></div><p className="table-cue">On a small screen, swipe to see the full graphic.</p><p className="method-note">Units: percent of the population covered by each source. Method note: WHO published the global estimate in 2023, the UK figure covers survey year 2023 to 2024, and Australia measured 2022. Definitions, ages, and survey methods differ, so the bars are planning signals rather than a country ranking.</p></section>;
}

function AccessiblePathGraphic() {
  const steps = [['1','Notice','Ask what fails'],['2','Offer','Use another channel'],['3','Protect','Keep identity checks'],['4','Record','Save case context'],['5','Escalate','Assign the barrier']];
  return <section className="card visual-card" aria-labelledby="accessible-path-title"><h2 id="accessible-path-title">The accessible support path</h2><div className="visual-scroll" role="region" aria-label="Five step accessible support path graphic" tabIndex={0}><svg className="article-visual" viewBox="0 0 900 250" role="img" aria-labelledby="accessible-flow-title accessible-flow-desc"><title id="accessible-flow-title">Five steps for an accessible Philippines customer support case</title><desc id="accessible-flow-desc">Notice the barrier, offer a channel, protect the account, record the case, and escalate the defect.</desc>{steps.map(([n,title,note],i)=>{const x=22+i*176;return <g key={n}><rect className="flow-box" x={x} y="55" width="150" height="130" rx="18"/><circle cx={x+28} cy="83" r="17"/><text className="step-number" x={x+28} y="89" textAnchor="middle">{n}</text><text className="flow-title" x={x+18} y="126">{title}</text><text className="flow-note" x={x+18} y="153">{note}</text>{i<4?<path className="flow-arrow" d={`M ${x+150} 120 L ${x+174} 120`}/>:null}</g>})}</svg></div><p className="table-cue">On a small screen, swipe to see the full graphic.</p><p className="method-note">The agent keeps the customer on a workable path while normal identity, privacy, and approval rules remain in place. The client owner receives product, document, or channel defects.</p></section>;
}

function IdentityFraudChart() {
  const data = [['Investment scams', 5.7], ['Imposter scams', 2.95], ['Business and job scams', 0.7506]] as const;
  return <section className="card visual-card" aria-labelledby="identity-fraud-chart-title"><h2 id="identity-fraud-chart-title">Reported 2024 fraud losses by category</h2><div className="visual-scroll" role="region" aria-label="Bar chart of reported US fraud losses in three categories" tabIndex={0}><svg className="article-visual" viewBox="0 0 820 360" role="img" aria-labelledby="identity-chart-title identity-chart-desc"><title id="identity-chart-title">Reported US fraud losses in three FTC categories for 2024</title><desc id="identity-chart-desc">Investment scams account for 5.7 billion dollars, imposter scams for 2.95 billion dollars, and business and job opportunity scams for 750.6 million dollars in reported losses.</desc><line x1="225" y1="40" x2="225" y2="300" className="axis"/><line x1="225" y1="300" x2="755" y2="300" className="axis"/>{data.map(([label,value],index)=>{const y=70+index*90;return <g key={label}><text x="18" y={y+25}>{label}</text><rect x="225" y={y} width={value*82} height="42" rx="8"/><text className="bar-value" x={240+value*82} y={y+27}>${value < 1 ? '0.75' : value}B</text></g>})}</svg></div><p className="table-cue">On a small screen, swipe to see the full chart.</p><p className="method-note">Units: billions of US dollars in losses reported to the FTC for 2024. Method note: the categories are separate planning signals, not all fraud losses, verified losses, Philippines figures, or incident frequency for staffing providers. The FTC released the data on March 10, 2025.</p></section>;
}

function VerificationPathGraphic() {
  const steps = [['1','Name','Requested action'],['2','Check','Approved factors'],['3','Pause','Any mismatch'],['4','Review','Named owner'],['5','Record','Decision and notice']];
  return <section className="card visual-card" aria-labelledby="verification-path-title"><h2 id="verification-path-title">The identity verification path</h2><div className="visual-scroll" role="region" aria-label="Five step customer identity verification graphic" tabIndex={0}><svg className="article-visual" viewBox="0 0 900 250" role="img" aria-labelledby="verify-flow-title verify-flow-desc"><title id="verify-flow-title">Five steps for a Philippines customer support identity check</title><desc id="verify-flow-desc">Name the action, check approved factors, pause on a mismatch, route to a named reviewer, and record the decision and notice.</desc>{steps.map(([n,title,note],i)=>{const x=22+i*176;return <g key={n}><rect className="flow-box" x={x} y="55" width="150" height="130" rx="18"/><circle cx={x+28} cy="83" r="17"/><text className="step-number" x={x+28} y="89" textAnchor="middle">{n}</text><text className="flow-title" x={x+18} y="126">{title}</text><text className="flow-note" x={x+18} y="153">{note}</text>{i<4?<path className="flow-arrow" d={`M ${x+150} 120 L ${x+174} 120`}/>:null}</g>})}</svg></div><p className="table-cue">On a small screen, swipe to see the full graphic.</p><p className="method-note">The trusted record, not the caller's urgency, controls the path. A Filipino agent runs the approved check and sends exceptions to the named client owner.</p></section>;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allBlogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const detail = detailsBySlug[slug];
  const url = `${siteUrl}/blog/${post.slug}`;
  const image = 'image' in post ? post.image : site.heroImage;
  const published = 'published' in post ? post.published : undefined;
  const schema = { '@context': 'https://schema.org', '@graph': [{ '@type': 'BlogPosting', headline: post.title, description: post.excerpt, url, mainEntityOfPage: url, publisher: { '@type': 'Organization', name: site.brand, url: siteUrl }, ...(published ? { datePublished: published } : {}), ...(detail?.sources?.length ? { citation: detail.sources.map((source) => source.url) } : {}), ...(detail?.sections?.length ? { hasPart: detail.sections.map((section, index) => ({ '@type': 'WebPageElement', position: index + 1, name: section.title })) } : {}) }, ...(detail?.faqs?.length ? [{ '@type': 'FAQPage', mainEntity: detail.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }] : []), { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: url }] }] };
  const headers = detail?.tableHeaders ?? ['Area','Question to ask','Good answer'];
  return <><Header/><main><article className="section"><div className="container article-shell"><JsonLd data={schema}/><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p>{published ? <time dateTime={published}>Published {formatReaderDate(published)}</time> : null}<div className='blog-standards-strip' aria-label='Article standards'><span>Source-backed guidance</span><span>Contextual internal links</span><span>Top, middle, and bottom CTAs</span></div>{detail ? <><section className="card"><h2>Key takeaways</h2><ul>{detail.keyTakeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>{detail.sections.map((section,index) => <div key={section.title}><section className="card"><h2>{section.title}</h2>{sectionParagraphs(section.body).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index===2&&detail.externalBodyLink?<p><a href={detail.externalBodyLink.href} target="_blank" rel="noopener noreferrer">{detail.externalBodyLink.label}</a> provides the reference framework for organizing the safeguards described here.</p>:null}</section>{index===1&&detail.banners?.[0]?<ArticleBanner banner={detail.banners[0]}/>:null}{index===4&&detail.banners?.[1]?<ArticleBanner banner={detail.banners[1]}/>:null}</div>)}{detail.comparisonRows?.length?<section className="card table-card"><h2>{detail.tableTitle ?? 'Provider call scorecard'}</h2><div className="table-scroll" role="region" aria-label={detail.tableTitle ?? 'Provider call scorecard'} tabIndex={0}><table><thead><tr>{headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{detail.comparisonRows.map(([a,b,c])=><tr key={a}><td><b>{a}</b></td><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div><p className="table-cue">On a small screen, swipe the table to see every column.</p></section>:null}{detail.relatedArticles?.length?<section className="card"><h2>Related articles</h2><ul className="resource-links">{detail.relatedArticles.slice(0,3).map(slug=><li key={slug}><a href={`/blog/${slug}`}>{slug.replaceAll('-', ' ')}</a></li>)}</ul></section>:null}{detail.threatChart?<ThreatChart/>:null}{detail.handoffGraphic?<HandoffGraphic/>:null}{detail.accessibilityChart?<AccessibilityChart/>:null}{detail.accessiblePathGraphic?<AccessiblePathGraphic/>:null}{detail.identityFraudChart?<IdentityFraudChart/>:null}{detail.verificationPathGraphic?<VerificationPathGraphic/>:null}{detail.expertQuote?<section className="card expert-quote"><h2>Expert view</h2><blockquote>"{detail.expertQuote.quote}"</blockquote><p><b>{detail.expertQuote.person}</b>, {detail.expertQuote.title}, in <a href={detail.expertQuote.sourceUrl}>{detail.expertQuote.sourceName}</a>.</p></section>:null}{detail.quoteBox?<section className="card"><h2>Copy-ready handoff note</h2><blockquote>{detail.quoteBox}</blockquote></section>:null}{detail.internalLinks?.length?<section className="card"><h2>Plan the role around the work</h2><ul className="resource-links">{detail.internalLinks.map(link=><li key={link.href}><a href={link.href}>{link.label}</a>: {link.note}</li>)}</ul></section>:null}{detail.faqs?.length?<section className="card"><h2>Common questions</h2>{detail.faqs.map(faq=><div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>:null}{detail.banners?.[2]?<ArticleBanner banner={detail.banners[2]}/>:null}{detail.sources?.length?<section className="card sources-card"><h2>Sources</h2><ol>{detail.sources.map(source=><li key={source.url}><a href={source.url}>{source.name}</a>{source.note?`: ${source.note}`:''}</li>)}</ol></section>:null}</>:<section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager. <a href="https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm" target="_blank" rel="noopener noreferrer">International Labour Organization guidance on remote work arrangements</a> reinforces the need for clear expectations, communication rhythms, and accountable handoffs.</p></section>}</div><aside className='article-rotation-banner article-rotation-banner-top' data-article-banner='true'><p className='eyebrow'>Role planning checkpoint</p><h2>Turn this guide into a clear role brief</h2><p>Share the work queue, tools, review owner, and approval limits before adding outside support.</p><a className='btn' href='/contact-us'>Contact Us</a></aside><aside className='article-rotation-banner article-rotation-banner-bottom' data-article-banner='true'><p className='eyebrow'>Ready to scope the role?</p><h2>Build the first support lane before hiring</h2><p>We can help turn the article into a practical staffing brief with tasks, access rules, and review checkpoints.</p><a className='btn' href='/contact-us'>Contact Us</a></aside></article></main><Footer/></>;
}

function ArticleBanner({banner}:{banner:{label:string;title:string;body:string;href:string;linkText:string}}){return <aside className="article-banner" aria-label={banner.label}><p className="eyebrow light">{banner.label}</p><h2>{banner.title}</h2><p>{banner.body}</p><a className="btn primary" href={banner.href}>{banner.linkText}</a></aside>}
