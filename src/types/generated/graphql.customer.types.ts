import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Decimal: number;
  ZonedDateTime: string;
};

export const addressMatchThreshold = {
  ExactAdministrativeArea: 'EXACT_ADMINISTRATIVE_AREA',
  ExactCountry: 'EXACT_COUNTRY',
  ExactHouse: 'EXACT_HOUSE',
  ExactLocality: 'EXACT_LOCALITY',
  ExactPostalCode: 'EXACT_POSTAL_CODE',
  ExactRoad: 'EXACT_ROAD',
  ExactUnit: 'EXACT_UNIT',
} as const;

export type AddressMatchThreshold =
  (typeof addressMatchThreshold)[keyof typeof addressMatchThreshold];
/** The breakdown of the amounts that are included in the `order`. */
export type AmountSubtotals = {
  __typename?: 'AmountSubtotals';
  duties: Scalars['Decimal'];
  fees: Scalars['Decimal'];
  items: Scalars['Decimal'];
  shipping: Scalars['Decimal'];
  taxes: Scalars['Decimal'];
  variance: Scalars['Decimal'];
};

/** Represents an analytics provider to send tracking events to and an associated tracking ID */
export type AnalyticsProvider = {
  __typename?: 'AnalyticsProvider';
  trackingID: Scalars['String'];
  type: AnalyticsProviderType;
};

/** Input type for analytics providers */
export type AnalyticsProviderInput = {
  trackingID: Scalars['String'];
  type: AnalyticsProviderType;
};

/** Supported web analytics providers */
export const analyticsProviderType = {
  FacebookPixel: 'FACEBOOK_PIXEL',
  GoogleAnalytics: 'GOOGLE_ANALYTICS',
} as const;

export type AnalyticsProviderType =
  (typeof analyticsProviderType)[keyof typeof analyticsProviderType];
/** Represents an organization's shared theme settings which get used across Zonos Checkout, Zonos Hello, and other shopper-facing experiences. */
export type AppearanceSettings = {
  __typename?: 'AppearanceSettings';
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary: Scalars['String'];
  /** When the AppearanceSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the AppearanceSettings */
  createdBy: Scalars['ID'];
  /** The font family used for display. Comes from Google Fonts */
  fontFamily: Scalars['String'];
  /** A unique identifier for the AppearanceSettings */
  id: Scalars['ID'];
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl: Scalars['String'];
  /** Whether this AppearanceSettings is in live or test mode */
  mode: Mode;
  /** The organization this AppearanceSettings belongs to */
  organization: Scalars['ID'];
  /** Specifies what `ElementsUIStyle` should be used */
  style: ElementsUiStyle;
  /** Specifies whether to display in dark or light mode */
  theme: ElementsUiTheme;
  /** When the AppearanceSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the AppearanceSettings */
  updatedBy: Scalars['ID'];
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution: Maybe<ZonosAttribution>;
};

/** Input type for updating an existing AppearanceSettings object. */
export type AppearanceSettingsUpdateInput = {
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary?: InputMaybe<Scalars['String']>;
  /** The font family used for display. Comes from Google Fonts */
  fontFamily?: InputMaybe<Scalars['String']>;
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** Specifies what `ElementsUIStyle` should be used */
  style?: InputMaybe<ElementsUiStyle>;
  /** Specifies whether to display in dark or light mode */
  theme?: InputMaybe<ElementsUiTheme>;
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution?: InputMaybe<ZonosAttribution>;
};

export type AppliedItemRestrictions = {
  __typename?: 'AppliedItemRestrictions';
  /** Denotes the highest level of restriction matched */
  action: Maybe<ItemRestrictionAction>;
  /** Country in which the item originates. */
  countryOfOrigin: Maybe<CountryCode>;
  id: Scalars['ID'];
  /** Human readable item description */
  itemDescription: Maybe<Scalars['String']>;
  /** HS code for this item. */
  itemHsCode: Scalars['String'];
  /** list of applicable item restrictions */
  itemRestrictions: Maybe<Array<Maybe<ItemRestriction>>>;
};

export const billingOptionCode = {
  DdpAndDdu: 'DDP_AND_DDU',
  ShipperOnly: 'SHIPPER_ONLY',
  ThirdParty: 'THIRD_PARTY',
  Unavailable: 'UNAVAILABLE',
} as const;

export type BillingOptionCode =
  (typeof billingOptionCode)[keyof typeof billingOptionCode];
export type BulkJob = {
  __typename?: 'BulkJob';
  /** The number of rows that errored out during import */
  errorCount: Maybe<Scalars['Int']>;
  /** Unsuccessful rows and their error messages */
  errorMessages: Maybe<Array<Maybe<UploadErrors>>>;
  /** The ID of the BulkJob */
  id: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** Current status of the BulkJob */
  status: Maybe<BulkJobStatus>;
  /** The total number of rows in a CSV upload */
  totalCount: Maybe<Scalars['Int']>;
  /** The number of rows that successfully were saved */
  uploadCount: Maybe<Scalars['Int']>;
};

export const bulkJobStatus = {
  Error: 'ERROR',
  FileSaved: 'FILE_SAVED',
  Initialized: 'INITIALIZED',
  Processing: 'PROCESSING',
} as const;

export type BulkJobStatus = (typeof bulkJobStatus)[keyof typeof bulkJobStatus];
/**
 * A `Carrier` is a shipping provider that Zonos supports through its products and services.
 * Carriers enable the shipping of goods from one country to another based on the availability of a `ServiceLevel` to the country.
 */
export type Carrier = {
  __typename?: 'Carrier';
  /** A unique identifier tied to a Carrier. */
  code: Scalars['String'];
  /** A list of country-specific restrictions a `Carrier` should be aware of (e.g., weight, dimensions, pricing). */
  countryConstraints: Maybe<Array<CountryConstraint>>;
  /** When this Carrier was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Carrier. */
  createdBy: Scalars['ID'];
  /** The Carrier's API credentials. */
  credentials: Maybe<Array<CarrierCredential>>;
  /** A unique identifier for the Carrier. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the Carrier. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<Party>>>;
  /** Provides a list of `ServiceLevel`s that are supported by the Carrier. */
  serviceLevels: Maybe<Array<ServiceLevel>>;
  /** When this Carrier was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Carrier. */
  updatedBy: Scalars['ID'];
};

/**
 * A `CarrierAccount` is an account number that is associated with a carrier for a given customer or group of customers.
 * Rates may vary across carrier accounts, depending on the customer and volume with the carrier.
 * Shipments cannot be created without a `carrierAccount`.
 */
export type CarrierAccount = {
  __typename?: 'CarrierAccount';
  /** A monetary amount specified by the merchant as a buffer for any additional fees. */
  additionalFee: Maybe<Scalars['Decimal']>;
  /** The `Carrier` associated with this CarrierAccount. */
  carrier: Carrier;
  /** When the CarrierAccount was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierAccount. */
  createdBy: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: CredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Maybe<Array<Maybe<CarrierAccountCredential>>>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
  /** Specifies whether the CarrierAccount is in live or test mode. */
  mode: Mode;
  /** The `Organization` associated with the CarrierAccount. */
  organization: Scalars['ID'];
  /** Describes the `additionalFee` as a percentage. */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** When the CarrierAccount was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CarrierAccount. */
  updatedBy: Scalars['ID'];
};

/** The storage of the credential value for a specific type of credential used by a carrier. */
export type CarrierAccountCredential = {
  __typename?: 'CarrierAccountCredential';
  /** The type of credential that applies to the value. */
  type: Maybe<CarrierCredentialTypeCode>;
  /** The code used as the `Credential` token. */
  value: Maybe<Scalars['String']>;
};

export type CarrierAccountsFilter = {
  /** A carrier code to filter the list of accounts */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** ID of the `Carrier` the account is associated with */
  carrierId?: InputMaybe<Scalars['ID']>;
};

/** Carrier Connection */
export type CarrierConnection = {
  __typename?: 'CarrierConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<CarrierEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** Specifies the components of the credential required to access a `Carrier`'s API. */
export type CarrierCredential = {
  __typename?: 'CarrierCredential';
  /** When this CarrierCredential was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierCredential. */
  createdBy: Scalars['ID'];
  /** Specifies whether the field is visible to a merchant. */
  display: VisibilityCode;
  /** A unique identifier for the CarrierCredential. */
  id: Scalars['ID'];
  /** The name of the CarrierCredential field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The sequence that this credential will appear to the user. */
  sequence: Scalars['Int'];
  /** The credential type that is being updated for a `Carrier`. */
  type: CarrierCredentialTypeCode;
  /** The regex syntax that is required for the CarrierCredential field. */
  validationPattern: Maybe<Scalars['String']>;
};

export const carrierCredentialTypeCode = {
  AccessLicenseNumber: 'ACCESS_LICENSE_NUMBER',
  AccountNumber: 'ACCOUNT_NUMBER',
  ApiKey: 'API_KEY',
  ApiPassword: 'API_PASSWORD',
  ApiToken: 'API_TOKEN',
  CustomerId: 'CUSTOMER_ID',
  MeterNumber: 'METER_NUMBER',
  PaymentCountryCode: 'PAYMENT_COUNTRY_CODE',
  SenderLocation: 'SENDER_LOCATION',
  ShipperNumber: 'SHIPPER_NUMBER',
  SiteId: 'SITE_ID',
  UserId: 'USER_ID',
} as const;

export type CarrierCredentialTypeCode =
  (typeof carrierCredentialTypeCode)[keyof typeof carrierCredentialTypeCode];
/** Carrier Edge */
export type CarrierEdge = {
  __typename?: 'CarrierEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Carrier>;
};

/** A search for a specific `Carrier` or group of carriers. */
export type CarriersFilter = {
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The humanly memorable display name for the `Carrier`. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Carton = {
  __typename?: 'Carton';
  /** The monetary amount insured for the `packingCarton` */
  amountInsured: Maybe<Scalars['Decimal']>;
  /** When this `Carton` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Carton` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packingCarton` */
  height: Scalars['Decimal'];
  /** Carton ID, prefixed with `carton_` */
  id: Scalars['ID'];
  /** The items associated with the `packingCarton` */
  items: Maybe<Array<CartonItem>>;
  /** The numeric length of the `packingCarton` */
  length: Scalars['Decimal'];
  /** Whether the `Carton` is in test or live mode */
  mode: Mode;
  organization: Scalars['ID'];
  /** The packaging option associated with the `packingCarton` */
  packagingOption: Maybe<PackagingOption>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** Where the item is shipping from */
  shipFrom: Maybe<Location>;
  /** The order's destination (customer address) */
  shipTo: Maybe<Location>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** When this `Carton` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `Carton`. */
  updatedBy: Scalars['ID'];
  /** The heaviness of the packingCarton, using a numeric value */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packingCarton` */
  width: Scalars['Decimal'];
};

export type CartonCreateInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<CartonCreateItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: PackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type CartonCreateItemInput = {
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
};

export type CartonCreateWorkflowInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type?: InputMaybe<PackagingType>;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit?: InputMaybe<WeightUnitCode>;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

/** A `CartonItem` represents an item that has been assigned to be packed to a `Carton` */
export type CartonItem = {
  __typename?: 'CartonItem';
  /** The type of dimensional unit associated with the `cartonItem` */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `cartonItem` */
  height: Scalars['Decimal'];
  /** The original item associated with `cartonItem` */
  item: Item;
  /** The numeric height of the `cartonItem` */
  length: Scalars['Decimal'];
  /** How many cartonItems are included in a given `packingCarton` */
  quantity: Scalars['Int'];
  /** The type of packaging required to pack the cartonItem */
  type: PackagingType;
  /** The numeric weight of the `cartonItem` */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `cartonItem` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `cartonItem` */
  width: Scalars['Decimal'];
};

export type CartonizeInput = {
  /** The id of the `root` that will own the carton */
  rootId: Scalars['ID'];
};

export type CartonsFilter = {
  /** Filter cartons by root id */
  rootId: Scalars['ID'];
};

/** A representation of a `CatalogItem`. */
export type CatalogItem = {
  __typename?: 'CatalogItem';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** Other `CatalogItem` attributes. */
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  /** The marketing name associated with an item. */
  brand: Maybe<Scalars['String']>;
  /** Catalog Items that are referenced by this CatalogItem */
  catalogItemReferences: Array<CatalogItemReference>;
  /** The `CatalogItem` location. */
  catalogItemUrl: Maybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** Country configuration for the item. */
  configurations: Maybe<Array<Maybe<CatalogItemConfiguration>>>;
  /** Where a CatalogItem is manufactured. */
  countryOfOrigin: Maybe<CountryCode>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** The description of the item for customs */
  customsDescription: Maybe<Scalars['String']>;
  /** The `CatalogItem` full description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode: Maybe<Scalars['String']>;
  /** hsCodes overrides, country or attribute specific for the item */
  hsCodes: Maybe<Array<Maybe<CatalogItemHsCode>>>;
  /** The ID of the `CatalogItem`. */
  id: Scalars['ID'];
  /** The url of an image. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ItemType>;
  /** The `CatalogItem` material composition. */
  material: Maybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements: Maybe<Array<Maybe<ItemMeasurement>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata: Maybe<Array<Maybe<ItemMetadata>>>;
  /** The primary name of a `CatalogItem`. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference: Maybe<PackingPreference>;
  /** Product ID of the `CatalogItem`. */
  productId: Maybe<Scalars['String']>;
  /** Optional administrative area where this item originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku: Maybe<Scalars['String']>;
  /** Source of `CatalogItem`. */
  source: CatalogItemSource;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemBulkJobConnection = {
  __typename?: 'CatalogItemBulkJobConnection';
  edges: Array<CatalogItemBulkJobEdge>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type CatalogItemBulkJobEdge = {
  __typename?: 'CatalogItemBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<BulkJob>;
};

export type CatalogItemBulkJobsFilter = {
  /** Current status of the BulkJob */
  status?: InputMaybe<BulkJobStatus>;
};

export type CatalogItemConfiguration = {
  __typename?: 'CatalogItemConfiguration';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** The id of the configuration catalog item */
  id: Maybe<Scalars['Int']>;
  /** Ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemConfigurationInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemConfigurationUpdateInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** Ship to country */
  shipToCountry: CountryCode;
};

export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  edges: Maybe<Array<Maybe<CatalogItemEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CatalogItemEdge = {
  __typename?: 'CatalogItemEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<CatalogItem>;
};

export type CatalogItemFilter = {
  productId?: InputMaybe<Scalars['String']>;
  shipToCountry?: InputMaybe<CountryCode>;
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCode = {
  __typename?: 'CatalogItemHsCode';
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The HsCode of the item. */
  hsCode: Maybe<Scalars['String']>;
  /** The id of the hsCode catalog item */
  id: Maybe<Scalars['Int']>;
  /** Ship to country */
  shipToCountry: Maybe<CountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type CatalogItemHsCodeInput = {
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: CountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemHsCodeUpdateInput = {
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The id of the hsCode item */
  id: Scalars['Int'];
  /** Ship to country */
  shipToCountry: CountryCode;
};

/** A representation of a `CatalogItem` to be created. */
export type CatalogItemInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** Catalog items that are referenced by this CatalogItem */
  catalogItemReferences?: InputMaybe<Array<CatalogItemReferenceInput>>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** The description of the item for customs */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
  /** When providing a country-specific HS code the ship-to country is needed */
  hsCodeShipToCountry?: InputMaybe<CountryCode>;
  /** The url of an image. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** The `CatalogItem` material composition. */
  material?: InputMaybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** The name of a `CatalogItem`. */
  name?: InputMaybe<Scalars['String']>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference?: InputMaybe<PackingPreference>;
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type CatalogItemReference = {
  __typename?: 'CatalogItemReference';
  /** The reference catalog item */
  catalogItem: CatalogItem;
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio: Maybe<Scalars['Decimal']>;
};

export type CatalogItemReferenceInput = {
  /** The reference catalog item */
  catalogItem: Scalars['ID'];
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio?: InputMaybe<Scalars['Decimal']>;
};

export const catalogItemSource = {
  Classification: 'CLASSIFICATION',
  LegacyMigration: 'LEGACY_MIGRATION',
  UserProvided: 'USER_PROVIDED',
} as const;

export type CatalogItemSource =
  (typeof catalogItemSource)[keyof typeof catalogItemSource];
/**
 * Allows configuration of Zonos Checkout. These settings can be overridden by the `zonos.init` function in the Zonos Elements SDK.
 * TODO: these will change rapidly over the next few weeks
 */
export type CheckoutSettings = {
  __typename?: 'CheckoutSettings';
  /** A list of domains to allow Checkout to send frontend requests from. Checkout will not function for domains not listed here. */
  allowedDomains: Array<Scalars['String']>;
  /** A list of analytics providers to send tracking events to */
  analyticsProviders: Array<AnalyticsProvider>;
  /** When the CheckoutSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the CheckoutSettings */
  createdBy: Scalars['ID'];
  /** A list of tokens used by external services */
  externalServiceTokens: Array<ExternalServiceToken>;
  /** A unique identifier for the CheckoutSettings */
  id: Scalars['ID'];
  /** Whether this CheckoutSettings is in live or test mode */
  mode: Mode;
  /** Controls what kinds of emails Checkout sends to shoppers */
  orderNotifications: OrderNotifications;
  /** The organization this CheckoutSettings belongs to */
  organization: Scalars['ID'];
  /** Determines what Checkout should do when an order is successfully placed */
  successBehavior: CheckoutSuccessBehavior;
  /** Optional redirect URL for an order success page. Only used if `successBehavior` is set to `REDIRECT_TO_SUCCESS_PAGE` */
  successRedirectUrl: Scalars['String'];
  /** When the CheckoutSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CheckoutSettings */
  updatedBy: Scalars['ID'];
};

/** Controls abandoned cart recovery behavior */
export type CheckoutSettingsAbandonedCart = {
  __typename?: 'CheckoutSettingsAbandonedCart';
  /** A delay (in hours) to wait before sending an abandoned cart notification */
  delay: Scalars['Int'];
  /** An optional percent discount to include in the abandoned cart notification. If set to 0, no discount will be included. */
  discountPercent: Scalars['Decimal'];
  /** Whether abandoned cart recovery is enabled or not */
  status: NotificationStatus;
};

/** Input type for configuring abandoned cart recovery */
export type CheckoutSettingsAbandonedCartInput = {
  /** A delay (in hours) to wait before sending an abandoned cart notification */
  delay?: InputMaybe<Scalars['Int']>;
  /** An optional percent discount to include in the abandoned cart notification. If set to 0, no discount will be included. */
  discountPercent?: InputMaybe<Scalars['Decimal']>;
  /** Whether abandoned cart recovery is enabled or not */
  status?: InputMaybe<NotificationStatusInput>;
};

/** Input type for updating an existing CheckoutSettings object. */
export type CheckoutSettingsUpdateInput = {
  /** A list of domains to allow Checkout to send frontend requests from. Checkout will not function for domains not listed here. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** Analytics providers used for sending tracking events to */
  analyticsProviders?: InputMaybe<Array<AnalyticsProviderInput>>;
  /** A list of tokens used by external services */
  externalServiceTokens?: InputMaybe<Array<ExternalServiceTokenInput>>;
  /** Controls what kinds of emails Checkout sends to shoppers */
  orderNotifications?: InputMaybe<OrderNotificationsInput>;
  /** Determines what Checkout should do when an order is successfully placed */
  successBehavior?: InputMaybe<CheckoutSuccessBehavior>;
  /** Optional redirect URL for an order success page. Only used if `successBehavior` is set to `REDIRECT_TO_SUCCESS_PAGE` */
  successRedirectUrl?: InputMaybe<Scalars['String']>;
};

/** Determines what Checkout should do when an order is placed. */
export const checkoutSuccessBehavior = {
  CloseModal: 'CLOSE_MODAL',
  RedirectToSuccessPage: 'REDIRECT_TO_SUCCESS_PAGE',
  ZonosSuccessPage: 'ZONOS_SUCCESS_PAGE',
} as const;

export type CheckoutSuccessBehavior =
  (typeof checkoutSuccessBehavior)[keyof typeof checkoutSuccessBehavior];
export type Classification = {
  __typename?: 'Classification';
  /** The category hierarchy associated with an item for classification. */
  categories: Array<Scalars['String']>;
  /** Measures the confidence in accuracy of an HS code generated by Classify. 1.0=100%. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Configuration used in creating the `Classification`. */
  configuration: ClassificationConfiguration;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin: Maybe<CountryCode>;
  /** When this `Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Classification. */
  createdBy: Scalars['ID'];
  /** This is the full description associated with an item. */
  description: Maybe<Scalars['String']>;
  /** The HsCode object. */
  hsCode: Maybe<HsCode>;
  /** A unique identifier for the Classification. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Maybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material: Maybe<Scalars['String']>;
  /** Whether this `Item` was created in live or test mode. */
  mode: Mode;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The id provided at time of classification input */
  productId: Maybe<Scalars['String']>;
  /** When this `Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Classification. */
  updatedBy: Scalars['ID'];
};

export type ClassificationCalculateInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Configurations relating to how the item should be classified. */
  configuration?: InputMaybe<ClassificationConfigurationInput>;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The items physical age */
  itemAge?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
};

export type ClassificationConfiguration = {
  __typename?: 'ClassificationConfiguration';
  /** The group id that links a set of classifications */
  groupId: Maybe<Scalars['String']>;
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. */
  hsCodeProvided: Maybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountry: Maybe<CountryCode>;
};

export type ClassificationConfigurationInput = {
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. Classifications are limited to its guidance. */
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  /** Specification for which type of hsCode response is being requested */
  hsCodeType?: InputMaybe<HsCodeType>;
  /** A user provided Id to link the the classification output */
  productId?: InputMaybe<Scalars['String']>;
  /** The ship to countries for this `Classification`. */
  shipToCountries?: InputMaybe<Array<CountryCode>>;
};

/** An auto-generated type for paginating through multiple `Classification`. */
export type ClassificationConnection = {
  __typename?: 'ClassificationConnection';
  /** A list of `ClassificationEdge`. */
  edges: Array<ClassificationEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `Classification` items. */
  totalCount: Maybe<Scalars['Int']>;
};

/** An auto-generated type used in pagination. */
export type ClassificationEdge = {
  __typename?: 'ClassificationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `ClassificationEdge`. */
  node: Maybe<Classification>;
};

/** Filters for `Classification` resources. */
export type ClassificationFilter = {
  /** Filter results by hsCode this property requires an exact match on the provided value. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Filter results by product id. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter results by CountryCode */
  shipToCountry?: InputMaybe<CountryCode>;
};

export type ClassifySetting = {
  __typename?: 'ClassifySetting';
  boostedProductCategories: Array<Maybe<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ClassifySupportedData = {
  __typename?: 'ClassifySupportedData';
  /** A list of countries supported by Classify. */
  countries: Array<CountryCode>;
};

export const clearanceType = {
  Commercial: 'COMMERCIAL',
  Postal: 'POSTAL',
} as const;

export type ClearanceType = (typeof clearanceType)[keyof typeof clearanceType];
/**
 * A constraint is an object that is required when applying a `countryConstraint` to a `serviceLevel`.
 * These constraints are typically based on price, quantity, volume, or weight.
 */
export type Constraint = {
  __typename?: 'Constraint';
  /** When this Constraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Constraint. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the Constraint. */
  id: Scalars['ID'];
  /** The maximum amount that applies to the Constraint. */
  max: Maybe<Scalars['Decimal']>;
  /** The minimum amount that applies to the Constraint. */
  min: Maybe<Scalars['Decimal']>;
  /** Indicates what type of value the min and max fields represent. */
  type: ConstraintType;
  /** Represents the unit based on the type that applies to the Constraint. */
  unitOfMeasure: ConstraintUnitCode;
  /** When this Constraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Constraint. */
  updatedBy: Scalars['ID'];
};

export const constraintType = {
  Girth: 'GIRTH',
  GirthAndLength: 'GIRTH_AND_LENGTH',
  Height: 'HEIGHT',
  Length: 'LENGTH',
  Price: 'PRICE',
  Quantity: 'QUANTITY',
  Volume: 'VOLUME',
  Weight: 'WEIGHT',
  Width: 'WIDTH',
} as const;

export type ConstraintType =
  (typeof constraintType)[keyof typeof constraintType];
/** Any CurrencyCode, WeightUnitCode, DimensionalUnitCode or VolumeUnitCode */
export const constraintUnitCode = {
  /** United Arab Emirates Dirham */
  Aed: 'AED',
  /** Afghan Afghani (؋) */
  Afn: 'AFN',
  /** Albanian Lek (Lek) */
  All: 'ALL',
  /** Armenian Dram (֏) */
  Amd: 'AMD',
  /** NL Antillian Guilder (ƒ) */
  Ang: 'ANG',
  /** Angolan Kwanza (Kz) */
  Aoa: 'AOA',
  /** Argentine Peso */
  Ars: 'ARS',
  /** Australian Dollar ($) */
  Aud: 'AUD',
  /** Aruban Florin (ƒ) */
  Awg: 'AWG',
  /** Azerbaijani Manat (ман) */
  Azn: 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (KM) */
  Bam: 'BAM',
  BarrelPetroleum: 'BARREL_PETROLEUM',
  /** Barbadian Dollar ($) */
  Bbd: 'BBD',
  /** Bangladeshi Taka (৳) */
  Bdt: 'BDT',
  /** Bulgarian Lev (лв) */
  Bgn: 'BGN',
  /** Bahraini Dinar */
  Bhd: 'BHD',
  /** Burundian franc (FBu) */
  Bif: 'BIF',
  /** Bermudian Dollar ($) */
  Bmd: 'BMD',
  /** Brunei Dollar */
  Bnd: 'BND',
  /** Bolivian Boliviano ($b) */
  Bob: 'BOB',
  /** Brazilian Real (R$) */
  Brl: 'BRL',
  /** Bahamian Dollar ($) */
  Bsd: 'BSD',
  /** Bitcoin */
  Btc: 'BTC',
  /** Bhutanese Ngultrum */
  Btn: 'BTN',
  BushelUk: 'BUSHEL_UK',
  BushelUsDry: 'BUSHEL_US_DRY',
  /** Botswana Pula (P) */
  Bwp: 'BWP',
  /** New Belarusian Ruble */
  Byn: 'BYN',
  /** Belarusian ruble (Br) */
  Byr: 'BYR',
  /** Belize Dollar (BZ$) */
  Bzd: 'BZD',
  /** Canadian Dollar ($) */
  Cad: 'CAD',
  Carat: 'CARAT',
  /** Congolese Franc (FC) */
  Cdf: 'CDF',
  Centigram: 'CENTIGRAM',
  CentiliterCl: 'CENTILITER_CL',
  Centimeter: 'CENTIMETER',
  /** Swiss Franc (CHF) */
  Chf: 'CHF',
  /** Unidad de Fomento (UF) */
  Clf: 'CLF',
  /** Chilean Peso */
  Clp: 'CLP',
  /** Chinese Yuan Renminbi (¥) */
  Cny: 'CNY',
  /** Colombian Peso */
  Cop: 'COP',
  /** Costa Rican Colón (₡) */
  Crc: 'CRC',
  CubicCentimeter: 'CUBIC_CENTIMETER',
  CubicDecimeter: 'CUBIC_DECIMETER',
  CubicFoot: 'CUBIC_FOOT',
  CubicInch: 'CUBIC_INCH',
  CubicMeter: 'CUBIC_METER',
  CubicMillimeter: 'CUBIC_MILLIMETER',
  CubicYard: 'CUBIC_YARD',
  /** Cuban Convertible Peso */
  Cuc: 'CUC',
  /** Cuban Peso */
  Cup: 'CUP',
  /** Cape Verdean escudo */
  Cve: 'CVE',
  /** Czech Koruna (Kč) */
  Czk: 'CZK',
  DecaliterDal: 'DECALITER_DAL',
  Deciliter: 'DECILITER',
  Decimeter: 'DECIMETER',
  /** Djiboutian franc (Fdj) */
  Djf: 'DJF',
  /** Danish Krone (kr) */
  Dkk: 'DKK',
  /** Dominican Peso (RD$) */
  Dop: 'DOP',
  /** Algerian Dinar (دج) */
  Dzd: 'DZD',
  /** Egyptian Pound (£) */
  Egp: 'EGP',
  /** Eritrean Nakfa */
  Ern: 'ERN',
  /** Ethiopian Birr (Br) */
  Etb: 'ETB',
  /** Euro (€) */
  Eur: 'EUR',
  /** Fiji Dollar */
  Fjd: 'FJD',
  /** Falkland Islands Pound (£) */
  Fkp: 'FKP',
  FluidDramFlDr: 'FLUID_DRAM_FL_DR',
  FluidOunceFlOz: 'FLUID_OUNCE_FL_OZ',
  FluidOunceUk: 'FLUID_OUNCE_UK',
  Foot: 'FOOT',
  GallonFluid: 'GALLON_FLUID',
  GallonUk: 'GALLON_UK',
  /** British Pound (£) */
  Gbp: 'GBP',
  /** Georgian Lari (ლ) */
  Gel: 'GEL',
  /** Guernsey Pound */
  Ggp: 'GGP',
  /** Ghanaian Cedi */
  Ghs: 'GHS',
  GillGi: 'GILL_GI',
  /** Gibraltar Pound (£) */
  Gip: 'GIP',
  /** Gambian Dalasi (D) */
  Gmd: 'GMD',
  /** Guinean franc (FG) */
  Gnf: 'GNF',
  Gram: 'GRAM',
  /** Guatemalan Quetzal (Q) */
  Gtq: 'GTQ',
  /** Guyanese Dollar ($) */
  Gyd: 'GYD',
  Hectoliter: 'HECTOLITER',
  /** Hong Kong Dollar */
  Hkd: 'HKD',
  /** Honduran Lempira (L) */
  Hnl: 'HNL',
  /** Croatian Kuna (kn) */
  Hrk: 'HRK',
  /** Haitian Gourde */
  Htg: 'HTG',
  /** Hungarian Forint (Ft) */
  Huf: 'HUF',
  /** Indonesian rupiah (Rp) */
  Idr: 'IDR',
  /** Isreali New Shekel (₪) */
  Ils: 'ILS',
  /** Manx pound */
  Imp: 'IMP',
  Inch: 'INCH',
  /** Indian Rupee (Rs) */
  Inr: 'INR',
  /** Iraqi Dinar */
  Iqd: 'IQD',
  /** Iranian Rial */
  Irr: 'IRR',
  /** Iceland Krona (kr) */
  Isk: 'ISK',
  /** Jersey Pound */
  Jep: 'JEP',
  /** Jamaican Dollar (J$) */
  Jmd: 'JMD',
  /** Jordanian Dinar */
  Jod: 'JOD',
  /** Japanese Yen (¥) */
  Jpy: 'JPY',
  /** Kenyan Shilling (KSh) */
  Kes: 'KES',
  /** Kyrgyzstani Som (лв) */
  Kgs: 'KGS',
  /** Cambodian Riel (៛) */
  Khr: 'KHR',
  Kilogram: 'KILOGRAM',
  Kiloliter: 'KILOLITER',
  /** Comorian franc (CF) */
  Kmf: 'KMF',
  /** North Korean Won */
  Kpw: 'KPW',
  /** South-Korean Won (₩) */
  Krw: 'KRW',
  /** Kuwaiti Dinar */
  Kwd: 'KWD',
  /** Cayman Islands Dollar ($) */
  Kyd: 'KYD',
  /** Kazakhastan Tenge (лв) */
  Kzt: 'KZT',
  /** Lao Kip (₭) */
  Lak: 'LAK',
  /** Lebanese Pound (£) */
  Lbp: 'LBP',
  Liter: 'LITER',
  /** Sri Lanka Rupee (Rs) */
  Lkr: 'LKR',
  /** Liberian Dollar ($) */
  Lrd: 'LRD',
  /** Lesotho Loti (L) */
  Lsl: 'LSL',
  /** Lithuanian Litas (Lt) */
  Ltl: 'LTL',
  /** Latvian Lats */
  Lvl: 'LVL',
  /** Libyan Dinar */
  Lyd: 'LYD',
  /** Moroccan Dirham */
  Mad: 'MAD',
  /** Moldovan Leu */
  Mdl: 'MDL',
  Meter: 'METER',
  /** Malagasy ariary (Ar) */
  Mga: 'MGA',
  Microliter: 'MICROLITER',
  Milligram: 'MILLIGRAM',
  MilliliterMl: 'MILLILITER_ML',
  Millimeter: 'MILLIMETER',
  MinimMin: 'MINIM_MIN',
  /** Macedonian Denar (ден) */
  Mkd: 'MKD',
  /** Myanmar Kyat (K) */
  Mmk: 'MMK',
  /** Mongolian Tögrög (₮) */
  Mnt: 'MNT',
  /** Macanese Pataca */
  Mop: 'MOP',
  /** Mauritanian ouguiya (UM) */
  Mro: 'MRO',
  /** Mauritius Rupee (Rs) */
  Mur: 'MUR',
  /** Maldive Rufiyaa */
  Mvr: 'MVR',
  /** Malawian Kwacha (MK) */
  Mwk: 'MWK',
  /** Mexican Peso ($) */
  Mxn: 'MXN',
  /** Malaysian Ringgit (RM) */
  Myr: 'MYR',
  /** Mozambican Metical (MT) */
  Mzn: 'MZN',
  /** Namibian Dollar ($) */
  Nad: 'NAD',
  /** Nigerian Naira (₦) */
  Ngn: 'NGN',
  /** Nicaraguan Córdoba (C$) */
  Nio: 'NIO',
  /** Norwegian Kroner (kr) */
  Nok: 'NOK',
  /** Nepalese Rupee (Rs) */
  Npr: 'NPR',
  /** New Zealand Dollar ($) */
  Nzd: 'NZD',
  /** Omani Rial (﷼) */
  Omr: 'OMR',
  Ounce: 'OUNCE',
  /** Panamanian Balboa (B/.) */
  Pab: 'PAB',
  PeckUsDry: 'PECK_US_DRY',
  /** Peruvian Nuevo Sol (S/.) */
  Pen: 'PEN',
  /** Papua New Guinean Kina (K) */
  Pgk: 'PGK',
  /** Philippine Peso (Php) */
  Php: 'PHP',
  PintFluid: 'PINT_FLUID',
  PintUk: 'PINT_UK',
  PintUsDry: 'PINT_US_DRY',
  /** Pakistani Rupee (₨) */
  Pkr: 'PKR',
  /** Polish Zloty (zł) */
  Pln: 'PLN',
  Pound: 'POUND',
  /** Paraguayan guaraní (₲) */
  Pyg: 'PYG',
  /** Qatari Rial (﷼) */
  Qar: 'QAR',
  QuartFluid: 'QUART_FLUID',
  QuartUk: 'QUART_UK',
  QuartUsDry: 'QUART_US_DRY',
  /** Romanian Leu (lei) */
  Ron: 'RON',
  /** Serbian Dinar (Дин.) */
  Rsd: 'RSD',
  /** Russian Rouble (руб) */
  Rub: 'RUB',
  /** Rwandan franc (FRw) */
  Rwf: 'RWF',
  /** Saudi Riyal (﷼) */
  Sar: 'SAR',
  /** Solomon Islands Dollar ($) */
  Sbd: 'SBD',
  /** Seychellois Rupee (₨) */
  Scr: 'SCR',
  /** Sudanese Pound */
  Sdg: 'SDG',
  /** Swedish Krona (kr) */
  Sek: 'SEK',
  /** Singapore Dollar */
  Sgd: 'SGD',
  /** Saint Helenian Pound (£) */
  Shp: 'SHP',
  /** Sierra Leonean Leone */
  Sll: 'SLL',
  /** Somali Shilling (S) */
  Sos: 'SOS',
  /** Surinamese Dollar ($) */
  Srd: 'SRD',
  /** São Tomé and Príncipe Dobra (Db) */
  Std: 'STD',
  /** Salvadoran Colón ($) */
  Svc: 'SVC',
  /** Syrian Pound */
  Syp: 'SYP',
  /** Swazi Lilangeni (L) */
  Szl: 'SZL',
  /** Thai Baht (฿) */
  Thb: 'THB',
  /** Tajikistani Somoni */
  Tjs: 'TJS',
  /** Turkmenistani Manat */
  Tmt: 'TMT',
  /** Tunisian Dinar */
  Tnd: 'TND',
  Ton: 'TON',
  /** Tongan Paʻanga (T$ ) */
  Top: 'TOP',
  /** Turkish Lira (TL) */
  Try: 'TRY',
  /** Trinidad/Tobago Dollar (TT$) */
  Ttd: 'TTD',
  /** Taiwan Dollar (NT$) */
  Twd: 'TWD',
  /** Tanzanian Shilling (TSh) */
  Tzs: 'TZS',
  /** Ukraine Hryvnia (₴) */
  Uah: 'UAH',
  /** Ugandan shilling (USh) */
  Ugx: 'UGX',
  /** US Dollar ($) */
  Usd: 'USD',
  /** Uruguayan Peso ($U) */
  Uyu: 'UYU',
  /** Uzbekistani Som (лв) */
  Uzs: 'UZS',
  /** Venezuelan Bolívar Fuerte */
  Vef: 'VEF',
  /** Vietnamese dong (₫) */
  Vnd: 'VND',
  /** Vanuatu vatu (VT) */
  Vuv: 'VUV',
  /** Samoan Tala */
  Wst: 'WST',
  /** Central African CFA franc (FCFA) */
  Xaf: 'XAF',
  /** Silver (troy ounce) */
  Xag: 'XAG',
  /** Gold (troy ounce) */
  Xau: 'XAU',
  /** East Caribbean Dollar ($) */
  Xcd: 'XCD',
  /** Special Drawing Rights */
  Xdr: 'XDR',
  /** West African CFA franc (CFA) */
  Xof: 'XOF',
  /** CFP franc (F) */
  Xpf: 'XPF',
  Yard: 'YARD',
  /** Yemeni Rial (﷼) */
  Yer: 'YER',
  /** South African Rand (R) */
  Zar: 'ZAR',
  /** Zambian Kwacha (K) */
  Zmk: 'ZMK',
  /** Zambian Kwacha (ZK) */
  Zmw: 'ZMW',
  /** Zimbabwean Dollar */
  Zwl: 'ZWL',
} as const;

export type ConstraintUnitCode =
  (typeof constraintUnitCode)[keyof typeof constraintUnitCode];
export const controlType = {
  Export: 'EXPORT',
  Import: 'IMPORT',
} as const;

export type ControlType = (typeof controlType)[keyof typeof controlType];
export const countryCode = {
  Ad: 'AD',
  Ae: 'AE',
  Af: 'AF',
  Ag: 'AG',
  Ai: 'AI',
  Al: 'AL',
  Am: 'AM',
  Ao: 'AO',
  Aq: 'AQ',
  Ar: 'AR',
  As: 'AS',
  At: 'AT',
  Au: 'AU',
  Aw: 'AW',
  Ax: 'AX',
  Az: 'AZ',
  Ba: 'BA',
  Bb: 'BB',
  Bd: 'BD',
  Be: 'BE',
  Bf: 'BF',
  Bg: 'BG',
  Bh: 'BH',
  Bi: 'BI',
  Bj: 'BJ',
  Bl: 'BL',
  Bm: 'BM',
  Bn: 'BN',
  Bo: 'BO',
  Bq: 'BQ',
  Br: 'BR',
  Bs: 'BS',
  Bt: 'BT',
  Bv: 'BV',
  Bw: 'BW',
  By: 'BY',
  Bz: 'BZ',
  Ca: 'CA',
  Cc: 'CC',
  Cd: 'CD',
  Cf: 'CF',
  Cg: 'CG',
  Ch: 'CH',
  Ci: 'CI',
  Ck: 'CK',
  Cl: 'CL',
  Cm: 'CM',
  Cn: 'CN',
  Co: 'CO',
  Cr: 'CR',
  Cu: 'CU',
  Cv: 'CV',
  Cw: 'CW',
  Cx: 'CX',
  Cy: 'CY',
  Cz: 'CZ',
  De: 'DE',
  Dj: 'DJ',
  Dk: 'DK',
  Dm: 'DM',
  Do: 'DO',
  Dz: 'DZ',
  Ec: 'EC',
  Ee: 'EE',
  Eg: 'EG',
  Eh: 'EH',
  Er: 'ER',
  Es: 'ES',
  Et: 'ET',
  Fi: 'FI',
  Fj: 'FJ',
  Fk: 'FK',
  Fm: 'FM',
  Fo: 'FO',
  Fr: 'FR',
  Ga: 'GA',
  Gb: 'GB',
  Gd: 'GD',
  Ge: 'GE',
  Gf: 'GF',
  Gg: 'GG',
  Gh: 'GH',
  Gi: 'GI',
  Gl: 'GL',
  Gm: 'GM',
  Gn: 'GN',
  Gp: 'GP',
  Gq: 'GQ',
  Gr: 'GR',
  Gs: 'GS',
  Gt: 'GT',
  Gu: 'GU',
  Gw: 'GW',
  Gy: 'GY',
  Hk: 'HK',
  Hm: 'HM',
  Hn: 'HN',
  Hr: 'HR',
  Ht: 'HT',
  Hu: 'HU',
  Ic: 'IC',
  Id: 'ID',
  Ie: 'IE',
  Il: 'IL',
  Im: 'IM',
  In: 'IN',
  Io: 'IO',
  Iq: 'IQ',
  Ir: 'IR',
  Is: 'IS',
  It: 'IT',
  Je: 'JE',
  Jm: 'JM',
  Jo: 'JO',
  Jp: 'JP',
  Ke: 'KE',
  Kg: 'KG',
  Kh: 'KH',
  Ki: 'KI',
  Km: 'KM',
  Kn: 'KN',
  Kp: 'KP',
  Kr: 'KR',
  Kw: 'KW',
  Ky: 'KY',
  Kz: 'KZ',
  La: 'LA',
  Lb: 'LB',
  Lc: 'LC',
  Li: 'LI',
  Lk: 'LK',
  Lr: 'LR',
  Ls: 'LS',
  Lt: 'LT',
  Lu: 'LU',
  Lv: 'LV',
  Ly: 'LY',
  Ma: 'MA',
  Mc: 'MC',
  Md: 'MD',
  Me: 'ME',
  Mf: 'MF',
  Mg: 'MG',
  Mh: 'MH',
  Mk: 'MK',
  Ml: 'ML',
  Mm: 'MM',
  Mn: 'MN',
  Mo: 'MO',
  Mp: 'MP',
  Mq: 'MQ',
  Mr: 'MR',
  Ms: 'MS',
  Mt: 'MT',
  Mu: 'MU',
  Mv: 'MV',
  Mw: 'MW',
  Mx: 'MX',
  My: 'MY',
  Mz: 'MZ',
  Na: 'NA',
  Nc: 'NC',
  Ne: 'NE',
  Nf: 'NF',
  Ng: 'NG',
  Ni: 'NI',
  Nl: 'NL',
  No: 'NO',
  Np: 'NP',
  Nr: 'NR',
  Nu: 'NU',
  Nz: 'NZ',
  Om: 'OM',
  Pa: 'PA',
  Pe: 'PE',
  Pf: 'PF',
  Pg: 'PG',
  Ph: 'PH',
  Pk: 'PK',
  Pl: 'PL',
  Pm: 'PM',
  Pn: 'PN',
  Pr: 'PR',
  Ps: 'PS',
  Pt: 'PT',
  Pw: 'PW',
  Py: 'PY',
  Qa: 'QA',
  Re: 'RE',
  Ro: 'RO',
  Rs: 'RS',
  Ru: 'RU',
  Rw: 'RW',
  Sa: 'SA',
  Sb: 'SB',
  Sc: 'SC',
  Sd: 'SD',
  Se: 'SE',
  Sg: 'SG',
  Sh: 'SH',
  Si: 'SI',
  Sj: 'SJ',
  Sk: 'SK',
  Sl: 'SL',
  Sm: 'SM',
  Sn: 'SN',
  So: 'SO',
  Sr: 'SR',
  Ss: 'SS',
  St: 'ST',
  Sv: 'SV',
  Sx: 'SX',
  Sy: 'SY',
  Sz: 'SZ',
  Tc: 'TC',
  Td: 'TD',
  Tf: 'TF',
  Tg: 'TG',
  Th: 'TH',
  Tj: 'TJ',
  Tk: 'TK',
  Tl: 'TL',
  Tm: 'TM',
  Tn: 'TN',
  To: 'TO',
  Tr: 'TR',
  Tt: 'TT',
  Tv: 'TV',
  Tw: 'TW',
  Tz: 'TZ',
  Ua: 'UA',
  Ug: 'UG',
  Um: 'UM',
  Us: 'US',
  Uy: 'UY',
  Uz: 'UZ',
  Va: 'VA',
  Vc: 'VC',
  Ve: 'VE',
  Vg: 'VG',
  Vi: 'VI',
  Vn: 'VN',
  Vu: 'VU',
  Wf: 'WF',
  Ws: 'WS',
  Ye: 'YE',
  Yt: 'YT',
  Za: 'ZA',
  Zm: 'ZM',
  Zw: 'ZW',
} as const;

export type CountryCode = (typeof countryCode)[keyof typeof countryCode];
/**
 * A `CountryConstraint` can be assigned to a `ServiceLevel` to limit countries that are supported by a given `ServiceLevel`.
 * These can also be used to limit shipments supported by the `serviceLevel` and origin/destination based on value, weight, quantity, or volume of given items in a shipment.
 */
export type CountryConstraint = {
  __typename?: 'CountryConstraint';
  /** Represents a constraint around a specific attribute that applies to all countries. */
  constraints: Maybe<Array<Maybe<Constraint>>>;
  /** When this CountryConstraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CountryConstraint. */
  createdBy: Scalars['ID'];
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling: Maybe<BillingOptionCode>;
  /** A unique identifier for the CountryConstraint. */
  id: Scalars['ID'];
  /** List of incoterms supported by the CountryConstraint. */
  incoterm: Maybe<Array<IncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<CountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<CountryCode>;
  /** `TransitTime` breakdown that applies to the CountryConstraint. */
  transitTime: Maybe<TransitTime>;
  /** When this CountryConstraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CountryConstraint. */
  updatedBy: Scalars['ID'];
  /** The `WeightUnitCode` required by the CountryConstraint. */
  weightUnit: Maybe<WeightUnitCode>;
};

export type CreateCartonInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<CreateCartonItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: PackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type CreateCartonItemInput = {
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
};

export type CreateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type CreateDashboardSettingsInput = {
  defaultDisplayCurrency: Scalars['String'];
  defaultDisplayLanguage: Scalars['String'];
  defaultDisplayLocal: Scalars['String'];
  defaultDisplayTimezone: Scalars['String'];
  defaultUnit: DashboardUnit;
  displayName: Scalars['String'];
  multiFactorAuth: MultiFactorAuthSetting;
};

export type CreateExchangeRateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  type: ExchangeRateType;
};

export type CreateLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type CreateOnlineStoreSettingsInput = {
  organization: Scalars['String'];
  platform?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CreatePackagingOptionInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type CreatePartyInput = {
  location?: InputMaybe<CreateLocationInput>;
  person?: InputMaybe<CreatePersonInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: PartyType;
};

export type CreatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: Day;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: EndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
};

export type CreatePersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
};

/** Options for where the credentials are stored. */
export const credentialProvider = {
  /** General use retail/published rates. */
  General: 'GENERAL',
  /** Organization-specific credentials. */
  Organization: 'ORGANIZATION',
} as const;

export type CredentialProvider =
  (typeof credentialProvider)[keyof typeof credentialProvider];
export const currencyCode = {
  Aed: 'AED',
  Afn: 'AFN',
  All: 'ALL',
  Amd: 'AMD',
  Ang: 'ANG',
  Aoa: 'AOA',
  Ars: 'ARS',
  Aud: 'AUD',
  Awg: 'AWG',
  Azn: 'AZN',
  Bam: 'BAM',
  Bbd: 'BBD',
  Bdt: 'BDT',
  Bgn: 'BGN',
  Bhd: 'BHD',
  Bif: 'BIF',
  Bmd: 'BMD',
  Bnd: 'BND',
  Bob: 'BOB',
  Brl: 'BRL',
  Bsd: 'BSD',
  Btc: 'BTC',
  Btn: 'BTN',
  Bwp: 'BWP',
  Byn: 'BYN',
  Byr: 'BYR',
  Bzd: 'BZD',
  Cad: 'CAD',
  Cdf: 'CDF',
  Chf: 'CHF',
  Clf: 'CLF',
  Clp: 'CLP',
  Cny: 'CNY',
  Cop: 'COP',
  Crc: 'CRC',
  Cuc: 'CUC',
  Cup: 'CUP',
  Cve: 'CVE',
  Czk: 'CZK',
  Djf: 'DJF',
  Dkk: 'DKK',
  Dop: 'DOP',
  Dzd: 'DZD',
  Egp: 'EGP',
  Ern: 'ERN',
  Etb: 'ETB',
  Eur: 'EUR',
  Fjd: 'FJD',
  Fkp: 'FKP',
  Gbp: 'GBP',
  Gel: 'GEL',
  Ggp: 'GGP',
  Ghs: 'GHS',
  Gip: 'GIP',
  Gmd: 'GMD',
  Gnf: 'GNF',
  Gtq: 'GTQ',
  Gyd: 'GYD',
  Hkd: 'HKD',
  Hnl: 'HNL',
  Hrk: 'HRK',
  Htg: 'HTG',
  Huf: 'HUF',
  Idr: 'IDR',
  Ils: 'ILS',
  Imp: 'IMP',
  Inr: 'INR',
  Iqd: 'IQD',
  Irr: 'IRR',
  Isk: 'ISK',
  Jep: 'JEP',
  Jmd: 'JMD',
  Jod: 'JOD',
  Jpy: 'JPY',
  Kes: 'KES',
  Kgs: 'KGS',
  Khr: 'KHR',
  Kmf: 'KMF',
  Kpw: 'KPW',
  Krw: 'KRW',
  Kwd: 'KWD',
  Kyd: 'KYD',
  Kzt: 'KZT',
  Lak: 'LAK',
  Lbp: 'LBP',
  Lkr: 'LKR',
  Lrd: 'LRD',
  Lsl: 'LSL',
  Ltl: 'LTL',
  Lvl: 'LVL',
  Lyd: 'LYD',
  Mad: 'MAD',
  Mdl: 'MDL',
  Mga: 'MGA',
  Mkd: 'MKD',
  Mmk: 'MMK',
  Mnt: 'MNT',
  Mop: 'MOP',
  Mro: 'MRO',
  Mur: 'MUR',
  Mvr: 'MVR',
  Mwk: 'MWK',
  Mxn: 'MXN',
  Myr: 'MYR',
  Mzn: 'MZN',
  Nad: 'NAD',
  Ngn: 'NGN',
  Nio: 'NIO',
  Nok: 'NOK',
  Npr: 'NPR',
  Nzd: 'NZD',
  Omr: 'OMR',
  Pab: 'PAB',
  Pen: 'PEN',
  Pgk: 'PGK',
  Php: 'PHP',
  Pkr: 'PKR',
  Pln: 'PLN',
  Pyg: 'PYG',
  Qar: 'QAR',
  Ron: 'RON',
  Rsd: 'RSD',
  Rub: 'RUB',
  Rwf: 'RWF',
  Sar: 'SAR',
  Sbd: 'SBD',
  Scr: 'SCR',
  Sdg: 'SDG',
  Sek: 'SEK',
  Sgd: 'SGD',
  Shp: 'SHP',
  Sle: 'SLE',
  Sll: 'SLL',
  Sos: 'SOS',
  Srd: 'SRD',
  Std: 'STD',
  Svc: 'SVC',
  Syp: 'SYP',
  Szl: 'SZL',
  Thb: 'THB',
  Tjs: 'TJS',
  Tmt: 'TMT',
  Tnd: 'TND',
  Top: 'TOP',
  Try: 'TRY',
  Ttd: 'TTD',
  Twd: 'TWD',
  Tzs: 'TZS',
  Uah: 'UAH',
  Ugx: 'UGX',
  Usd: 'USD',
  Uyu: 'UYU',
  Uzs: 'UZS',
  Vef: 'VEF',
  Vnd: 'VND',
  Vuv: 'VUV',
  Wst: 'WST',
  Xaf: 'XAF',
  Xag: 'XAG',
  Xau: 'XAU',
  Xcd: 'XCD',
  Xdr: 'XDR',
  Xof: 'XOF',
  Xpf: 'XPF',
  Yer: 'YER',
  Zar: 'ZAR',
  Zmk: 'ZMK',
  Zmw: 'ZMW',
  Zwl: 'ZWL',
} as const;

export type CurrencyCode = (typeof currencyCode)[keyof typeof currencyCode];
export type CurrencyFormat = {
  __typename?: 'CurrencyFormat';
  /** The currency code that applies to the `currencyFormat` */
  currencyCode: CurrencyCode;
  /** The character used to separate the whole units from the fractional units */
  decimalDelimiter: Scalars['String'];
  /** The number of decimal places to display for the currency */
  scale: Scalars['Int'];
  /** The characters used as a symbol of the currency */
  symbol: Scalars['String'];
  /** The location of where the symbol is displayed */
  symbolLocation: Maybe<CurrencySymbolLocation>;
  /** The character used as the thousands separate */
  thousandsDelimiter: Scalars['String'];
};

export const currencySymbolLocation = {
  /** display after the currency amount */
  After: 'AFTER',
  /** display before the currency amount */
  Before: 'BEFORE',
} as const;

export type CurrencySymbolLocation =
  (typeof currencySymbolLocation)[keyof typeof currencySymbolLocation];
/** A `CustomsItem` is the product of a `CustomsSpec` and includes improved item data */
export type CustomsItem = {
  __typename?: 'CustomsItem';
  /** The total price amount for this item */
  amount: Scalars['Decimal'];
  /** The country that this item originates from */
  countryOfOrigin: CountryCode;
  /** Where this origin information came from */
  countryOfOriginSource: ItemValueSource;
  /** The description of this item for the purpose of clearance */
  description: Scalars['String'];
  /** The HS code that describes this item */
  hsCode: Scalars['String'];
  /** The source of the HS code classification */
  hsCodeSource: ItemValueSource;
  /** The items associated with the `CustomsItem` */
  items: Array<Item>;
  /** The province that this item originates from */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Where this province information came from */
  provinceOfOriginSource: Maybe<ItemValueSource>;
  /** The total number of this item */
  quantity: Scalars['Decimal'];
};

export type CustomsMetadata = {
  __typename?: 'CustomsMetadata';
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value: Maybe<Scalars['String']>;
};

export type CustomsMetadataInput = {
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value?: InputMaybe<Scalars['String']>;
};

export type CustomsSpec = Node & {
  __typename?: 'CustomsSpec';
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotals;
  /** Objects including other details about the `CustomsSpec` */
  attributes: Maybe<Array<CustomsSpecAttribute>>;
  /** The `Carton` objects that are tied to this `CustomsSpec` */
  cartons: Maybe<Array<Carton>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType: Maybe<ClearanceType>;
  /** The timestamp of when this `CustomsSpec` was created */
  createdAt: Scalars['DateTime'];
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** The `CustomsItem` objects that are a result of generating this `CustomsSpec` */
  customsItems: Maybe<Array<CustomsItem>>;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement: Maybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata: Maybe<Array<CustomsMetadata>>;
  /** The `Mode` this `CustomsSpec` was created in */
  mode: Mode;
  /** The `Organization` associated with the `CustomsSpec` */
  organization: Scalars['ID'];
  /** A list of parties associated with the `CustomsSpec` */
  parties: Maybe<Array<Party>>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel: Maybe<Scalars['String']>;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Maybe<Scalars['String']>;
  /** The timestamp of when this `CustomsSpec` was updated */
  updatedAt: Scalars['DateTime'];
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type CustomsSpecAmountSubtotals = {
  __typename?: 'CustomsSpecAmountSubtotals';
  /** The total duties amount */
  duties: Maybe<Scalars['Decimal']>;
  /** The total fees amount */
  fees: Maybe<Scalars['Decimal']>;
  /** The total cost of insurance */
  insurance: Maybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items: Maybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping: Maybe<Scalars['Decimal']>;
  /** The total tax amount */
  taxes: Maybe<Scalars['Decimal']>;
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type CustomsSpecAmountSubtotalsInput = {
  /** The total duties amount */
  duties?: InputMaybe<Scalars['Decimal']>;
  /** The total fees amount */
  fees?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of insurance */
  insurance?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping?: InputMaybe<Scalars['Decimal']>;
  /** The total tax amount */
  taxes?: InputMaybe<Scalars['Decimal']>;
};

export type CustomsSpecAttribute = {
  __typename?: 'CustomsSpecAttribute';
  /** Where this `CustomsSpec` is originating from */
  source: CustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: CustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type CustomsSpecAttributeInput = {
  /** Where this `CustomsSpec` is originating from */
  source: CustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: CustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export const customsSpecAttributeType = {
  AccountNumber: 'ACCOUNT_NUMBER',
  B13A: 'B13A',
  Eccn: 'ECCN',
  Eori: 'EORI',
  Itn: 'ITN',
  OrderNumber: 'ORDER_NUMBER',
  PurchaseOrderNumber: 'PURCHASE_ORDER_NUMBER',
} as const;

export type CustomsSpecAttributeType =
  (typeof customsSpecAttributeType)[keyof typeof customsSpecAttributeType];
export type CustomsSpecConnection = {
  __typename?: 'CustomsSpecConnection';
  edges: Maybe<Array<Maybe<CustomsSpecEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type CustomsSpecCreateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<CustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ClearanceType>;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<CustomsMetadataInput>>;
  /** The `Organization` associated with the `CustomsSpec` */
  organization?: InputMaybe<Scalars['ID']>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type CustomsSpecEdge = {
  __typename?: 'CustomsSpecEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<CustomsSpec>;
};

export type CustomsSpecFilter = {
  between?: InputMaybe<DateTimeRange>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type CustomsSpecGenerateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: CurrencyCode;
  /** The `Shipment` ID that this `CustomsSpec` is attached to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Scalars['String'];
};

export const customsSpecSourceType = {
  ApiRequest: 'API_REQUEST',
  Catalog: 'CATALOG',
  Classify: 'CLASSIFY',
  OrganizationSetting: 'ORGANIZATION_SETTING',
} as const;

export type CustomsSpecSourceType =
  (typeof customsSpecSourceType)[keyof typeof customsSpecSourceType];
export type CustomsSpecUpdateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: CustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<CustomsSpecAttributeInput>>;
  /** The type of clearance for this `CustomsSpec` */
  clearanceType?: InputMaybe<ClearanceType>;
  /** The currency the totals for this `CustomsSpec` are represented in */
  currencyCode: CurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** `CustomsSpec` ID prefixed with `customs_spec_` */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: IncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<CustomsMetadataInput>>;
  /** The customs term for the end use of this export */
  reasonForExport: LandedCostEndUse;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type DashboardSettings = {
  __typename?: 'DashboardSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultDisplayCurrency: Maybe<Scalars['String']>;
  defaultDisplayLanguage: Maybe<Scalars['String']>;
  defaultDisplayLocal: Maybe<Scalars['String']>;
  defaultDisplayTimezone: Maybe<Scalars['String']>;
  defaultUnit: Maybe<DashboardUnit>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: Mode;
  multiFactorAuth: Maybe<MultiFactorAuthSetting>;
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export const dashboardUnit = {
  Imperial: 'IMPERIAL',
  Metric: 'METRIC',
} as const;

export type DashboardUnit = (typeof dashboardUnit)[keyof typeof dashboardUnit];
export type DateTimeRange = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
};

export const day = {
  Friday: 'FRIDAY',
  Monday: 'MONDAY',
  Saturday: 'SATURDAY',
  Sunday: 'SUNDAY',
  Thursday: 'THURSDAY',
  Tuesday: 'TUESDAY',
  Wednesday: 'WEDNESDAY',
} as const;

export type Day = (typeof day)[keyof typeof day];
/** Represents a de minimis amount on a `LandedCost` quote, what it applies to, and how it was assessed */
export type DeMinimis = {
  __typename?: 'DeMinimis';
  /** Human readable formula indicating how this de minimis was calculated */
  formula: Scalars['String'];
  /** INCOTERM used to assess the de minimis value */
  method: IncotermCode;
  /** Additional note */
  note: Scalars['String'];
  /** Indicates whether the de mimimis is above or below the threshold */
  threshold: DeMinimisThreshold;
  /** What this de minimis applies to */
  type: DeMinimisType;
};

export const deMinimisThreshold = {
  /** De minimis was above threshold */
  Above: 'ABOVE',
  /** De minimis was below threshold */
  Below: 'BELOW',
} as const;

export type DeMinimisThreshold =
  (typeof deMinimisThreshold)[keyof typeof deMinimisThreshold];
export const deMinimisType = {
  /** De minimis applies to duty */
  Duty: 'DUTY',
  /** De minimis applies to fees */
  Fee: 'FEE',
  /** De minimis applies to tax */
  Tax: 'TAX',
} as const;

export type DeMinimisType = (typeof deMinimisType)[keyof typeof deMinimisType];
export const deliveryType = {
  Consolidated: 'CONSOLIDATED',
  Courier: 'COURIER',
  Postal: 'POSTAL',
} as const;

export type DeliveryType = (typeof deliveryType)[keyof typeof deliveryType];
export type DeniedParty = {
  __typename?: 'DeniedParty';
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** Known aliases for the denied party */
  aliases: Maybe<Array<Maybe<Scalars['String']>>>;
  companyName: Maybe<Scalars['String']>;
  countryCode: Maybe<CountryCode>;
  /** When this `DeniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** When this `DeniedParty` stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** DeniedParty ID, prefixed with `denied_party_` */
  id: Scalars['ID'];
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  /** The source of the denied party. */
  source: Maybe<Scalars['String']>;
  /** Link to the source information. */
  sourceUrls: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `DeniedParty` begins to take affect. */
  startsAt: Maybe<Scalars['DateTime']>;
};

export const deniedPartyAction = {
  NoMatches: 'NO_MATCHES',
  Review: 'REVIEW',
} as const;

export type DeniedPartyAction =
  (typeof deniedPartyAction)[keyof typeof deniedPartyAction];
/** DeniedParty Connection */
export type DeniedPartyConnection = {
  __typename?: 'DeniedPartyConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<DeniedPartyEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** DeniedParty Edge */
export type DeniedPartyEdge = {
  __typename?: 'DeniedPartyEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<DeniedParty>;
};

export type DeniedPartyLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export type DeniedPartyPersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export const dimensionalUnitCode = {
  Centimeter: 'CENTIMETER',
  Decimeter: 'DECIMETER',
  Foot: 'FOOT',
  Inch: 'INCH',
  Meter: 'METER',
  Millimeter: 'MILLIMETER',
  Yard: 'YARD',
} as const;

export type DimensionalUnitCode =
  (typeof dimensionalUnitCode)[keyof typeof dimensionalUnitCode];
export const documentFilingType = {
  /** The documents associated with the label were sent electronically */
  Electronic: 'ELECTRONIC',
  /** The documents associated with the label are available to be downloaded */
  HardCopy: 'HARD_COPY',
} as const;

export type DocumentFilingType =
  (typeof documentFilingType)[keyof typeof documentFilingType];
/** Represents a duty amount on a `LandedCost` quote */
export type Duty = {
  __typename?: 'Duty';
  /** `Duty` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Duty` amount is in. */
  currencyCode: CurrencyCode;
  /** Human-readable description of this `Duty`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this duty was calculated */
  formula: Scalars['String'];
  /** `Item` that this duty amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Duty`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this duty amount */
  payee: Maybe<Party>;
  /** `Party` responsible for rendering payment on this duty amount */
  payor: Maybe<Party>;
  /** Type of `Duty`. */
  type: LandedCostFeeType;
};

export const dutyTaxFeeConfiguration = {
  ExcludeAll: 'EXCLUDE_ALL',
  ExcludeDuty: 'EXCLUDE_DUTY',
  ExcludeFee: 'EXCLUDE_FEE',
  ExcludeTax: 'EXCLUDE_TAX',
  IncludeAll: 'INCLUDE_ALL',
  IncludeTax: 'INCLUDE_TAX',
} as const;

export type DutyTaxFeeConfiguration =
  (typeof dutyTaxFeeConfiguration)[keyof typeof dutyTaxFeeConfiguration];
/** Determines the base visual style for an AppearanceSettings object. */
export const elementsUiStyle = {
  Rounded: 'ROUNDED',
  Sharp: 'SHARP',
} as const;

export type ElementsUiStyle =
  (typeof elementsUiStyle)[keyof typeof elementsUiStyle];
/** Determines the base color theme for an AppearanceSettings object. */
export const elementsUiTheme = {
  Dark: 'DARK',
  Light: 'LIGHT',
  System: 'SYSTEM',
} as const;

export type ElementsUiTheme =
  (typeof elementsUiTheme)[keyof typeof elementsUiTheme];
export const endOfDayBehavior = {
  Exempt: 'EXEMPT',
  Required: 'REQUIRED',
} as const;

export type EndOfDayBehavior =
  (typeof endOfDayBehavior)[keyof typeof endOfDayBehavior];
export const errorDetail = {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded: 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm: 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound: 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument: 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor: 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource: 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError: 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure: 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency: 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu: 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented: 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown: 'UNKNOWN',
} as const;

export type ErrorDetail = (typeof errorDetail)[keyof typeof errorDetail];
export const errorType = {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest: 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition: 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal: 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound: 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied: 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated: 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable: 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown: 'UNKNOWN',
} as const;

export type ErrorType = (typeof errorType)[keyof typeof errorType];
export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  mode: Mode;
  rate: Scalars['Decimal'];
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  targetFormat: Maybe<CurrencyFormat>;
  type: ExchangeRateType;
};

export type ExchangeRateCreateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: CurrencyCode;
  targetCurrencyCode: CurrencyCode;
  type: ExchangeRateType;
};

export const exchangeRateType = {
  /** Zonos guaranteed rate */
  Guaranteed: 'GUARANTEED',
  /** Average rate for that day - NOT GUARANTEED */
  MidMarket: 'MID_MARKET',
} as const;

export type ExchangeRateType =
  (typeof exchangeRateType)[keyof typeof exchangeRateType];
/** Generic type to allow the frontend to pull account-specific tokens from the backend in a secure way */
export type ExternalServiceToken = {
  __typename?: 'ExternalServiceToken';
  token: Scalars['String'];
  type: ExternalServiceTokenType;
};

/** Generic type to allow the frontend to pull account-specific tokens from the backend in a secure way */
export type ExternalServiceTokenInput = {
  token: Scalars['String'];
  type: ExternalServiceTokenType;
};

/** Possible external service tokens that can be sent back with a settings request */
export const externalServiceTokenType = {
  StripePublishableToken: 'STRIPE_PUBLISHABLE_TOKEN',
} as const;

export type ExternalServiceTokenType =
  (typeof externalServiceTokenType)[keyof typeof externalServiceTokenType];
/** Represents a fee amount on a `LandedCost` quote */
export type Fee = {
  __typename?: 'Fee';
  /** `Fee` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Fee` amount is in. */
  currencyCode: CurrencyCode;
  /** Human readable description of this `Fee`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this fee was calculated */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Fee`. */
  note: Maybe<Scalars['String']>;
  /** Party responsible for receving payment on this `Fee` */
  payee: Maybe<Party>;
  /** Party responsible for rendering payment on this `Fee` */
  payor: Maybe<Party>;
  /** Type of fee */
  type: LandedCostFeeType;
};

/**
 * A `FulfillmentCenter` services a specified organization and is responsible for receiving/managing inventory and
 * shipping orders to customers. A `fulfillmentCenter` may support specific carriers and will service specified `shippingZones`.
 */
export type FulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  /** When this FulfillmentCenter was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the FulfillmentCenter */
  createdBy: Scalars['ID'];
  /** A unique identifier for the FulfillmentCenter. */
  id: Scalars['ID'];
  /** Specifies whether the FulfillmentCenter is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the FulfillmentCenter. */
  name: Scalars['String'];
  /** The `Organization` associated with the FulfillmentCenter. */
  organization: Scalars['ID'];
  /** The `Party` to use for the FulfillmentCenter */
  party: Scalars['ID'];
  /** When this FulfillmentCenter was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the FulfillmentCenter. */
  updatedBy: Scalars['ID'];
};

/** Determines how Zonos Hello should handle currency conversion. */
export const helloCurrencyBehavior = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type HelloCurrencyBehavior =
  (typeof helloCurrencyBehavior)[keyof typeof helloCurrencyBehavior];
/** Determines how Zonos Hello should handle live duty/tax estimations. */
export const helloEstimateBehavior = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type HelloEstimateBehavior =
  (typeof helloEstimateBehavior)[keyof typeof helloEstimateBehavior];
/** Determines where Hello should display on mobile */
export const helloMobileLocation = {
  BottomLeft: 'BOTTOM_LEFT',
  BottomRight: 'BOTTOM_RIGHT',
  TopLeft: 'TOP_LEFT',
  TopRight: 'TOP_RIGHT',
} as const;

export type HelloMobileLocation =
  (typeof helloMobileLocation)[keyof typeof helloMobileLocation];
/** Determines whether Hello should display peeks */
export const helloPeekMessageBehavior = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type HelloPeekMessageBehavior =
  (typeof helloPeekMessageBehavior)[keyof typeof helloPeekMessageBehavior];
/** Determines how Zonos Hello should handle restricted items. */
export const helloRestrictionBehavior = {
  Disabled: 'DISABLED',
  RestrictAndBlock: 'RESTRICT_AND_BLOCK',
  RestrictAndWarn: 'RESTRICT_AND_WARN',
} as const;

export type HelloRestrictionBehavior =
  (typeof helloRestrictionBehavior)[keyof typeof helloRestrictionBehavior];
/** Allows configuration of Zonos Hello. These settings can be overridden by the `zonos.init` function in the Zonos Elements SDK. */
export type HelloSettings = {
  __typename?: 'HelloSettings';
  /** A list of domains to allow Hello to send frontend requests from. Hello will not function for domains not listed here. */
  allowedDomains: Array<Scalars['String']>;
  /** CSS selector for a DOM element for Hello to visually anchor to */
  anchorElementSelector: Scalars['String'];
  /** Regex pattern matching the URL of your site's cart page */
  cartUrlPattern: Maybe<Scalars['String']>;
  /** When the HelloSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the HelloSettings */
  createdBy: Scalars['ID'];
  /** How Hello should handle currency conversion */
  currencyBehavior: HelloCurrencyBehavior;
  /** CSS selector for your site's currency/money fields */
  currencyElementSelector: Scalars['String'];
  /** How Hello should handle on-the-fly duty/tax estimation */
  dutyTaxEstimationBehavior: HelloEstimateBehavior;
  /** Optional list of URL patterns to not display Hello on. Regex matching supported */
  excludedUrlPatterns: Array<Scalars['String']>;
  /** Regex pattern matching the URL of your site's homepage */
  homepageUrlPattern: Maybe<Scalars['String']>;
  /** A unique identifier for the HelloSettings */
  id: Scalars['ID'];
  /** Where Hello should display on mobile */
  mobileLocation: HelloMobileLocation;
  /** Whether this HelloSettings is in live or test mode */
  mode: Mode;
  /** The organization this HelloSettings belongs to */
  organization: Scalars['ID'];
  /** Whether or not Hello should display peek messages in its collapsed view */
  peekMessageBehavior: HelloPeekMessageBehavior;
  /** If peek messages are enabled, how many seconds before they should appear after page load */
  peekMessageDelay: Scalars['Decimal'];
  /** Regex pattern matching the URL of your site's product detail page */
  productDetailUrlPattern: Maybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product list/category list pages */
  productListUrlPattern: Maybe<Scalars['String']>;
  /** How Hello should handle item restrictions */
  restrictionBehavior: HelloRestrictionBehavior;
  /** When the HelloSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the HelloSettings */
  updatedBy: Scalars['ID'];
};

/** Input type for updating an existing HelloSettings object. */
export type HelloSettingsUpdateInput = {
  /** A list of domains to allow Hello to send frontend requests from. Hello will not function for domains not listed here. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** CSS selector for a DOM element for Hello to visually anchor to */
  anchorElementSelector?: InputMaybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's cart page */
  cartUrlPattern?: InputMaybe<Scalars['String']>;
  /** How Hello should handle currency conversion */
  currencyBehavior?: InputMaybe<HelloCurrencyBehavior>;
  /** CSS selector for your site's currency/money fields */
  currencyElementSelector?: InputMaybe<Scalars['String']>;
  /** How Hello should handle on-the-fly duty/tax estimation */
  dutyTaxEstimationBehavior?: InputMaybe<HelloEstimateBehavior>;
  /** Optional list of URL patterns to not display Hello on. Regex matching supported */
  excludedUrlPatterns?: InputMaybe<Array<Scalars['String']>>;
  /** Regex pattern matching the URL of your site's homepage */
  homepageUrlPattern?: InputMaybe<Scalars['String']>;
  /** Where Hello should display on mobile */
  mobileLocation?: InputMaybe<HelloMobileLocation>;
  /** Whether or not Hello should display peek messages in its collapsed view */
  peekMessageBehavior?: InputMaybe<HelloPeekMessageBehavior>;
  /** If peek messages are enabled, how many seconds before they should appear after page load */
  peekMessageDelay?: InputMaybe<Scalars['Decimal']>;
  /** Regex pattern matching the URL of your site's product detail page */
  productDetailUrlPattern?: InputMaybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product list/category list pages */
  productListUrlPattern?: InputMaybe<Scalars['String']>;
  /** How Hello should handle item restrictions */
  restrictionBehavior?: InputMaybe<HelloRestrictionBehavior>;
};

export type HsCode = {
  __typename?: 'HsCode';
  /** The numerically formatted HS code. */
  code: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  codeType: HsCodeType;
  /** The 2-digit ISO representation of a country. */
  countryCode: Maybe<CountryCode>;
  /** Combination of WCO and tariff schedule definitions. */
  description: HsCodeDescription;
  /** Date when an HS code becomes valid. */
  effectiveAt: Scalars['DateTime'];
  /** Date when an HS code is no longer valid. */
  expiresAt: Maybe<Scalars['DateTime']>;
  /** HS Code fragments */
  fragments: Array<HsCodeFragment>;
  /** The WCO version of the harmonized system, represented as a year. */
  majorVersion: WcoVersion;
  /** The country-specific version of the WCO core library. */
  minorVersion: Maybe<Scalars['String']>;
};

export type HsCodeDescription = {
  __typename?: 'HsCodeDescription';
  /** A modified version of the description based on the official schedule but meant to be easily understood. */
  friendly: Maybe<Scalars['String']>;
  /** A description derived from parent descriptions. */
  full: Maybe<Scalars['String']>;
  /** A shortened description derived from parent descriptions. */
  fullTruncated: Maybe<Scalars['String']>;
  /** The description taken directly from the applicable schedule. */
  htsItem: Scalars['String'];
};

export type HsCodeFragment = {
  __typename?: 'HsCodeFragment';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  description: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  type: HsCodeType;
};

export const hsCodeType = {
  Chapter: 'CHAPTER',
  Export: 'EXPORT',
  Heading: 'HEADING',
  Section: 'SECTION',
  Subheading: 'SUBHEADING',
  Tariff: 'TARIFF',
} as const;

export type HsCodeType = (typeof hsCodeType)[keyof typeof hsCodeType];
/** International Commercial Terms */
export const incotermCode = {
  /** Cost, Insurance & Freight */
  Cif: 'CIF',
  Custom: 'CUSTOM',
  /** Delivered At Place */
  Dap: 'DAP',
  /** Delivered Duty Paid */
  Ddp: 'DDP',
  /** Free On Board */
  Fob: 'FOB',
} as const;

export type IncotermCode = (typeof incotermCode)[keyof typeof incotermCode];
/**
 * An `Item` represents the input for a shopping cart `Item` to be quoted for Landed Cost, Shipment Rating,
 * etc. `Item` is not intended to be stored and used long-term for things like the catalog; it is
 * purely a method for moving data around.
 */
export type Item = {
  __typename?: 'Item';
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes: Maybe<Array<Maybe<ItemAttribute>>>;
  /** Link to an existing `CatalogItem` that contains more info about this `Item`. */
  catalogItem: Maybe<CatalogItem>;
  /** Country where the `Item` originates. */
  countryOfOrigin: Maybe<CountryCode>;
  /** Indicates where the `CountryOfOrigin` was sourced from. */
  countryOfOriginSource: Maybe<ItemValueSource>;
  /** When this `Item` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Item`. */
  createdBy: Scalars['ID'];
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** The description of the `Item` for customs. */
  customsDescription: Maybe<Scalars['String']>;
  customsSpecs: Array<CustomsSpec>;
  /** Human-readable `Item` description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode: Maybe<Scalars['String']>;
  /** Indicates where the HS code for this `Item` was acquired. */
  hsCodeSource: Maybe<ItemValueSource>;
  /** `Item` ID, prefixed with `item_`. */
  id: Scalars['ID'];
  /** Optional URL to an image that represents this `Item`. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements: Maybe<Array<Maybe<ItemMeasurement>>>;
  /** User-accessible key/value metadata. */
  metadata: Maybe<Array<Maybe<ItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: Mode;
  /** Human readable item name. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The packing options of the item */
  packingPreference: Maybe<PackingPreference>;
  /**
   * The product ID of the parent `Item` for multi-SKU situations.
   * @deprecated No longer supported
   */
  parentProductId: Maybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId: Scalars['String'];
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** when the item is restricted, this property will have some details as to why. */
  restriction: Maybe<RestrictedItem>;
  /** SKU of this Item. */
  sku: Maybe<Scalars['String']>;
  /** When this `Item` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Item`. */
  updatedBy: Scalars['ID'];
};

export type ItemAttribute = {
  __typename?: 'ItemAttribute';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ItemAttributeInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Item Connection */
export type ItemConnection = {
  __typename?: 'ItemConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ItemEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** Input to create a new Item. */
export type ItemCreateWorkflowInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

/** Item Edge */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Item>;
};

/** Input to create a new Item. */
export type ItemInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: CurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** ID of the root with which this Item is associated. */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

/** Represents `Item` weight, dimension, or other specific `Measurement`. */
export type ItemMeasurement = {
  __typename?: 'ItemMeasurement';
  /** Where the `Measurement` is sourced from. */
  source: ItemValueSource;
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ItemMeasurementInput = {
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export const itemMeasurementType = {
  Height: 'HEIGHT',
  Length: 'LENGTH',
  Weight: 'WEIGHT',
  Width: 'WIDTH',
} as const;

export type ItemMeasurementType =
  (typeof itemMeasurementType)[keyof typeof itemMeasurementType];
export type ItemMetadata = {
  __typename?: 'ItemMetadata';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ItemMetadataInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ItemRestriction = {
  __typename?: 'ItemRestriction';
  /** list of country codes controls apply to */
  applicableCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** Countries that implemented the control */
  controlCountries: Maybe<Array<Maybe<CountryCode>>>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ControlType;
  /** When this `Restriction` was created */
  createdAt: Scalars['DateTime'];
  /** When this `Restriction stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** Item Restriction ID, prefixed with `item_restriction_`. */
  id: Scalars['ID'];
  /** Human readable description of the Restriction. */
  note: Scalars['String'];
  /** The source of the restriction. */
  sources: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When the restriction takes effect. */
  startsAt: Maybe<Scalars['DateTime']>;
  /** The category of restriction that applies to the item being sent. These will be categorized as OBSERVATION, PROHIBITION, or RESTRICTION. */
  type: ItemRestrictionType;
};

/** Denotes if the user should continue to review the results further or not. Will be displayed as NO_MATCH or REVIEW. */
export const itemRestrictionAction = {
  NoMatch: 'NO_MATCH',
  ObservationsApply: 'OBSERVATIONS_APPLY',
  ProhibitionsApply: 'PROHIBITIONS_APPLY',
  RestrictionsApply: 'RESTRICTIONS_APPLY',
} as const;

export type ItemRestrictionAction =
  (typeof itemRestrictionAction)[keyof typeof itemRestrictionAction];
export type ItemRestrictionApplyInput = {
  /** The items needing to be checked for restrictions. */
  items: Array<ItemRestrictionInput>;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold?: InputMaybe<ItemRestrictionType>;
  /** Origin country. */
  shipFromCountry: CountryCode;
  /** Destination country. */
  shipToCountry: CountryCode;
};

export type ItemRestrictionInput = {
  /** Country in which the item originates. */
  countryOfOrigin: CountryCode;
  /** Human readable item description */
  description?: InputMaybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
};

/** The resulting of applying the restriction to a list of items. */
export type ItemRestrictionResult = {
  __typename?: 'ItemRestrictionResult';
  /** When this RestrictionResult was created */
  createdAt: Scalars['DateTime'];
  /** The user that created this RestrictionResult */
  createdBy: Scalars['ID'];
  /** RestrictionResult ID, prefixed with `restriction_result_` */
  id: Scalars['ID'];
  items: Array<Maybe<AppliedItemRestrictions>>;
  /** Denotes if this is LIVE or TEST */
  mode: Mode;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold: ItemRestrictionType;
  /** Origin country. */
  shipFromCountry: CountryCode;
  /** Destination country. */
  shipToCountry: CountryCode;
};

export const itemRestrictionType = {
  Observation: 'OBSERVATION',
  Prohibition: 'PROHIBITION',
  Restriction: 'RESTRICTION',
} as const;

export type ItemRestrictionType =
  (typeof itemRestrictionType)[keyof typeof itemRestrictionType];
export type ItemRestrictionsResult = {
  __typename?: 'ItemRestrictionsResult';
  id: Scalars['ID'];
};

export const itemType = {
  /** The item is a bundle of other items */
  Bundle: 'BUNDLE',
  /** The item is a digital good */
  DigitalGood: 'DIGITAL_GOOD',
  /** A part of an item */
  PartialItem: 'PARTIAL_ITEM',
  /** The item is a physical good */
  PhysicalGood: 'PHYSICAL_GOOD',
  /** The item is a service */
  Service: 'SERVICE',
  /** The item is a subscription */
  Subscription: 'SUBSCRIPTION',
} as const;

export type ItemType = (typeof itemType)[keyof typeof itemType];
export const itemUnitOfMeasure = {
  Centimeter: 'CENTIMETER',
  Foot: 'FOOT',
  Gram: 'GRAM',
  Inch: 'INCH',
  Kilogram: 'KILOGRAM',
  Meter: 'METER',
  Millimeter: 'MILLIMETER',
  Ounce: 'OUNCE',
  Pound: 'POUND',
  Yard: 'YARD',
} as const;

export type ItemUnitOfMeasure =
  (typeof itemUnitOfMeasure)[keyof typeof itemUnitOfMeasure];
export type ItemUpdateInput = {
  /** `Item` price amount. @deprecated */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. @deprecated */
  attributes?: InputMaybe<Array<InputMaybe<ItemAttributeInput>>>;
  /** Country where the `Item` originates. @deprecated */
  countryOfOrigin?: InputMaybe<CountryCode>;
  /** The currency this `Item` price amount is in. @deprecated */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Human-readable `Item` description. @deprecated */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<DutyTaxFeeConfiguration>;
  /** HS code for this `Item`. @deprecated */
  hsCode?: InputMaybe<Scalars['String']>;
  /** ID of `Item` to update. */
  id?: InputMaybe<Scalars['ID']>;
  /** Optional URL to an image that represents this `Item`. @deprecated */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Data to update in `Item`. */
  item?: InputMaybe<ItemInput>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ItemType>;
  /** List of `Item` weights and dimensions. @deprecated */
  measurements?: InputMaybe<Array<InputMaybe<ItemMeasurementInput>>>;
  /** User-accessible key/value metadata. @deprecated */
  metadata?: InputMaybe<Array<InputMaybe<ItemMetadataInput>>>;
  /** Name of the `Item`. @deprecated */
  name?: InputMaybe<Scalars['String']>;
  /** The product ID of the parent `Item` for multi-SKU situations. @deprecated */
  parentProductId?: InputMaybe<Scalars['String']>;
  /** The `Item` product ID. @deprecated */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. @deprecated */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. @deprecated */
  quantity?: InputMaybe<Scalars['Int']>;
  /** ID of the root with which this Item is associated. @deprecated */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of this Item. @deprecated */
  sku?: InputMaybe<Scalars['String']>;
};

export const itemValueSource = {
  ApiRequest: 'API_REQUEST',
  Catalog: 'CATALOG',
  OrganizationSetting: 'ORGANIZATION_SETTING',
} as const;

export type ItemValueSource =
  (typeof itemValueSource)[keyof typeof itemValueSource];
export type ItemsUpdateInput = {
  items: Array<ItemUpdateInput>;
};

export type Label = {
  __typename?: 'Label';
  /** The carrier that the label was created for */
  carrier: Carrier;
  /** The date and time this Label was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Label */
  createdBy: Scalars['ID'];
  /** The way in which the documents were filed for the label */
  documentFiling: DocumentFilingType;
  /** A unique identifier for the label */
  id: Scalars['ID'];
  /** A list of amounts associated with the label */
  labelAmounts: Maybe<Array<LabelAmount>>;
  /** Indicates the desired type of file for the label */
  labelFileType: LabelFileType;
  /** Indicates the desired size of the label */
  labelSize: LabelSize;
  /** The label request sent to the carrier */
  requestLog: Maybe<LabelRequestLog>;
  /** The carton that the label was created for */
  shipmentCarton: Scalars['ID'];
  /** The current status of the label */
  status: LabelStatusType;
  /** A list of changes to the status of the label */
  statusTransitions: Array<LabelStatusTransition>;
  /** The tracking number associated with the label */
  trackingNumber: Scalars['String'];
  /** The url where the label is stored */
  url: Scalars['String'];
};

export type LabelAmount = {
  __typename?: 'LabelAmount';
  /** The value of the amount */
  amount: Scalars['Decimal'];
  /** The type of amount */
  amountType: LabelAmountType;
  /** The currency that the amount is in */
  currencyCode: CurrencyCode;
};

export const labelAmountType = {
  /** Insurance value on the label */
  Insurance: 'INSURANCE',
  /** The postage quote received from the Carrier */
  Quote: 'QUOTE',
} as const;

export type LabelAmountType =
  (typeof labelAmountType)[keyof typeof labelAmountType];
export type LabelConnection = {
  __typename?: 'LabelConnection';
  /** A list of `LabelEdge` objects */
  edges: Array<LabelEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `Label` objects in the connection */
  totalCount: Scalars['Int'];
};

export type LabelCreateInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<LabelSize>;
  /** The shipment for which the label is being generated */
  shipment: Scalars['ID'];
};

export type LabelEdge = {
  __typename?: 'LabelEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `Label` object located at this edge */
  node: Maybe<Label>;
};

export const labelFileType = {
  /** Label will be saved in a PDF format */
  Pdf: 'PDF',
  /** Label will be saved in a ZPL format */
  Zpl: 'ZPL',
} as const;

export type LabelFileType = (typeof labelFileType)[keyof typeof labelFileType];
export type LabelFilter = {
  /** The carrier for which the label was generated */
  carrier?: InputMaybe<Scalars['ID']>;
  /** A date range to filter Label objects by their created date */
  createdDate?: InputMaybe<DateTimeRange>;
  /** A status to filter Label objects by their current status */
  status?: InputMaybe<LabelStatusType>;
};

/** LabelRequestLog represents the carrier request and response used to retrieve a `Label` */
export type LabelRequestLog = {
  __typename?: 'LabelRequestLog';
  /** The date and time this LabelRequestLog was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the organization that created the LabelRequestLog */
  createdBy: Scalars['ID'];
  /** A unique identifier for the LabelRequestLog */
  id: Scalars['ID'];
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId: Maybe<Scalars['ID']>;
  /** The request body sent to the carrier */
  request: Maybe<Scalars['String']>;
  /** The response body returned by the carrier */
  response: Maybe<Scalars['String']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId: Maybe<Scalars['ID']>;
};

export type LabelRequestLogConnection = {
  __typename?: 'LabelRequestLogConnection';
  /** A list of `LabelRequestLogEdge` objects */
  edges: Array<LabelRequestLogEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `LabelRequestLog` objects in the connection */
  totalCount: Scalars['Int'];
};

export type LabelRequestLogEdge = {
  __typename?: 'LabelRequestLogEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `LabelRequestLog` object located at this edge */
  node: Maybe<LabelRequestLog>;
};

export type LabelRequestLogFilter = {
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId?: InputMaybe<Scalars['ID']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export const labelSize = {
  /** 8x11 label size */
  EightByEleven: 'EIGHT_BY_ELEVEN',
  /** 4x8 label size */
  FourByEight: 'FOUR_BY_EIGHT',
  /** 4x6 label size */
  FourBySix: 'FOUR_BY_SIX',
} as const;

export type LabelSize = (typeof labelSize)[keyof typeof labelSize];
export type LabelSpecInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<LabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<LabelSize>;
};

export type LabelStatusTransition = {
  __typename?: 'LabelStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Label` at the associated DateTime */
  status: LabelStatusType;
};

export const labelStatusType = {
  Created: 'CREATED',
  Voided: 'VOIDED',
} as const;

export type LabelStatusType =
  (typeof labelStatusType)[keyof typeof labelStatusType];
export type LabelVoidInput = {
  /** Label to be voided */
  id: Scalars['ID'];
  /** Optional note about reason to be voided */
  note?: InputMaybe<Scalars['String']>;
};

/**
 * A `LandedCost` represents the result of a landed cost calculation. `LandedCost` quotes belong to a `Root`
 * resource and additionally include a `ShipmentRating` resource with additional details about the shipping
 * costs
 */
export type LandedCost = {
  __typename?: 'LandedCost';
  /** Amount totals for duties, taxes, fees */
  amountSubtotals: Maybe<LandedCostAmountSubtotals>;
  /** When this `LandedCost` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `LandedCost` */
  createdBy: Scalars['ID'];
  /** Currency code of the LandedCost. */
  currencyCode: CurrencyCode;
  /** A list of de minimis thresholds and what values they apply to */
  deMinimis: Array<DeMinimis>;
  /** A list of duties assessed for this `LandedCost` */
  duties: Array<Duty>;
  /** End use for items included in this quote */
  endUse: LandedCostEndUse;
  /** A list of fees assessed for this `LandedCost` */
  fees: Array<Fee>;
  /** `LandedCost` resource ID, prefixed with `landed_cost_` */
  id: Scalars['ID'];
  /** Indicates if the landed cost is covered by the Zonos Landed Cost Guarantee */
  landedCostGuaranteeCode: LandedCostGuaranteeCode;
  /** INCOTERM used to perform calculations */
  method: IncotermCode;
  /** Indicates whether this `LandedCost` was created in live or test mode */
  mode: Mode;
  /** `Organization` that this `LandedCost` belongs to */
  organization: Scalars['ID'];
  /** The taxes that should be remitted. */
  remittance: Array<LandedCostRemittance>;
  /** `Root` resource that this `LandedCost` belongs to */
  root: Maybe<Root>;
  /** `Root` resource ID that this `LandedCost` belongs to */
  rootId: Scalars['ID'];
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost` */
  shipmentRating: ShipmentRating;
  /** Indicates what method Zonos used to calculate the tariff rates for this `LandedCost` */
  tariffRate: LandedCostTariffRate;
  taxId: Maybe<TaxId>;
  /** A list of taxes assessed for this `LandedCost` */
  taxes: Array<Tax>;
  /** When this `LandedCost` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `LandedCost` */
  updatedBy: Scalars['ID'];
};

/** The subtotals that make up a landed cost. */
export type LandedCostAmountSubtotals = {
  __typename?: 'LandedCostAmountSubtotals';
  /** Total amount of all duties. */
  duties: Scalars['Decimal'];
  /** Total amount of all fees. */
  fees: Scalars['Decimal'];
  /** Total amount of all items. */
  items: Scalars['Decimal'];
  /** Total amount of duties, taxes, and fees. */
  landedCostTotal: Scalars['Decimal'];
  /** Total amount of shipping. */
  shipping: Scalars['Decimal'];
  /** Total amount of all taxes. */
  taxes: Scalars['Decimal'];
};

export const landedCostCalculationMethod = {
  /** Only provide a DAP quote. */
  Dap: 'DAP',
  /** Only provide a DDP. */
  Ddp: 'DDP',
  /** Provide both a DDP and DAP quote. */
  DdpAndDap: 'DDP_AND_DAP',
  /** provide a DDP quote but return a DAP quote if DDP is not allowed. */
  DdpPreferred: 'DDP_PREFERRED',
  /** Use the Zonos configured profile settings to provide a DDP or DAP quote. */
  ZonosConfigured: 'ZONOS_CONFIGURED',
} as const;

export type LandedCostCalculationMethod =
  (typeof landedCostCalculationMethod)[keyof typeof landedCostCalculationMethod];
export type LandedCostConnection = {
  __typename?: 'LandedCostConnection';
  edges: Maybe<Array<Maybe<LandedCostEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type LandedCostEdge = {
  __typename?: 'LandedCostEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<LandedCost>;
};

export const landedCostEndUse = {
  /** Item quoted will be resold upon import */
  ForResale: 'FOR_RESALE',
  /** Item quoted will not be resold upon import (e.g. personal use, gift) */
  NotForResale: 'NOT_FOR_RESALE',
} as const;

export type LandedCostEndUse =
  (typeof landedCostEndUse)[keyof typeof landedCostEndUse];
export const landedCostFeeType = {
  AdditionalTariffLines: 'ADDITIONAL_TARIFF_LINES',
  Advancement: 'ADVANCEMENT',
  BrokerageFee: 'BROKERAGE_FEE',
  Cod: 'COD',
  Country: 'COUNTRY',
  CurrencyConversionFee: 'CURRENCY_CONVERSION_FEE',
  DdpServiceFee: 'DDP_SERVICE_FEE',
  Duty: 'DUTY',
  Item: 'ITEM',
  Other: 'OTHER',
  Shipping: 'SHIPPING',
  ZonosLandedCostGuarantee: 'ZONOS_LANDED_COST_GUARANTEE',
} as const;

export type LandedCostFeeType =
  (typeof landedCostFeeType)[keyof typeof landedCostFeeType];
export type LandedCostFilter = {
  /** Return `LandedCost` resources created after a given  (inclusive) */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date (inclusive) */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
  shipFromCountry?: InputMaybe<CountryCode>;
  shipToCountry?: InputMaybe<CountryCode>;
};

export const landedCostGuaranteeCode = {
  /** No guarantee */
  NotApplicable: 'NOT_APPLICABLE',
  /** Zonos covers any landed cost discrepancies */
  Zonos: 'ZONOS',
} as const;

export type LandedCostGuaranteeCode =
  (typeof landedCostGuaranteeCode)[keyof typeof landedCostGuaranteeCode];
export const landedCostGuaranteeType = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type LandedCostGuaranteeType =
  (typeof landedCostGuaranteeType)[keyof typeof landedCostGuaranteeType];
export type LandedCostInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: LandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<IncotermCode>;
  /** `Root` resource that this `LandedCost` will belong to */
  rootId: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: LandedCostTariffRate;
};

/** The method to use for the landed cost calculation. */
export const landedCostMethod = {
  /** Only provide a DAP quote */
  DapForced: 'DAP_FORCED',
  /** Provide both a DDP and DAP quote */
  DdpAndDap: 'DDP_AND_DAP',
  /** Only provide a DDP  */
  DdpForced: 'DDP_FORCED',
  /** provide a DDP quote but return a DAP quote if DDP is not allowed */
  DdpPreferred: 'DDP_PREFERRED',
} as const;

export type LandedCostMethod =
  (typeof landedCostMethod)[keyof typeof landedCostMethod];
/** Represents the tax remittance values required by specific entities. */
export type LandedCostRemittance = {
  __typename?: 'LandedCostRemittance';
  /** The price amount of the tax remittance. */
  amount: Scalars['Decimal'];
  /** The type of tax remittance. */
  description: Scalars['String'];
  /** A note on where to remit the tax remittance. */
  note: Scalars['String'];
};

export type LandedCostSettings = {
  __typename?: 'LandedCostSettings';
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  defaultCountryOfOrigin: Maybe<CountryCode>;
  defaultCustomsDescription: Maybe<Scalars['String']>;
  defaultHarmonizedCode: Maybe<Scalars['String']>;
  disableDiscountedFee: Scalars['Boolean'];
  id: Scalars['String'];
  landedCostGuarantee: Maybe<LandedCostGuaranteeType>;
  minimumHsCodeLength: Maybe<Scalars['Int']>;
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
};

export const landedCostTariffRate = {
  /** Exact tariff rate for provided HS code will be used. If not possible, an error will be returned */
  Exact: 'EXACT',
  /** Maximum tariff rate for provided HS code will be used */
  Maximum: 'MAXIMUM',
  /** Median tariff rate for provided HS code will be used */
  Median: 'MEDIAN',
  /** Lowest tariff rate for provided HS code will be used */
  Minimum: 'MINIMUM',
  /** Zonos will attempt to calculate best tariff rate for provided HS code (recomended) */
  ZonosPreferred: 'ZONOS_PREFERRED',
} as const;

export type LandedCostTariffRate =
  (typeof landedCostTariffRate)[keyof typeof landedCostTariffRate];
export type LandedCostWorkFlowInput = {
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<LandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<CurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: LandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<IncotermCode>;
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: LandedCostTariffRate;
};

export const languageCode = {
  /** Afrikaans */
  Af: 'AF',
  /** Amharic */
  Am: 'AM',
  /** Arabic */
  Ar: 'AR',
  /** Azerbaijani */
  Az: 'AZ',
  /** Belarusian */
  Be: 'BE',
  /** Bulgarian */
  Bg: 'BG',
  /** Bengali */
  Bn: 'BN',
  /** Bosnian */
  Bs: 'BS',
  /** Catalan */
  Ca: 'CA',
  /** Cebuano */
  Ceb: 'CEB',
  /** Corsican */
  Co: 'CO',
  /** Czech */
  Cs: 'CS',
  /** Welsh */
  Cy: 'CY',
  /** Danish */
  Da: 'DA',
  /** German */
  De: 'DE',
  /** Greek */
  El: 'EL',
  /** English */
  En: 'EN',
  /** Esperanto */
  Eo: 'EO',
  /** Spanish */
  Es: 'ES',
  /** Estonian */
  Et: 'ET',
  /** Basque */
  Eu: 'EU',
  /** Persian */
  Fa: 'FA',
  /** Finnish */
  Fi: 'FI',
  /** French */
  Fr: 'FR',
  /** Frisian */
  Fy: 'FY',
  /** Irish */
  Ga: 'GA',
  /** Scots Gaelic */
  Gd: 'GD',
  /** Galician */
  Gl: 'GL',
  /** Gujarati */
  Gu: 'GU',
  /** Hausa */
  Ha: 'HA',
  /** Hawaiian */
  Haw: 'HAW',
  /** Hebrew (2 possible values) */
  He: 'HE',
  /** Hindi */
  Hi: 'HI',
  /** Hmong */
  Hmn: 'HMN',
  /** Croatian */
  Hr: 'HR',
  /** Haitian Creole */
  Ht: 'HT',
  /** Hungarian */
  Hu: 'HU',
  /** Armenian */
  Hy: 'HY',
  /** Indonesian */
  Id: 'ID',
  /** Igbo */
  Ig: 'IG',
  /** Icelandic */
  Is: 'IS',
  /** Italian */
  It: 'IT',
  Iw: 'IW',
  /** Japanese */
  Ja: 'JA',
  /** Javanese */
  Jv: 'JV',
  /** Georgian */
  Ka: 'KA',
  /** Kazakh */
  Kk: 'KK',
  /** Khmer */
  Km: 'KM',
  /** Kannada */
  Kn: 'KN',
  /** Korean */
  Ko: 'KO',
  /** Kurdish */
  Ku: 'KU',
  /** Kyrgyz */
  Ky: 'KY',
  /** Luxembourgish */
  Lb: 'LB',
  /** Lao */
  Lo: 'LO',
  /** Lithuanian */
  Lt: 'LT',
  /** Latvian */
  Lv: 'LV',
  /** Malagasy */
  Mg: 'MG',
  /** Maori */
  Mi: 'MI',
  /** Macedonian */
  Mk: 'MK',
  /** Malayalam */
  Ml: 'ML',
  /** Mongolian */
  Mn: 'MN',
  /** Marathi */
  Mr: 'MR',
  /** Malay */
  Ms: 'MS',
  /** Maltese */
  Mt: 'MT',
  /** Myanmar (Burmese) */
  My: 'MY',
  /** Napali */
  Ne: 'NE',
  /** Dutch */
  Nl: 'NL',
  /** Norwegian */
  No: 'NO',
  /** Nyanja (Chichewa) */
  Ny: 'NY',
  /** Odia (Oriya) */
  Or: 'OR',
  /** Punjabi */
  Pa: 'PA',
  /** Polish */
  Pl: 'PL',
  /** Pashto */
  Ps: 'PS',
  /** Portuguese (Portugal, Brazil) */
  Pt: 'PT',
  /** Romanian */
  Ro: 'RO',
  /** Russian */
  Ru: 'RU',
  /** Kinyarwanda */
  Rw: 'RW',
  /** Sindhi */
  Sd: 'SD',
  /** Sinhala (Sinhalese) */
  Si: 'SI',
  /** Slovak */
  Sk: 'SK',
  /** Slovenian */
  Sl: 'SL',
  /** Samoan */
  Sm: 'SM',
  /** Shona */
  Sn: 'SN',
  /** Somali */
  So: 'SO',
  /** Albanian */
  Sq: 'SQ',
  /** Serbian */
  Sr: 'SR',
  /** Sesotho */
  St: 'ST',
  /** Sundanese */
  Su: 'SU',
  /** Swedish */
  Sv: 'SV',
  /** Swahili */
  Sw: 'SW',
  /** Tamil */
  Ta: 'TA',
  /** Telugu */
  Te: 'TE',
  /** Tajik */
  Tg: 'TG',
  /** Thai */
  Th: 'TH',
  /** Turkmen */
  Tk: 'TK',
  /** Tagalog (Filipino) */
  Tl: 'TL',
  /** Turkish */
  Tr: 'TR',
  /** Tatar */
  Tt: 'TT',
  /** Uyghur */
  Ug: 'UG',
  /** Ukrainian */
  Uk: 'UK',
  /** Urdu */
  Ur: 'UR',
  /** Uzbek */
  Uz: 'UZ',
  /** Vietnamese */
  Vi: 'VI',
  /** Xhosa */
  Xh: 'XH',
  /** Yiddish */
  Yi: 'YI',
  /** Yoruba */
  Yo: 'YO',
  /** Chinese (Simplified) */
  ZhCn: 'ZH_CN',
  /** Chinese (Traditional) */
  ZhTw: 'ZH_TW',
  /** Zulu */
  Zu: 'ZU',
} as const;

export type LanguageCode = (typeof languageCode)[keyof typeof languageCode];
export const lcgBillingMethod = {
  BillingDgs: 'BILLING_DGS',
  Legacy: 'LEGACY',
} as const;

export type LcgBillingMethod =
  (typeof lcgBillingMethod)[keyof typeof lcgBillingMethod];
export type Location = {
  __typename?: 'Location';
  administrativeArea: Maybe<Scalars['String']>;
  administrativeAreaCode: Maybe<Scalars['String']>;
  countryCode: CountryCode;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  latitude: Maybe<Scalars['Decimal']>;
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  line3: Maybe<Scalars['String']>;
  line4: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  longitude: Maybe<Scalars['Decimal']>;
  metadata: Maybe<Array<Maybe<PartyMetadata>>>;
  mode: Mode;
  organization: Scalars['ID'];
  plusCode: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  propertyType: Maybe<PropertyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type LocationCreateInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: CountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<PropertyType>;
};

export const matchType = {
  ExactMatch: 'EXACT_MATCH',
  NoMatch: 'NO_MATCH',
  PartialMatch: 'PARTIAL_MATCH',
} as const;

export type MatchType = (typeof matchType)[keyof typeof matchType];
export const mode = {
  Live: 'LIVE',
  Test: 'TEST',
} as const;

export type Mode = (typeof mode)[keyof typeof mode];
export const multiFactorAuthSetting = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type MultiFactorAuthSetting =
  (typeof multiFactorAuthSetting)[keyof typeof multiFactorAuthSetting];
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a `Carton` from a workflow request */
  cartonizeWorkflow: Maybe<Array<Maybe<Carton>>>;
  /** Creates `Carton's` from a workflow request */
  cartonsCreateWorkflow: Maybe<Array<Maybe<Carton>>>;
  /** Allows an API consumer to calculate a new `Classification` using the provided inputs. */
  classificationsCalculate: Array<Classification>;
  /** Create a new `CustomsSpec` object */
  customsSpecCreate: Array<Maybe<CustomsSpec>>;
  /** Enhance existing customs data into a new `CustomsSpec` object */
  customsSpecGenerate: Array<Maybe<CustomsSpec>>;
  /** Update an existing `CustomsSpec` object */
  customsSpecUpdate: Array<Maybe<CustomsSpec>>;
  deleteClassifySetting: Result;
  exchangeRateCreate: Maybe<ExchangeRate>;
  /** Create new `Items` */
  itemCreateWorkflow: Array<Item>;
  itemRestrictionApply: ItemRestrictionResult;
  /** Create new `Items`. */
  itemsCreate: Array<Item>;
  /** Allows an API consumer to calculate a new `LandedCost` quote */
  landedCostCalculateWorkflow: Maybe<Array<Maybe<LandedCost>>>;
  orderCreate: Maybe<Order>;
  orderLink: Maybe<Array<Maybe<Order>>>;
  orderUpdateAmountSubtotals: Array<Order>;
  /** Allows an API consumer to create a new `PackagingOption`s */
  packagingOptionCreate: Maybe<Array<Maybe<PackagingOption>>>;
  /** Allows an API consumer to delete an existing `PackagingOption` */
  packagingOptionDelete: Maybe<Result>;
  partyCreate: Party;
  partyCreateWorkflow: Array<Party>;
  partyScreen: Maybe<PartyScreening>;
  /** Create and sumbit a PDDP submission. */
  pddpSubmissionCreate: Array<PddpSubmission>;
  rootCreate: Maybe<Root>;
  shipmentCreate: Maybe<Shipment>;
  /** Allows an API consumer to calculate possible `ShipmentRating`s based on the organization's configured settings. */
  shipmentRatingCalculateWorkflow: Array<ShipmentRating>;
  /** Allows an API consumer to create a `shipmentRating`. */
  shipmentRatingCreateWorkflow: Maybe<ShipmentRating>;
  shipmentStatusUpdate: Maybe<Shipment>;
  taxIdCreate: Maybe<TaxId>;
  taxIdDelete: Maybe<Result>;
};

export type MutationCartonsCreateWorkflowArgs = {
  input: Array<CartonCreateWorkflowInput>;
};

export type MutationClassificationsCalculateArgs = {
  input: Array<ClassificationCalculateInput>;
};

export type MutationCustomsSpecCreateArgs = {
  input: Array<CustomsSpecCreateInput>;
};

export type MutationCustomsSpecGenerateArgs = {
  input: Array<CustomsSpecGenerateInput>;
};

export type MutationCustomsSpecUpdateArgs = {
  input: Array<CustomsSpecUpdateInput>;
};

export type MutationDeleteClassifySettingArgs = {
  id: Scalars['String'];
};

export type MutationExchangeRateCreateArgs = {
  input: ExchangeRateCreateInput;
};

export type MutationItemCreateWorkflowArgs = {
  input: Array<ItemCreateWorkflowInput>;
};

export type MutationItemRestrictionApplyArgs = {
  input: ItemRestrictionApplyInput;
};

export type MutationItemsCreateArgs = {
  input: Array<ItemInput>;
};

export type MutationLandedCostCalculateWorkflowArgs = {
  input: LandedCostWorkFlowInput;
};

export type MutationOrderCreateArgs = {
  input: OrderCreateInput;
};

export type MutationOrderLinkArgs = {
  input: Array<OrderLinkInput>;
};

export type MutationOrderUpdateAmountSubtotalsArgs = {
  input: Array<OrderUpdateAmountSubtotalsInput>;
};

export type MutationPackagingOptionCreateArgs = {
  input: Array<PackagingOptionCreateInput>;
};

export type MutationPackagingOptionDeleteArgs = {
  input: InputMaybe<Scalars['ID']>;
};

export type MutationPartyCreateArgs = {
  input: PartyCreateInput;
};

export type MutationPartyCreateWorkflowArgs = {
  input: Array<PartyCreateWorkflowInput>;
};

export type MutationPartyScreenArgs = {
  input: PartyScreenInput;
};

export type MutationPddpSubmissionCreateArgs = {
  input: PddpSubmissionCreateInput;
};

export type MutationShipmentCreateArgs = {
  input: ShipmentCreateInput;
};

export type MutationShipmentRatingCreateWorkflowArgs = {
  input: ShipmentRatingCreateWorkflowInput;
};

export type MutationShipmentStatusUpdateArgs = {
  input: ShipmentStatusUpdateInput;
};

export type MutationTaxIdCreateArgs = {
  input: InputMaybe<TaxIdInput>;
};

export type MutationTaxIdDeleteArgs = {
  id: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
};

/** Determines whether to send an email or not. */
export const notificationActiveStatus = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type NotificationActiveStatus =
  (typeof notificationActiveStatus)[keyof typeof notificationActiveStatus];
export type NotificationStatus = {
  __typename?: 'NotificationStatus';
  active: NotificationActiveStatus;
  sendCopiesTo: Array<Scalars['String']>;
};

/** Input type for order notifications */
export type NotificationStatusInput = {
  active?: InputMaybe<NotificationActiveStatus>;
  sendCopiesTo?: InputMaybe<Array<Scalars['String']>>;
};

export type OnlineStoreSettings = {
  __typename?: 'OnlineStoreSettings';
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  platform: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  /** The order number from the organizations system. */
  accountOrderNumber: Maybe<Scalars['String']>;
  /** The subtotal amounts that make up the `order` */
  amountSubtotals: AmountSubtotals;
  /** The cartons that are included in the `order`. */
  cartons: Maybe<Array<Carton>>;
  /** When this `Order` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Order` */
  createdBy: Scalars['ID'];
  /** The currency of the amount subtotals for the `order`. */
  currencyCode: CurrencyCode;
  /** Order ID, prefixed with `order_` */
  id: Scalars['ID'];
  /** The items that are included in the `order`. */
  items: Maybe<Array<Item>>;
  /** The landedCost calculations that are included in the `order`. */
  landedCosts: Maybe<Array<LandedCost>>;
  /** Indicates whether this Order was created in live or test mode */
  mode: Mode;
  /** The `organization` associated with the `order` */
  organization: Scalars['ID'];
  /** The relevant party contact information for the `Order`. */
  parties: Maybe<Array<Party>>;
  /** The reference information that is included in the `order`. */
  references: Maybe<Array<OrderReference>>;
  /** List of remittances */
  remittance: Maybe<Array<Maybe<Remittance>>>;
  root: Maybe<Root>;
  /** The shipmentRatings that are included in the `order`. */
  shipmentRatings: Maybe<Array<ShipmentRating>>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `Order` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `order`. */
  updatedBy: Scalars['ID'];
};

export type OrderCompleteInput = {
  /** The order number from the `organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the billing `party`. */
  billTo?: InputMaybe<Scalars['ID']>;
  currencyCode: CurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** The `id` of the destination `party` if different from the landedCost destination party. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
  /** The main tracking number for the `order`. */
  trackingNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Order Connection */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<OrderEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

export type OrderCreateInput = {
  /** The order number from the `organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the billing `party`. */
  billTo?: InputMaybe<Scalars['ID']>;
  currencyCode: CurrencyCode;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** The `id` of the destination `party` if different from the landedCost destination party. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
  /** The main tracking number for the `order`. */
  trackingNumbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Order Edge */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Order>;
};

export type OrderLinkInput = {
  /** The Zonos account id that the order belongs to */
  account?: InputMaybe<Scalars['String']>;
  /** The account's external order number */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The Zonos order id */
  orderId?: InputMaybe<Scalars['String']>;
};

/** Represents the different kinds of notifications Checkout can send to shoppers on a merchant's behalf. */
export type OrderNotifications = {
  __typename?: 'OrderNotifications';
  /** Controls abandoned cart recovery status and settings */
  abandonedCart: CheckoutSettingsAbandonedCart;
  /** Determines whether to send notifications when orders are cancelled */
  orderCancelled: NotificationStatus;
  /** Determines whether to send notifications when orders are placed */
  orderConfirmation: NotificationStatus;
  /** Determines whether to send notifications when orders are shipped */
  orderShipped: NotificationStatus;
};

/** Input type for configuring order notifications */
export type OrderNotificationsInput = {
  /** Controls abandoned cart recovery status and settings */
  abandonedCart?: InputMaybe<CheckoutSettingsAbandonedCartInput>;
  /** Determines whether to send notifications when orders are cancelled */
  orderCancelled?: InputMaybe<NotificationStatusInput>;
  /** Determines whether to send notifications when orders are placed */
  orderConfirmation?: InputMaybe<NotificationStatusInput>;
  /** Determines whether to send notifications when orders are shipped */
  orderShipped?: InputMaybe<NotificationStatusInput>;
};

/** Reference information provided by Zonos about the order. */
export type OrderReference = {
  __typename?: 'OrderReference';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export const orderTransactionBillingMethod = {
  BillingDgs: 'BILLING_DGS',
  Legacy: 'LEGACY',
} as const;

export type OrderTransactionBillingMethod =
  (typeof orderTransactionBillingMethod)[keyof typeof orderTransactionBillingMethod];
export type OrderUpdateAmountSubtotalsInput = {
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  orderId: Scalars['ID'];
};

export type OrdersFilter = {
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<DateTimeRange>;
  storeId?: InputMaybe<Scalars['String']>;
};

/** A `packagingOption` represents a box that can be used to ship an item */
export type PackagingOption = {
  __typename?: 'PackagingOption';
  /** When the `packagingOption` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `PackagingOption` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** PackagingOption ID, prefixed with `packagingOption_` */
  id: Scalars['ID'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** Whether the `packagingOption` is in test or live mode */
  mode: Mode;
  /** The name the `organization` is using for a particular `packagingOption` */
  name: Scalars['String'];
  /** The `organization` associated with the `packagingOption` */
  organization: Scalars['ID'];
  /** The source from where the `PackagingOption` was generated */
  source: PackagingOptionSource;
  /** The status of the `packagingOption` */
  status: PackagingOptionStatus;
  /** The packaging style (box, polybag, letter, etc.) */
  type: PackagingType;
  /** When the `packagingOption` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `PackagingOption`. */
  updatedBy: Scalars['ID'];
  /** The maximum weight of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

/** A type for paginating through multiple packaging options. */
export type PackagingOptionConnection = {
  __typename?: 'PackagingOptionConnection';
  /** A list of `edges`. */
  edges: Maybe<Array<Maybe<PackagingOptionEdge>>>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<PageInfo>;
  /** The total number of `PackagingOption` objects in the connection */
  totalCount: Scalars['Int'];
};

export type PackagingOptionCreateInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: PackagingType;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

/** A type used in pagination. */
export type PackagingOptionEdge = {
  __typename?: 'PackagingOptionEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<PackagingOption>;
};

export const packagingOptionSource = {
  Default: 'DEFAULT',
  Dynamic: 'DYNAMIC',
  Organization: 'ORGANIZATION',
} as const;

export type PackagingOptionSource =
  (typeof packagingOptionSource)[keyof typeof packagingOptionSource];
export const packagingOptionStatus = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type PackagingOptionStatus =
  (typeof packagingOptionStatus)[keyof typeof packagingOptionStatus];
export type PackagingOptionsFilter = {
  /** The `PackagingOptionSource` you are filtering by. */
  source?: InputMaybe<PackagingOptionSource>;
  /** The status you are filtering by. */
  status?: InputMaybe<PackagingOptionStatus>;
  /** The `PackagingType` you are filtering by. */
  type?: InputMaybe<PackagingType>;
};

export const packagingType = {
  Envelope: 'ENVELOPE',
  Flat: 'FLAT',
  Package: 'PACKAGE',
  Pak: 'PAK',
  Parcel: 'PARCEL',
  Polybag: 'POLYBAG',
  Tube: 'TUBE',
} as const;

export type PackagingType = (typeof packagingType)[keyof typeof packagingType];
export const packingPreference = {
  /** The item can be shipped with other items in a box */
  Consolidated: 'CONSOLIDATED',
  /** The item is shipped alone */
  ShipsAlone: 'SHIPS_ALONE',
} as const;

export type PackingPreference =
  (typeof packingPreference)[keyof typeof packingPreference];
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Field endCursor */
  endCursor: Maybe<Scalars['String']>;
  /** Field hasNextPage */
  hasNextPage: Scalars['Boolean'];
  /** Field hasPreviousPage */
  hasPreviousPage: Scalars['Boolean'];
  /** Field startCursor */
  startCursor: Maybe<Scalars['String']>;
};

export const partiesToTransaction = {
  NonRelated: 'NON_RELATED',
  Related: 'RELATED',
} as const;

export type PartiesToTransaction =
  (typeof partiesToTransaction)[keyof typeof partiesToTransaction];
export type Party = {
  __typename?: 'Party';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  id: Scalars['ID'];
  location: Maybe<Location>;
  mode: Mode;
  organization: Scalars['ID'];
  /** @deprecated Use `organization` instead */
  organizationId: Scalars['ID'];
  person: Maybe<Person>;
  type: Maybe<PartyType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type PartyCreateInput = {
  location?: InputMaybe<LocationCreateInput>;
  person?: InputMaybe<PersonCreateInput>;
  referenceId?: InputMaybe<Scalars['ID']>;
  type: PartyType;
};

export type PartyCreateWorkflowInput = {
  location?: InputMaybe<CreateLocationInput>;
  person?: InputMaybe<CreatePersonInput>;
  type: PartyType;
};

export type PartyFilter = {
  referenceId: Scalars['ID'];
};

export type PartyMetadata = {
  __typename?: 'PartyMetadata';
  key: Scalars['String'];
  value: Maybe<Scalars['String']>;
};

export type PartyMetadataInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type PartyScreenInput = {
  location?: InputMaybe<DeniedPartyLocationInput>;
  person?: InputMaybe<DeniedPartyPersonInput>;
};

export type PartyScreenMatch = {
  __typename?: 'PartyScreenMatch';
  administrativeAreaCode: Maybe<MatchType>;
  companyName: Maybe<MatchType>;
  countryCode: Maybe<MatchType>;
  deniedParty: Maybe<DeniedParty>;
  line1: Maybe<MatchType>;
  line2: Maybe<MatchType>;
  locality: Maybe<MatchType>;
  name: Maybe<MatchType>;
  postalCode: Maybe<MatchType>;
  scores: Maybe<ScreeningScores>;
};

export type PartyScreening = {
  __typename?: 'PartyScreening';
  /** Indicates the type of action required for the party screening */
  action: DeniedPartyAction;
  /** When this `deniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `deniedParty` */
  createdBy: Scalars['ID'];
  /** Denied Party Screening ID, prefixed with `deniedParty_`. */
  id: Scalars['ID'];
  /** The fields that had an match with a potential denied party */
  matches: Array<PartyScreenMatch>;
  mode: Mode;
  /** Party that was used to query the API */
  party: Party;
};

export type PartyScreeningConnection = {
  __typename?: 'PartyScreeningConnection';
  edges: Maybe<Array<Maybe<PartyScreeningEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type PartyScreeningEdge = {
  __typename?: 'PartyScreeningEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<PartyScreening>;
};

export type PartyScreeningFilter = {
  action?: InputMaybe<DeniedPartyAction>;
  country?: InputMaybe<CountryCode>;
};

export type PartyScreeningSetting = {
  __typename?: 'PartyScreeningSetting';
  /** Default value is EXACT_LOCALITY */
  addressMatchThreshold: Maybe<AddressMatchThreshold>;
  id: Scalars['ID'];
  /** Default value is 0.8 */
  nameMatchDecisionThreshold: Maybe<Scalars['Decimal']>;
};

export type PartyScreeningSettingInput = {
  addressMatchThreshold?: InputMaybe<AddressMatchThreshold>;
  nameMatchDecisionThreshold?: InputMaybe<Scalars['Decimal']>;
};

export const partyType = {
  Destination: 'DESTINATION',
  Origin: 'ORIGIN',
  Payee: 'PAYEE',
  Payor: 'PAYOR',
} as const;

export type PartyType = (typeof partyType)[keyof typeof partyType];
export type PaymentsSettings = {
  __typename?: 'PaymentsSettings';
  /** When these `paymentsSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `paymentsSettings`. */
  createdBy: Scalars['String'];
  /** The day of the week payouts occur. */
  dayOfWeek: Maybe<Day>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: Maybe<EndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays: Maybe<Scalars['Int']>;
  /** A unique identifier for the PaymentsSettings. */
  id: Scalars['String'];
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: Maybe<LcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Maybe<Scalars['Int']>;
  /** Specifies whether the PaymentsSettings is in live or test mode. */
  mode: Mode;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: Maybe<OrderTransactionBillingMethod>;
  /** The `Organization` associated with the PaymentsSettings. */
  organization: Maybe<Scalars['String']>;
  /** When these `PaymentsSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the PaymentsSettings. */
  updatedBy: Scalars['String'];
};

/** An amount type and value associated with a PDDP submission */
export type PddpAmount = {
  __typename?: 'PddpAmount';
  /** The monetary amount associated with the PDDP submission */
  amount: Scalars['Decimal'];
  /** The type of the amount associated with the PDDP submission */
  amountType: PddpAmountType;
  /** The currency used for the amount */
  currencyCode: CurrencyCode;
};

/** The type of an amount associated with a PDDP submission */
export const pddpAmountType = {
  /** The total of all products, shipping, duties, and taxes. Does not include surcharges. */
  FlcTotalCost: 'FLC_TOTAL_COST',
  /** The monetary value of the products shipped */
  InsuredValue: 'INSURED_VALUE',
  /** The cost of shipping the products */
  ShippingCost: 'SHIPPING_COST',
  /** The duty associated with the products shipped */
  ShoppingCartDuty: 'SHOPPING_CART_DUTY',
  /** The tax associated with the products shipped */
  ShoppingCartTax: 'SHOPPING_CART_TAX',
  /** The total monetary value of the products shipped */
  ShoppingCartValue: 'SHOPPING_CART_VALUE',
  /** Any additional surcharges associated with the products shipped */
  SurchargeValue: 'SURCHARGE_VALUE',
} as const;

export type PddpAmountType =
  (typeof pddpAmountType)[keyof typeof pddpAmountType];
/** A PDDP submission and related information */
export type PddpSubmission = Node & {
  __typename?: 'PddpSubmission';
  /** An array of associated PDDP Amounts */
  amounts: Array<PddpAmount>;
  /** The timestamp of when the submission was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the submission */
  createdBy: Scalars['ID'];
  /** The currency being used for the submission */
  destinationCurrency: CurrencyCode;
  /** The destination postal operator, UPU Code */
  destinationPost: Scalars['String'];
  /** The ID of the submission */
  id: Scalars['ID'];
  /** The ID of the `Order` this submission is associated with */
  orderId: Scalars['ID'];
  /** The origin postal operator, UPU Code */
  originPost: Scalars['String'];
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier: Scalars['String'];
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
  /** The tracking number of the submission */
  trackingNumber: Scalars['String'];
};

/** A collection of PDDP submissions and related information to aid in pagination */
export type PddpSubmissionConnection = {
  __typename?: 'PddpSubmissionConnection';
  /** A list of edges which contains the PDDP Submissions */
  edges: Array<PddpSubmissionEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<PageInfo>;
  /** The total number of PDDP Submissions in this connection */
  totalCount: Scalars['Int'];
};

/** The required information to create a PDDP submission */
export type PddpSubmissionCreateInput = {
  /** The ID of the associated IPC Retailer, if not given Zonos' ID will be used */
  ipcRetailerId?: InputMaybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** An edge in a connection that contains a cursor and the PDDP submission */
export type PddpSubmissionEdge = {
  __typename?: 'PddpSubmissionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission */
  node: Maybe<PddpSubmission>;
};

/** Set of filters to make a query for PDDP submissions. */
export type PddpSubmissionFilter = {
  /** A date range for wen the PDDP submission was created to filter by */
  createdDate?: InputMaybe<DateTimeRange>;
  /** The destination postal operator, UPU Code */
  destinationPost?: InputMaybe<Scalars['String']>;
  /** The ID of the `Order` the PDDP submission is associated with */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier?: InputMaybe<Scalars['String']>;
  /** The ID of the `Shipment` the PddpSubmission is tied to */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** The tracking number of the submission */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A log for a PDDP submission and related information */
export type PddpSubmissionLog = {
  __typename?: 'PddpSubmissionLog';
  /** The timestamp when the log was created */
  createdAt: Scalars['DateTime'];
  /** The User ID of the person who created the log */
  createdBy: Scalars['ID'];
  /** The ID of the log */
  id: Scalars['ID'];
  /** The ID of the PDDP submission associated with the log */
  pddpSubmission: Maybe<Scalars['ID']>;
  /** The request from the PDDP submission */
  request: Scalars['String'];
  /** The response from the PDDP submission */
  response: Scalars['String'];
  /** ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** A collection of PDDP submission logs and related information to aid in pagination */
export type PddpSubmissionLogConnection = {
  __typename?: 'PddpSubmissionLogConnection';
  /** A list of edges which contains the PDDP Submission Logs */
  edges: Array<PddpSubmissionLogEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<PageInfo>;
  /** The total number of PDDP Submission logs in this connection */
  totalCount: Scalars['Int'];
};

/** An edge in a connection that contains a cursor and the PDDP submission log */
export type PddpSubmissionLogEdge = {
  __typename?: 'PddpSubmissionLogEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission Log */
  node: Maybe<PddpSubmissionLog>;
};

/** Set of filters to make a query for PDDP submission logs. */
export type PddpSubmissionLogFilter = {
  /** A date range for when the PDDP submission was created to filter by */
  createdDate?: InputMaybe<DateTimeRange>;
  /** The ID of the associated `Order` */
  orderId?: InputMaybe<Scalars['String']>;
  /** The associated PDDP Submission */
  pddpSubmission?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  companyName: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Maybe<Scalars['String']>;
  metadata: Maybe<Array<Maybe<PartyMetadata>>>;
  mode: Mode;
  organization: Scalars['ID'];
  phone: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type PersonCreateInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<PartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export const propertyType = {
  Commercial: 'COMMERCIAL',
  Residental: 'RESIDENTAL',
  Residential: 'RESIDENTIAL',
} as const;

export type PropertyType = (typeof propertyType)[keyof typeof propertyType];
/**
 * interface Node {
 *     id: ID!
 * }
 */
export type Query = {
  __typename?: 'Query';
  /** Returns a `Carrier` resource by ID. */
  carrier: Maybe<Carrier>;
  /** Returns a `CarrierAccount` by ID */
  carrierAccount: Maybe<CarrierAccount>;
  /** Returns all the information tied to the `Carrier` that a specified organization uses. */
  carrierAccounts: Maybe<Array<Maybe<CarrierAccount>>>;
  /** Returns  a `Carrier` based on a `string` code. */
  carrierByCode: Maybe<Carrier>;
  /** Returns a list of `Carrier` resources by ID. */
  carriers: Maybe<Array<Maybe<Carrier>>>;
  /** Returns a `Carton` resource by `ID` */
  carton: Maybe<Carton>;
  /** Returns a list of `Carton` objects that apply to a `root` */
  cartons: Maybe<Array<Maybe<Carton>>>;
  /** Returns a `Classification` resource by ID. */
  classification: Maybe<Classification>;
  /** Returns a list of `Classification` resources. */
  classifications: Maybe<ClassificationConnection>;
  /** Returns data about what Classify supports. */
  classifySupportedData: ClassifySupportedData;
  currencyFormat: Maybe<CurrencyFormat>;
  /** Retrieve a `CustomsSpec` by ID */
  customsSpec: Maybe<CustomsSpec>;
  /** Retrieve a list of `CustomsSpec` objects */
  customsSpecs: Maybe<CustomsSpecConnection>;
  exchangeRate: Maybe<ExchangeRate>;
  /** Returns a `FulfillmentCenter` object by ID. */
  fulfillmentCenter: Maybe<FulfillmentCenter>;
  /** Returns a list of `FulfillmentCenter` objects for an `Organization` */
  fulfillmentCenters: Maybe<Array<Maybe<FulfillmentCenter>>>;
  getPerson: Maybe<Person>;
  /** Returns an `Item` resource by ID. */
  item: Maybe<Item>;
  itemRestrictionResult: Maybe<ItemRestrictionResult>;
  /** Returns a list of `Item` resources. */
  items: Maybe<ItemConnection>;
  label: Maybe<Label>;
  /** Return a list of LabelRequestLogs by labelId and/or shipmentId */
  labelRequestLogs: Maybe<LabelRequestLogConnection>;
  labels: Maybe<LabelConnection>;
  /** Returns a `LandedCost` resource by `ID` */
  landedCost: Maybe<LandedCost>;
  /** Returns a list of `LandedCost` resources */
  landedCosts: Maybe<LandedCostConnection>;
  location: Maybe<Location>;
  order: Maybe<Order>;
  orders: Maybe<OrderConnection>;
  /** Returns a `PackagingOption` resource by `ID` */
  packagingOption: Maybe<PackagingOption>;
  /**
   * Deprecated method to return a list of `PackagingOption` objects that apply to an `organization`, use packagingOptionsConnection instead
   * @deprecated use packagingOptionsConnection instead
   */
  packagingOptions: Maybe<Array<Maybe<PackagingOption>>>;
  /** Returns a list of `PackagingOption` objects that apply to an `organization` */
  packagingOptionsConnection: Maybe<PackagingOptionConnection>;
  parties: Maybe<Array<Maybe<Party>>>;
  partiesFindAllById: Maybe<Array<Maybe<Party>>>;
  party: Maybe<Party>;
  partyScreening: Maybe<PartyScreening>;
  partyScreenings: Maybe<PartyScreeningConnection>;
  /** Return a PDDP submission by an ID. */
  pddpSubmission: Maybe<PddpSubmission>;
  /** Return a PDDP submission log by an ID. */
  pddpSubmissionLog: Maybe<PddpSubmissionLog>;
  /** Returns a paginated list of PDDP submissions logs. */
  pddpSubmissionLogs: Maybe<PddpSubmissionLogConnection>;
  /** Returns a paginated list of PDDP submissions. */
  pddpSubmissions: Maybe<PddpSubmissionConnection>;
  /** Returns a `ServiceLevel` resource by ID. */
  serviceLevel: Maybe<ServiceLevel>;
  /** Returns a `ServiceLevelArea` resource by ID. */
  serviceLevelArea: Maybe<ServiceLevelArea>;
  /** Retreive the ServiceLevelAreas for a giving ServiceLevel optionally filtering by a destination location */
  serviceLevelAreas: Maybe<Array<Maybe<ServiceLevelArea>>>;
  /** Returns a `ServiceLevelRateChart` by ID. */
  serviceLevelRateChart: Maybe<ServiceLevelRateChart>;
  /** Returns a list of `ServiceLevelRateChart` objects that apply to a `ServiceLevel` */
  serviceLevelRateCharts: Maybe<Array<Maybe<ServiceLevelRateChart>>>;
  /** Returns a list of `ServiceLevel` resources for an organization. */
  serviceLevels: Maybe<Array<Maybe<ServiceLevel>>>;
  shipment: Maybe<Shipment>;
  /** Returns a `ShipmentRating` resource by ID. */
  shipmentRating: Maybe<ShipmentRating>;
  /** Returns a list  of `ShipmentRating` resources with the given filters. */
  shipmentRatings: Maybe<Array<Maybe<ShipmentRating>>>;
  shipments: Maybe<ShipmentConnection>;
  /** Returns a `ShippingProfile` by ID. */
  shippingProfile: Maybe<ShippingProfile>;
  /** Returns a `ShippingProfileRateChart` by ID */
  shippingProfileRateChart: Maybe<ShippingProfileRateChart>;
  /** Returns a list of `ShippingProfileRateChart` objects that apply to a `ShippingProfile` */
  shippingProfileRateCharts: Maybe<Array<Maybe<ShippingProfileRateChart>>>;
  /** Returns a list of `ShippingProfile` objects that apply to an `Organization`. */
  shippingProfiles: Maybe<Array<Maybe<ShippingProfile>>>;
  /** Returns a Shipping Store Settings resource by store id. */
  shippingStoreSettings: Maybe<ShippingStoreSettings>;
  /** Returns a `ShippingZone` resource by ID. */
  shippingZone: Maybe<ShippingZone>;
  /** Returns a list of `ShippingZone` resources for an organization. */
  shippingZones: Maybe<Array<Maybe<ShippingZone>>>;
  taxIds: Maybe<Array<Maybe<TaxId>>>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierAccountArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierAccountsArgs = {
  filter: InputMaybe<CarrierAccountsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarrierByCodeArgs = {
  code: Scalars['String'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCarriersArgs = {
  filter: InputMaybe<CarriersFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCartonArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCartonsArgs = {
  filter: InputMaybe<CartonsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryClassificationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ClassificationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCurrencyFormatArgs = {
  input: CurrencyCode;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsSpecArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryCustomsSpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CustomsSpecFilter>;
  first: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryExchangeRateArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryFulfillmentCenterArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryGetPersonArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemRestrictionResultArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelRequestLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LabelRequestLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLabelsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LabelFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLandedCostArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLandedCostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<LandedCostFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryLocationArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryOrderArgs = {
  orderId: Scalars['String'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<OrdersFilter>;
  first: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionsArgs = {
  filter: InputMaybe<PackagingOptionsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPackagingOptionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PackagingOptionsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartiesArgs = {
  input: InputMaybe<PartyFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartiesFindAllByIdArgs = {
  input: Array<Scalars['ID']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyScreeningArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPartyScreeningsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PartyScreeningFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionLogArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PddpSubmissionLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryPddpSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<PddpSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelAreaArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelAreasArgs = {
  filter: InputMaybe<ServiceLevelAreasFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelRateChartArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelRateChartsArgs = {
  filter: InputMaybe<ServiceLevelRateChartsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryServiceLevelsArgs = {
  carrier: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ServiceLevelFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentRatingArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentRatingsArgs = {
  filter: InputMaybe<ShipmentRatingsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShipmentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ShipmentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileRateChartArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfileRateChartsArgs = {
  filter: InputMaybe<ShippingProfileRateChartsFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingProfilesArgs = {
  filter: InputMaybe<ShippingProfilesFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingStoreSettingsArgs = {
  storeId: Scalars['Int'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryShippingZonesArgs = {
  filter: InputMaybe<ShippingZonesFilter>;
};

/**
 * interface Node {
 *     id: ID!
 * }
 */
export type QueryTaxIdsArgs = {
  filter: InputMaybe<TaxIdFilterInput>;
};

export type QueueDataMigrationInput = {
  /** The area of data to migrate, such as Shipping or Catalog. If no value is provided, all areas will be queued. */
  dataArea?: InputMaybe<Scalars['String']>;
  /** The 'storeId' to be migrated. */
  storeId: Scalars['Int'];
};

export type Remittance = {
  __typename?: 'Remittance';
  amount: Scalars['Decimal'];
  description: Scalars['String'];
  note: Scalars['String'];
};

/**
 * A `RestrictedItem represent an item that has been restricted.
 * 3 ways an item can be restricted: via catalog's restricted countries, a rule, or itemRestriction API.
 */
export type RestrictedItem = {
  __typename?: 'RestrictedItem';
  /** `CatalogItem` if the restriction was due to catalog  */
  catalogItem: Maybe<CatalogItem>;
  /** `RestrictedItem` ID, prefixed with `restricted_item_`. */
  id: Scalars['ID'];
  /** `Item` that was restricted. */
  item: Item;
  /** `itemRestrictions` if the restriction was due to restricted item result  */
  itemRestrictions: Maybe<ItemRestrictionsResult>;
  /** the reason this item was restricted */
  reason: Scalars['String'];
  /** `Rule` if the restriction was due to a rule  */
  rule: Maybe<Rule>;
};

export const result = {
  Failure: 'FAILURE',
  Success: 'SUCCESS',
} as const;

export type Result = (typeof result)[keyof typeof result];
/** A `Root` serves as a wrapper for various resources, such as `LandedCost` and `ShipmentRating` */
export type Root = {
  __typename?: 'Root';
  cartons: Maybe<Array<Maybe<Carton>>>;
  exchangeRates: Array<ExchangeRate>;
  /** `Root` ID, prefixed with `root_`. */
  id: Scalars['ID'];
  items: Maybe<Array<Maybe<Item>>>;
  landedCosts: Maybe<Array<Maybe<LandedCost>>>;
  /** The `Order` placed between the root `parties`. */
  order: Maybe<Order>;
  parties: Maybe<Array<Maybe<Party>>>;
  restrictedItems: Maybe<Array<Maybe<RestrictedItem>>>;
  shipmentRatings: Maybe<Array<Maybe<ShipmentRating>>>;
};

/** Root Connection */
export type RootConnection = {
  __typename?: 'RootConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<RootEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** Root Edge */
export type RootEdge = {
  __typename?: 'RootEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Root>;
};

export type RootsFilter = {
  /** Return `LandedCost` resources created after a given date */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
};

export type Rule = {
  __typename?: 'Rule';
  id: Scalars['ID'];
};

export type ScreenExistingPartyInput = {
  partyId: Scalars['ID'];
};

export type ScreenPartyInput = {
  location?: InputMaybe<DeniedPartyLocationInput>;
  person?: InputMaybe<DeniedPartyPersonInput>;
};

export type ScreeningScores = {
  __typename?: 'ScreeningScores';
  location: Maybe<Scalars['Decimal']>;
  name: Maybe<Scalars['Decimal']>;
  overall: Maybe<Scalars['Decimal']>;
};

/**
 * A `ServiceLevel` is a predefined service provided by a `Carrier` to a given country or region.
 * `ServiceLevel` will impact time in transit and the associated shipment rating.
 * `ServiceLevel` eligibility may be impacted by product attributes, such as value and dimensions.
 */
export type ServiceLevel = {
  __typename?: 'ServiceLevel';
  /** Enumerated value that specifies whether a ServiceLevel is available to all customers or is specifically contracted */
  availability: ServiceLevelAvailability;
  /** The `Carrier` associated with ServiceLevel. */
  carrier: Carrier;
  /** The code for the ServiceLevel as defined by the external carrier API */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode: Maybe<Scalars['String']>;
  /** The enumerated value of ServiceLevel options that can be sent in the API. */
  code: Scalars['String'];
  /** The list of restrictions that exist around countries, weights, dims, and prices for a ServiceLevel. */
  countryConstraints: Maybe<Array<CountryConstraint>>;
  /** When this `serviceLevel` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevel. */
  createdBy: Scalars['ID'];
  /** The method of delivery that indicates how the clearance is processed with this ServiceLevel. */
  deliveryType: Maybe<DeliveryType>;
  /** A unique identifier for the ServiceLevel. */
  id: Scalars['ID'];
  /** The ServiceLevel display name as prescribed by the `Carrier`. */
  name: Scalars['String'];
  parties: Maybe<Array<Maybe<Party>>>;
  /** Transit Time breakdown that applies to the ServiceLevel. */
  transitTime: Maybe<TransitTime>;
  /** When this ServiceLevel was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevel. */
  updatedBy: Scalars['ID'];
};

/**
 * A `serviceLevelArea` object is a grouping of countries, regions, or zip codes that can be associated with a `serviceLevel`.
 * Usage of this will only happen in conjunction with rate charts.
 */
export type ServiceLevelArea = {
  __typename?: 'ServiceLevelArea';
  /** The search pattern of an administrative area or region code of the country. */
  administrativeAreaCodePattern: Maybe<Scalars['String']>;
  /** The search pattern of the country code. */
  countryCodePattern: Maybe<Scalars['String']>;
  /** When the ServiceLevelArea was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelArea. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the ServiceLevelArea. */
  id: Scalars['ID'];
  /** Specifies whether the ServiceLevelArea is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the ServiceLevelArea. */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area. */
  postalCodePattern: Maybe<Scalars['String']>;
  /** The `ServiceLevel` that the area is being used for. */
  serviceLevel: ServiceLevel;
  /** When the ServiceLevelArea was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelArea. */
  updatedBy: Scalars['ID'];
};

/** Filter the areas that apply to a service level down to a single country, administrative area and postal code */
export type ServiceLevelAreasFilter = {
  /** A single administrative area code if one applies to this location */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The country code for the location */
  countryCode?: InputMaybe<CountryCode>;
  /** A single postal code if one applies to the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` */
  serviceLevel: Scalars['ID'];
};

export const serviceLevelAvailability = {
  Contracted: 'CONTRACTED',
  Disabled: 'DISABLED',
  General: 'GENERAL',
} as const;

export type ServiceLevelAvailability =
  (typeof serviceLevelAvailability)[keyof typeof serviceLevelAvailability];
/** ServiceLevel Connection */
export type ServiceLevelConnection = {
  __typename?: 'ServiceLevelConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ServiceLevelEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** ServiceLevel Edge */
export type ServiceLevelEdge = {
  __typename?: 'ServiceLevelEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ServiceLevel>;
};

export type ServiceLevelFilter = {
  /** The carrier the service level belongs to. */
  carrier?: InputMaybe<Scalars['String']>;
  /** The Zonos specific human readable service level code */
  code?: InputMaybe<Scalars['String']>;
};

/**
 * A ServiceLevelRateChart would apply to a specific service level.
 * The ServiceLevelRateChart would be used before a external carrier API.
 */
export type ServiceLevelRateChart = {
  __typename?: 'ServiceLevelRateChart';
  /** When this ServiceLevelRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelRateChart. */
  createdBy: Scalars['ID'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<CountryCode>;
  /** A unique identifier for the ServiceLevelRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ServiceLevelRateChart. */
  locations: Maybe<Array<ShippingRateLocation>>;
  /** Specifies whether the ServiceLevelRateChart is in live or test mode. */
  mode: Mode;
  /** The specific rate values that apply to the given ServiceLevelRateChart. */
  rates: Array<ShippingRate>;
  /** The `ServiceLevel` associated with the ServiceLevelRateChart. */
  serviceLevel: ServiceLevel;
  /** When this ServiceLevelRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelRateChart. */
  updatedBy: Scalars['ID'];
};

export type ServiceLevelRateChartsFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

export type Shipment = Node & {
  __typename?: 'Shipment';
  /** The date and time this Shipment was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Shipment */
  createdBy: Scalars['ID'];
  customsSpec: Maybe<CustomsSpec>;
  /** A unique identifier for the shipment */
  id: Scalars['ID'];
  /** The `Order` associated with this Shipment */
  order: Order;
  /** All of the `Party`s involved with this Shipment */
  parties: Array<Party>;
  /** The `ServiceLevel` utilized by the `Carrier` for this Shipment */
  serviceLevel: ServiceLevel;
  /** A list of `ShipmentCarton`s related to this Shipment */
  shipmentCartons: Array<ShipmentCarton>;
  /** The status of the shipment */
  status: Maybe<ShipmentStatusType>;
  /** A list of statuses of the shipment */
  statusTransitions: Array<ShipmentStatusTransition>;
  /** An optional master tracking */
  tracking: Maybe<Tracking>;
};

export const shipmentAmountType = {
  Buffer: 'BUFFER',
  Discount: 'DISCOUNT',
  FuelSurcharge: 'FUEL_SURCHARGE',
  Insurance: 'INSURANCE',
  PublishedRate: 'PUBLISHED_RATE',
  Surcharge: 'SURCHARGE',
} as const;

export type ShipmentAmountType =
  (typeof shipmentAmountType)[keyof typeof shipmentAmountType];
export type ShipmentCarton = Node & {
  __typename?: 'ShipmentCarton';
  /** The `Carton` related to this ShipmentCarton */
  carton: Carton;
  /** A unique identifier for this ShipmentCarton */
  id: Scalars['ID'];
  /** The `Tracking` related to this ShipmentCarton */
  tracking: Maybe<Tracking>;
};

export type ShipmentCartonInput = {
  /** The measurement units of the height, length and width for the `ShipmentCarton`'s `Carton` */
  dimensionalUnit: DimensionalUnitCode;
  /** The numeric height of the `ShipmentCarton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The list of `Item`s included in this `ShipmentCarton` */
  items: Array<ShipmentCartonItemInput>;
  /** The numeric length of the `ShipmentCarton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The tracking number for this specific Carton, if different than the tracking number for the entire `Shipment` */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** The weight of the `ShipmentCarton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShipmentCarton`. */
  weightUnit: WeightUnitCode;
  /** The numeric width of the `ShipmentCarton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ShipmentCartonItemInput = {
  /** The reference to the item included in this `ShipmentCarton`: SKU, Product ID, or `Item` ID */
  itemReference: Scalars['String'];
  /** The quantity of the `Item` in this `ShipmentCarton` */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Maybe<Array<Maybe<ShipmentEdge>>>;
  pageInfo: Maybe<PageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ShipmentCreateInput = {
  /** A flag to say if a `CustomSpec` should be generated from this Shipment */
  generateCustoms: Scalars['Boolean'];
  /** A flag to say if a `Label` should be generated from this Shipment */
  generateLabel: Scalars['Boolean'];
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<LabelSpecInput>;
  /** The ID of the `Order` this Shipment belongs to */
  orderId: Scalars['ID'];
  /** The list of `Party`s related to this Shipment, if different than all the parties on the `Order` */
  parties?: InputMaybe<Array<Scalars['ID']>>;
  /** The `ServiceLevel` code or id that the shipment is shipping with, if different that the service level on the `Order` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** A list of details about the `ShipmentCarton`s for this Shipment, if the items and packaging options are different than those on the `Order` */
  shipmentCartons?: InputMaybe<Array<ShipmentCartonInput>>;
  /** The optional tracking number related to the shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Shipment>;
};

export type ShipmentFilter = {
  /** The ID of the `Order` this Shipment belongs to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** A `ServiceLevel` ID that is used for a Shipment */
  serviceLevelId?: InputMaybe<Scalars['String']>;
  /** A date range to filter Shipment objects by their ship date */
  shipDate?: InputMaybe<DateTimeRange>;
  /** The tracking number associated with the Shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A Shipment rating quote that can be displayed. */
export type ShipmentRating = {
  __typename?: 'ShipmentRating';
  /** The quoted amount for the ShipmentRating. */
  amount: Scalars['Decimal'];
  /** Subtotal amounts of how the ShipmentRating amount was calculated. */
  amountSubtotals: ShipmentRatingSubtotals;
  /** When this ShipmentRating was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShipmentRating */
  createdBy: Scalars['ID'];
  /** The currency this ShipmentRating price amount is in. */
  currencyCode: CurrencyCode;
  /** Breakdown of the details returned from the carrier. */
  details: Maybe<Array<ShipmentRatingDetail>>;
  /** The customer facing display name of the ShipmentRating. */
  displayName: Scalars['String'];
  /** A unique identifier for the ShipmentRating. */
  id: Scalars['ID'];
  /** The ISO-8601 timestamp of when the delivery will be delivered */
  maxTransitAt: Maybe<Scalars['DateTime']>;
  /** The ISO-8601 timestamp of when the delivery could first be delivered */
  minTransitAt: Maybe<Scalars['DateTime']>;
  /**
   * For shipments that contain multiple fulfillment warehouses the multipleShipFromRatings will contain the individual `ShipmentRating` calculations.
   * The aggregated totals will be reflected on the parent object. In these cases the shipFrom location will be null.
   */
  multipleShipFromRatings: Maybe<Array<Maybe<ShipmentRating>>>;
  /** The `Organization` associated with the ShipmentRating */
  organization: Scalars['ID'];
  /** The `ServiceLevel` code associated with the ShipmentRating. */
  serviceLevelCode: Scalars['String'];
  /** The `Location` associated with the origin of the shipment. */
  shipFrom: Maybe<Location>;
  /** Specifies the `Carton`'s destination. */
  shipTo: Maybe<Location>;
  /** The `Carton` data included in the ShipmentRating. */
  shipmentRatingCartons: Array<ShipmentRatingCarton>;
  /** The `ShippingProfile` associated with the ShipmentRating. */
  shippingProfile: Maybe<ShippingProfile>;
  /** When this ShipmentRating was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShipmentRating. */
  updatedBy: Scalars['ID'];
};

/** The Carton details containing the package dimensions and items included in the `ShipmentRating` */
export type ShipmentRatingCarton = {
  __typename?: 'ShipmentRatingCarton';
  /** The monetary amount to insure a `Carton` for to account for unexpected incidents. */
  amountInsured: Scalars['Decimal'];
  /** The `Carton` associated with the ShipmentRatingCarton */
  carton: Carton;
  /** The weight the carrier is charging for this carton. This could be actual or dimensional weight of the carton. */
  chargeableWeight: Maybe<Scalars['Decimal']>;
  /** The `dimensionalWeight` factor used to determine the `dimensionalWeight`. */
  dimensionalFactor: Maybe<Scalars['Int']>;
  /** The calculated `dimensionalWeight` of the carton. */
  dimensionalWeight: Maybe<Scalars['Decimal']>;
};

/** Input to create a non-calculated shipmentRating. */
export type ShipmentRatingCreateWorkflowInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: CurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
};

/** A surcharge or discount breakdown provided by the carrier. */
export type ShipmentRatingDetail = {
  __typename?: 'ShipmentRatingDetail';
  /** Amount for each charge as defined by the `Carrier`. */
  amount: Scalars['Decimal'];
  /** Unique identifier that will be tied to each fee that is charged by the carrier for the `ShipmentRating`. */
  carrierCode: Scalars['String'];
  /** The type of fee that is being broken down as part of the `ShipmentRating`. */
  type: ShipmentAmountType;
};

/** Subtotal amounts of how the `ShipmentRating` amount was calculated */
export type ShipmentRatingSubtotals = {
  __typename?: 'ShipmentRatingSubtotals';
  /** Amount charged for the fuel surcharge by the `Carrier`. */
  fuelSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost to insure items that is charged by the `Carrier`. */
  insuranceCost: Maybe<Scalars['Decimal']>;
  /** The sum of any other surcharges that are not individually broken down by the `Carrier` (residential falls into this bucket). */
  otherSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost of shipping as defined by the `Carrier`. */
  shipping: Scalars['Decimal'];
};

export type ShipmentRatingsFilter = {
  /** A two-letter ISO country code */
  countryCode?: InputMaybe<CountryCode>;
  /** The ID of the `ServiceLevel` the `ShipmentRating` was calculated from */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

export type ShipmentStatusTransition = {
  __typename?: 'ShipmentStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Shipment` at the associated DateTime */
  status: ShipmentStatusType;
};

export const shipmentStatusType = {
  /** Default status */
  Created: 'CREATED',
  /** Shipment was canceled */
  Voided: 'VOIDED',
} as const;

export type ShipmentStatusType =
  (typeof shipmentStatusType)[keyof typeof shipmentStatusType];
export type ShipmentStatusUpdateInput = {
  /** Optional note about the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The shipment which status should be updated */
  shipment: Scalars['ID'];
  /** The new status type the shipment should be updated to */
  status: ShipmentStatusType;
};

/**
 * A ShippingProfile object is used to map a `ServiceLevel` to an `Organization`. Allowing the Organization to adjust
 * the display name and apply rate charts to the service level.
 */
export type ShippingProfile = {
  __typename?: 'ShippingProfile';
  /** When this ShippingProfile was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfile. */
  createdBy: Scalars['ID'];
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode: Maybe<Scalars['String']>;
  /** A unique identifier for the ShippingProfile. */
  id: Scalars['ID'];
  /** The method to use for the landed cost calculation for the ShippingProfile. */
  landedCostMethod: Maybe<LandedCostMethod>;
  /** Specifies whether the ShippingProfile is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name of the ShippingProfile. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingProfile. */
  organization: Scalars['ID'];
  /** The `ServiceLevel` associated with the ShippingProfile. */
  serviceLevel: ServiceLevel;
  /** The shipping percent increase */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** The `ShippingProfileRateCharts` that apply to this profile. */
  shippingRates: Maybe<Array<ShippingProfileRateChart>>;
  /** The shipping value increase */
  shippingValueIncrease: Maybe<Scalars['Decimal']>;
  /** `TransitTime` breakdown that applies to the ShippingProfile. */
  transitTime: Maybe<TransitTime>;
  /** When this ShippingProfile was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfile. */
  updatedBy: Scalars['ID'];
};

/**
 * A `ShippingProfileRateChart` would apply to a specific shipping profile.
 * The `ShippingProfileRateChart` would be used before any `ServiceLevelRateChart` as well as any external carrier API.
 */
export type ShippingProfileRateChart = {
  __typename?: 'ShippingProfileRateChart';
  /** When this ShippingProfileRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfileRateChart. */
  createdBy: Scalars['ID'];
  /** The dimensional weight factor to be used for the supplied rates.  */
  dimensionalWeightFactor: Scalars['Decimal'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<CountryCode>;
  /** A unique identifier for the ShippingProfileRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ShippingProfileRateChart. */
  locations: Maybe<Array<ShippingRateLocation>>;
  /** Specifies whether the ShippingProfileRateChart is in live or test mode. */
  mode: Mode;
  /** The specific rate values that apply to the given ShippingProfileRateChart. */
  rates: Array<ShippingRate>;
  /** The `ShippingProfile` associated with the ShippingProfileRateChart. */
  shippingProfile: ShippingProfile;
  /** When this ShippingProfileRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfileRateChart. */
  updatedBy: Scalars['ID'];
};

export type ShippingProfileRateChartsFilter = {
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
};

export type ShippingProfilesFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

/** A Shipping rate that is based on either weight our currency amount */
export type ShippingRate = ShippingRateAmount | ShippingRateWeight;

/** A `ShippingRateAmount` defines the range in a specific currency unit that applies to a given rate amount */
export type ShippingRateAmount = {
  __typename?: 'ShippingRateAmount';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: CurrencyCode;
  /** The inclusive maximum amount that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum amount that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The `currencyCode` that defines the min/max values. */
  unit: CurrencyCode;
};

/** Specify how the rate amount would be applied. */
export const shippingRateCalculation = {
  /** The rate uses the amount as it was entered. */
  Fixed: 'FIXED',
  /** The rate multiplies the amount by the units. */
  PerUnit: 'PER_UNIT',
} as const;

export type ShippingRateCalculation =
  (typeof shippingRateCalculation)[keyof typeof shippingRateCalculation];
/** A `ShippingRateLocation` is used to limit the destination that would apply to a `ShippingProfileRateChart`. */
export type ShippingRateLocation = {
  __typename?: 'ShippingRateLocation';
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** A single country code if one applies to this location. */
  countryCode: Maybe<CountryCode>;
  /** A pre-defined area or carrier zone that applies to the rate. */
  serviceLevelArea: Maybe<ServiceLevelArea>;
};

/** A `ShippingRateWeight` defines the range in a specific weight unit that applies to a given rate amount */
export type ShippingRateWeight = {
  __typename?: 'ShippingRateWeight';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: CurrencyCode;
  /** The inclusive maximum weight that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum weight that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShippingRate`. */
  unit: WeightUnitCode;
};

export type ShippingSettings = {
  __typename?: 'ShippingSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultWeightMultiplier: Scalars['Decimal'];
  id: Scalars['String'];
  mode: Mode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

/** A `ShippingStoreSettings` object represents store-specific settings for shipping related processes. */
export type ShippingStoreSettings = {
  __typename?: 'ShippingStoreSettings';
  /** An additional fee that can be added to `ShippingRate`s */
  additionalFee: Maybe<Scalars['Decimal']>;
  /** When ShippingStoreSettings was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingStoreSettings. */
  createdBy: Scalars['ID'];
  /** Display transit time inline */
  displayTransitTimeInline: Maybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer: Maybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent: Maybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays: Maybe<Scalars['Int']>;
  /** A unique identifier for the ShippingStoreSettings. */
  id: Scalars['ID'];
  /** Landed cost countries */
  landedCostCountries: Maybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay: Maybe<Scalars['String']>;
  /** Pickup time */
  pickupTime: Maybe<Scalars['DateTime']>;
  /** Shipping percent increase */
  shippingPercentIncrease: Maybe<Scalars['Decimal']>;
  /** The ID of the store these settings apply to */
  storeId: Scalars['Int'];
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber: Maybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType: Maybe<Scalars['String']>;
  /** When ShippingStoreSettings was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingStoreSettings. */
  updatedBy: Scalars['ID'];
};

/** A `ShippingZone` is a group of countries that will be serviced by a `FulfillmentCenter`. */
export type ShippingZone = {
  __typename?: 'ShippingZone';
  /** A list of two-letter ISO country codes that are supported by this ShippingZone. */
  countryCodes: Maybe<Array<CountryCode>>;
  /** When the ShippingZone was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingZone. */
  createdBy: Scalars['ID'];
  /** The default `FulfillmentCenter` that services the ShippingZone. */
  fulfillmentCenter: Maybe<FulfillmentCenter>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration: ZoneLandedCostConfiguration;
  /** Specifies whether the ShippingZone is in live or test mode. */
  mode: Mode;
  /** The humanly-memorable display name for the ShippingZone. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingZone. */
  organization: Scalars['ID'];
  /** A list of shipping profiles associated with the ShippingZone. */
  profiles: Maybe<Array<ShippingProfile>>;
  /** When the ShippingZone was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingZone. */
  updatedBy: Scalars['ID'];
};

export type ShippingZonesFilter = {
  /** A two-letter ISO country code. */
  countryCode: CountryCode;
};

export type StageUploadResult = {
  __typename?: 'StageUploadResult';
  /** ID of the `StagedUploadResult`. */
  id: Scalars['ID'];
  /** URL designating where to upload the resource. */
  url: Scalars['String'];
};

/** Represents a tax amount on a `LandedCost` quote */
export type Tax = {
  __typename?: 'Tax';
  /** `Tax` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency: CurrencyCode;
  /** Currency the `Tax` amount is in. */
  currencyCode: CurrencyCode;
  /** Human-readable description of this `Tax`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts */
  exchangeRate: Maybe<ExchangeRate>;
  /** Human readable formula indicating how this tax was calculated */
  formula: Scalars['String'];
  /** `Item` that this tax amount applies to */
  item: Maybe<Item>;
  /** Additional note for this `Tax`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this tax amount */
  payee: Maybe<Party>;
  /** `Party` responsible for rendering payment on this tax amount */
  payor: Maybe<Party>;
  /** Type of `Tax`. */
  type: LandedCostFeeType;
};

export type TaxId = {
  __typename?: 'TaxId';
  administrativeAreaCode: Maybe<Scalars['String']>;
  allowLowValueOrders: Maybe<Scalars['Boolean']>;
  countryCode: CountryCode;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['ID']>;
  effectiveAt: Maybe<Scalars['DateTime']>;
  expiresAt: Maybe<Scalars['DateTime']>;
  id: Maybe<Scalars['ID']>;
  method: TaxMethodType;
  mode: Maybe<Mode>;
  organization: Maybe<Scalars['ID']>;
  sendEmails: Maybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: TaxIdType;
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['ID']>;
};

export type TaxIdFilterInput = {
  administrativeAreaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  taxIdType?: InputMaybe<Array<InputMaybe<TaxIdType>>>;
};

export type TaxIdInput = {
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  allowLowValueOrders?: InputMaybe<Scalars['Boolean']>;
  countryCode: CountryCode;
  effectiveAt?: InputMaybe<Scalars['DateTime']>;
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  method: TaxMethodType;
  sendEmails?: InputMaybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: TaxIdType;
};

export const taxIdType = {
  /** Brazil CNPJ/CPF Federal Tax */
  Cnp: 'CNP',
  /** Deferment account duties only */
  Dan: 'DAN',
  /** Deferment account duties, taxes, and fees only */
  Dtf: 'DTF',
  /** Data Universal Numbering System */
  Dun: 'DUN',
  /** Employer Identification Number */
  Ein: 'EIN',
  /** Economic Operator registration ID */
  Eori: 'EORI',
  /** Federal Tax ID */
  Fed: 'FED',
  /** Free Trade Zone ID */
  Ftz: 'FTZ',
  /** VAT registration */
  Gst: 'GST',
  /** GB VAT (foreign) registration */
  Hmrc: 'HMRC',
  /** Import One Stop Shop */
  Ioss: 'IOSS',
  /** Oversees Registered Supplier */
  Lvg: 'LVG',
  /** AUSid GST registration */
  Osr: 'OSR',
  /** Social Security Number */
  Ssn: 'SSN',
  /** #State Tax ID */
  Sta: 'STA',
  /** Deferment account tax only */
  Tan: 'TAN',
  /** VAT on E-Commerce */
  Voec: 'VOEC',
} as const;

export type TaxIdType = (typeof taxIdType)[keyof typeof taxIdType];
export const taxMethodType = {
  Consignment: 'CONSIGNMENT',
  Default: 'DEFAULT',
} as const;

export type TaxMethodType = (typeof taxMethodType)[keyof typeof taxMethodType];
export type Tracking = Node & {
  __typename?: 'Tracking';
  /** A unique identifier for this Tracking */
  id: Scalars['ID'];
  /** The `Label` related to this Tracking */
  label: Maybe<Label>;
  /** The tracking number related to this Tracking */
  number: Scalars['String'];
  /** The tracking url for this Tracking */
  url: Scalars['String'];
};

export const trackingEventTypeCode = {
  Canceled: 'CANCELED',
  InTransit: 'IN_TRANSIT',
  OutForDelivery: 'OUT_FOR_DELIVERY',
  PickedUp: 'PICKED_UP',
  PreTransit: 'PRE_TRANSIT',
} as const;

export type TrackingEventTypeCode =
  (typeof trackingEventTypeCode)[keyof typeof trackingEventTypeCode];
export type TransitTime = {
  __typename?: 'TransitTime';
  /** ISO-8601 timestamp of when the delivery will be delivered. Only the time portion will be used. */
  guaranteedDelivery: Maybe<Scalars['DateTime']>;
  /** The maximum number of transit days. */
  max: Maybe<Scalars['Int']>;
  /** The minimum number of transit days. */
  min: Maybe<Scalars['Int']>;
  /** Indicates what type of value the min and max fields represent. (default: days) */
  type: Maybe<TransitTypeCode>;
};

export const transitTypeCode = {
  BusinessDays: 'BUSINESS_DAYS',
  Days: 'DAYS',
  Weeks: 'WEEKS',
} as const;

export type TransitTypeCode =
  (typeof transitTypeCode)[keyof typeof transitTypeCode];
export type UpdateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type UpdateDashboardSettingsInput = {
  defaultDisplayCurrency?: InputMaybe<Scalars['String']>;
  defaultDisplayLanguage?: InputMaybe<Scalars['String']>;
  defaultDisplayLocal?: InputMaybe<Scalars['String']>;
  defaultDisplayTimezone?: InputMaybe<Scalars['String']>;
  defaultUnit?: InputMaybe<DashboardUnit>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  multiFactorAuth?: InputMaybe<MultiFactorAuthSetting>;
};

export type UpdateOnlineStoreSettingsInput = {
  id: Scalars['String'];
  platform: Scalars['String'];
  url: Scalars['String'];
};

export type UpdatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: Day;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: EndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** A unique identifier for the PaymentsSettings. */
  id: Scalars['String'];
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
};

export type UpdateShippingSettingsInput = {
  defaultWeightMultiplier: Scalars['Decimal'];
  id: Scalars['String'];
};

export type UploadErrors = {
  __typename?: 'UploadErrors';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  sku: Maybe<Scalars['String']>;
};

export const visibilityCode = {
  Hide: 'HIDE',
  Optional: 'OPTIONAL',
  Required: 'REQUIRED',
} as const;

export type VisibilityCode =
  (typeof visibilityCode)[keyof typeof visibilityCode];
export const volumeUnitCode = {
  BarrelPetroleum: 'BARREL_PETROLEUM',
  BushelUk: 'BUSHEL_UK',
  BushelUsDry: 'BUSHEL_US_DRY',
  CentiliterCl: 'CENTILITER_CL',
  CubicCentimeter: 'CUBIC_CENTIMETER',
  CubicDecimeter: 'CUBIC_DECIMETER',
  CubicFoot: 'CUBIC_FOOT',
  CubicInch: 'CUBIC_INCH',
  CubicMeter: 'CUBIC_METER',
  CubicMillimeter: 'CUBIC_MILLIMETER',
  CubicYard: 'CUBIC_YARD',
  DecaliterDal: 'DECALITER_DAL',
  Deciliter: 'DECILITER',
  FluidDramFlDr: 'FLUID_DRAM_FL_DR',
  FluidOunceFlOz: 'FLUID_OUNCE_FL_OZ',
  FluidOunceUk: 'FLUID_OUNCE_UK',
  GallonFluid: 'GALLON_FLUID',
  GallonUk: 'GALLON_UK',
  GillGi: 'GILL_GI',
  Hectoliter: 'HECTOLITER',
  Kiloliter: 'KILOLITER',
  Liter: 'LITER',
  Microliter: 'MICROLITER',
  MilliliterMl: 'MILLILITER_ML',
  MinimMin: 'MINIM_MIN',
  PeckUsDry: 'PECK_US_DRY',
  PintFluid: 'PINT_FLUID',
  PintUk: 'PINT_UK',
  PintUsDry: 'PINT_US_DRY',
  QuartFluid: 'QUART_FLUID',
  QuartUk: 'QUART_UK',
  QuartUsDry: 'QUART_US_DRY',
} as const;

export type VolumeUnitCode =
  (typeof volumeUnitCode)[keyof typeof volumeUnitCode];
export const wcoVersion = {
  Wco_2017: 'WCO_2017',
  Wco_2022: 'WCO_2022',
} as const;

export type WcoVersion = (typeof wcoVersion)[keyof typeof wcoVersion];
export const weightUnitCode = {
  Gram: 'GRAM',
  Kilogram: 'KILOGRAM',
  Ounce: 'OUNCE',
  Pound: 'POUND',
} as const;

export type WeightUnitCode =
  (typeof weightUnitCode)[keyof typeof weightUnitCode];
export const zoneLandedCostConfiguration = {
  /** The landed cost method will be DAP. */
  DapForced: 'DAP_FORCED',
  /** The landed cost method will be determined by the `LandedCostMethod` on the `ShippingProfile` used in this zone. */
  ShippingProfile: 'SHIPPING_PROFILE',
} as const;

export type ZoneLandedCostConfiguration =
  (typeof zoneLandedCostConfiguration)[keyof typeof zoneLandedCostConfiguration];
export const zonosAttribution = {
  Disabled: 'DISABLED',
  Enabled: 'ENABLED',
} as const;

export type ZonosAttribution =
  (typeof zonosAttribution)[keyof typeof zonosAttribution];
/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  isRepeatable: Scalars['Boolean'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __DirectiveArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export const directiveLocation = {
  /** Location adjacent to a query operation. */
  Query: 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation: 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription: 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field: 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition: 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread: 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment: 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition: 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema: 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar: 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object: 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition: 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition: 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface: 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union: 'UNION',
  /** Location adjacent to an enum definition. */
  Enum: 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue: 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject: 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition: 'INPUT_FIELD_DEFINITION',
} as const;

export type __DirectiveLocation =
  (typeof directiveLocation)[keyof typeof directiveLocation];
/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason: Maybe<Scalars['String']>;
};

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason: Maybe<Scalars['String']>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description: Maybe<Scalars['String']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  specifiedByURL: Maybe<Scalars['String']>;
  fields: Maybe<Array<__Field>>;
  interfaces: Maybe<Array<__Type>>;
  possibleTypes: Maybe<Array<__Type>>;
  enumValues: Maybe<Array<__EnumValue>>;
  inputFields: Maybe<Array<__InputValue>>;
  ofType: Maybe<__Type>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export const typeKind = {
  /** Indicates this type is a scalar. */
  Scalar: 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object: 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface: 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union: 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum: 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject: 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List: 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull: 'NON_NULL',
} as const;

export type __TypeKind = (typeof typeKind)[keyof typeof typeKind];
export type GetSchemaQueryVariables = Exact<{ [key: string]: never }>;

export type GetSchemaQuery = { __typename?: 'Query' } & {
  __schema: { __typename?: '__Schema' } & {
    queryType: { __typename?: '__Type' } & Pick<__Type, 'name'>;
    mutationType: Maybe<{ __typename?: '__Type' } & Pick<__Type, 'name'>>;
    subscriptionType: Maybe<{ __typename?: '__Type' } & Pick<__Type, 'name'>>;
    types: Array<
      { __typename?: '__Type' } & Pick<
        __Type,
        'kind' | 'name' | 'description'
      > & {
          fields: Maybe<
            Array<
              { __typename?: '__Field' } & Pick<
                __Field,
                'name' | 'description' | 'isDeprecated' | 'deprecationReason'
              > & {
                  args: Array<
                    { __typename?: '__InputValue' } & Pick<
                      __InputValue,
                      'name' | 'description' | 'defaultValue'
                    > & {
                        type: { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      > & {
                                                          ofType: Maybe<
                                                            {
                                                              __typename?: '__Type';
                                                            } & Pick<
                                                              __Type,
                                                              'kind' | 'name'
                                                            > & {
                                                                ofType: Maybe<
                                                                  {
                                                                    __typename?: '__Type';
                                                                  } & Pick<
                                                                    __Type,
                                                                    | 'kind'
                                                                    | 'name'
                                                                  >
                                                                >;
                                                              }
                                                          >;
                                                        }
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          };
                      }
                  >;
                  type: { __typename?: '__Type' } & Pick<
                    __Type,
                    'kind' | 'name'
                  > & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      > & {
                                                          ofType: Maybe<
                                                            {
                                                              __typename?: '__Type';
                                                            } & Pick<
                                                              __Type,
                                                              'kind' | 'name'
                                                            >
                                                          >;
                                                        }
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    };
                }
            >
          >;
          inputFields: Maybe<
            Array<
              { __typename?: '__InputValue' } & Pick<
                __InputValue,
                'name' | 'description' | 'defaultValue'
              > & {
                  type: { __typename?: '__Type' } & Pick<
                    __Type,
                    'kind' | 'name'
                  > & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      > & {
                                                          ofType: Maybe<
                                                            {
                                                              __typename?: '__Type';
                                                            } & Pick<
                                                              __Type,
                                                              'kind' | 'name'
                                                            >
                                                          >;
                                                        }
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    };
                }
            >
          >;
          interfaces: Maybe<
            Array<
              { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                  ofType: Maybe<
                    { __typename?: '__Type' } & Pick<
                      __Type,
                      'kind' | 'name'
                    > & {
                        ofType: Maybe<
                          { __typename?: '__Type' } & Pick<
                            __Type,
                            'kind' | 'name'
                          > & {
                              ofType: Maybe<
                                { __typename?: '__Type' } & Pick<
                                  __Type,
                                  'kind' | 'name'
                                > & {
                                    ofType: Maybe<
                                      { __typename?: '__Type' } & Pick<
                                        __Type,
                                        'kind' | 'name'
                                      > & {
                                          ofType: Maybe<
                                            { __typename?: '__Type' } & Pick<
                                              __Type,
                                              'kind' | 'name'
                                            > & {
                                                ofType: Maybe<
                                                  {
                                                    __typename?: '__Type';
                                                  } & Pick<
                                                    __Type,
                                                    'kind' | 'name'
                                                  > & {
                                                      ofType: Maybe<
                                                        {
                                                          __typename?: '__Type';
                                                        } & Pick<
                                                          __Type,
                                                          'kind' | 'name'
                                                        >
                                                      >;
                                                    }
                                                >;
                                              }
                                          >;
                                        }
                                    >;
                                  }
                              >;
                            }
                        >;
                      }
                  >;
                }
            >
          >;
          enumValues: Maybe<
            Array<
              { __typename?: '__EnumValue' } & Pick<
                __EnumValue,
                'name' | 'description' | 'isDeprecated' | 'deprecationReason'
              >
            >
          >;
          possibleTypes: Maybe<
            Array<
              { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                  ofType: Maybe<
                    { __typename?: '__Type' } & Pick<
                      __Type,
                      'kind' | 'name'
                    > & {
                        ofType: Maybe<
                          { __typename?: '__Type' } & Pick<
                            __Type,
                            'kind' | 'name'
                          > & {
                              ofType: Maybe<
                                { __typename?: '__Type' } & Pick<
                                  __Type,
                                  'kind' | 'name'
                                > & {
                                    ofType: Maybe<
                                      { __typename?: '__Type' } & Pick<
                                        __Type,
                                        'kind' | 'name'
                                      > & {
                                          ofType: Maybe<
                                            { __typename?: '__Type' } & Pick<
                                              __Type,
                                              'kind' | 'name'
                                            > & {
                                                ofType: Maybe<
                                                  {
                                                    __typename?: '__Type';
                                                  } & Pick<
                                                    __Type,
                                                    'kind' | 'name'
                                                  > & {
                                                      ofType: Maybe<
                                                        {
                                                          __typename?: '__Type';
                                                        } & Pick<
                                                          __Type,
                                                          'kind' | 'name'
                                                        >
                                                      >;
                                                    }
                                                >;
                                              }
                                          >;
                                        }
                                    >;
                                  }
                              >;
                            }
                        >;
                      }
                  >;
                }
            >
          >;
        }
    >;
    directives: Array<
      { __typename?: '__Directive' } & Pick<
        __Directive,
        'name' | 'description' | 'locations'
      > & {
          args: Array<
            { __typename?: '__InputValue' } & Pick<
              __InputValue,
              'name' | 'description' | 'defaultValue'
            > & {
                type: { __typename?: '__Type' } & Pick<
                  __Type,
                  'kind' | 'name'
                > & {
                    ofType: Maybe<
                      { __typename?: '__Type' } & Pick<
                        __Type,
                        'kind' | 'name'
                      > & {
                          ofType: Maybe<
                            { __typename?: '__Type' } & Pick<
                              __Type,
                              'kind' | 'name'
                            > & {
                                ofType: Maybe<
                                  { __typename?: '__Type' } & Pick<
                                    __Type,
                                    'kind' | 'name'
                                  > & {
                                      ofType: Maybe<
                                        { __typename?: '__Type' } & Pick<
                                          __Type,
                                          'kind' | 'name'
                                        > & {
                                            ofType: Maybe<
                                              { __typename?: '__Type' } & Pick<
                                                __Type,
                                                'kind' | 'name'
                                              > & {
                                                  ofType: Maybe<
                                                    {
                                                      __typename?: '__Type';
                                                    } & Pick<
                                                      __Type,
                                                      'kind' | 'name'
                                                    > & {
                                                        ofType: Maybe<
                                                          {
                                                            __typename?: '__Type';
                                                          } & Pick<
                                                            __Type,
                                                            'kind' | 'name'
                                                          >
                                                        >;
                                                      }
                                                  >;
                                                }
                                            >;
                                          }
                                      >;
                                    }
                                >;
                              }
                          >;
                        }
                    >;
                  };
              }
          >;
        }
    >;
  };
};

export type FullTypeFragment = { __typename?: '__Type' } & Pick<
  __Type,
  'kind' | 'name' | 'description'
> & {
    fields: Maybe<
      Array<
        { __typename?: '__Field' } & Pick<
          __Field,
          'name' | 'description' | 'isDeprecated' | 'deprecationReason'
        > & {
            args: Array<
              { __typename?: '__InputValue' } & Pick<
                __InputValue,
                'name' | 'description' | 'defaultValue'
              > & {
                  type: { __typename?: '__Type' } & Pick<
                    __Type,
                    'kind' | 'name'
                  > & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      > & {
                                                          ofType: Maybe<
                                                            {
                                                              __typename?: '__Type';
                                                            } & Pick<
                                                              __Type,
                                                              'kind' | 'name'
                                                            >
                                                          >;
                                                        }
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    };
                }
            >;
            type: { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                ofType: Maybe<
                  { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      >
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    }
                >;
              };
          }
      >
    >;
    inputFields: Maybe<
      Array<
        { __typename?: '__InputValue' } & Pick<
          __InputValue,
          'name' | 'description' | 'defaultValue'
        > & {
            type: { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                ofType: Maybe<
                  { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          > & {
                                              ofType: Maybe<
                                                {
                                                  __typename?: '__Type';
                                                } & Pick<
                                                  __Type,
                                                  'kind' | 'name'
                                                > & {
                                                    ofType: Maybe<
                                                      {
                                                        __typename?: '__Type';
                                                      } & Pick<
                                                        __Type,
                                                        'kind' | 'name'
                                                      >
                                                    >;
                                                  }
                                              >;
                                            }
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    }
                >;
              };
          }
      >
    >;
    interfaces: Maybe<
      Array<
        { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
            ofType: Maybe<
              { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                  ofType: Maybe<
                    { __typename?: '__Type' } & Pick<
                      __Type,
                      'kind' | 'name'
                    > & {
                        ofType: Maybe<
                          { __typename?: '__Type' } & Pick<
                            __Type,
                            'kind' | 'name'
                          > & {
                              ofType: Maybe<
                                { __typename?: '__Type' } & Pick<
                                  __Type,
                                  'kind' | 'name'
                                > & {
                                    ofType: Maybe<
                                      { __typename?: '__Type' } & Pick<
                                        __Type,
                                        'kind' | 'name'
                                      > & {
                                          ofType: Maybe<
                                            { __typename?: '__Type' } & Pick<
                                              __Type,
                                              'kind' | 'name'
                                            > & {
                                                ofType: Maybe<
                                                  {
                                                    __typename?: '__Type';
                                                  } & Pick<
                                                    __Type,
                                                    'kind' | 'name'
                                                  >
                                                >;
                                              }
                                          >;
                                        }
                                    >;
                                  }
                              >;
                            }
                        >;
                      }
                  >;
                }
            >;
          }
      >
    >;
    enumValues: Maybe<
      Array<
        { __typename?: '__EnumValue' } & Pick<
          __EnumValue,
          'name' | 'description' | 'isDeprecated' | 'deprecationReason'
        >
      >
    >;
    possibleTypes: Maybe<
      Array<
        { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
            ofType: Maybe<
              { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                  ofType: Maybe<
                    { __typename?: '__Type' } & Pick<
                      __Type,
                      'kind' | 'name'
                    > & {
                        ofType: Maybe<
                          { __typename?: '__Type' } & Pick<
                            __Type,
                            'kind' | 'name'
                          > & {
                              ofType: Maybe<
                                { __typename?: '__Type' } & Pick<
                                  __Type,
                                  'kind' | 'name'
                                > & {
                                    ofType: Maybe<
                                      { __typename?: '__Type' } & Pick<
                                        __Type,
                                        'kind' | 'name'
                                      > & {
                                          ofType: Maybe<
                                            { __typename?: '__Type' } & Pick<
                                              __Type,
                                              'kind' | 'name'
                                            > & {
                                                ofType: Maybe<
                                                  {
                                                    __typename?: '__Type';
                                                  } & Pick<
                                                    __Type,
                                                    'kind' | 'name'
                                                  >
                                                >;
                                              }
                                          >;
                                        }
                                    >;
                                  }
                              >;
                            }
                        >;
                      }
                  >;
                }
            >;
          }
      >
    >;
  };

export type InputValueFragment = { __typename?: '__InputValue' } & Pick<
  __InputValue,
  'name' | 'description' | 'defaultValue'
> & {
    type: { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
        ofType: Maybe<
          { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
              ofType: Maybe<
                { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                    ofType: Maybe<
                      { __typename?: '__Type' } & Pick<
                        __Type,
                        'kind' | 'name'
                      > & {
                          ofType: Maybe<
                            { __typename?: '__Type' } & Pick<
                              __Type,
                              'kind' | 'name'
                            > & {
                                ofType: Maybe<
                                  { __typename?: '__Type' } & Pick<
                                    __Type,
                                    'kind' | 'name'
                                  > & {
                                      ofType: Maybe<
                                        { __typename?: '__Type' } & Pick<
                                          __Type,
                                          'kind' | 'name'
                                        > & {
                                            ofType: Maybe<
                                              { __typename?: '__Type' } & Pick<
                                                __Type,
                                                'kind' | 'name'
                                              >
                                            >;
                                          }
                                      >;
                                    }
                                >;
                              }
                          >;
                        }
                    >;
                  }
              >;
            }
        >;
      };
  };

export type TypeRefFragment = { __typename?: '__Type' } & Pick<
  __Type,
  'kind' | 'name'
> & {
    ofType: Maybe<
      { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
          ofType: Maybe<
            { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                ofType: Maybe<
                  { __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
                      ofType: Maybe<
                        { __typename?: '__Type' } & Pick<
                          __Type,
                          'kind' | 'name'
                        > & {
                            ofType: Maybe<
                              { __typename?: '__Type' } & Pick<
                                __Type,
                                'kind' | 'name'
                              > & {
                                  ofType: Maybe<
                                    { __typename?: '__Type' } & Pick<
                                      __Type,
                                      'kind' | 'name'
                                    > & {
                                        ofType: Maybe<
                                          { __typename?: '__Type' } & Pick<
                                            __Type,
                                            'kind' | 'name'
                                          >
                                        >;
                                      }
                                  >;
                                }
                            >;
                          }
                      >;
                    }
                >;
              }
          >;
        }
    >;
  };

export const TypeRefFragmentDoc = gql`
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const InputValueFragmentDoc = gql`
  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }
  ${TypeRefFragmentDoc}
`;
export const FullTypeFragmentDoc = gql`
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  ${InputValueFragmentDoc}
  ${TypeRefFragmentDoc}
`;
export const GetSchemaDocument = gql`
  query getSchema {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }
  ${FullTypeFragmentDoc}
  ${InputValueFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getSchema(
      variables?: GetSchemaQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<GetSchemaQuery> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<GetSchemaQuery>(GetSchemaDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getSchema',
        'query'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
