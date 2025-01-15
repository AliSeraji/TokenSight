import { createAction } from "@reduxjs/toolkit";
import { PairData } from "./types";

export const searchRequest = createAction("dex/searchRequest");
export const searchSuccess = createAction<PairData[]>("dex/searchSuccess");
export const searchFailure = createAction<string>("dex/searchFailure");
export const setSearchType = createAction<"token" | "query">(
  "dex/setSearchType"
);
export const clearSearch = createAction("dex/clear");
