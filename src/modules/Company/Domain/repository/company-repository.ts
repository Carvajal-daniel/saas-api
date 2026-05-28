import type { CompanyEntity } from "../entities/company-entity.js";

export interface CompanyRepository{
  save(company: CompanyEntity, tx?: any): Promise<void>
  findByRif(rif: string, tx?: any): Promise<CompanyEntity | null>
  findByCnpj(cnpj: string, tx?: any): Promise<CompanyEntity | null>
}