<script lang="ts">
	import type { Court } from '$lib/modules/Courts/domain/Court';
	import type { CourtRepository } from '$lib/modules/Courts/domain/CourtRepository';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import CourtAdd from './CourtAdd.svelte';
  import { courtsStorage } from '../../../store';

	export let courtRepository: CourtRepository;
	let courts: Court[] = [];
  
	onMount(async () => {
    courtsStorage.subscribe((value) => {
      courts = value;
    });

    courts = await courtRepository.getAll();
	});

  

</script>

<header>
	<h1>Courts</h1>
</header>

<CourtAdd {courtRepository} />

{#each courts as court}
	<div in:fade="{{duration: 500}}">
		<h2>{court.name}</h2>
		<p>{court.schedule}</p>
	</div>
{/each}


