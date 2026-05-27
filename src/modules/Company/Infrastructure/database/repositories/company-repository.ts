import { db } from "../../../../../shared/database/database.js";
import type { CompanyEntity } from "../../../Domain/entities/company-entity.js";
import type { CompanyRepository } from "../../../Domain/repository/company-repository.js";
import { CompanyMapper } from "../mappers/company-mapper.js";
import { CompanyTable } from "../schema/company-schema.js";

export class CompanyRepositoryDB implements CompanyRepository{
  
  async save(company: CompanyEntity, tx?: any): Promise<void> {

    const client = tx ? tx : db;
    await client
    .insert(CompanyTable)
    .values(CompanyMapper.toPersistence(company)) 
  }
}