import { CountryRepository } from '../repository/CountryRepository'

export class GetCountOfTheOfficialLanguagesSpokenInTheCountries {
  constructor (private readonly countryRepository: CountryRepository) {}

  handle (): number {
    const allCountries = this.countryRepository.getData()

    const languages = []
    for (const country of allCountries) {
      for (const language of country.getLanguages()) {
        if (!languages.includes(language)) languages.push(language)
      }
    }
    return languages.length
  }
}
