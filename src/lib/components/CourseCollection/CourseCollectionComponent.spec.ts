vi.mock('$lib/courses/infrastructure/LocalCourseRepository');

import { render, screen } from "@testing-library/svelte";
import { vi } from 'vitest';
import CourseCollectionComponent from "./CourseCollectionComponent.svelte";

describe.skip("CourseCollectionComponent", () => {

  test("Will render the course collection", async () => {
    render(CourseCollectionComponent, {coursesRepo: LocalCourseRepository()});
    await screen.findByText("Course 1");
    await screen.findByText("Course 2");
  })
});

describe.skip("CourseCollection Mocked", () => {

  test("Will render the course collection", async () => {
    const localRep = LocalCourseRepository();
    vi.fn(localRep.searchAll).mockResolvedValue([
      {
        id: 24,
        name: "Course 24",
        description: "Course 24 description",
      }
    ]);
    render(CourseCollectionComponent, { coursesRepo: localRep });
    await screen.findByText("Course 24");
  })
})