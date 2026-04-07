<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    await invalidateAll(); // re-runs load() → data.user clears to null
    goto('/');
  }
</script>







  <button  onclick={logout} class="text-gray-500 text-xs inline-flex items-center gap-2.5 py-1   px-5 rounded-md  shadow-sm shadow-gray-500/75"> Log Out of Your Account   </button>
