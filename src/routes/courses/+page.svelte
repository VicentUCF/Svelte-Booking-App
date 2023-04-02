<script lang="ts">
	import AnimateComponent from "$lib/components/animate/animate-component.svelte";
import CourseCollectionComponent from "$lib/components/CourseCollection/CourseCollectionComponent.svelte";
	import { LocalCourseRepository } from "$lib/courses/infrastructure/LocalCourseRepository";

	

</script>
<CourseCollectionComponent coursesRepo={LocalCourseRepository()}/>

<AnimateComponent />