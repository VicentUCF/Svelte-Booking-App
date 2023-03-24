<script lang="ts">
	import type { Course } from '$lib/services/CourseRepository';
	import CourseRepository from '$lib/services/CourseRepository';
	import { onMount } from 'svelte';
	import CourseCard from '../courseCard/courseCard.svelte';

	export let coursesRepo = new CourseRepository();
	let courses: Course[] = [];

	onMount(async () => {
		courses = await coursesRepo.searchAll();
	});
</script>

<h1>AAA</h1>

{#each courses as course}
	<CourseCard {course} />
{/each}
