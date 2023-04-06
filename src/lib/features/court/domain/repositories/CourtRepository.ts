import type { Court } from "../entities/Court";

export interface CourtRepository {
  save(court: Court): Promise<void>;
  get(id: string): Promise<Court>;
  getAll(): Promise<Court[]>;
  delete(id: string): Promise<void>;
}