import { createSlice } from "@reduxjs/toolkit";
import { FcEmptyBattery } from "react-icons/fc";

const initialState = {
  cart: [],
  user: null,
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
    setUser(state, action) {
      state.user = action.payload;
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});

export const { addCart, removeCart, setUser, emptyCart } = actionSlice.actions;
export default actionSlice.reducer;
