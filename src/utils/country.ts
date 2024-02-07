export interface NativeName {
  common: string
  official: string
}

export interface Currency {
  name: string
  symbol: string
}

export interface Languages {
  [key: string]: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Car {
  signs: string[]
  side: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface Flag {
  [png: string]: string
}

export interface Country {
  name: {
    common: string
    official: string
    nativeName: NativeName
  }
  map: string
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    [key: string]: Currency
  }
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: { [key: string]: string }
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: string[]
  flag: string
  population: number
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flag
  coatOfArms: string
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: string
}
