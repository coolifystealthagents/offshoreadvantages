import { ImageResponse } from 'next/og';
import { allBlogPosts } from '../../data';
import { researchPosts } from '../../fleet-data';
import { findEditorialRecord, imageResponseOptions } from '../../editorial-image-policy.mjs';

const PUBLIC_ORIGIN = 'https://offshoreadvantages.com';

const hash = (value: string) => {
  let result = 2166136261;
  for (const character of value) {
    result ^= character.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
};

const palettes = [
  ['#071f2b', '#087f85', '#67e4e8'],
  ['#071c4b', '#143b8f', '#b7f34a'],
  ['#17352f', '#0b765f', '#f2c14e'],
  ['#382c5b', '#6c55a3', '#ffb86b'],
  ['#3b2433', '#9b476c', '#ffd166'],
] as const;

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const requestUrl = new URL(request.url);
  if (requestUrl.search) {
    return Response.redirect(new URL(requestUrl.pathname, PUBLIC_ORIGIN), 308);
  }
  const { slug } = await params;
  const canonicalPath = `/editorial-image/${encodeURIComponent(slug)}`;
  if (requestUrl.pathname !== canonicalPath) return Response.redirect(new URL(canonicalPath, PUBLIC_ORIGIN), 308);
  const record = findEditorialRecord(slug, [...allBlogPosts, ...researchPosts]);
  if (!record) return new Response(null, { status: 404, headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' } });

  const seed = hash(slug);
  const palette = palettes[seed % palettes.length];
  const rotation = seed % 360;
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]})` }}>
      <div style={{ position: 'absolute', width: 560, height: 560, border: `46px solid ${palette[2]}`, borderRadius: seed % 2 ? 110 : 280, opacity: 0.23, transform: `rotate(${rotation}deg)` }} />
      <div style={{ position: 'absolute', width: 300, height: 300, border: `30px solid ${palette[2]}`, borderRadius: seed % 3 ? 150 : 48, opacity: 0.2, transform: `rotate(${-rotation}deg)` }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 420, padding: '24px 42px', borderRadius: 60, background: palette[2], color: palette[0], fontSize: 30, fontWeight: 800, letterSpacing: 2 }}>OFFSHORE ADVANTAGES</div>
    </div>,
    imageResponseOptions(),
  );
}
