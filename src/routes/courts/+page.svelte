<script lang="ts">
	import { goto } from '$app/navigation';
	import CourtsList from '$lib/sections/courts/CourtsList.svelte';
	import { onMount } from 'svelte';
	import { login } from '../../store';
	import { SvelteStorageCourtRepository } from '$lib/modules/Courts/infrastructure/SvelteStorageCourtRepository';
	const courtRepository = SvelteStorageCourtRepository();

  onMount(async () => {
    login.subscribe((value) => {
      if (!value) {
        goto('/login');
      }
    });
  });

</script>

<CourtsList {courtRepository} />
