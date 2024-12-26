import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernmae: "",
  password: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateName(state, action) {
      state.usernmae = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { updateName, updatePassword } = customerSlice.actions;
export default customerSlice.reducer;