import type { Court } from "../../domain/Court";
import type { CourtRepository } from "../../domain/CourtRepository";

export async function getAllCourts(
  courtRepository: CourtRepository
): Promise<Court[]> {
  const courts = await courtRepository.getAll();

  return courts;
}