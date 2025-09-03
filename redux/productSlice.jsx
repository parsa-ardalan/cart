import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({

    name: "cart-product",
    initialState: { value: [] },

    reducers: {

        add: (state, action) => {
            
            state.value.push(action.payload);
        }
    }
})

export default ProductSlice;