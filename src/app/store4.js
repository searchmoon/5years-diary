import { configureStore } from '@reduxjs/toolkit'
import fourthReducer from '../features/fourthSlice'

export const store4 = configureStore({
  reducer: {
    fourth: fourthReducer,
  },
})