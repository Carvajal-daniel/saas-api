
import type { UserRepository } from "../../../../User/Domain/Repositories/user-reposiroty.js";
import type { HashPasswordInterface } from "../../../../User/Domain/services/hash-interface.js";
import { UserEmail } from "../../../../User/Domain/values-objects/user-email.js";
import { UserId } from "../../../../User/Domain/values-objects/user-id.js";
import { UserPassword } from "../../../../User/Domain/values-objects/user-password.js";
import type { JWTservice } from "../../../infrastructure/security/jwt-service.js";
import type { LoginInputDTOtype } from "./login-dto.js";




export class LoginUseCase{
  constructor(
    private readonly repo: UserRepository,
    private readonly passwordHash: HashPasswordInterface,
    private readonly jwtServices: JWTservice
    ){}

  async execute(dto: LoginInputDTOtype){

      const email = UserEmail.create(dto.email)
      const password = UserPassword.create(dto.password)

      const client = await this.repo.findByEmail(email)

      if(!client){
        throw new Error("invalid credentials")
      }

      const verifierPassword = await this.passwordHash.compare(password, client.password)
      if(!verifierPassword){
        throw new Error("invalid credentials")
      }
      const userId = UserId.create(client.id) 
     const token = await this.jwtServices.sign(userId.value)
     

      

      return {
        token,
        user:{
          id: client.id,
          name: client.name,
          email: client.email,
          phone: client.phone,
          createdAt: client.createdAt,
        }
      }
  } 
}