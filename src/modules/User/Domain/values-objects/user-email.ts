import { InvalidEmailError } from "../../Errors/Invalid-email.js";


export class UserEmail {
  private readonly _value: string

  private constructor(value: string){
    this._value = value
    Object.freeze(this)
  }

  static create(email: string): UserEmail{

    const emailClean = email.trim().toLocaleLowerCase();

    if(!emailClean || !this.validate(emailClean) ){
      throw new InvalidEmailError()
    }
    return new UserEmail(email)
  }

  private static validate(email:string){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email)
  }

  get value(): string{return this._value}
}