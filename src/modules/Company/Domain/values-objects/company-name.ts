

export class CompanyName{
  private readonly _value: string

  private constructor(name: string) {
    this._value = name
    Object.freeze(this)

  }

  static create(name: string): CompanyName{

    if( name.length < 2 ){
     throw new Error("Nome is must ")
    }

    return new CompanyName(name)
  }

  get value():string {return this._value}
}