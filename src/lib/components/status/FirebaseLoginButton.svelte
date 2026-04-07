<!-- FirebaseLoginButton.svelte -->
<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { auth } from '$lib/firebase/client';
	import { signInWithEmailAndPassword } from 'firebase/auth';

  async function login() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, 'jim@home.com', '123456');
      const idToken = await userCredential.user.getIdToken();

      const res = await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });

      if (res.ok) {
        await invalidateAll(); // re-runs load() → data.user is fresh
        goto('/test');
      }
    } catch (e) {
      console.error('Login failed:', e);
    }
  }
</script>







   <button onclick={login} class="text-slate-500 text-xs inline-flex items-center gap-2.5 py-1  px-5 rounded-md  shadow-sm shadow-slate-500/75"> Customer Login </button>








