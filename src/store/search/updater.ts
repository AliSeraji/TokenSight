import { AppDispatch } from "store";
import { setSearchQuery, setSearchLoading, setSearchError } from "./actions";

export class SearchUpdater {
  private dispatch: AppDispatch;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  public async updateSearchQuery(query: string) {
    try {
      this.dispatch(setSearchLoading(true));
      this.dispatch(setSearchQuery(query));

      // Here you can add API calls or validation logic
      // For example:
      // if (isValidTokenAddress(query)) {
      //   const tokenData = await fetchTokenData(query)
      //   // Handle token data
      // }

      this.dispatch(setSearchError(null));
    } catch (error) {
      this.dispatch(
        setSearchError(
          error instanceof Error ? error.message : "An error occurred"
        )
      );
    } finally {
      this.dispatch(setSearchLoading(false));
    }
  }
}
