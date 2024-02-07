import { api } from '@/lib/axios'
export interface Country {
  name: {
    common: string
    official: string
    nativeName: {
      [key: string]: {
        common: string
        official: string
      }
    }
  }
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    [key: string]: string
  }
  translations: string
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: string
  flag: string
  maps: string
  population: number
  fifa: string
  car: {
    signs: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: string
  coatOfArms: string
  startOfWeek: string
  capitalInfo: {
    latlng: number[]
  }
  postalCode: string
}

export async function flags() {
  const response = await api.get<Country>('all')
  return response.data
}
