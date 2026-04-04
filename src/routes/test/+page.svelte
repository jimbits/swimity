<script lang="ts">
  let { data } = $props();   // Svelte 5 syntax

  $effect(() => {
    console.log('Browser RTDB data:', data);
  });
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
