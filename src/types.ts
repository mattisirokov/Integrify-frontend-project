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
  area: number
}

export interface countriesState {
  allcountries: Country[]
  isLoading: boolean
}

export type Cart = Pick<Country, 'name' | 'flags'>

export interface CartState {
  items: Cart[]
  amount: number
}
