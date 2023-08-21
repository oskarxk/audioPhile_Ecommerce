import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductState } from 'types/product'

type State = {
  products: ProductState[]
}

const initialState: State = {
  products: JSON.parse(sessionStorage.getItem('cartItems') || '[]'),
}

const cart = createSlice({
  name: 'cm',
  initialState,
  reducers: {
    addItem: (
      state: State,
      action: PayloadAction<{ quantity: number; product: Product }>
    ) => {
      const { quantity, product } = action.payload
      const existingProduct = state.products.find(
        (item) => item._id === product._id
      )

      if (!existingProduct) {
        state.products.push({ ...product, quantity })
      } else {
        existingProduct.quantity = quantity
      }
    },
    increaseItem: (state: State, action: PayloadAction<number>) => {
      const itemId = action.payload
      const cartItem = state.products.find((item) => item._id === itemId)

      if (cartItem) {
        cartItem.quantity += 1
      }
    },
    removeItem: (state: State, action: PayloadAction<number>) => {
      const itemId = action.payload
      const cartItemIndex = state.products.findIndex(
        (item) => item._id === itemId
      )

      if (cartItemIndex !== -1) {
        const cartItem = state.products[cartItemIndex]
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1
        } else {
          state.products.splice(cartItemIndex, 1)
        }
      }
    },
    removeAll: (state: State) => {
      state.products = []
    },
  },
})

export const cartActions = cart.actions
export default cart
