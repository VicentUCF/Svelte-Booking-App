<script lang="ts">
	import { onMount } from "svelte";
	import { login } from "../../../store";

	export let links: Array<{ href: string; text: string; active: boolean }>;
  let userIsLogged$: boolean = false;

  onMount(async () => {
    console.log(userIsLogged$)
    login.subscribe((value) => {
      userIsLogged$ = value;
    });
  });

  const logout = () => {
    login.set(false);
    window.localStorage.removeItem('login');
  };

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
    <div class="login">
      {#if userIsLogged$}
        <button on:click={logout}>Logout</button>
      {:else}
        <a href="/login">Login</a>
      {/if}
    </div>
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
