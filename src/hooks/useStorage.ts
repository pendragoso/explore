import { useCallback } from 'react';

import { useSwr } from 'src/hooks/useSwr';
import {
  type StorageProps,
  getStorageItem,
  setStorageItem,
} from 'src/utils/storage';

type Props<T extends unknown> = StorageProps & {
  defaultValue: T;
};

type IReturn<T> = [value: T, setValue: (value: T) => void];

export const useStorage = <TValue extends unknown>({
  defaultValue,
  json,
  key,
  type,
}: Props<TValue>): IReturn<TValue> => {
  const { data } = useSwr<TValue | null>(
    key,
    () => getStorageItem<TValue>({ json, key, type }) || null
  );

  // this function needs to be memoized because it causes an infinite loop when setStoreId is called in useStore
  const setValue = useCallback(
    (value: TValue) => setStorageItem({ json, key, type, value }),
    [json, key, type]
  );

  return [data ?? defaultValue, setValue];
};
