export class PayloadTooLargeError extends Error {
  constructor() { super('Payload too large'); this.name = 'PayloadTooLargeError'; }
}
const PUBLIC_ORIGINS = new Set([
  'https://offshoreadvantages.com',
  'https://www.offshoreadvantages.com',
]);
export function isAllowedOrigin(origin, runtimeOrigin) {
  if (!origin) return false;
  try {
    const normalized = new URL(origin).origin;
    if (PUBLIC_ORIGINS.has(normalized)) return true;
    const runtime = new URL(runtimeOrigin);
    return ['localhost', '127.0.0.1', '::1'].includes(runtime.hostname) && normalized === runtime.origin;
  } catch {
    return false;
  }
}
export function combineCountryCode(countryCode, localPhone) {
  const code = String(countryCode || '').trim();
  const phone = String(localPhone || '').trim();
  return code && !phone.startsWith(code) ? `${code} ${phone}`.trim() : phone;
}
export async function readBoundedText(request, maxBytes) {
  const declared = request.headers.get('content-length');
  if (declared !== null) {
    const length = Number(declared);
    if (!Number.isFinite(length) || length < 0 || length > maxBytes) throw new PayloadTooLargeError();
  }
  if (!request.body) return '';
  const reader = request.body.getReader();
  const chunks = [];
  let total = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
      if (total > maxBytes) { await reader.cancel(); throw new PayloadTooLargeError(); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}
export class BoundedWindowLimiter {
  #entries = new Map(); #windowMs; #maxKeys;
  constructor({ windowMs, maxKeys }) { this.#windowMs = windowMs; this.#maxKeys = maxKeys; }
  get size() { return this.#entries.size; }
  get storedHits() {
    let count = 0;
    for (const timestamps of this.#entries.values()) count += timestamps.length;
    return count;
  }
  hit(key, maxHits, now = Date.now()) {
    const cutoff = now - this.#windowMs;
    let existing = this.#entries.get(key);
    if (!existing && this.#entries.size >= this.#maxKeys) {
      for (const [storedKey, timestamps] of this.#entries) {
        const active = timestamps.filter((timestamp) => timestamp > cutoff);
        if (active.length) this.#entries.set(storedKey, active);
        else this.#entries.delete(storedKey);
      }
      if (this.#entries.size >= this.#maxKeys) return true;
      existing = this.#entries.get(key);
    }
    const recent = (existing || []).filter((timestamp) => timestamp > cutoff);
    if (recent.length >= maxHits) {
      this.#entries.delete(key);
      this.#entries.set(key, recent.slice(-maxHits));
      return true;
    }
    recent.push(now);
    this.#entries.delete(key); this.#entries.set(key, recent);
    return false;
  }
}
