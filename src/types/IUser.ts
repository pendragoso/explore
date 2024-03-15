type IAllowedStore = {
  active: boolean;
  id: number;
  storeId: number;
  storeName: string;
  userId: number;
};

export type IAccessLevel =
  | 'ADMIN'
  | 'BILLING'
  | 'MANAGE_CARRIERS'
  | 'MANAGE_ORDERS'
  | 'VIEW';

export type IPluginReferralUrl =
  | 'bigcommerce_duty_tax'
  | 'bigcommerce_checkout'
  | 'shopify_checkout'
  | 'shopify_duty_tax'
  | 'magento_duty_tax'
  | 'magento_checkout';

export type IUser = {
  accessLevel: IAccessLevel;
  active: boolean;
  allowedStores: IAllowedStore[];
  assignableRoles: string[];
  contactOnly: boolean;
  department: string;
  displayName: string;
  email: string;
  emailLists: string[] | null;
  id: string | null;
  name: string | null;
  phone: string;
  proxy: boolean;
  referralUrl:
    | 'https://dashboard.zonos.com/'
    | 'dtapi'
    | 'shopifydt'
    | 'hello'
    | 'quoter'
    | 'classify'
    | 'self'
    | IPluginReferralUrl
    | null;
  roles: string[];
  storeGuid: string | null;
  storeId: number;
  userName: string;
};
