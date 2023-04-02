<script lang="ts">
  import { page } from '$app/stores';
	import Header from '$lib/components/header/header.svelte';

	let links = [
		{ href: '/', text: 'Home', active: false },
		{ href: '/about', text: 'About', active: false }
	];

  $: links = links.map((link) => {
    return {
      ...link,
      active: link.href === $page.route.id
    };
  });

</script>

<Header bind:links />

<slot />
