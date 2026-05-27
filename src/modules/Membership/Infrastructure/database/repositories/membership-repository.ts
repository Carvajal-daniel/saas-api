import { and, eq } from "drizzle-orm";
import { db } from "../../../../../shared/database/database.js"
import type { CompanyId } from "../../../../company/Domain/values-objects/company-id.js";
import type { UserId } from "../../../../User/Domain/values-objects/user-id.js";
import { MembershipEntity } from "../../../Domain/entities/membership-entity.js"
import type { MembershipReposirory } from "../../../Domain/repositories/membership-interface.js";
import { membershipTable } from "../schema/membership-schema.js"
import { MembershipMappers } from "../mappers/membership-mapper.js";

export class MembershipRepositoryDB implements MembershipReposirory{

  async save(membership: MembershipEntity, tx?: any): Promise<void>{
    const client = tx ? tx : db;

    await client
    .insert(membershipTable)
    .values(membership, tx)
  }

  async findByUserAndCompany( userId: UserId, companyId: CompanyId): Promise<MembershipEntity | null>
     {
       const [result] = await db 
      .select()
      .from(membershipTable)
      .where(
        and(
          eq(membershipTable.userId, userId.value),
          eq(membershipTable.companyId, companyId.value)
        )
      )
      .limit(1)

      if(!result){
        throw new Error("Comapny not found")
      }

    return MembershipMappers.toDomain(result)
  }
}