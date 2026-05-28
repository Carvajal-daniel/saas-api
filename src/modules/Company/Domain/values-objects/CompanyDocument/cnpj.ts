import { InvalidCnpj } from "../../../Erros/invalid-cnpj.js"

export class CNPJ {
  private constructor(
    private readonly value: string
  ) {}

  static create(value: string): CNPJ {
    const clean = value.replace(/\D/g, "")

    if (clean.length !== 14) {
      throw new InvalidCnpj()
    }

    return new CNPJ(clean)
  }

  get raw(): string {
    return this.value
  }
}