import { mutate } from 'swr';

import { jsonParse } from 'src/utils/jsonParse';

export type IStorageType = 'session' | 'local';

export type IStorageKey = ILocalStorageKey | ISessionStorageKey;

export type ILocalStorageKey = 'current-schema' | 'current-store-id';

export type ISessionStorageKey =
  | 'storeId'
  | 'userStoreId'
  | 'userId'
  | 'credentialtoken';

// TODO: make this discriminate the union

export type StorageProps = {
  /**
   * @param json - If true, the value will be set/parsed as JSON
   * @default false
   */
  json?: boolean;
  key: IStorageKey;
  type: IStorageType;
};

type SetProps<TValue> = StorageProps & {
  value: TValue;
};

export const getStorageItem = <TValue extends unknown>({
  json,
  key,
  type,
}: StorageProps): TValue | null => {
  const storage = type === 'session' ? sessionStorage : localStorage;
  const rawValue = storage.getItem(key);

  if (!rawValue) return null;

  if (json) {
    try {
      const value = jsonParse(rawValue);
      return value as TValue;
    } catch {
      return null;
    }
  }

  return rawValue as TValue;
};

export const setStorageItem = <TValue extends unknown>({
  json,
  key,
  type,
  value,
}: SetProps<TValue>): void => {
  const storage = type === 'session' ? sessionStorage : localStorage;

  const setValue = json ? JSON.stringify(value) : String(value);

  storage.setItem(key, setValue);

  mutate(key, value);
};
