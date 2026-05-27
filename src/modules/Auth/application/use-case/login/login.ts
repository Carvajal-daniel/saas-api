
import type { UserRepository } from "../../../../User/Domain/Repositories/user-reposiroty.js";
import type { HashPasswordInterface } from "../../../../User/Domain/services/hash-interface.js";
import type { UserEmail } from "../../../../User/Domain/values-objects/user-email.js";
import { UserId } from "../../../../User/Domain/values-objects/user-id.js";
import type { JWTservice } from "../../../infrastructure/security/jwt-service.js";

interface LoginDTO{
  email: UserEmail,
  password: string
}


export class LoginUseCase{
  constructor(
    private readonly repo: UserRepository,
    private readonly passwordHash: HashPasswordInterface,
    private readonly jwtServices: JWTservice
    ){}

  async execute(dto: LoginDTO){
      const client = await this.repo.findByEmail(dto.email)

      if(!client){
        throw new Error("invalid credentials")
      }

      const verifierPassword = await this.passwordHash.compare(dto.password, client.password)
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