import { Country } from '../Model/Country'
import { CountryRepository } from '../repository/CountryRepository'

export class GetCountryWIthTheHighestOfficialLanguages {
  constructor (private readonly countryRepository: CountryRepository) {}

  handle (): Country | null {
    const countries = this.countryRepository.getData()
    let countOfLanguage = 0
    let result: Country = null
    for (const country of countries) {
      if (country.getLanguages().length > countOfLanguage) {
        result = country
        countOfLanguage = country.getLanguages().length
      }
    }
    return result
  }
}
