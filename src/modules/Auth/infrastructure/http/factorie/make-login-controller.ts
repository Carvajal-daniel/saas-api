
import { UserRepositoryDB } from "../../../../User/Infrastructure/database/repositories/db-user.js";
import { BcryptHashPassword } from "../../../../User/Infrastructure/security/bcrypt-hash.js";
import { LoginUseCase } from "../../../application/use-case/login/login.js";
import { JWTservice } from "../../security/jwt-service.js";
import { LoginController } from "../controllers/login-controller.js";

export function makeLoginController(){
  const repo = new UserRepositoryDB()
  const hash = new BcryptHashPassword()
  const jwtService = new JWTservice()
  const useCase = new LoginUseCase(repo, hash, jwtService)

  return new LoginController(useCase)
}