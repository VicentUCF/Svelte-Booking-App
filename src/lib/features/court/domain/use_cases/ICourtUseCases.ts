import type { Court } from "../entities/Court";

export interface ICourtUseCases {
  getAllCourts(): Promise<Court[]>;
  getCourt(id: string): Promise<Court>;
  addCourt(name: string, type: string, latitude: number, longitude: number): Promise<Court>;
  deleteCourt(id: string): Promise<void>;
}