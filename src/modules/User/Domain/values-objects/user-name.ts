import { InvalidNameError } from "../../Errors/invalid-name.js"


export class UserName{
  private readonly _value: string

  private constructor(name: string) {
    this._value = name
    Object.freeze(this)

  }

  static create(name: string): UserName{

    if( name.length < 2 ){
     throw new InvalidNameError()
    }

    return new UserName(name)
  }

  get value():string {return this._value}
}