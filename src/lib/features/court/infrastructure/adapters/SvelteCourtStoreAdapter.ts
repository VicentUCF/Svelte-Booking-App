
import { writable } from 'svelte/store';
import type { Court } from '../../domain/entities/Court';

export const courtsStorage = writable<Court[]>([]);


export class SvelteCourtStoreAdapter {
  private courtStore;

  constructor() {
    this.courtStore = courtsStorage;
  }

  async getCourts(): Promise<Court[]> {
    return new Promise((resolve) => {
      this.courtStore.subscribe((value) => {
        resolve(value);
      })();
    });
  }

  async setCourts(courts: Court[]): Promise<void> {
    this.courtStore.set(courts);
  }

  async addCourt(court: Court): Promise<void> {
    this.courtStore.update((courts) => [...courts, court]);
  }

  async deleteCourt(id: string): Promise<void> {
    this.courtStore.update((courts) => courts.filter((court) => court.id !== id));
  }
}
