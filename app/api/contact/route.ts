import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';
import { BoundedWindowLimiter, combineCountryCode, isAllowedOrigin, PayloadTooLargeError, readBoundedText } from '../../request-guards.mjs';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailLimiter = new BoundedWindowLimiter({ windowMs: 15 * 60_000, maxKeys: 1_024 });
const text = (form: URLSearchParams, key: string, max = MAX_FIELD_LENGTH) => (form.get(key) || '').trim().slice(0, max);

function errorPage(request: NextRequest, status: number) {
  if (request.headers.get('accept')?.includes('application/json')) return NextResponse.json({ ok: false }, { status, headers: { 'cache-control': 'no-store' } });
  return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>', { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}
function accepted(request: NextRequest) {
  if (request.headers.get('accept')?.includes('application/json')) return NextResponse.json({ ok: true }, { status: 200, headers: { 'cache-control': 'no-store' } });
  const response = NextResponse.redirect(new URL('/thank-you?lead=accepted', request.url), 303);
  response.headers.set('cache-control', 'no-store');
  return response;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const mediaType = contentType.split(';', 1)[0].trim().toLowerCase();
  if (!isAllowedOrigin(request.headers.get('origin'), request.nextUrl.origin) || mediaType !== 'application/x-www-form-urlencoded') return errorPage(request, 400);
  let form: URLSearchParams;
  try { form = new URLSearchParams(await readBoundedText(request, MAX_BODY_BYTES)); }
  catch (error) { return errorPage(request, error instanceof PayloadTooLargeError ? 413 : 400); }
  if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) return errorPage(request, 400);

  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const name = `${first} ${last}`.trim();
  const email = text(form, 'email', 320).toLowerCase();
  const localPhone = text(form, 'phone', 100);
  const countryCode = text(form, 'countryCode', 10);
  const phone = combineCountryCode(countryCode, localPhone);
  const business = text(form, 'company', 300) || text(form, 'companyName', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions') || text(form, 'role');
  const referral = text(form, 'referral', 300) || text(form, 'howTheyHeard', 300);
  const referralSpecify = text(form, 'referralSpecify', 300);
  const userMessage = text(form, 'message');
  if (!first || !last || !EMAIL_RE.test(email) || !phone || !business || !companySize || !positions || !referral || !userMessage) return errorPage(request, 422);
  if (referral === 'Other' && !referralSpecify) return errorPage(request, 422);
  if (emailLimiter.hit(email, 3)) return errorPage(request, 429);

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', request.url).toString();
  const referralLabel = [referral, referralSpecify].filter(Boolean).join(': ');
  const message = [userMessage, positions, companySize, text(form, 'website')].filter(Boolean).join('\n');
  const payload = { full_name: name, email, phone, company_name: business, message, how_they_heard: referralLabel, client_event_id: crypto.randomUUID(), attribution: { source_page: pageUrl, landing_page: pageUrl, referrer: request.headers.get('referer') || '', page_journey: ['Contact form'] } };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorPage(request, 503);
  try {
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', 'x-lead-token': token }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(12_000) });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorPage(request, 502);
  } catch { return errorPage(request, 502); }
  void sendLeadFallbackToMattermost({ name, email, phone, business, message, companySize, positions, referral: referralLabel, pageUrl, userAgent: request.headers.get('user-agent') || '' });
  return accepted(request);
}
