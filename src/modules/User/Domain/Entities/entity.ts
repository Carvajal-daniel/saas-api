import type { HashedPassword } from "../values-objects/hashedPassword.js"
import type {
  UserEmail,
  UserId,
  UserName,
  UserPhone
} from "../values-objects/index.js"

interface UserProps {
  id: UserId
  name: UserName
  email: UserEmail
  phone: UserPhone
  password: HashedPassword
  createdAt: Date
  updatedAt: Date
}

export class UserEntity {
  private constructor(
    private readonly props: UserProps
  ) {}

  static create(props: UserProps): UserEntity {
    return new UserEntity(props)
  }

  get id(): string { return this.props.id.value }
  get name(): string {return this.props.name.value}
  get email(): string { return this.props.email.value}
  get phone(): string {return this.props.phone.value}
  get password(): string {return this.props.password.value}
  get createdAt(): Date {return this.props.createdAt}
  get updatedAt(): Date {return this.props.updatedAt}
}