import type { UserEmail, UserPhone } from "../values-objects/index.js"
import type { UserEntity } from "../Entities/entity.js"

export interface UserRepository{
  save(user: UserEntity, tsx?: any):Promise<void>
  findByEmail(email: UserEmail): Promise<UserEntity | null>
  findByPhone(phone: UserPhone): Promise<UserEntity | null>
}