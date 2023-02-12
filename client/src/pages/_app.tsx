import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import React, { useMemo } from 'react'
import { TamaguiProvider } from 'tamagui'

import config from '../../tamagui.config'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme()
  const contents = useMemo(() => {
    return <Component {...pageProps} />
  }, [pageProps])

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <NextThemeProvider onChangeTheme={setTheme}>
        <TamaguiProvider config={config} disableInjectCSS disableRootThemeClass defaultTheme={theme}>
          {contents}
        </TamaguiProvider>
      </NextThemeProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
