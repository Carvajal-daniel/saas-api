import { AppError } from "../../../shared/Errors/app-errors.js";

export class DocumentIdRequeired extends AppError{
  constructor(){
    super("Document is requeired", 409)
  }
}