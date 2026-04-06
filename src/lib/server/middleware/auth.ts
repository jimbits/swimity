// src/lib/server/middleware/auth.ts
import { adminAuth } from '$lib/server/firebase/admin';
import type { RequestEvent } from '@sveltejs/kit';

export async function verifyAuth(event: RequestEvent): Promise<void> {
  const session = event.cookies.get('session');

  // Default to null — unauthenticated
  event.locals.user = null;

  if (!session) return;

  try {
    const decoded = await adminAuth.verifyIdToken(session);

    // Attach verified user data to locals
    event.locals.user = {
      uid: decoded.uid,
      email: decoded.email ?? null,
    };
  } catch (e) {
    // Token was invalid or expired — treat as logged out
    console.warn('Auth verification failed:', e);
    event.locals.user = null;
  }
}
