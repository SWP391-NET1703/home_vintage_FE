import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {
    newOrder: (state, action) => {
      state.orders.push(action.payload);
      toast.success("Order created successfully");
    },
  },
});

export const { newOrder } = orderSlice.actions;

export default orderSlice.reducer;
