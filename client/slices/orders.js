import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { postOrders, getOrders, patchOrderStatus } from '../api/orders'

export const placeOrder = createAsyncThunk(
  'orders/placeOrders',
  async (order) => {
    await postOrders(order)
  }
)

export const fetchOrders = createAsyncThunk(
  'getOrders/fetchOrders',
  async () => {
    return await getOrders()
  }
)

export const updateOrderStatus = createAsyncThunk(
  'updateOrders/patchOrders',
  async (status) => {
    await patchOrderStatus(status)
    const orders = await getOrders
    return orders
  }
)

const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchOrders.fulfilled]: (_, { payload }) => {
      return payload
    },
  },
})

export const selectedOrders = (state) => state.orders
export default orderSlice.reducer
