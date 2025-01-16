import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { DexUpdater } from "./updater";
import { clearSearch, setSelectedPair } from "./actions";
import { PairData } from "./types";
import { useAppDispatch, useAppSelector } from "store/hooks";

export function useDexSearch() {
  const dispatch = useDispatch();
  const pairs = useSelector((state: RootState) => state.dexTokens.pairs);
  const loading = useSelector((state: RootState) => state.dexTokens.loading);
  const error = useSelector((state: RootState) => state.dexTokens.error);
  const lastSearchType = useSelector(
    (state: RootState) => state.dexTokens.lastSearchType
  );

  const updater = new DexUpdater(dispatch);

  const searchByTokenAddresses = useCallback(
    (addresses: string) => {
      return updater.searchByTokenAddresses(addresses);
    },
    [updater]
  );

  const searchByQuery = useCallback(
    (query: string) => {
      return updater.searchByQuery(query);
    },
    [updater]
  );

  const clearResults = useCallback(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  return {
    pairs,
    loading,
    error,
    lastSearchType,
    searchByTokenAddresses,
    searchByQuery,
    clearResults,
  };
}

export function useSelectedPair(): PairData | null {
  return useAppSelector((state) => state.dexTokens.selectedPair);
}

export function useSetSelectedPair() {
  const dispatch = useAppDispatch();
  const setter = useCallback(
    (pair: PairData) => {
      dispatch(setSelectedPair(pair));
    },
    [dispatch]
  );
  return setter;
}
