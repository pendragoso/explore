import { useMemo } from 'react';

import { type IntrospectionQuery, buildClientSchema } from 'graphql';

import type { FetcherReturn } from '@zonos/amino/utils/handleFetch';

import { useSwr } from 'src/hooks/useSwr';

type Props = {
  schemaId: number | null;
  schemaType: 'deployed' | 'draft';
};

export const useFetchedSchema = ({ schemaId, schemaType }: Props) => {
  // only fetch schema if schemaId is not null
  const { data: schemaData, isLoading } = useSwr<
    FetcherReturn<IntrospectionQuery>
  >(
    () =>
      schemaId
        ? `/api/get-schema?schemaType=${schemaType}&schemaId=${schemaId}`
        : null,
    {
      errorRetryCount: 0,
      keepPreviousData: true,
    }
  );

  const fetchedSchema = useMemo(() => {
    if (schemaData?.json) {
      return buildClientSchema(schemaData.json);
    }
    return null;
  }, [schemaData]);
  return { fetchedSchema, isLoading };
};
