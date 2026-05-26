import { createSlice } from '@reduxjs/toolkit'
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

      item.quantity += 1
      state.totalQuantity += 1
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      )

      if (item.quantity > 1) {
        item.quantity -= 1
        state.totalQuantity -= 1
      }
    },

    removeItem: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload
      )

      state.totalQuantity -= item.quantity

      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    },
  },
})

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer