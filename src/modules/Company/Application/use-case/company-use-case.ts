
import { CompanyEntity } from "../../Domain/entities/company-entity.js";
import type { CompanyRepository } from "../../Domain/repository/company-repository.js";
import { CNPJ, CompanyCountry, CompanyId, CompanyName, RIF } from "../../Domain/values-objects/index.js";
import { CnpjAlreadyExist } from "../../Erros/cnpj-already-exists.js";
import { DocumentIdRequeired } from "../../Erros/document-is-requeired.js";
import { RifAlreadyExist } from "../../Erros/rif-already-exist.js";
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
            throw new DocumentIdRequeired()
        }

        if( country.value === "BR"){
          document = CNPJ.create(data.document)
    const cnpj = CNPJ.create(document.raw)


          const companyAlreadyExist = await this.repo.findByCnpj(cnpj)

          if(companyAlreadyExist){
            throw new CnpjAlreadyExist()
          }
        }

        if( country.value === "VE"){
          document = RIF.create(data.document)
    const rif = RIF.create(document.raw)

           const companyAlreadyExist = await this.repo.findByRif(rif)

          if(companyAlreadyExist){
            throw new RifAlreadyExist()
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