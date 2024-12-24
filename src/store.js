import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./components/feature/ActionSlice";

const store = configureStore({
  reducer: {
    action: actionSlice,
  },
});

export default store;
