<script lang="ts">
  import { page } from '$app/stores';
	import Header from '$lib/shared/components/header/header.svelte';

	let links = [
		{ href: '/', text: 'Home', active: false },
    { href: '/courts', text: 'Courts', active: false },
	];

  $: links = links.map((link) => {
    return {
      ...link,
      active: link.href === $page.route.id
    };
  });

</script>

<div class="app">
  <Header bind:links />
  <slot />
</div>


<style lang="scss">
  @import '../styles/index.scss';
</style>




