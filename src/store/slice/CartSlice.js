import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(
              (item) => item._id === action.payload._id
            );
            if (item) {
              item.quantity += action.payload.quantity;
            } else {
              state.products.push(action.payload);
            }
            // Dispatch a success toast
            toast.success("Product added to cart");
          },
    }
});