import { InvalidCountryError } from "../../Erros/invalid-country.js";

export type SupportedCountries = "BR" | "VE";

export class CompanyCountry {

  private constructor(
    private readonly _value: SupportedCountries
  ) {}

  static create(country: string): CompanyCountry {

    if (!country) {
      throw new InvalidCountryError("O país da empresa é obrigatório.");
    }

    const upperCountry = country.toUpperCase().trim();

    if (upperCountry !== "BR" && upperCountry !== "VE") {
      throw new InvalidCountryError(
        `O país '${country}' não é suportado pelo sistema. Escolha BR ou VE.`
      );
    }

    return new CompanyCountry(
      upperCountry as SupportedCountries
    );

  }

  get value(): SupportedCountries {
    return this._value
  }

}