import type { CreateUserReponseDTOtype } from "../../../Application/use-case/user-dto.js";
import type { UserEntity } from "../../../Domain/Entities/entity.js";

export class UserPresenters{
  static toHTTP(user: UserEntity): CreateUserReponseDTOtype{
      return{
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        createdAt: user.createdAt
      }
  }
}