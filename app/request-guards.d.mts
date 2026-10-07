export class PayloadTooLargeError extends Error {}
export function isAllowedOrigin(origin: string | null, runtimeOrigin: string): boolean;
export function combineCountryCode(countryCode: string, localPhone: string): string;
export function readBoundedText(request: Request, maxBytes: number): Promise<string>;
export class BoundedWindowLimiter {
  constructor(options: { windowMs: number; maxKeys: number });
  readonly size: number;
  readonly storedHits: number;
  hit(key: string, maxHits: number, now?: number): boolean;
}
