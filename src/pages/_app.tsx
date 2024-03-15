import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@zonos/amino/theme.css';
import '@zonos/amino/reset.css';
import '@zonos/amino/amino.css';
import { SWRConfig } from 'swr';

import { ToastContextProvider } from '@zonos/amino/components/toast/ToastContext';
import { useAminoTheme } from '@zonos/amino/utils/hooks/useAminoTheme';

import { GraphHubContextProvider } from 'src/components/graph-hub/GraphHubContext';
import { Layout } from 'src/components/layout/Layout';
import { Loading } from 'src/components/Loading';
import { LoadingWrapper } from 'src/components/ui/LoadingWrapper';
import { useStore } from 'src/hooks/useStore';
import { inProdEnvironment } from 'src/utils/environment';
import { fetcher } from 'src/utils/fetcher';

export default function App({ Component }: AppProps) {
  const { aminoTheme } = useAminoTheme({ root: true });

  // https://github.com/graphql/graphiql/issues/129#issuecomment-1436589207
  // window.localStorage.setItem('graphiql:theme', 'light' /* or 'dark' */)
  useEffect(() => {
    const graphiqlTheme = aminoTheme === 'day' ? 'light' : 'dark';
    window.localStorage.setItem('graphiql:theme', graphiqlTheme);
  }, [aminoTheme]);

  const { credentialToken } = useStore();
  if (!credentialToken) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <>
      <Head>
        {!inProdEnvironment && <link href="/favicon-dev.ico" rel="icon" />}
      </Head>

      <SWRConfig
        value={{
          fetcher,
          keepPreviousData: true,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <GraphHubContextProvider>
          <ToastContextProvider>
            <Head>
              <title>Explore — Zonos</title>
            </Head>
            <Layout>
              <Component />
            </Layout>
          </ToastContextProvider>
        </GraphHubContextProvider>
      </SWRConfig>
    </>
  );
}
