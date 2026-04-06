/*
 When moving to production I need to use Firebase Session Cookie
 Use: adminAuth.createSessionCookie()

 -  Longer lived sessions (up to 2 weeks) that you control
 - The ability to revoke a session server-side if an account is compromised
 - A token that is purpose-built for sessions, not just auth verification

*/


// src/routes/api/auth/session/+server.ts
import { adminAuth } from '$lib/server/firebase/admin';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
  const { idToken } = await request.json();

  // Verify the token is legitimate using the Admin SDK
  await adminAuth.verifyIdToken(idToken);

  // Set it as an httpOnly cookie — JS cannot read this
  cookies.set('session', idToken, {
    path: '/',
    httpOnly: true,
    secure: false,     // set true in production (requires HTTPS)
    sameSite: 'strict',
    maxAge: 60 * 60    // 1 hour
  });

  return json({ status: 'ok' });
};
