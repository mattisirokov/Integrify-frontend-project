import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { countriesState } from '../../types'

const initialState: countriesState = {
  allCountries: [],
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
  'countries/fetchOne',
  async (name: string) => {
    const URL = `https://restcountries.com/v3.1/name/${name}`
    const response = await axios.get(URL)

    return {
      data: response.data,
      status: response.status,
    }
  }
)

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    SortedNames: (state, action) => {
      let sortedCountries = state.allCountries
      if (action.payload === `A-to-Z`) {
        sortedCountries = state.allCountries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        )
      }
      if (action.payload === `Z-to-A`) {
        sortedCountries = state.allCountries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        )
      }
      state.allCountries = sortedCountries
    },
    SortedPopulation: (state, action) => {
      let sortedCountries = state.allCountries

      if (action.payload === 'small-to-large') {
        state.allCountries.sort((a, b) => a.population - b.population)
      }
      if (action.payload === 'large-to-small') {
        state.allCountries.sort((a, b) => b.population - a.population)
      }
      state.allCountries = sortedCountries
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.allCountries = action.payload.data
    })
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.rejected, (state) => {
      state.isLoading = false
    })
    builder.addCase(fetchCountryThunk.fulfilled, (state, action) => {
      state.allCountries = action.payload.data
    })
    builder.addCase(fetchCountryThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountryThunk.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const { SortedNames, SortedPopulation } = countriesSlice.actions

export default countriesSlice.reducer
