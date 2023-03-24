export interface Course {
  id: number;
  name: string;
  description: string;
}

export default class CourseRepository {
  searchAll(): Promise<Course[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Course 1', description: 'Course 1 description' },
          { id: 2, name: 'Course 2', description: 'Course 2 description' },
          { id: 3, name: 'Course 3', description: 'Course 3 description' },
        ]);
      }, 1000);
    });
  }
}