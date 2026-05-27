import { CompanyEntity } from "../../../Domain/entities/company-entity.js"

import {
  CompanyCountry,
  CompanyId,
  CompanyName,
  CNPJ,
  RIF
} from "../../../Domain/values-objects/index.js"

import { CompanyTable } from "../schema/company-schema.js"

export class CompanyMapper {

  static toPersistence(company: CompanyEntity) {

    const document = company.document ?? null

    return {
      id: company.id,
      name: company.name,
      country: company.country,

      cnpj:
        company.country === "BR"
          ? document
          : null,

      rif:
        company.country === "VE"
          ? document
          : null,

      isInformal: company.isInformal,

      createdAt: company.cratedAt,
      updatedAt: company.updatedAt,
    }

  }

  static toDomain(
    raw: typeof CompanyTable.$inferSelect
  ): CompanyEntity {

    const country = CompanyCountry.create(raw.country)

    let document = null

    if (raw.cnpj) {
      document = CNPJ.create(raw.cnpj)
    }

    if (raw.rif) {
      document = RIF.create(raw.rif)
    }

    return CompanyEntity.create({

      id: CompanyId.create(raw.id),

      name: CompanyName.create(raw.name),

      country,

      document,

      isInformal: raw.isInformal,

      createdAt: raw.createdAt,

      updatedAt: raw.updatedAt,

    })

  }

}