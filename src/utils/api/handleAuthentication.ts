import type { NextRequest } from 'next/server';

import type { IUser } from 'src/types';
import { isZonos } from 'src/utils/isZonos';

import { getUserToken } from './getUserToken';
import { getAuthServiceToken, getServiceUrl } from './services';

const verifyUserToken = async (userToken: string | null) => {
  const url = getServiceUrl('auth');
  const serviceToken = getAuthServiceToken();

  if (userToken) {
    const response = await fetch(`${url}/verifyUserToken?detailed=true`, {
      headers: {
        Accept: 'application/json',
        serviceToken,
        userToken,
      },
      method: 'POST',
    });
    return response;
  }
  return null;
};

type IReturn = {
  isAuthorized: boolean;
  user: IUser | null;
  userToken: string | null;
};

export const handleAuthentication = async (
  req: NextRequest
): Promise<IReturn> => {
  const userToken = getUserToken(req);
  const response = await verifyUserToken(userToken);

  if (!response?.ok) {
    return { isAuthorized: false, user: null, userToken: null };
  }

  const user = await response.json<IUser>();

  return { isAuthorized: isZonos(user), user, userToken };
};
