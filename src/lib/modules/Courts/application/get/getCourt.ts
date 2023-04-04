import type { Court } from "../../domain/Court";
import type { CourtRepository } from "../../domain/CourtRepository";

export async function getCourt(
  id: string,
  courtRepository: CourtRepository
): Promise<Court> {
  const court = await courtRepository.get(id);

  return court;
}