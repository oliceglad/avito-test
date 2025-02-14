import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { itemsApi } from "../api/items";

export const store = configureStore({
  reducer: {
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

setupListeners(store.dispatch);