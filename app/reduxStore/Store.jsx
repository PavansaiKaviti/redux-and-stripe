"use client";
import { configureStore } from "@reduxjs/toolkit";

import cartsliceReducer from "@/app/reduxStore/cartSlice/Cartslice";
import odersliceReducer from "@/app/reduxStore/oderSlice/Oderslice";

export const Store = configureStore({
  reducer: {
    cart: cartsliceReducer,
    oder: odersliceReducer,
  },
});
