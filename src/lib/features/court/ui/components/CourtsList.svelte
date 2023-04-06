<script lang="ts">
	import { onMount } from 'svelte';
	import type { Court } from '../../domain/entities/Court';
	import type { CourtService } from '../../application/services/CourtService';

	export let courtService: CourtService;
	
  let courts: Court[] = [];

	onMount(async () => {
		courts = await courtService.getAllCourts();
	});
</script>


{#each courts as court}
	<div class="court">
		<h2>{court.name}</h2>
		<p>{court.schedule}</p>
	</div>
{/each}
