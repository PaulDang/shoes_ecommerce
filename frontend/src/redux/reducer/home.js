import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countNumber: 1,
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    count(state, action) {
      state.countNumber = action.payload;
    },
  },
});
const { actions, reducer } = homeReducer;
export const { count } = actions;
export default reducer;
