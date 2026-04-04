import { rtdb } from '$lib/firebase/client';
import { get, ref } from 'firebase/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const snapshot = await get(ref(rtdb, '/'));   // '/' = root, change to your node

  if (snapshot.exists()) {
    const data = snapshot.val();
    console.log('RTDB data:', JSON.stringify(data, null, 2));  // shows in terminal
    return { data };
  }

  console.log('No data found');
  return { data: null };
};
