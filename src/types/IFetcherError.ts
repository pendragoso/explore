import type { IJsonError } from './IJsonError';

export type IFetcherError = {
  errors: IJsonError[];
  status: number;
};
