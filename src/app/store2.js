import { configureStore } from '@reduxjs/toolkit'
import secondReducer from '../features/secondSlice'

export const store2 = configureStore({
  reducer: {
    second: secondReducer,
  },
})