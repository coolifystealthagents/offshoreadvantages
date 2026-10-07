import { type NextRequest } from 'next/server';
import { BoundedWindowLimiter, PayloadTooLargeError, readBoundedText } from '../../request-guards.mjs';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const SITE_ID = 'offshore-advantages';
const MAX_BODY_BYTES = 256_000;
const limiter = new BoundedWindowLimiter({ windowMs: 60_000, maxKeys: 1 });
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const contentType = request.headers.get('content-type') || '';
  if (origin !== request.nextUrl.origin) return Response.json({ status: 'error' }, { status: 403 });
  if (!contentType.toLowerCase().startsWith('application/json')) return Response.json({ status: 'error' }, { status: 415 });
  if (limiter.hit('all', 600)) return Response.json({ status: 'error' }, { status: 429 });
  try {
    const payload = JSON.parse(await readBoundedText(request, MAX_BODY_BYTES));
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return Response.json({ status: 'error' }, { status: 422 });
    for (const key of ['siteId', 'site_id', 'site']) {
      if (key in payload && payload[key] !== SITE_ID) return Response.json({ status: 'error' }, { status: 422 });
    }
    const upstream = await fetch(TRACKING_API, { method: 'POST', headers: { 'Content-Type': 'application/json', 'User-Agent': request.headers.get('user-agent') || '', 'Accept-Language': request.headers.get('accept-language') || '' }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(10_000) });
    const upstreamBody = [204, 205, 304].includes(upstream.status) ? null : await upstream.text();
    return new Response(upstreamBody, { status: upstream.status, headers: { 'Content-Type': upstream.headers.get('content-type') || 'application/json', 'Cache-Control': 'no-store' } });
  } catch (error) {
    if (error instanceof PayloadTooLargeError) return Response.json({ status: 'error' }, { status: 413 });
    return Response.json({ status: 'error' }, { status: 400 });
  }
}
