import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidCnpj extends AppError{
  constructor(){
    super("Invalid CNPJ", 409)
  }
}