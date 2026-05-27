
import { CompanyId } from "../../../Company/Domain/values-objects/company-id.js";
import { UserId } from "../../../User/Domain/values-objects/user-id.js";
import { MembershipEntity } from "../../Domain/entities/membership-entity.js";
import { MembershipId } from "../../Domain/values-objects/membership-id.js";
import { MembershipRole } from "../../Domain/values-objects/membership-role.js";
import type { MembershipRepositoryDB } from "../../Infrastructure/database/repositories/membership-repository.js";
import type { CreateMembershipInputDTOtype } from "./membership-dto.js";

export class CreateMembershipUseCase{
  constructor(
    private readonly repo: MembershipRepositoryDB
  ){}

  async execute(data: CreateMembershipInputDTOtype, tx?: any ): Promise<MembershipEntity>{
    const id = MembershipId.create()
    const userId = UserId.create(data.userId)
    const companyId = CompanyId.create(data.companyId)
    const role = MembershipRole.create(data.role)
    const now = new Date()

   const membershiptExists =
  await this.repo.findByUserAndCompany(
    userId,
    companyId,
    tx
  )
    if(membershiptExists){
      throw new Error("membership already exists")
    }

    const membership =  MembershipEntity.create({
      id,
      userId,
      companyId,
      role,
      createdAt: now
    })

    await this.repo.save(membership, tx)

    return membership

  }

}