import { AppError } from "../../../shared/Errors/app-errors.js";

export class CnpjAlreadyExist extends AppError {
  constructor(){
    super("CNPJ already exists", 409)
  }
}