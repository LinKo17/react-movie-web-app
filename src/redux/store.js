import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from './favouriteSlice'
import watchSlice from './watchSlice'

export const store = configureStore({
  reducer: {
    fav : favouriteSlice,
    watch : watchSlice
  },
})