import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    authenticate: () => true
  }
});
