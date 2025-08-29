
import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./reducers/userReducer";
import seoReducer from "./reducers/seoReducer";


export const store = configureStore({
  reducer: {
    user: userReducer,
    seo: seoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;