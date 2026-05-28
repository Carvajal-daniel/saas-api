import { eq } from "drizzle-orm";
import { db } from "../../../../../shared/database/database.js";
import { CompanyEntity } from "../../../Domain/entities/company-entity.js";
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

  async findByRif(rif: string, tx?: any): Promise<CompanyEntity | null> {

     const document = tx ? tx : db;
      const [result] = await document
      .select()
      .from(CompanyTable)
      .where(eq(CompanyTable.rif, rif))
      .limit(1)

      if(!result){
        return null
      }

      return CompanyMapper.toDomain(result) 
  }

  async findByCnpj(cnpj: string, tx?: any): Promise<CompanyEntity | null> {
     const document = tx ? tx : db;
    const [result] = await document
    .select()
    .from(CompanyTable)
    .where(eq(CompanyTable.cnpj, cnpj))
    .limit(1)
    
    if(!result){
        return null
    }

    return CompanyMapper.toDomain(result)
  }
}