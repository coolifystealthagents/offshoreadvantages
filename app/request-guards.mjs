export class PayloadTooLargeError extends Error {
  constructor() { super('Payload too large'); this.name = 'PayloadTooLargeError'; }
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
  hit(key, maxHits, now = Date.now()) {
    const existing = this.#entries.get(key);
    if (!existing && this.#entries.size >= this.#maxKeys) return true;
    const recent = (existing || []).filter((timestamp) => timestamp > now - this.#windowMs);
    recent.push(now);
    this.#entries.delete(key); this.#entries.set(key, recent);
    return recent.length > maxHits;
  }
}
