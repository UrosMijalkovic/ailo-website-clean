/**
 * In-memory rate limiter for API routes
 * Limits requests to 5 per IP per minute
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

// Cleanup old entries periodically (1% chance per request)
function cleanupOldEntries() {
  if (Math.random() > 0.01) return;

  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  cleanupOldEntries();

  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // No record or expired window - start fresh
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  // Check if limit exceeded
  if (record.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((record.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  // Increment and allow
  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS - record.count };
}

/**
 * Get client IP from request headers
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  return "unknown";
}
