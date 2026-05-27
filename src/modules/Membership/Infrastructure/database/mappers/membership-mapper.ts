import { CompanyId } from "../../../../company/Domain/values-objects/company-id.js";
import { UserId } from "../../../../User/Domain/values-objects/user-id.js";
import { MembershipEntity } from "../../../Domain/entities/membership-entity.js";
import { MembershipId } from "../../../Domain/values-objects/membership-id.js";
import { MembershipRole } from "../../../Domain/values-objects/membership-role.js";
import type { membershipTable } from "../schema/membership-schema.js";

export class MembershipMappers{
  static toPersistence(membership: MembershipEntity){
    return {
      id: membership.id,
      userId: membership.userId,
      companyId: membership.companyId,
      role: membership.role,
      createdAt: membership.createdAt
    }
  }

  static toDomain(
    raw: typeof membershipTable.$inferSelect
  ): MembershipEntity{
    return MembershipEntity.create({
      id: MembershipId.create(raw.id),
       userId: UserId.create(raw.userId),
      companyId: CompanyId.create(raw.companyId),
      role: MembershipRole.create(raw.role),
      createdAt: raw.createdAt
    })
  }
}