import type { Court } from "../domain/Court"
import type { CourtRepository } from "../domain/CourtRepository"
import { SvelteStorageCourtRepository } from "./SvelteStorageCourtRepository"

export function ApiCourtRepository(): CourtRepository {
  return {
    save,
    getAll,
    get
  }
}

async function save(court: Court): Promise<void> {

  await SvelteStorageCourtRepository().save(court)

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

async function get(id: string): Promise<Court> {
  const request = await fetch(`/api/courts/${id}`)

  if (!request.ok) {
    throw new Error("Error getting court")
  }

  const court = await request.json()

  return court
}

async function getAll(): Promise<Court[]> {

  const LocalCourts = await SvelteStorageCourtRepository().getAll()

  if (LocalCourts.length > 0) {

    fetchCourts().then(async (courts) => {
      if (JSON.stringify(LocalCourts) === JSON.stringify(courts)) return Promise.resolve(LocalCourts)

      for (const court of courts) {
        if (LocalCourts.some((LocalCourt) => LocalCourt.id === court.id)) continue
        console.log(court)
        await SvelteStorageCourtRepository().save(court)
      }
    })

    return Promise.resolve(LocalCourts)
  }

  await new Promise((resolve) => setTimeout(resolve, 1000))
  const courts = await fetchCourts()

  for (const court of courts) {
    await SvelteStorageCourtRepository().save(court)
  }

  return Promise.resolve(courts);
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