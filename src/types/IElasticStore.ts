import type { IStore } from 'src/types';

export const elasticStoreFields = [
  'id',
  'name',
  'vendorUrl',
  'compass',
  'usesOwnPaymentAccounts',
  'shoppingCartPlatform',
  'active',
  'implementationPhase',
  'test',
] as const;

export type IElasticStore = Pick<IStore, (typeof elasticStoreFields)[number]>;
