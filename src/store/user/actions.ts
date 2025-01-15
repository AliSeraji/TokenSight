import { createAction } from "@reduxjs/toolkit";

export const updateDarkMode = createAction<{ darkMode: boolean }>(
  "user/updateDarkMode"
);
export const toggleTheme = createAction("user/toggleTheme");
