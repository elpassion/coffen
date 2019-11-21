import rootReducer from "stores/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer
});
