export function isCourtScheduleValid(schedule: string): boolean {
  const regexExp = /^(morning|afternoon|evening)$/gi;
  return regexExp.test(schedule);
}

export function CourtScheduleNotValidError(schedule: string): Error {
  return new Error(`Schedule ${schedule} is not valid`);
}