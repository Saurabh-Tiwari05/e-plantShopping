import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        })
      }

      state.totalQuantity += 1
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      )

      if (item) {
        item.quantity += 1
        state.totalQuantity += 1
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      )

      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
      }
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload.id
      )

      if (item) {
        state.totalQuantity =
          state.totalQuantity - item.quantity + action.payload.quantity

        item.quantity = action.payload.quantity
      }
    },

    removeItem: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      )

      if (item) {
        state.totalQuantity -= item.quantity

        state.items = state.items.filter(
          item => item.id !== action.payload
        )
      }
    },
  },
})

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer
