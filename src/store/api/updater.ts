import { AppDispatch } from "store";
import axios from "axios";
import {
  searchRequest,
  searchSuccess,
  searchFailure,
  setSearchType,
} from "./actions";
import { DexResponse } from "./types";

export class DexUpdater {
  private dispatch: AppDispatch;
  private api: ReturnType<typeof axios.create>;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
    this.api = axios.create({
      baseURL: "https://api.dexscreener.com/latest/dex",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public async searchByTokenAddresses(addresses: string) {
    try {
      this.dispatch(searchRequest());
      this.dispatch(setSearchType("token"));

      const response = await this.api.get<DexResponse>(`/tokens/${addresses}`);

      if (response.status === 200 && response.data?.pairs) {
        this.dispatch(searchSuccess(response.data.pairs));
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message || "Failed to fetch token data";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      this.dispatch(searchFailure(errorMessage));
    }
  }

  public async searchByQuery(query: string) {
    try {
      this.dispatch(searchRequest());
      this.dispatch(setSearchType("query"));

      const response = await this.api.get<DexResponse>("/search", {
        params: { q: query },
      });

      if (response.status === 200 && response.data?.pairs) {
        this.dispatch(searchSuccess(response.data.pairs));
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      if (axios.isAxiosError(error)) {
        errorMessage =
          error.response?.data?.message || "Failed to search pairs";
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      this.dispatch(searchFailure(errorMessage));
    }
  }
}
