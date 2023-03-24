import '@testing-library/jest-dom'
import CourseRepository, { type Course } from "$lib/services/CourseRepository";
import { render, screen } from "@testing-library/svelte";
import { describe, vi, vitest } from "vitest";
import CourseCollectionComponent from "./CourseCollectionComponent.svelte";

vitest.mock("../../services/CourseRepository.ts");

const courses: Course[] = [
  { id: 1, name: "Course 1", description: "Course 1 description" },
  { id: 2, name: "Course 2", description: "Course 2 description" },
  { id: 3, name: "Course 3", description: "Course 3 description" },
]

describe("CourseCollectionComponent", () => {
  it("should list courses", async () => {
    const coursesRepo = new CourseRepository();
    // vi.spyOn(courses, coursesRepo.searchAll)
    coursesRepo.searchAll = vitest.fn().mockResolvedValue(courses);
    render(CourseCollectionComponent, { coursesRepo })
    //mirar si aparece el texto de los cursos
    const card = await screen.findByText(/Course/);
    expect(card).toBeInTheDocument();
  });
});