import useSwr from 'swr';

import { getCookie } from 'src/utils/getCookie';

export const useCookie = (key: string) => {
  const { data } = useSwr<string | null>(key, () => getCookie(key));
  return data || null;
};
