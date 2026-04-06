// src/routes/test/+page.server.ts
import { adminDb } from '$lib/server/firebase/admin';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
  // No session — send back to login
  if (!locals.user) {
    throw redirect(303, '/login');
  }

  const snapshot = await adminDb.ref('training_plan').get();

  if (snapshot.exists()) {
    return {
      data: snapshot.val(),
      user: locals.user
    };
  }

  return { data: null, user: locals.user };
};
