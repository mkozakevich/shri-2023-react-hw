import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart/cart";
import { movieApi } from "./services/movieApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
