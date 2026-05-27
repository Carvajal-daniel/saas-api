
import { eq } from "drizzle-orm";
import { db } from "../../../../../shared/database/database.js";
import { UserEntity } from "../../../Domain/Entities/entity.js";
import type { UserRepository } from "../../../Domain/Repositories/user-reposiroty.js";
import { usersTable } from "../schema/user-schema.js";
import { UserMapper } from "../mappers/user-mapper.js";
import type { UserEmail } from "../../../Domain/values-objects/user-email.js";
import type { UserPhone } from "../../../Domain/values-objects/user-phone.js";

export class UserRepositoryDB implements UserRepository{

  async save(user: UserEntity, tx?: any): Promise<void> {

    const client = tx ? tx : db;
    
    await client
    .insert(usersTable)
    .values(UserMapper.toPersistence(user))
  }

  async findByEmail(email: UserEmail): Promise<UserEntity | null> {
    const [userRaw] = await db 
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email.value))
    .limit(1);

    if (!userRaw) {
      return null;
    }

    return UserMapper.toDomain(userRaw);
    }
    

  async findByPhone(phone: UserPhone): Promise<UserEntity | null> {
    const [userRaw] = await db 
    .select()
    .from(usersTable)
    .where(eq(usersTable.phone, phone.value))
    .limit(1);


    if (!userRaw) {
      return null;
    }

    return UserMapper.toDomain(userRaw);
  }
}