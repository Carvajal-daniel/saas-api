

export class UserPhone {
  private readonly _value: string;

  private constructor(phone: string) {
    this._value = phone;
    Object.freeze(this)
  }

  static create(phone: string): UserPhone {

    const cleanPhone = phone.replace(/\D/g, "");


    if (!cleanPhone || !this.validate(cleanPhone)) {
      throw new Error("")
    }

    return new UserPhone(cleanPhone);
  }

  private static validate(phone: string): boolean {
    const regex = /^\d{7,15}$/;
    return regex.test(phone);
  }

  get value(): string {
    return this._value;
  }
}