import { type NextRequest } from 'next/server';
import { BoundedWindowLimiter, PayloadTooLargeError, readBoundedText } from '../../request-guards.mjs';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'offshore-advantages';
const MAX_BODY_BYTES = 256_000;
const PUBLIC_ORIGINS = new Set(['https://offshoreadvantages.com', 'https://www.offshoreadvantages.com']);
const limiter = new BoundedWindowLimiter({ windowMs: 60_000, maxKeys: 1 });
export const runtime = 'nodejs';

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  if (origin === request.nextUrl.origin || PUBLIC_ORIGINS.has(origin)) return true;
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return false;
  try { return origin === new URL(configured).origin; } catch { return false; }
}

function errorResponse(status: number) {
  return Response.json({ status: 'error' }, { status, headers: { 'Cache-Control': 'no-store' } });
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const mediaType = contentType.split(';', 1)[0].trim().toLowerCase();
  if (!isAllowedOrigin(request)) return errorResponse(403);
  if (mediaType !== 'application/json') return errorResponse(415);
  if (limiter.hit('all', 600)) return errorResponse(429);
  try {
    const payload = JSON.parse(await readBoundedText(request, MAX_BODY_BYTES));
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return errorResponse(422);
    for (const key of ['siteId', 'site_id', 'site']) {
      if (key in payload && payload[key] !== SITE_ID) return errorResponse(422);
    }
    const upstream = await fetch(TRACKING_API, { method: 'POST', headers: { 'Content-Type': 'application/json', 'User-Agent': request.headers.get('user-agent') || '', 'Accept-Language': request.headers.get('accept-language') || '' }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(10_000) });
    const upstreamBody = [204, 205, 304].includes(upstream.status) ? null : await upstream.text();
    return new Response(upstreamBody, { status: upstream.status, headers: { 'Content-Type': upstream.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    if (error instanceof PayloadTooLargeError) return errorResponse(413);
    return errorResponse(400);
  }
}
