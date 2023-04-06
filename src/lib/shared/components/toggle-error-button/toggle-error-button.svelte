<script lang="ts">
	let showErrors = false;
  let errors = [
    { message: 'Error 1' },
    { message: 'Error 2' },
    { message: 'Error 3' },
  ];
</script>

<!-- do a toggle button onclick shows errors message -->
<button on:click={() => (showErrors = !showErrors)}>Toggle</button>

<!-- show errors if showErrors is true -->
{#if showErrors }
  {#each errors as error}
    <div>{error.message}</div>
  {/each}
{/if}
