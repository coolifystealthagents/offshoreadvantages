"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };
type RelatedItem = { href: string; label: string };

export function ArticleSidebar({ items, published, readingLabel, related = [], sourceCount, kind }: { items:TocItem[]; published?:string; readingLabel?:string; related?:RelatedItem[]; sourceCount?:number; kind:'Guide'|'Research' }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const elements = items.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-112px 0px -62% 0px", threshold: [0, .2, .8] });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);
  return <aside className="article-sidebar" aria-label="Article navigation and details">
    <nav aria-labelledby="toc-title"><h2 id="toc-title">Table of contents</h2><ol>{items.map(item=><li key={item.id}><a className={active===item.id?'active':undefined} aria-current={active===item.id?'location':undefined} href={`#${item.id}`}>{item.label}</a></li>)}</ol></nav>
    <section className="sidebar-meta"><h2>About this {kind.toLowerCase()}</h2>{published?<p><strong>Published</strong><br/>{published}</p>:null}{readingLabel?<p><strong>Reading time</strong><br/>{readingLabel}</p>:null}{typeof sourceCount==='number'?<p><strong>Sources</strong><br/>{sourceCount} cited references</p>:null}<p><strong>Publisher</strong><br/>Offshore Advantages</p></section>
    {related.length?<section className="sidebar-related"><h2>Related reading</h2>{related.slice(0,3).map(item=><a href={item.href} key={item.href}>{item.label}</a>)}</section>:null}
    <a className="sidebar-cta" href="/contact-us"><strong>Plan a Philippines role</strong><span>Bring the tasks, tools, schedule, and approval limits.</span></a>
  </aside>;
}
