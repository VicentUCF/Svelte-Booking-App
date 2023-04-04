<script lang="ts">
	import type { Court } from "$lib/modules/Courts/domain/Court";
	import type { CourtRepository } from "$lib/modules/Courts/domain/CourtRepository";

  export let courtRepository: CourtRepository;
  
  let court: Court = {
    id: "",
    name: "",
    schedule: "",
  };

  const addCourt = async () => {
    await courtRepository.save(court);
  };
  

</script>

<form on:submit|preventDefault={addCourt}>
  <label for="name">Name</label>
  <input type="text" name="name" id="name" bind:value={court.name} />
  <label for="schedule">Schedule</label>
  <input type="text" name="schedule" id="schedule" bind:value={court.schedule} />
  <button type="submit">Add</button>
</form>