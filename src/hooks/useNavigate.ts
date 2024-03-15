import { useCallback } from 'react';
import { Router, useRouter } from 'next/router';

import { handleAbsolutePath } from 'src/utils/fetcher';

export const useNavigate = () => {
  const { push } = useRouter();

  const navigate = useCallback((...args: Parameters<Router['push']>) => {
    const [url] = args;
    if (typeof url === 'string') {
      handleAbsolutePath(url);
    }
    push(...args);
    /** @desc next/router useRouter doesn't memoize callback methods :barf: */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return navigate;
};
