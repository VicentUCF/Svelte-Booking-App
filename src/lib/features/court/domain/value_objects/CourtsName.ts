export class CourtName {
  constructor(private value: string) {
    if (value.length < 3 || value.length > 30) {
      throw new Error("Invalid court name");
    }
  }

  toString(): string {
    return this.value;
  }
}