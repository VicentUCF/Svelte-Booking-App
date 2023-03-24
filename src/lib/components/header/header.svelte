<script lang="ts">
	export let links: Array<{ href: string; text: string; active: boolean }>;
	import { page } from '$app/stores';
	$: links = links.map((link) => {
		return {
			...link,
			active: link.href === $page.route.id
		};
	});
</script>

<header>
	<nav>
		<ul>
			{#each links as { href, text, active }}
				<li>
					<a {href} class:active>{text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		background-color: #333;
		color: #fff;
		padding: 1rem;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	.active {
		color: #ff3e00;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 0.5rem;
	}

	a {
		color: #fff;
		text-decoration: none;
	}
</style>
