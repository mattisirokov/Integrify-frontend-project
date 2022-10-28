import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
  countries: Country[]
  isLoading: boolean
}

const initialState: countriesState = {
  countries: [],
  isLoading: false,
}

//fetches all countries
export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetch',
  async () => {
    const URL = `https://restcountries.com/v3.1/all?fields=name,languages,currencies,flags,capital,population,fifa,region,area`
    const response = await axios.get(URL)

    return {
      data: response.data,
      status: response.status,
    }
  }
)

//fetches single country for the SingleCountry component
export const fetchCountryThunk = createAsyncThunk(
  'countries/fetch',
  async (name: string) => {
    const URL = `https://restcountries.com/v3.1/name/${name}`
    const response = await axios.get(URL)

    return {
      data: response.data,
      status: response.status,
    }
  }
)

//fetches countries for the search component
export const fetchCountrySearch = createAsyncThunk(
  'countries/fetch',
  async (term: string) => {
    const URL = `https://restcountries.com/v3.1/name/${term}/?fields=name,languages,currencies,flags,capital,population,fifa`
    const response = await axios.get(URL)

    return {
      data: response.data,
      status: response.status,
    }
  }
)

//sorting slice
export const sortedCountries = createSlice({
  name: 'dropdownSort',
  initialState,
  reducers: {
    SortedNames: (state, action) => {
      if (action.payload === `A-to-Z`) {
        state.countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      } else if (action.payload === `Z-to-A`) {
        state.countries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        )
      }
    },
    SortedPopulation: (state, action) => {
      if (action.payload === 'small-to-large') {
        state.countries.sort((a, b) => a.population - b.population)
      } else if (action.payload === 'large-to-small') {
        state.countries.sort((a, b) => b.population - a.population)
      }
    },
  },
})

export const fetchSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.countries = action.payload.data
    })
    builder.addCase(fetchCountriesThunk.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.rejected, (state, action) => {
      state.isLoading = false
    })
  },
})

export const { SortedNames, SortedPopulation } = sortedCountries.actions

export default fetchSlice.reducer
