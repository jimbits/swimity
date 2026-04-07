


<script lang="ts">

let {isAuthenticated} = $props()
</script>


{#if isAuthenticated}
    <div class="light in"></div>
  {:else }
  <div class="light out"></div>
{/if}









<style>

  .light{
    width: 0.5rem;
   height:0.5rem;
   border-radius: 100%;
   display:inline-block;

  }
  .out{
   background-color: red;
   box-shadow: 0 0 3px 1px rgb(238, 28, 28);

  }
    .in{
   background-color: rgb(35, 226, 35);
   box-shadow: 0 0 3px 1px rgb(35, 226, 35);
  }
</style>
