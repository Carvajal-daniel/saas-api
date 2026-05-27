import { randomUUID } from "node:crypto"

export class MembershipId{
  private readonly _value: string

  private constructor(value: string){
    this._value = value

    Object.freeze(this)
  }

  static create(id?: string): MembershipId{

    if(id && !this.validate(id)){
      throw new Error("ID de cliente inválido (deve ser um UUID válido).");
    }

    return new MembershipId(id ?? randomUUID())
  }

  private static validate(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }

  get value():string{
    return this._value
  }

  public equals(other: MembershipId): boolean{
      return this.value === other.value
  }
}