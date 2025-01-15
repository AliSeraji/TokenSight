import { createConfig, http } from "wagmi";
import { cookieStorage, createStorage, http as coreHttp } from "@wagmi/core";
import { mainnet, sepolia } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  arbitrum as abiAppKit,
  mainnet as mainnetAppKit,
  polygon,
  avalanche,
  mantle,
} from "@reown/appkit/networks";

if (!process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) {
  throw new Error(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  );
}

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
      metadata: {
        name: "TokenSight",
        description: "Token Analysis Dashboard",
        url: "https://localhost:3000",
        icons: ["https://localhost:3000/logo.png"],
      },
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const networks = [mainnetAppKit, abiAppKit, polygon, avalanche, mantle];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const customWagmiConfig = wagmiAdapter.wagmiConfig;
