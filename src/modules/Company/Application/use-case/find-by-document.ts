import { CompanyEntity } from "../../Domain/entities/company-entity.js";
import type { CompanyRepository } from "../../Domain/repository/company-repository.js";
import { CNPJ, RIF } from "../../Domain/values-objects/index.js";

interface props{
  dataCnpj: CNPJ
  dataRif: RIF
}


export class FindByDocument{
  constructor(private readonly repo: CompanyRepository){}
 
      
  
}