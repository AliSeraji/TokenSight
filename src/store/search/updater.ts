import { AppDispatch } from "store";
import { setSearchQuery, setSearchLoading, setSearchError } from "./actions";

export default function SearchQueryUpdater(
  dispatch: AppDispatch,
  query: string
): null {
  try {
    dispatch(setSearchLoading(true));
    dispatch(setSearchQuery(query));

    dispatch(setSearchError(null));
  } catch (error) {
    dispatch(
      setSearchError(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  } finally {
    dispatch(setSearchLoading(false));
  }
  return null;
}
