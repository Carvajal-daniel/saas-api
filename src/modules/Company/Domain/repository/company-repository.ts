import type { CompanyEntity } from "../entities/company-entity.js";
import type { CNPJ, RIF } from "../values-objects/index.js";

export interface CompanyRepository{
  save(company: CompanyEntity, tx?: any): Promise<void>
  findByRif(rif: RIF, tx?: any): Promise<CompanyEntity | null>
  findByCnpj(cnpj: CNPJ, tx?: any): Promise<CompanyEntity | null>
}