import axios from "axios";
import { TokenProfile } from "store/api/types";

export const BASE_URL = "https://api.dexscreener.com";
// Base configuration for axios
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// API Routes
const routes = {
  tokenProfiles: "/token-profiles/latest/v1",
  // Add your additional routes here, for example:
  // pairs: '/latest/pairs',
  // tokens: '/latest/tokens',
  // etc.
};

// API calls
export const fetchTokenProfiles = async (): Promise<TokenProfile[]> => {
  try {
    const response = await api.get(routes.tokenProfiles);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch token profiles"
      );
    }
    throw error;
  }
};
