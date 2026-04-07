<script lang="ts">
  import Appbar from '$lib/components/appbar/Appbar.svelte';
  import type { LayoutData } from './$types';

  let { data, children }: { data: LayoutData, children: any } = $props();

  const isAuthenticated = $derived(data.user !== null && data.user !== undefined);
</script>

<Appbar {isAuthenticated} />
{@render children()}
