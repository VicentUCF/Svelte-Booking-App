export class CourtsSchedule {
  constructor(private value: string) {
    if (!['morning', 'afternoon', 'evening'].includes(value)) {
      throw new Error('Invalid court schedule');
    }
  }

  toString(): string {
    return this.value;
  }
}