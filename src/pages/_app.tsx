import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  customWagmiConfig,
  networks,
  projectId,
  wagmiAdapter,
} from "config/wagmi";
import { GlobalStyles } from "styles/GlobalStyles";
import ThemeProvider from "styles";
import { store } from "store";
import { DefaultLayout } from "components/layout";
import { createAppKit } from "@reown/appkit/react";
import { mainnet } from "@reown/appkit/networks";
import { Updaters } from "store/updaters";

const queryClient = new QueryClient();

const metadata = {
  name: "TokenSight",
  description: "TokenSight Test",
  url: "https://127.0.0.1",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, ...networks],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={customWagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <ThemeProvider>
            <GlobalStyles />
            <Updaters />
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </ThemeProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
