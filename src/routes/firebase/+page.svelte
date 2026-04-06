<!-- src/routes/test/+page.svelte -->
<script lang="ts">
  let { data } = $props();
</script>

<h1>Training Plan</h1>
<p>Logged in as: {data.user?.email}</p>

{#if data.data}
  <pre>{JSON.stringify(data.data, null, 2)}</pre>
{:else}
  <p>No data found</p>
{/if}
