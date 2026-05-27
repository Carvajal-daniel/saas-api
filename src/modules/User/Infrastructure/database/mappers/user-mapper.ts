import { UserEntity } from "../../../Domain/Entities/entity.js"
import { HashedPassword } from "../../../Domain/values-objects/hashedPassword.js"
import { UserEmail, UserId, UserName, UserPhone } from "../../../Domain/values-objects/index.js"

import type { usersTable } from "../schema/user-schema.js"

export class UserMapper {
  static toPersistence(user: UserEntity) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }

  static toDomain(
    raw: typeof usersTable.$inferSelect
  ): UserEntity {
    return UserEntity.create({
      id: UserId.create(raw.id),
      name: UserName.create(raw.name),
      email: UserEmail.create(raw.email),
      phone: UserPhone.create(raw.phone),
      password: HashedPassword.create(raw.password),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt
    })
  }
}