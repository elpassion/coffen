import rootReducer from "stores/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const initStore = configureStore({
  reducer: rootReducer
});
