import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "user",
  initialState: {}, // Object to hold user data
  reducers: {
    add: (state, action) => {
      return { ...state, ...action.payload }; // Merge new data into state
    },
  },
});

export const { add } = formSlice.actions;
export default formSlice.reducer;
