import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchUpdater } from "./updater";
import { clearSearch, setSearchQuery } from "./actions";
import { UserState } from "store/user/types";
import { SearchState } from "./reducer";

export interface RootState {
  user: UserState;
  search: SearchState;
}

// Hook to get the current search query
export function useSearchQuery(): string {
  return useSelector((state: RootState) => state.search.searchQuery);
}

// Hook to set the search query
export function useSetSearchQuery() {
  const dispatch = useDispatch();

  return useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );
}

// Main search hook with all functionality
export function useSearch() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  const error = useSelector((state: RootState) => state.search.error);

  const searchUpdater = new SearchUpdater(dispatch);

  const handleSearch = useCallback(
    async (query: string) => {
      await searchUpdater.updateSearchQuery(query);
    },
    [searchUpdater]
  );

  const handleClearSearch = useCallback(() => {
    dispatch(clearSearch());
  }, [dispatch]);

  return {
    searchQuery,
    isLoading,
    error,
    handleSearch,
    handleClearSearch,
  };
}
