
import { CompanyEntity } from "../../Domain/entities/company-entity.js";
import type { CompanyRepository } from "../../Domain/repository/company-repository.js";
import { CNPJ, CompanyCountry, CompanyId, CompanyName, RIF } from "../../Domain/values-objects/index.js";
import type { CreateCompanyInputDTOtype, CreateCompanyReponseDTOtype } from "./company-dto.js";


export class CreateCompanyUseCase{
  constructor(private readonly repo: CompanyRepository){}

  async create(data: CreateCompanyInputDTOtype, tx?: any ): Promise<CompanyEntity>{

    const id = CompanyId.create()
    const name = CompanyName.create(data.name)
    const country = CompanyCountry.create(data.country)
    const now = new Date()

    let document: CNPJ | RIF | null = null
    
    if(!data.isInformal){
      
        if(!data.document){
            throw new Error("Document is requeired")
        }

        if( country.value === "BR"){
          document = CNPJ.create(data.document)

          const companyAlreadyExist = await this.repo.findByCnpj(document.raw)

          if(companyAlreadyExist){
            throw new Error("CNPJ already exists")
          }
        }

        if( country.value === "VE"){
          document = RIF.create(data.document)

           const companyAlreadyExist = await this.repo.findByRif(document.raw)

          if(companyAlreadyExist){
            throw new Error("RIF already exists")
          }
        }
    } 



    const company = CompanyEntity.create({
      id,
      name,
      country,
      document,
      isInformal: data.isInformal,
      createdAt: now,
      updatedAt: now
    })

    await this.repo.save(company, tx)

    return company
    
  }

}