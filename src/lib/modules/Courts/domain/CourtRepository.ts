import type { Court } from "./Court";

export interface CourtRepository {
  save(court: Court): Promise<void>;
  get(id: string): Promise<Court>;
  getAll(): Promise<Court[]>;
}