import { configureStore } from '@reduxjs/toolkit'
import seventhReducer from '../features/seventhSlice'

export const store7 = configureStore({
  reducer: {
    seventh: seventhReducer,
  },
})