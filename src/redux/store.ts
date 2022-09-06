import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from './slices/fetchSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    cart: cartReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
