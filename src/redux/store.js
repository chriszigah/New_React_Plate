import { configureStore } from "@reduxjs/toolkit";
import couunterReducer from "./features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: couunterReducer,
  },
});
