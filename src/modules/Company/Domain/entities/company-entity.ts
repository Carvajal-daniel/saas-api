
import type { CNPJ } from "../values-objects/CompanyDocument/cnpj.js";
import type { RIF } from "../values-objects/CompanyDocument/rif.js";
import type { CompanyCountry, CompanyId, CompanyName } from "../values-objects/index.js";

export interface CompanyProps {
  id: CompanyId;
  name: CompanyName;
  country: CompanyCountry;   
  document: CNPJ | RIF | null 
  isInformal: boolean; 
  createdAt: Date;
  updatedAt: Date;
}


export class CompanyEntity{
  private constructor(
    private readonly props: CompanyProps
  ){}

  static create(props: CompanyProps): CompanyEntity{
      return new CompanyEntity(props)
  }

  get id(): string {return this.props.id.value}
  get name(): string {return this.props.name.value}
  get country(): string {return this.props.country.value}
  get document(): string | null {return this.props.document?.raw ?? null}
  get isInformal(): boolean{return this.props.isInformal}
  get cratedAt(): Date{return this.props.createdAt}
  get updatedAt(): Date{return this.props.updatedAt}

}