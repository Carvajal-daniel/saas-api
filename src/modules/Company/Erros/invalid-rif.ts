import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidRif extends AppError{
  constructor(){
    super("Invalid RIF", 409)
  }
}