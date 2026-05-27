import { AppError } from "../../../shared/Errors/app-errors.js";


export class PhoneAlreadyExistsError extends AppError {
  constructor() {
    super("Phone user already exists", 409);
  }
}