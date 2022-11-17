import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../api/products'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    return await getProducts()
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (_, { payload }) => {
      return payload
    },
  },
})

export const selectProducts = (state) => state.products
export default productsSlice.reducer
