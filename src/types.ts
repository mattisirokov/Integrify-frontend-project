export type Country = {
  name: {
    common: string
  }
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
    }
  }
  languages: {
    [key: string]: string
  }
  flags: {
    png: string
  }
  region: string
  fifa: string
  population: number
  area: string
}

export interface countriesState {
  allcountries: Country[]
  isLoading: boolean
}

export interface countryState {
  country: Country
  isLoading: boolean
}

export type Cart = {
  name: {
    common: string
  }
  flags: {
    png: string
  }
}

export interface CartState {
  items: Cart[]
  amount: number
}
