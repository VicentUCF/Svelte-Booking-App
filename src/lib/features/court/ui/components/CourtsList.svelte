<script lang="ts">
	import { onMount, tick } from 'svelte';
	import type { Court } from '../../domain/entities/Court';
	import type { CourtService } from '../../application/services/CourtService';

	export let courtService: CourtService;

	let isLoading = true;
	let error: unknown = null;

	let courts: Court[] = [];

	onMount(async () => {
    await tick()
    courts = await courtService.getAllCourts();
    isLoading = false;
	});
  
</script>

<div class="courts">
	{#if isLoading}
		<p>Loading...</p>
	{:else if error}
		<p>Something went wrong</p>
	{:else}
		{#each courts as court}
			<p>{court.name}</p>
      <p>{JSON.stringify(court.schedule)}</p>
		{/each}
	{/if}
</div>

<!-- <div class="courts">
	{#await courtService.getAllCourts()}
		<p>Loading...</p>
	{:then courts}
		{#each courts as court}
			<p>{court.name}</p>
		{/each}
	{:catch error}
		<p>Something went wrong</p>
	{/await}
</div> -->
