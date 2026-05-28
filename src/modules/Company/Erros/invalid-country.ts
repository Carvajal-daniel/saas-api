import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidCountryError extends AppError{
  constructor(message: string){
    super(message);
  }
}