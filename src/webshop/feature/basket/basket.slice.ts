import { createSlice } from '@reduxjs/toolkit'
import { BasketState } from './basket.type'

const initialState: BasketState = {
  products: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.products.forEach((item, key) => {
        if (item.id === action.payload.id) {
          state.products[key].quantity++
        }
      })

      const product = {
        id: action.payload.id,
        quantity: action.payload.quantity || 1,
      }

      state.products.push(product)
    },
  },
})

export const { addToBasket } = basketSlice.actions

export default basketSlice.reducer
