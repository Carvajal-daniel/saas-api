import { DrizzleUnitOfWork } from "../../../../../shared/database/drizzle-unit-of-work.js";
import { CreateCompanyUseCase } from "../../../../Company/Application/use-case/company-use-case.js";
import { CompanyRepositoryDB } from "../../../../Company/Infrastructure/database/repositories/company-repository.js";
import { CreateMembershipUseCase } from "../../../../Membership/Application/use-case/create-membership.js";
import { MembershipRepositoryDB } from "../../../../Membership/Infrastructure/database/repositories/membership-repository.js";
import { CreateUserUseCase } from "../../../../User/Application/use-case/create-user.js";
import { UserRepositoryDB } from "../../../../User/Infrastructure/database/repositories/db-user.js";
import { BcryptHashPassword } from "../../../../User/Infrastructure/security/bcrypt-hash.js";
import { RegisterUseCase } from "../../../application/use-case/register/register-use-case.js";
import { RegisterController } from "../controllers/register-controller.js";

export function MakeRegisterController(){

  const userRepository = new UserRepositoryDB()
  const companyRepo = new CompanyRepositoryDB()
  const membershipRepo = new MembershipRepositoryDB()

  const hashService = new BcryptHashPassword()

  const createUserUseCase = new CreateUserUseCase(userRepository, hashService)


  const createComapnyUseCase = new CreateCompanyUseCase(companyRepo)

  const createMembership = new CreateMembershipUseCase(membershipRepo)

  const now = new DrizzleUnitOfWork()

  const registerUseCase = new RegisterUseCase(
    createUserUseCase,
    createComapnyUseCase,
    createMembership,
    now
  )

  return new RegisterController(registerUseCase)
  
}