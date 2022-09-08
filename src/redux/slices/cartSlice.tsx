import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { CartState, Cart } from '../../types'

const initialState: CartState = {
  items: [],
  amount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state: CartState, action: PayloadAction<Cart>) {
      const itemIndex = state.items.findIndex(
        (item) => item.name.common === action.payload.name.common
      )

      if (itemIndex >= 0) {
        state.amount += 1
      } else {
        state.items = [...state.items, action.payload]
      }
    },
    removeFromCart(state: CartState, action: PayloadAction<Cart>) {
      const removal = (state.items = state.items.filter(
        (item) => item.name.common !== action.payload.name.common
      ))
      state.items = removal
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
