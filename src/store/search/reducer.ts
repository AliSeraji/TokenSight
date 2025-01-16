import { createReducer } from "@reduxjs/toolkit";
import {
  setSearchQuery,
  setSearchLoading,
  setSearchError,
  clearSearch,
  toggleSearchModal,
} from "./actions";

export interface SearchState {
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
  isModalOpen: boolean;
}

const initialState: SearchState = {
  searchQuery: "",
  isLoading: false,
  error: null,
  isModalOpen: false,
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
    .addCase(toggleSearchModal, (state, { payload }) => {
      state.isModalOpen = payload;
    })
    .addCase(clearSearch, (state) => {
      state.searchQuery = "";
      state.error = null;
    });
});
