import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  const cloudflareProto = (() => {
    try {
      const visitor = JSON.parse(request.headers.get('cf-visitor') ?? '{}') as { scheme?: string };
      return visitor.scheme;
    } catch {
      return undefined;
    }
  })();
  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase();
  if (forwardedProto === 'http' || cloudflareProto === 'http' || host === 'www.offshoreadvantages.com') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.hostname = 'offshoreadvantages.com';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
