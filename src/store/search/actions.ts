import { createAction } from "@reduxjs/toolkit";

export const setSearchQuery = createAction<string>("search/setSearchQuery");
export const setSearchLoading = createAction<boolean>(
  "search/setSearchLoading"
);
export const setSearchError = createAction<string | null>(
  "search/setSearchError"
);
export const clearSearch = createAction("search/clearSearch");
export const toggleSearchModal = createAction<boolean>(
  "search/toggleSearchModal"
);
