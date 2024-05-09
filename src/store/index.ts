import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api";
<<<<<<< HEAD
import { credentialsSlice } from "./slices/auth";
=======
>>>>>>> ab93aef2 (first unit project)

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
<<<<<<< HEAD
    credentials: credentialsSlice.reducer
=======
>>>>>>> ab93aef2 (first unit project)
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  devTools: false,
=======
  devTools: true,
>>>>>>> ab93aef2 (first unit project)
=======
  devTools: false,
>>>>>>> 50fe44b2 (- add WS login implementation)
=======
=======
>>>>>>> c662ef07 (- add WS login implementation)
  devTools: false,
=======
  devTools: true,
>>>>>>> e6aa837d (first unit project)
<<<<<<< HEAD
>>>>>>> 4cdec91b (first unit project)
=======
=======
  devTools: false,
>>>>>>> df35d18d (- add WS login implementation)
>>>>>>> c662ef07 (- add WS login implementation)
});
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
