<script lang="ts">
	import type { Course } from '$lib/services/CourseRepository';
  export let course: Course;
</script>

{#if course}
	<div class="course-card">
		<div class="course-card__title">
			<h3>{course.name}</h3>
		</div>
		<div class="course-card__description">
			<p>{course.description}</p>
		</div>
	</div>
{:else}
	<div class="course-card">
		<div class="course-card__title">
			<h3>Course not found</h3>
		</div>
	</div>
{/if}
