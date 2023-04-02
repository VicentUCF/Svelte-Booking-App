import type { CourseRepository } from "../domain/CourseRepository"

export function LocalCourseRepository(): CourseRepository {
  return {
    searchAll: async () => {
      return [
        { id: 1, name: "Course 1", description: "Course 1 description" },
        { id: 2, name: "Course 2", description: "Course 2 description" },
        { id: 3, name: "Course 3", description: "Course 3 description" },
      ]
    }
  }
}