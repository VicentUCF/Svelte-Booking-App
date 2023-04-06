import { isUuidValid } from "$lib/modules/shared/domain/Uuid";

export function isCourtIdValid(id: string): boolean {
  return isUuidValid(id);
}

export function CourtIdNotValidError(id: string): Error {
  return new Error(`Id ${id} is not valid`);
}