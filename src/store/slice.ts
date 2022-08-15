import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "root-form-slice",
  initialState: {},
  reducers: {
    sliceOne(state: any, action) {
      state.main = action.payload;
    },
  },
});

export const { sliceOne } = mainSlice.actions;
export default mainSlice.reducer;
