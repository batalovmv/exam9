import { configureStore } from "@reduxjs/toolkit";


import orderReducer from "../features/OrderSlice";

const store = configureStore({
  reducer: {
    contacts: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

