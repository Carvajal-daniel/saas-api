import { AppError } from "../../../shared/Errors/app-errors.js";

export class RifAlreadyExist extends AppError{
  constructor(){
    super("RIF already exists", 409)
  }
} 