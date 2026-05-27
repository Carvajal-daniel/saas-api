

export class UserPassword {

  private constructor(
    private readonly _value: string
  ) {
    Object.freeze(this)
  }

  static create(password: string): UserPassword {

    if (password.length < 8) {
      throw new Error("Muito curta")
    }

    const hasLetter = /[a-zA-Z]/.test(password)

    if (!hasLetter) {
      throw new Error(
        "Password must contain letters"
      )
    }

    const hasNumber = /\d/.test(password)

    if (!hasNumber) {
      throw new Error(
        "Password must contain numbers"
      )
    }

    const hasSpecialCharacter =
      /[!@#$%^&*(),.?":{}|<>]/.test(password)

    if (!hasSpecialCharacter) {
      throw new Error(
        "Password must contain special characters"
      )
    }

    return new UserPassword(password)
  }

  get value(): string {
    return this._value
  }
}