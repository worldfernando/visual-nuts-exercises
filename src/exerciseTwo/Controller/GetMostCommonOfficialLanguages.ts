/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { CountryRepository } from '../repository/CountryRepository'

interface result {
  language: string
  occurrences: number
}

export class GetMostCommonOfficialLanguages {
  constructor (private readonly countryRepository: CountryRepository) {}

  handle (): string[] {
    const allCountries = this.countryRepository.getData()

    let rankingOfLanguages: result[] = []
    for (const country of allCountries) {
      for (const language of country.getLanguages()) {
        if (!rankingOfLanguages.some(item => item.language === language)) {
          rankingOfLanguages.push({ language: language, occurrences: 1 })
        } else {
          rankingOfLanguages = rankingOfLanguages.map(item => {
            if (item.language === language) return { language: item.language, occurrences: item.occurrences + 1 }
            else return { language: item.language, occurrences: item.occurrences }
          })
        }
      }
    }
    let maxLanguageOccurrences = 0
    for (const language of rankingOfLanguages) {
      if (language.occurrences > maxLanguageOccurrences) {
        maxLanguageOccurrences = language.occurrences
      }
    }
    for (let i = 0; i < rankingOfLanguages.length; i++) {
      if (rankingOfLanguages[i].occurrences < maxLanguageOccurrences) {
        rankingOfLanguages.splice(i, 1)
      }
    }
    const finalResult = rankingOfLanguages.map(item => item.language)
    return finalResult
  }
}
