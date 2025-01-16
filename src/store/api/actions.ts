import { createAction } from "@reduxjs/toolkit";
import { PairData } from "./types";

export const searchRequest = createAction("api/searchRequest");
export const searchSuccess = createAction<PairData[]>("api/searchSuccess");
export const searchFailure = createAction<string>("api/searchFailure");
export const setSearchType = createAction<"token" | "query">(
  "api/setSearchType"
);
export const clearSearch = createAction("api/clear");
export const setSelectedPair = createAction<PairData>("api/setSelectedPair");
