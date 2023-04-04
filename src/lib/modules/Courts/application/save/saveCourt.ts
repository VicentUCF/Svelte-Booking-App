import type { Court } from "../../domain/Court";
import type { CourtRepository } from "../../domain/CourtRepository";

export async function saveCourt(
  court: Court,
  courtRepository: CourtRepository
): Promise<void> {
  await courtRepository.save(court);
}