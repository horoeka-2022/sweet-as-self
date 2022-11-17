import { createSlice } from '@reduxjs/toolkit'

const errorMessageSlice = createSlice({
  name: 'errorMessage',
  initialState: '',
  reducers: {
    showError: (_, { payload }) => payload,
    hideError: () => '',
  },
})

export const { showError, hideError } = errorMessageSlice.actions
export default errorMessageSlice.reducer
