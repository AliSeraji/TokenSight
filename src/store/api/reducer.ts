import { createReducer } from "@reduxjs/toolkit";
import {
  searchRequest,
  searchSuccess,
  searchFailure,
  setSearchType,
  clearSearch,
} from "./actions";
import { DexState } from "./types";

const initialState: DexState = {
  pairs: [],
  loading: false,
  error: null,
  lastSearchQuery: null,
  lastSearchType: null,
};

export const dexTokens = createReducer(initialState, (builder) => {
  builder
    .addCase(searchRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(searchSuccess, (state, { payload }) => {
      state.pairs = payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(searchFailure, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })
    .addCase(setSearchType, (state, { payload }) => {
      state.lastSearchType = payload;
    })
    .addCase(clearSearch, (state) => {
      state.pairs = [];
      state.error = null;
      state.lastSearchQuery = null;
      state.lastSearchType = null;
    });
});
