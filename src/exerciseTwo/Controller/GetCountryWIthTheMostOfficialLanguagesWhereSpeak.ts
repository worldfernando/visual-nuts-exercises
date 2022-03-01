import { Country } from '../Model/Country'
import { CountryRepository } from '../repository/CountryRepository'

export class GetCountryWIthTheMostOfficialLanguagesWhereSpeak {
  constructor (private readonly countryRepository: CountryRepository) {}

  handle (language: string): Country | null {
    const countriesThatSpeakTheLanguage = this.countryRepository.getData().filter(item => item.getLanguages().includes(language))
    let countOfLanguage = 0
    let result: Country = null
    for (const country of countriesThatSpeakTheLanguage) {
      if (country.getLanguages().length > countOfLanguage) {
        result = country
        countOfLanguage = country.getLanguages().length
      }
    }
    return result
  }
}
