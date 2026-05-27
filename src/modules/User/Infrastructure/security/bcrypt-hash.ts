
import bcrypt from "bcrypt"
import type { HashPasswordInterface } from "../../Domain/services/hash-interface.js";
import type { UserPassword } from "../../Domain/values-objects/user-password.js";

export class BcryptHashPassword implements HashPasswordInterface{
  async hash(password: string): Promise<string> {
      return bcrypt.hash(password, 10)
  }

  async compare(password: UserPassword, hash: string): Promise<boolean> {
    return bcrypt.compare(password.value, hash)
  }
}