import type { Court } from "../domain/Court";
import type { CourtRepository } from "../domain/CourtRepository";
import { courtsStorage } from "../../../../store";


export function SvelteStorageCourtRepository(): CourtRepository {
  return {
    save,
    get,
    getAll,
  }
}


async function save(court: Court): Promise<void> {
  courtsStorage.update((courts) => {
    return [...courts, court];
  });
}

async function get(id: string): Promise<Court> {

  return new Promise((resolve, reject) => {
    courtsStorage.subscribe((courts) => {
      const court = courts.find((court) => court.id === id);
      if (court) {
        resolve(court);
      } else {
        reject(new Error("Court not found"));
      }
    });
  });
}

async function getAll(): Promise<Court[]> {
  return new Promise((resolve) => {
    courtsStorage.subscribe((courts) => {
      resolve(courts);
    });
  });
}