import type { CompanyEntity } from "../entities/company-entity.js";

export interface CompanyRepository{
  save(company: CompanyEntity, tx?: any): Promise<void>
}