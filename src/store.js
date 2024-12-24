import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./components/feature/ActionSlice";

const store = configureStore({
  reducer: {
    action: actionReducer,
  },
});

export default store;
