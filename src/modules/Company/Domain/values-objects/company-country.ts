export type SupportedCountries = "BR" | "VE";

export class CompanyCountry {

  private constructor(
    private readonly _value: SupportedCountries
  ) {}

  static create(country: string): CompanyCountry {

    if (!country) {
      throw new Error("O país da empresa é obrigatório.");
    }

    const upperCountry = country.toUpperCase().trim();

    if (upperCountry !== "BR" && upperCountry !== "VE") {
      throw new Error(
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