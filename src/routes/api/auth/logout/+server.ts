// src/routes/api/auth/logout/+server.ts
import { adminAuth } from '$lib/server/firebase/admin';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ cookies, locals }) => {

  // 1. Revoke the Firebase session server-side if a user exists
  if (locals.user) {
    await adminAuth.revokeRefreshTokens(locals.user.uid);
  }

  // 2. Delete the session cookie
  cookies.delete('session', { path: '/' });

  return json({ status: 'ok' });
};
