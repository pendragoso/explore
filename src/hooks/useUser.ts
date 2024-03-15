import { useMemo } from 'react';

import { useSwrt } from '@zonos/amino/utils/hooks/useSwrt';

import type { IUser } from 'src/types';
import { fetcher } from 'src/utils/fetcher';
import { isZonos } from 'src/utils/isZonos';

type IAugmentedUser = IUser & {
  isZonos: boolean;
};

type IReturn = {
  user: IAugmentedUser | null;
};

export const useUser = (): IReturn => {
  const { data, error } = useSwrt<IUser>('/api/auth/verifyUserToken', {
    fetcher,
    keepPreviousData: true,
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const user = data?.json || null;

  if (error?.status === 401 || (data && !user?.active)) {
    window.location.replace(
      `${process.env.NEXT_PUBLIC_LOGIN_URL}?next=${window.location.href}`
    );
  }

  /**
   * this constant is spreading the user object
   * which its memory reference will change every time the hook render
   * so we need to memoize it to avoid unnecessary re-renders
   * */
  const augmentedUser: IAugmentedUser | null = useMemo(
    () => (user ? { ...user, isZonos: isZonos(user) } : null),
    [user]
  );

  return { user: augmentedUser };
};
