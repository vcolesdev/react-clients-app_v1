import { configureStore } from "@reduxjs/toolkit";
import { clientsApi } from "../redux/clientsApi.ts";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [clientsApi.reducerPath]: clientsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(clientsApi.middleware).concat();
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//A utility used to enable refetchOnMount and refetchOnReconnect behaviors.
// It requires the dispatch method from your store. Calling setupListeners(store.dispatch)
// will configure listeners with the recommended defaults, but you have the option of providing
// a callback for more granular control.
setupListeners(store.dispatch);
