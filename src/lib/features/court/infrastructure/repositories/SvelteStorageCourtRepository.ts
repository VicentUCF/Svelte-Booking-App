import type { Court } from "../../domain/entities/Court";
import { courtsStorage } from "../../domain/entities/CourtStore";
import type { CourtRepository } from "../../domain/repositories/CourtRepository";


export class SvelteStorageCourtRepository implements CourtRepository {
  save(court: Court): Promise<void> {
    courtsStorage.update((courts) => {
      return [...courts, court];
    });
    return Promise.resolve();
  }
  get(id: string): Promise<Court> {
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
  getAll(): Promise<Court[]> {
    return new Promise((resolve) => {
      courtsStorage.subscribe((courts) => {
        resolve(courts);
      });
    });
  }
  delete(id: string): Promise<void> {
    courtsStorage.update((courts) => {
      return courts.filter((court) => court.id !== id);
    });
    return Promise.resolve();
  }

}