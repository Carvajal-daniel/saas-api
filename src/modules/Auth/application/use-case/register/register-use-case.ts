
import type { UnitOfWork } from "../../../../../shared/database/unit-of-work.interface.js";
import type { CreateCompanyUseCase } from "../../../../Company/Application/use-case/company-use-case.js";
import type { CreateMembershipUseCase } from "../../../../Membership/Application/use-case/create-membership.js";
import type { CreateUserUseCase } from "../../../../User/Application/use-case/create-user.js";
import type { RegisterDTO } from "./register.dto.js";

export class RegisterUseCase{
  constructor(
    private readonly userRepo: CreateUserUseCase,
    private readonly companyRepo: CreateCompanyUseCase,
    private readonly membershipRepo: CreateMembershipUseCase,
    private readonly uow: UnitOfWork
  ){}

  async execute(data: RegisterDTO){


    return await this.uow.runInTransaction(async(tx) => {
  
        const company = await this.companyRepo.create({
          name: data.companyName,
          country: data.companyCountry,
          document:
          data.companyCountry === "BR"
            ? data.cnpj ?? null
            : data.rif ?? null,
          isInformal: data.isInformal
        }, tx)

        const ownerUser = await this.userRepo.create({
          name: data.ownerName,
          email: data.ownerEmail,
          phone: data.ownerPhone,
          password: data.password
        }, tx)

        await this.membershipRepo.execute({
          userId: ownerUser.id,
          companyId: company.id,
          role: "OWNER"
        }, tx)


        return {
          company,
          ownerUser
        }


    })

  }

}