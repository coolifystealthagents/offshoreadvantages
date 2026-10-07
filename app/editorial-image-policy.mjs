const genericEditorialFallbacks = new Set([
  '/philippines-team.jpg',
  '/research/research-default.svg',
  '/blog-batch-2026-08-10.svg',
]);

export const EDITORIAL_IMAGE_CACHE_CONTROL = 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400';

export function findEditorialRecord(slug, records) {
  return records.find((item) => item.slug === slug);
}

export function resolveEditorialImagePolicy({ slug, title, image }) {
  const usesGenericFallback = !image || genericEditorialFallbacks.has(image);
  return {
    src: usesGenericFallback ? `/editorial-image/${encodeURIComponent(slug)}` : image,
    alt: `${title} — editorial guide illustration`,
  };
}

export function imageResponseOptions() {
  return {
    width: 1200,
    height: 630,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': EDITORIAL_IMAGE_CACHE_CONTROL,
      'X-Content-Type-Options': 'nosniff',
    },
  };
}
