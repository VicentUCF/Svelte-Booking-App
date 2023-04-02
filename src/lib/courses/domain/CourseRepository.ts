import type { Course } from "./Course";

export interface CourseRepository {
  searchAll(): Promise<Course[]>;
}