import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MantineProvider } from '@mantine/core'
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
