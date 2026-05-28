import { AppError } from "../../../shared/Errors/app-errors.js";

export class MembershipAlreadyExist extends AppError{
  constructor(){
    super("membership already exists")
  }
}