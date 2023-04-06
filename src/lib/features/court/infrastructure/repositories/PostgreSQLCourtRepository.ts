import type { Court } from "../../domain/entities/Court"
import type { CourtRepository } from "../../domain/repositories/CourtRepository"
import { SvelteCourtStoreAdapter } from "../adapters/SvelteCourtStoreAdapter"


export class PostgreSQLCourtRepository implements CourtRepository {

  private storeAdapter: SvelteCourtStoreAdapter;

  constructor() {
    this.storeAdapter = new SvelteCourtStoreAdapter();
  }

  async save(court: Court): Promise<void> {
    await this.storeAdapter.addCourt(court)

    const request = await fetch("/api/courts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(court),
    })

    if (!request.ok) {
      // en caso de error se borra el localstorage
      throw new Error("Error saving court")
    }

    await Promise.resolve()
  }
  async get(id: string): Promise<Court> {
    const request = await fetch(`/api/courts/${id}`)

    if (!request.ok) {
      throw new Error("Error getting court")
    }

    const court = await request.json()

    return court
  }
  async getAll(): Promise<Court[]> {
    const LocalCourts = await this.storeAdapter.getCourts()
    console.log(LocalCourts)

    if (LocalCourts.length > 0) {

      fetchCourts().then(async (courts) => {
        if (JSON.stringify(LocalCourts) === JSON.stringify(courts)) return Promise.resolve(LocalCourts)

        for (const court of courts) {
          if (LocalCourts.some((LocalCourt: { id: string }) => LocalCourt.id === court.id)) continue
          await this.storeAdapter.addCourt(court)
        }
      })

      return Promise.resolve(LocalCourts)
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
    const courts = await fetchCourts()

    for (const court of courts) {
      await this.storeAdapter.addCourt(court)
    }

    return Promise.resolve(courts);
  }
  async delete(id: string): Promise<void> {
    await this.storeAdapter.deleteCourt(id)

    const request = await fetch(`/api/courts/${id}`, {
      method: "DELETE",
    })

    if (!request.ok) {
      throw new Error("Error deleting court")
    }

    await Promise.resolve()
  }
}


async function fetchCourts(): Promise<Court[]> {
  return fetch("/api/courts")
    .then((response) => response.json())
    .then((courts) => courts)
    .catch((error) => {
      console.error("Error getting courts", error)
      throw new Error("Error getting courts")
    })
}