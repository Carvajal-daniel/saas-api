import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidRole extends AppError{
  constructor(){
    super("role is must be")
  }
}