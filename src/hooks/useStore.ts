import { useEffect } from 'react';

import { preload } from 'swr';

import { useNotify } from '@zonos/amino/utils/hooks/useNotify';
import { useSwrt } from '@zonos/amino/utils/hooks/useSwrt';

import { useStorage } from 'src/hooks/useStorage';
import type { IStore } from 'src/types';
import { fetcher } from 'src/utils/fetcher';

import { useCookie } from './useCookie';
import { useGraphQl } from './useGraphQl';
import { useUser } from './useUser';

const getUrl = (id: number) => `/api/store/v1/elasticStore/${id}`;
const prefetchStore = (id: number) => preload(getUrl(id), fetcher);

export const useStore = () => {
  const { user } = useUser();
  const notify = useNotify();
  const hasUser = !!user;

  const [storeId, setStoreId] = useStorage<number>({
    defaultValue: 909,
    key: 'current-store-id',
    type: 'local',
  });

  const [credentialToken, setCredentialToken] = useStorage<string | null>({
    defaultValue: null,
    key: 'credentialtoken',
    type: 'local',
  });

  const userToken = useCookie('IGuser');

  const { data: loginLegacyData, error: loginLegacyError } = useGraphQl(
    storeId && userToken
      ? {
          endpoint: 'auth/loginLegacy',
          variables: {
            input: {
              storeId,
              userToken,
            },
          },
        }
      : null,
    {
      errorRetryInterval: 4000,
    }
  );

  const graphQlToken = loginLegacyData?.json?.loginLegacy?.credential;
  const loginLegacyErrorMessage =
    loginLegacyError?.errors.find(Boolean)?.message || '';

  useEffect(() => {
    if (loginLegacyErrorMessage) {
      notify(loginLegacyErrorMessage, {
        intent: 'error',
      });
    }
  }, [loginLegacyErrorMessage, notify]);

  const shouldFetchStore = hasUser;

  const {
    data: storeData,
    error: storeError,
    mutate: mutateStore,
  } = useSwrt<IStore>(
    () => (shouldFetchStore && storeId ? getUrl(storeId) : null),
    {
      errorRetryInterval: 4000,
    }
  );

  const failedStoreResponse = storeError && !!storeError.status;

  useEffect(() => {
    if (
      (shouldFetchStore && failedStoreResponse) ||
      (shouldFetchStore && !storeId)
    ) {
      setStoreId(user.storeId);
    }
  }, [shouldFetchStore, failedStoreResponse, setStoreId, storeId, user]);

  useEffect(() => {
    if (graphQlToken || (credentialToken && !graphQlToken)) {
      // Avoid holding onto an old token (making a request with a new store selected, but with a previous store's token is a bad idea :sweat_smile:)
      setCredentialToken(graphQlToken || '');
    }
  }, [credentialToken, graphQlToken, setCredentialToken]);

  return {
    credentialToken,
    mutateStore,
    prefetchStore,
    response: storeData?.response || null,
    setStoreId,
    store: storeData?.json || null,
    storeId: storeId || null,
  };
};
