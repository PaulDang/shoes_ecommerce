import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    toggle(state, action) {
      state.toggle = !action;
    },
  },
});
const { actions, reducer } = homeReducer;
export const { toggle } = actions;
export default reducer;
