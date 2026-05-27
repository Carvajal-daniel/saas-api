
import { UserEntity } from "../../Domain/Entities/entity.js";
import type { UserRepository } from "../../Domain/Repositories/user-reposiroty.js";
import type { HashPasswordInterface } from "../../Domain/services/hash-interface.js";
import { EmailAlreadyExistsError } from "../../errors/email-already-exists-error.js";
import { PhoneAlreadyExistsError } from "../../errors/phone-already-exists-error.js";
import { HashedPassword } from "../../Domain/values-objects/hashedPassword.js";
import { UserEmail, UserId, UserName, UserPassword, UserPhone } from "../../Domain/values-objects/index.js";
import type { CreateUserInputDTOtype } from "./user-dto.js";

export class CreateUserUseCase{
  constructor(
    private readonly repo: UserRepository,
    private readonly hash: HashPasswordInterface
  ){}

  async create(data: CreateUserInputDTOtype, tsx?: any): Promise<UserEntity>{

    const id = UserId.create()
    const name = UserName.create(data.name)
    const email = UserEmail.create(data.email)
    const phone = UserPhone.create(data.phone)
    const now = new Date()
    
    
    const [emailVerifier, phoneVerifier] = await Promise.all([
      this.repo.findByEmail(email),
      this.repo.findByPhone(phone)
    ])
    
    const passwordVerifier = UserPassword.create(data.password)
    const passwordHash = await this.hash.hash(passwordVerifier.value)
    const password = HashedPassword.create(passwordHash)

    if(emailVerifier){throw new EmailAlreadyExistsError()}
    if(phoneVerifier){throw new PhoneAlreadyExistsError()}
    
    const user = UserEntity.create({
        id,
        name,
        email,
        phone,
        password,
        createdAt: now,
        updatedAt: now
    })  

    await this.repo.save(user, tsx)

    return user
  }

}