import { Uuid } from "$lib/shared/utils/Uuid";
import type { Court } from "../../domain/entities/Court";
import type { CourtRepository } from "../../domain/repositories/CourtRepository";
import type { ICourtUseCases } from "../../domain/use_cases/ICourtUseCases";
import { CourtName } from "../../domain/value_objects/CourtsName";
import { CourtsSchedule } from "../../domain/value_objects/CourtsSchedule";

export class CourtService implements ICourtUseCases {
  constructor(private courtRepository: CourtRepository) { }

  async getAllCourts(): Promise<Court[]> {
    return this.courtRepository.getAll();
  }

  async addCourt(name: string, schedule: string): Promise<Court> {
    const newCourt: Court = {
      id: Uuid(),
      name: new CourtName(name),
      schedule: new CourtsSchedule(schedule),
    };

    await this.courtRepository.save(newCourt);
    return newCourt;
  }

  async getCourt(id: string): Promise<Court> {
    return this.courtRepository.get(id);
  }

  async deleteCourt(id: string): Promise<void> {
    return this.courtRepository.delete(id);
  }
}