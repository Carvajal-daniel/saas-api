import { AppError } from "../../../shared/Errors/app-errors.js";

export class InvalidNameError extends AppError {
  constructor() {
    super("Name must contain at least 3 characters")
  }
}