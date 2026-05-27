import { CreateUserUseCase } from "../../../Application/use-case/create-user.js";
import { UserRepositoryDB } from "../../database/repositories/db-user.js";
import { CreateUserController } from "../../http/controllers/user-controller.js";
import { BcryptHashPassword } from "../../security/bcrypt-hash.js";

export function makeCreateUserController(){
  const repo = new UserRepositoryDB()
  const hash = new BcryptHashPassword()
  const useCase = new CreateUserUseCase(repo, hash)

  return new CreateUserController(useCase)
}