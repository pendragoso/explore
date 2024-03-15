import { v1 as uuidV1 } from 'uuid';

export type IWithKey<T extends object> = T & { key: string };

export const addKey = <T extends object>(obj: T): T & { key: string } => ({
  ...obj,
  key: uuidV1(),
});
