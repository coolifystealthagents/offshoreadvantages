'use client';

import { useEffect } from 'react';

/*
 * Mobile-only sticky contents control for article templates that keep their
 * desktop ToC in a sidebar but do not provide a compact control on small
 * screens. Reads the rendered H2s, assigns ids, and inserts one disclosure at
 * the top of the article. Hidden above 900px.
 */
export default function Oct22MobileToc() {
  useEffect(() => {
    const main = document.querySelector('main') || document.body;
    const candidate = main.querySelector('article');
    // Some templates put the H1 in a hero outside the article body. Mount the
    // control against the container that actually holds the title.
    const article = candidate && candidate.querySelector('h1') ? candidate : main;
    const headings = Array.from(article.querySelectorAll<HTMLElement>('h2')).filter((h) => h.offsetParent !== null);
    if (headings.length < 2) return;
    headings.forEach((h, i) => {
      if (!h.id) h.id = `o22-${i + 1}`;
      h.style.scrollMarginTop = '110px';
    });
    let details = article.querySelector<HTMLDetailsElement>('details[data-o22-mobile="true"]');
    if (!details) {
      details = document.createElement('details');
      details.dataset.o22Mobile = 'true';
      details.className = 'o22-mobile';
      article.insertBefore(details, article.firstElementChild);
    }
    const header = document.querySelector<HTMLElement>('header, .site-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    details.style.top = `${Math.round(headerHeight + 8)}px`;
    details.innerHTML = `<summary>Contents</summary><nav aria-label="Table of contents mobile"></nav>`;
    const nav = details.querySelector('nav')!;
    headings.forEach((h) => {
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.textContent = (h.textContent || '').trim();
      nav.appendChild(a);
    });
  }, []);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
html,body{overflow-x:clip}
.o22-mobile{display:none}
@media(max-width:900px){
  .o22-mobile{display:block;position:sticky;top:72px;z-index:50;margin:0 0 16px auto;width:fit-content;max-width:calc(100% - 1rem);background:#fff;color:#17202a;border:1px solid #17202a;border-radius:12px;padding:8px 12px;box-shadow:0 8px 20px rgba(0,0,0,.16)}
  .o22-mobile>summary{cursor:pointer;font:800 13px Arial,sans-serif;list-style:none;min-height:30px}
  .o22-mobile nav{max-height:60vh;overflow:auto;margin-top:6px;border-top:1px solid #e5e7eb;padding-top:4px}
  .o22-mobile a{display:block;padding:9px 0;color:#17202a;text-decoration:none;font:500 14px/1.35 Arial,sans-serif;border-top:1px solid #eee}
}
`,
      }}
    />
  );
}
