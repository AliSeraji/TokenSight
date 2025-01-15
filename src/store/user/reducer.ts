import { createReducer } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { updateDarkMode, toggleTheme } from "./actions";

const initialState: UserState = {
  darkMode: true,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateDarkMode, (state, { payload: { darkMode } }) => {
      state.darkMode = darkMode;
    })
    .addCase(toggleTheme, (state) => {
      state.darkMode = !state.darkMode;
    });
});

export default userReducer;
