import axios from "axios";

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
};
