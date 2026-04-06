// src/routes/test/+page.server.ts
import { adminDb } from '$lib/server/firebase/admin';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {

  // 1. Check if hooks verified a user — if not, send back to login
  if (!locals.user) {
    redirect(303, '/');
  }

  // 2. Fetch this user's data from Realtime DB using their uid
  const snapshot = await adminDb
    .ref(`users/${locals.user.uid}`)
    .get();

  // 3. Return data to +page.svelte
  return {
    user: locals.user,
    userData: snapshot.val()
  };
};
