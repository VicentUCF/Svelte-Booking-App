import type { Court } from "../domain/Court";
import type { CourtRepository } from "../domain/CourtRepository";
import { courtsStorage } from "../../../../store";

export function LocalStorageCourseRepository(): CourtRepository {
  return {
    save,
    get,
    getAll,
  }
}

async function save(course: Court): Promise<void> {
  const courts = getAllFromLocalStorage();
  courts.set(course.id, course);
  courtsStorage.update((pistas) => {
    return [...pistas, course];
  });
  localStorage.setItem("courts", JSON.stringify(Array.from(courts.entries())));
  await Promise.resolve();
}

async function get(id: string): Promise<Court> {
  const courts = getAllFromLocalStorage();
  const course = courts.get(id);

  if (!course) {
    return Promise.reject(new Error("Course not found"));
  }
  return Promise.resolve(course);
}

async function getAll(): Promise<Court[]> {
  const courts = getAllFromLocalStorage();
  courtsStorage.update((pistas) => {
    return pistas;
  });
  return Promise.resolve(Array.from(courts.values()));
}

function getAllFromLocalStorage(): Map<string, Court> {
  const courts = localStorage.getItem("courts");

  if (courts === null) {
    return new Map();
  }

  const map = new Map(JSON.parse(courts) as Iterable<[string, Court]>);

  return map;
}