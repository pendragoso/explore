import type { GraphQLError } from 'graphql';
import isEqual from 'lodash/isEqual';
import {
  type BareFetcher,
  type PublicConfiguration,
  preload,
} from 'swr/_internal';

import { getStorybookHeaders, getStorybookUrl } from 'src/utils/fetcher';
import {
  type GQLParams,
  type IEndpoint,
  type IGQLReturnJson,
  gqlRequest,
} from 'src/utils/gqlRequest';

import { useSwr } from './useSwr';

type IPreloadError = {
  extensions?: {
    code: string;
    path: string;
  };
  message: string;
};

export const gqlFetcher = async <TEndpoint extends IEndpoint>(
  params: GQLParams<TEndpoint>
) => {
  const storybookUrl = getStorybookUrl();

  if (storybookUrl) {
    const customUrl = `${storybookUrl}/api/graphql/${params.endpoint}`;
    const storybookParams = {
      ...params,
      customUrl,
      requestHeaders: getStorybookHeaders({
        headers: params.requestHeaders as HeadersInit,
        url: customUrl,
      }),
    };
    const { errors, json } = await gqlRequest(storybookParams);
    if (errors.length) {
      // eslint-disable-next-line no-throw-literal
      throw { errors };
    }
    return { json };
  }

  const { errors, json } = await gqlRequest(params);
  if (errors.length) {
    // eslint-disable-next-line no-throw-literal
    throw { errors };
  }
  return { json };
};

export const preloadGqlRequest = async <TEndpoint extends IEndpoint>(
  fetcherParams: GQLParams<TEndpoint>
): Promise<{
  errors: IPreloadError[];
  json: IGQLReturnJson<TEndpoint> | null;
}> => {
  try {
    const { json: result } = await preload(fetcherParams, gqlFetcher);
    return { errors: [], json: result };
  } catch (errors) {
    if (typeof errors === 'object' && errors && 'errors' in errors) {
      return { errors: errors.errors as IPreloadError[], json: null };
    }
    return {
      errors: [{ message: 'Unknown graphql error' }],
      json: null,
    };
  }
};

/**
 * @example
 * const { data: addressesData } = useGraphQL(
 *   setupStoreId
 *     ? {
 *         endpoint: 'dataStore/getSetupAddresses',
 *         variables: { setupStoreId },
 *       }
 *     : null
 * );
 */
export const useGraphQl = <TEndpoint extends IEndpoint>(
  fetcherParams: GQLParams<TEndpoint> | null,
  graphqlConfiguration?: Partial<
    PublicConfiguration<
      { json: IGQLReturnJson<TEndpoint> | null },
      { errors: GraphQLError[] },
      BareFetcher<{ json: IGQLReturnJson<TEndpoint> | null }>
    >
  >
) =>
  useSwr<
    { json: IGQLReturnJson<TEndpoint> | null },
    { errors: GraphQLError[] }
  >(fetcherParams, gqlFetcher, {
    compare: (a, b) => isEqual(a?.json, b?.json),
    keepPreviousData: true,
    ...graphqlConfiguration,
  });
