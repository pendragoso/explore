import type { FetcherReturn } from '@zonos/amino/utils/handleFetch';

import { useSwr } from './useSwr';

export const useFeature = (key: string) => {
  const { data } = useSwr<FetcherReturn<boolean>>(
    `/api/show-feature?aspectKey=${key}`,
    { errorRetryCount: 0 }
  );
  return !!data?.json;
};
