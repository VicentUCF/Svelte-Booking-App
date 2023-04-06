export class CourtId {
  //validate is a uuid
  constructor(private value: string) {
    if (!value) {
      throw new Error("Invalid court id");
    }
    //validate is a uuid
    const uuidValidate = new RegExp(
      "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    )

    if (!value.match(uuidValidate)) {
      throw new Error("Invalid court id");
    }

  }

  toString(): string {
    return this.value;
  }
}