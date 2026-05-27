
import bcrypt from "bcrypt"
import type { HashPasswordInterface } from "../../Domain/services/hash-interface.js";

export class BcryptHashPassword implements HashPasswordInterface{
  async hash(password: string): Promise<string> {
      return bcrypt.hash(password, 10)
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }
}