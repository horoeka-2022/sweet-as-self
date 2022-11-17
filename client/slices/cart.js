import { createSlice } from '@reduxjs/toolkit'
import { placeOrder } from './orders'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => getNewCart(state, payload),
    deleteFromCart: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
    updateCart: (state, { payload }) => getUpdatedCart(state, payload),
  },
  extraReducers: { [placeOrder.fulfilled]: () => [] },
})

export const { addToCart, deleteFromCart, updateCart } = cartSlice.actions
export const selectCart = (state) => state.cart
export default cartSlice.reducer

//
// --- REDUCER HELPER FUNCTIONS ---
//
export function getNewCart(state, payload) {
  const match = state.map((item) =>
    item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item
  )
  const newItem = { ...payload, quantity: +1 }
  const newState = [...state, newItem]
  if (state.find((item) => item.id === payload.id)) {
    return match
  } else {
    return newState
  }
}

export function getUpdatedCart(cart, updateInfo) {
  const { id, newQuantity } = updateInfo
  return cart.map((item) => {
    const quantity = item.id === id ? Number(newQuantity) : item.quantity
    return { ...item, quantity }
  })
}
