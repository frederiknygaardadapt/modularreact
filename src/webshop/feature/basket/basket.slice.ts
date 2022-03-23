import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from 'webshop/foundation/store'
import { BasketState } from './basket.type'

const initialState: BasketState = {
  products: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let productAlreadyExistInBasket = false
      state.products.forEach((item, key) => {
        if (item.id === action.payload.id) {
          state.products[key].quantity++
          productAlreadyExistInBasket = true
        }
      })

      if (!productAlreadyExistInBasket) {
        const product = {
          id: action.payload.id,
          quantity: action.payload.quantity || 1,
        }
        state.products.push(product)
      }
    },
  },
})

export const { addToBasket } = basketSlice.actions

export const useTotalAmountOfItemsInBasket = () => {
  const useBasketProducts = useSelector((state: RootState) => state.basket.products)
  return useBasketProducts.length
}

export const useBasket = () => useSelector((state: RootState) => state.basket)



export default basketSlice.reducer
