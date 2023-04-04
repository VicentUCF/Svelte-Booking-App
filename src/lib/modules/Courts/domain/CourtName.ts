export function isCourtNameValid(name: string): boolean {
  const regexExp = /^[a-zA-Z0-9 ]{3,}$/gi;

  return regexExp.test(name);
}

export function CourtNameNotValidError(name: string): Error {
  return new Error(`Name ${name} is not valid`);
}