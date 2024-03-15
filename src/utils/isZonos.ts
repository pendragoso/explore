import type { IUser } from 'src/types';

export const isZonos = (user: IUser | null): boolean =>
  user?.email.includes('@zonos.com') || false;
