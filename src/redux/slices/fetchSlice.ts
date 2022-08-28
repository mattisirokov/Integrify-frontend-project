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
}

export interface countriesState {
  items: Country[]
}

const initialState: countriesState = {
  items: [],
}

export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetch',
  async () => {
    const query = `fields=name,languages,currencies,flags,capital`
    const URL = `https://restcountries.com/v3.1/all?${query}`
    const response = await axios.get(URL)
    console.log('response: ', response)
    return {
      data: response.data,
      status: response.status,
    }
  }
)

export const fetchSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      console.log(`action`, action)
      state.items = action.payload.data
    })
  },
})

export default fetchSlice.reducer