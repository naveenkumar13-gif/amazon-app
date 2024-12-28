import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updatePassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { updateName, updatePassword } = customerSlice.actions;
export default customerSlice.reducer;
