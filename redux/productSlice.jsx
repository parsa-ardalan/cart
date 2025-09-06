import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({

    name: "cart-product",
    initialState: { value: [] },

    reducers: {

        add: (state, action) => {

            const newProduct = action.payload;
            const exists = state.value.find(item => item.id === newProduct.id);

            if (!exists) {
                state.value.push(newProduct);
            } else {
                console.log("Product already added");
            }
        },

        remove: (state, action) => {

            const prodductId = action.payload;
            state.value = state.value.filter(item => item.id !== prodductId);

            console.log("item " + prodductId + " has been removed from cart successfully");
        }
    }
    
})

export default ProductSlice;