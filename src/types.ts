// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A single country
export type Country = {
  id: string
  name: string
  population: number
  fifa: string
  region: string
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

export type ProductState = {
  inCart: Country[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
}
