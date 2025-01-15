import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/reducer";
import { searchReducer } from "./search/reducer";
import { dexTokens } from "./api/reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    dexTokens: dexTokens,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
