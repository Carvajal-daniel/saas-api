export class RIF {
  private constructor(
    private readonly value: string
  ) {}

 static create(value: string): RIF {

  const clean = value
    .toUpperCase()
    .replace(/-/g, "")

  if (!/^[JGVE]\d{9}$/.test(clean)) {
    throw new Error("Invalid RIF")
  }

  return new RIF(clean)

}

  get raw(): string {
    return this.value
  }
}