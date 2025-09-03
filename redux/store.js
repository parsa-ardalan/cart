import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './productSlice';
export const store = configureStore({

    reducer: {

        cart: ProductSlice.reducer

    },
})