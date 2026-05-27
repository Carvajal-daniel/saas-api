
import type { CompanyId } from "../../../Company/Domain/values-objects/company-id.js";
import type { UserId } from "../../../User/Domain/values-objects/user-id.js";
import type { MembershipId } from "../values-objects/membership-id.js";
import type { MembershipRole } from "../values-objects/membership-role.js";

interface membershiptProps{
  id: MembershipId
  userId: UserId
  companyId: CompanyId
  role: MembershipRole
  createdAt: Date
}

export class MembershipEntity{

  private constructor(private readonly props: membershiptProps ){}


  static create(data: membershiptProps): MembershipEntity{
      return new MembershipEntity(data)
  }

  get id(): string {return this.props.id.value}
  get userId(): string {return this.props.userId.value}
  get companyId(): string {return this.props.companyId.value}
  get role(): string {return this.props.role.value}
  get createdAt(): Date {return this.props.createdAt}
}