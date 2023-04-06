<script lang="ts">
	import { page } from '$app/stores';
	import Upload from '$lib/shared/components/upload/upload.svelte';
</script>

<h1>Home</h1>
<p>Current URL: {$page.route.id}</p>