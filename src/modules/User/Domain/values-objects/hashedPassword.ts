export class HashedPassword{
  private readonly _value: string

  private constructor(value: string){
    this._value = value
    Object.freeze(this)
  }

  static create(hash: string){
     if (!hash) {
      throw new Error("Hash is required")
    }

    return new HashedPassword(hash)
  }

   get value(): string {
    return this._value
  }
}