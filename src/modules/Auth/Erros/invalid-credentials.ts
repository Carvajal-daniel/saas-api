import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidCredentialsError extends AppError{
  constructor(message: string){
    super(message)
  }
}