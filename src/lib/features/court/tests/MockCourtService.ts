import { CourtService } from '../application/services/CourtService';
import type { Court } from '../domain/entities/Court';
import { CourtName } from '../domain/value_objects/CourtsName';
import { CourtsSchedule } from '../domain/value_objects/CourtsSchedule';

export class MockCourtService extends CourtService {
  constructor() {
    super(null as any); // Pasamos "null" como repositorio, ya que no lo utilizaremos en la implementación de prueba
  }

  async getAllCourts(): Promise<Court[]> {
    return [
      { id: '1', name: new CourtName('Court 1'), schedule: new CourtsSchedule('afternoon') },
      { id: '2', name: new CourtName('Court 2'), schedule: new CourtsSchedule('morning') },
    ];
  }

  // Sobrescribe los otros métodos según sea necesario
}