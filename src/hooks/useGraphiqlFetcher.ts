import { useMemo } from 'react';

import type { HandleFetchFetcher } from '@zonos/amino/utils/_graphiqlFetcher';

import { useCurrentSchema } from 'src/hooks/useCurrentShema';
import { useStore } from 'src/hooks/useStore';
import { jsonRequest } from 'src/utils/fetcher';
import type { ISchema } from 'src/utils/gqlRequest';

const authSchemas: ISchema[] = ['auth', 'customer', 'internal'];

// Only send credentialToken for schemas that need it
const getHeaders = (
  schema: string,
  credentialToken: string
): Record<string, string> => {
  if (authSchemas.includes(schema as ISchema)) {
    return {
      credentialtoken: credentialToken,
    };
  }

  return {};
};

export const useGraphiqlFetcher = () => {
  const [schema] = useCurrentSchema();
  const { credentialToken, setStoreId, storeId } = useStore();

  const graphiqlFetcher: HandleFetchFetcher | null = useMemo(
    () =>
      credentialToken && schema
        ? async (url, opts) =>
            jsonRequest(url, {
              ...opts,
              headers: getHeaders(schema.label, credentialToken),
            })
        : null,
    [credentialToken, schema]
  );
  return {
    credentialToken,
    graphiqlFetcher,
    setStoreId,
    storeId,
  };
};
