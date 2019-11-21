import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth";

const rootReducer = combineReducers({ auth: authSlice.reducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
