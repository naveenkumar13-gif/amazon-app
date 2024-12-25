import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
      console.log(action);
    },
    removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCart, removeCart } = actionSlice.actions;
export default actionSlice.reducer;
