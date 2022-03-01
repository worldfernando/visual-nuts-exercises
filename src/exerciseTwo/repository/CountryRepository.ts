import { Country } from '../Model/Country'

export interface CountryRepository {
  getData(): Country[] | []
  getTotalOfCountry(): number
}
