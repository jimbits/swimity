<script>
	import FirebaseLoginButton from "../status/FirebaseLoginButton.svelte";
	import FirebaseLogoutButton from "../status/FirebaseLogoutButton.svelte";

   let {isAuthenticated} = $props()
</script>

<nav class="  py-4 px-6 "  >
<ul class="flex justify-end ">
 {#if  isAuthenticated}
 <FirebaseLogoutButton/>
 {:else}
 <FirebaseLoginButton/>
 {/if}

</ul>
</nav>
