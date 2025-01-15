import { createReducer } from "@reduxjs/toolkit";
import {
  setSearchQuery,
  setSearchLoading,
  setSearchError,
  clearSearch,
} from "./actions";

export interface SearchState {
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  searchQuery: "",
  isLoading: false,
  error: null,
};

export const searchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchQuery, (state, { payload }) => {
      state.searchQuery = payload;
    })
    .addCase(setSearchLoading, (state, { payload }) => {
      state.isLoading = payload;
    })
    .addCase(setSearchError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(clearSearch, (state) => {
      state.searchQuery = "";
      state.error = null;
    });
});
