import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import cartSlice from "./features/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
