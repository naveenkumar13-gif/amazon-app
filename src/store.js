import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./components/feature/ActionSlice";
import customerSlice from "./components/feature/CustomerSlice";

const store = configureStore({
  reducer: {
    action: actionSlice,
    customer: customerSlice,
  },
});

export default store;
