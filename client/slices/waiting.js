import { createReducer } from '@reduxjs/toolkit'
import { showError } from './errorMessage'

const waiting = createReducer(false, (builder) => {
  builder
    .addCase(showError, () => false)
    .addMatcher(
      ({ type }) => type.endsWith('/pending'),
      () => true
    )
    .addMatcher(
      ({ type }) => type.endsWith('/fulfilled') || type.endsWith('/rejected'),
      () => false
    )
    .addMatcher(
      ({ type }) => type.endsWith('/cancelled'),
      () => true
    )
    .addMatcher(
      ({ type }) => type.endsWith('/completed'),
      () => true
    )
})

export default waiting
