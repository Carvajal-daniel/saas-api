


export class MembershipRole{
  private readonly _value: string

  private constructor(name: string) {
    this._value = name
    Object.freeze(this)

  }

  static create(name: string): MembershipRole{

    if( name.length < 2 ){
     throw new Error("role is must be")
    }

    return new MembershipRole(name)
  }

  get value():string {return this._value}
}