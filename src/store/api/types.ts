export interface Website {
  url: string;
}

export interface Social {
  platform: string;
  handle: string;
}

export interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
}

export interface Liquidity {
  usd: number;
  base: number;
  quote: number;
}

export interface PairInfo {
  imageUrl: string;
  websites: Website[];
  socials: Social[];
}

export interface Boosts {
  active: number;
}

export interface PairData {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels: string[];
  baseToken: TokenInfo;
  quoteToken: TokenInfo;
  priceNative: string;
  priceUsd: string;
  liquidity: Liquidity;
  fdv: number;
  marketCap: number;
  pairCreatedAt: number;
  info: PairInfo;
  boosts: Boosts;
}

export interface DexResponse {
  schemaVersion: string;
  pairs: PairData[];
}

export interface DexState {
  pairs: PairData[];
  loading: boolean;
  error: string | null;
  lastSearchQuery: string | null;
  lastSearchType: "token" | "query" | null;
  selectedPair: PairData | null;
}
