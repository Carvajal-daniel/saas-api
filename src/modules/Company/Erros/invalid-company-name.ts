import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidCompanyNameError extends AppError {
  constructor() {
    super("Name must contain at least 2 characters")
  }
}