import { allBlogPosts, site } from '../data';
import { fleetServices, researchPosts, postsPerPage } from '../fleet-data';

export function GET() {
  const base = `https://${site.domain.toLowerCase()}`;
  const pages = Math.max(1, Math.ceil(allBlogPosts.length / postsPerPage));
  const paths = [
    '',
    '/services',
    '/blog',

    '/research',
    '/contact-us',
    '/privacy',
    '/terms',
    '/cancellation-policy',
    ...fleetServices.map((service) => `/services/${service.slug}`),
    ...allBlogPosts.map((post) => `/blog/${post.slug}`),
    ...Array.from({ length: Math.max(0, pages - 1) }, (_, index) => `/blog/page/${index + 2}`),
    ...researchPosts.map((post) => `/research/${post.slug}`),
  ];
  const body = Array.from(new Set(paths))
    .map((path) => `<url><loc>${base}${path}</loc></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'content-type': 'application/xml' } },
  );
}
