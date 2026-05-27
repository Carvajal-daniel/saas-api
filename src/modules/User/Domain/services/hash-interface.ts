import type { UserPassword } from "../values-objects/user-password.js"

export interface HashPasswordInterface{
  hash(hash: string): Promise<string>
  compare(password: UserPassword, hash: string): Promise<boolean>
}