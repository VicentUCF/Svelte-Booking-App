<script lang="ts">
	import { CourtService } from '$lib/features/court/application/services/CourtService';
	import { PostgreSQLCourtRepository } from '$lib/features/court/infrastructure/repositories/PostgreSQLCourtRepository';
	import CourtsList from '$lib/features/court/ui/components/CourtsList.svelte';
	const repository = new PostgreSQLCourtRepository();
	const courtService = new CourtService(repository);
</script>

<CourtsList {courtService} />
