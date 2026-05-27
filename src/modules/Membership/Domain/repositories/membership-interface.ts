import type { CompanyId } from "../../../company/Domain/values-objects/company-id.js";
import type { UserId } from "../../../User/Domain/values-objects/user-id.js";
import type { MembershipEntity } from "../entities/membership-entity.js";

export interface MembershipReposirory{
  save(membershipt: MembershipEntity, tx?: any): Promise<void>
  findByUserAndCompany(userId: UserId, companyId: CompanyId): Promise<MembershipEntity | null>
}