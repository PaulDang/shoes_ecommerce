import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducer/home";

const store = configureStore({
  reducer: {
    homeReducer,
  },
});

export default store;
