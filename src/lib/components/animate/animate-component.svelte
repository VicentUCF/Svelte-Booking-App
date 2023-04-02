<script lang="ts">
	import { fade } from 'svelte/transition';
  let visible = false;
</script>

<!-- checkbox  -->
<input type="checkbox" bind:checked={visible} />

{#if visible}
  <div in:fade="{{duration: 4000}}">Hola mundo</div>
{/if}
