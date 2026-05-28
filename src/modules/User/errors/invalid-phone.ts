import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidPhoneErros extends AppError{
  constructor(){
    super("Phone invalid", 409)
  }
}