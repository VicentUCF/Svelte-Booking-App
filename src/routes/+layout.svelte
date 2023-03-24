<script lang="ts">
	import Header from '$lib/components/header/header.svelte';

	let links = [
		{ href: '/', text: 'Home', active: false },
		{ href: '/about', text: 'About', active: false }
	];

</script>

<Header {links} />

<slot />
