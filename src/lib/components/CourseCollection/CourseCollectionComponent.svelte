<script lang="ts">
	import type { Course } from '$lib/courses/domain/Course';
	import type { CourseRepository } from '$lib/courses/domain/CourseRepository';
	import { each, onMount } from 'svelte/internal';
	import CourseCard from '../courseCard/courseCard.svelte';

	export let coursesRepo: CourseRepository;
	let courses: Course[] = [];

	onMount(async () => {
		courses = await coursesRepo.searchAll();
	});
</script>

{#each courses as course}
	<CourseCard {course} />
{/each}
