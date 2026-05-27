import { AppError } from "../../../shared/Errors/app-errors.js";

export class EmailAlreadyExistsError extends AppError{
  constructor(){
      super("Email user already exists", 409)
  }
}