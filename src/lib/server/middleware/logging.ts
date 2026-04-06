
// src/lib/server/middleware/logging.ts
import type { RequestEvent } from '@sveltejs/kit';

export function logRequest(event: RequestEvent): void {
  const { method } = event.request;
  const { pathname } = event.url;
  const timestamp = new Date().toISOString();

  console.log(`\n--- Incoming Request ---`);
  console.log(`[${timestamp}] ${method} ${pathname}`);
}

export function logLocals(event: RequestEvent): void {
  console.log(`\n--- Locals After Auth ---`);
  console.log(`user:`, event.locals.user);
  console.log(`------------------------\n`);
}
