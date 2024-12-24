import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const actionReducer = createSlice({
  name: "action",
  initialState,
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
      console.log(action);
    },
  },
});

export const { addCart } = actionReducer.actions;
export default actionReducer.reducer;
