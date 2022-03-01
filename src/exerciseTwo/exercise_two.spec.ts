import { GetCountOfTheOfficialLanguagesSpokenInTheCountries } from './Controller/GetCountOfTheOfficialLanguagesSpokenInTheCountries'
import { GetCountryWIthTheHighestOfficialLanguages } from './Controller/GetCountryWIthTheHighestOfficialLanguages'
import { GetCountryWIthTheMostOfficialLanguagesWhereSpeak } from './Controller/GetCountryWIthTheMostOfficialLanguagesWhereSpeak'
import { GetMostCommonOfficialLanguages } from './Controller/GetMostCommonOfficialLanguages'
import { Country } from './Model/Country'
import { CountryRepository } from './repository/CountryRepository'

interface SutTypes {
  sut: CountryRepository
  getCountryWIthTheMostOfficialLanguagesWhereSpeak: GetCountryWIthTheMostOfficialLanguagesWhereSpeak
  getCountOfTheOfficialLanguagesSpokenInTheCountries: GetCountOfTheOfficialLanguagesSpokenInTheCountries
  getCountryWIthTheHighestOfficialLanguages: GetCountryWIthTheHighestOfficialLanguages
  getMostCommonOfficialLanguages: GetMostCommonOfficialLanguages
}

const dataFake = [
  {
    country: 'US',
    languages: ['en']
  },
  {
    country: 'BE',
    languages: ['nl', 'fr', 'de']
  },
  {
    country: 'NL',
    languages: ['nl', 'fy']
  },
  {
    country: 'DE',
    languages: ['de']
  },
  {
    country: 'ES',
    languages: ['es']
  }
]

const makeSut = (): SutTypes => {
  class CountryRepositoryStub implements CountryRepository {
    private readonly data: Country[] = dataFake.map(item => new Country(item.country, item.languages))

    getTotalOfCountry (): number {
      return this.data.length
    }

    getData (): Country[] | [] {
      return this.data
    }
  }
  const sut = new CountryRepositoryStub()
  const getCountryWIthTheMostOfficialLanguagesWhereSpeak = new GetCountryWIthTheMostOfficialLanguagesWhereSpeak(sut)
  const getCountOfTheOfficialLanguagesSpokenInTheCountries = new GetCountOfTheOfficialLanguagesSpokenInTheCountries(sut)
  const getCountryWIthTheHighestOfficialLanguages = new GetCountryWIthTheHighestOfficialLanguages(sut)
  const getMostCommonOfficialLanguages = new GetMostCommonOfficialLanguages(sut)
  return {
    sut,
    getCountryWIthTheMostOfficialLanguagesWhereSpeak,
    getCountOfTheOfficialLanguagesSpokenInTheCountries,
    getCountryWIthTheHighestOfficialLanguages,
    getMostCommonOfficialLanguages
  }
}

describe('Exercise Two', () => {
  test('Should return the number of countries in the world.', () => {
    const { sut } = makeSut()
    const response = sut.getTotalOfCountry()
    expect(response).toBe(dataFake.length)
  })

  test('Should return the country with the most official languages, where they officially speak German (de).', () => {
    const { getCountryWIthTheMostOfficialLanguagesWhereSpeak } = makeSut()
    const response = getCountryWIthTheMostOfficialLanguagesWhereSpeak.handle('de')
    const country = { country: 'BE', languages: ['nl', 'fr', 'de'] }
    expect(response).toEqual(country)
  })

  test('Should return the number of the official languages spoken in the listed countries.', () => {
    const { getCountOfTheOfficialLanguagesSpokenInTheCountries } = makeSut()
    const response = getCountOfTheOfficialLanguagesSpokenInTheCountries.handle()
    const languages = ['en', 'nl', 'fr', 'de', 'fy', 'es']
    expect(response).toEqual(languages.length)
  })

  test('Should return the country with the highest official languages.', () => {
    const { getCountryWIthTheHighestOfficialLanguages } = makeSut()
    const response = getCountryWIthTheHighestOfficialLanguages.handle()
    const country = { country: 'BE', languages: ['nl', 'fr', 'de'] }
    expect(response).toEqual(country)
  })

  test('Should return the most common official language(s), of all countries.', () => {
    const { getMostCommonOfficialLanguages } = makeSut()
    const response = getMostCommonOfficialLanguages.handle()
    const languages = ['nl', 'de', 'es']
    expect(response).toEqual(languages)
  })
})
