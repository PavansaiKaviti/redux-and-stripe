"use client";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 5,
};

const oderSlice = createSlice({
  name: "Oder",
  initialState,
  reducers: {
    addoder: (state, action) => {
      // adding payload to item
      const oderload = action.payload;
      state.oders = { ...oderload };
      localStorage.setItem("oder", JSON.stringify(state));
      return state;
    },
  },
});

export const { addoder } = oderSlice.actions;
export default oderSlice.reducer;
