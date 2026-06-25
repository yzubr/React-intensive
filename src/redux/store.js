import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../redux/features/categoriesSlice'
import productsSlice from '../redux/features/productsSlice'
import productSlice from '../redux/features/productSlice'
import userSlice from '../redux/features/userSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: productSlice,
    user: userSlice,
  },
});
