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
  federation__FieldSet: string;
  link__Import: string;
};

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
/**  input schemas */
export type CreateCredentialInput = {
  assignableRoles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiredAt?: InputMaybe<Scalars['DateTime']>;
  mode: Mode;
  name?: InputMaybe<Scalars['String']>;
  organization: Scalars['String'];
  roles?: InputMaybe<Array<Scalars['String']>>;
  type: CredentialType;
  user?: InputMaybe<Scalars['String']>;
};

/**  schemas */
export type Credential = {
  __typename?: 'Credential';
  assignableRoles: Maybe<Array<Maybe<Scalars['ID']>>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  expiredAt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUsedAt: Maybe<Scalars['String']>;
  mode: Mode;
  multiFactorAuthenticated: Maybe<MultiFactorAuthenticated>;
  name: Maybe<Scalars['String']>;
  organization: Scalars['ID'];
  roles: Maybe<Array<Scalars['ID']>>;
  type: Maybe<CredentialType>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
  user: Maybe<User>;
};

/** Credential Connection */
export type CredentialConnection = {
  __typename?: 'CredentialConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<CredentialEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** Credential Edge */
export type CredentialEdge = {
  __typename?: 'CredentialEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Credential>;
};

export type CredentialFilter = {
  expiredAtAfter?: InputMaybe<Scalars['DateTime']>;
  expiredAtBefore?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<CredentialType>;
  user?: InputMaybe<Scalars['ID']>;
};

/**  schemas */
export type CredentialServiceToken = {
  __typename?: 'CredentialServiceToken';
  credential: Maybe<Credential>;
  id: Maybe<Scalars['ID']>;
  mode: Maybe<Mode>;
  organization: Maybe<Scalars['String']>;
  serviceToken: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
};

/**  input schemas */
export type CredentialServiceTokenCreateInput = {
  /** Link the credential with the first serviceToken for the organization.  */
  credentialId?: InputMaybe<Scalars['ID']>;
  /** Link the credential with the specific serviceToken for the organization. */
  serviceToken?: InputMaybe<Scalars['String']>;
  /** The storeId to link the credentials for.  */
  storeId?: InputMaybe<Scalars['Int']>;
};

export type CredentialServiceTokenQueryFilter = {
  mode?: InputMaybe<Mode>;
  organizationId?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<CredentialType>;
};

export type CredentialServiceTokenQueryInput = {
  mode: Mode;
  storeId: Scalars['Int'];
};

export type CredentialSession = {
  __typename?: 'CredentialSession';
  createdAt: Scalars['DateTime'];
  credential: Scalars['ID'];
  id: Scalars['ID'];
  mode: Mode;
  organization: Scalars['ID'];
  /**  list of permission name */
  permissions: Maybe<Array<Scalars['String']>>;
  serviceToken: Maybe<Scalars['String']>;
  store: Maybe<Scalars['Int']>;
  user: Maybe<Scalars['ID']>;
  validUntil: Maybe<Scalars['DateTime']>;
};

export const credentialType = {
  ApiToken: 'API_TOKEN',
  HelloToken: 'HELLO_TOKEN',
  MigrationToken: 'MIGRATION_TOKEN',
  ServiceToken: 'SERVICE_TOKEN',
  UserToken: 'USER_TOKEN',
} as const;

export type CredentialType =
  (typeof credentialType)[keyof typeof credentialType];
export type CredentialUpdateInput = {
  assignableRoles?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expiredAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Scalars['String']>>;
};

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
export type DateTimeRange = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
};

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
export type MigrateCredentialServiceTokenInput = {
  email?: InputMaybe<Scalars['String']>;
  organizationName: Scalars['String'];
  storeId: Scalars['Int'];
};

export const mode = {
  Live: 'LIVE',
  Test: 'TEST',
} as const;

export type Mode = (typeof mode)[keyof typeof mode];
export const multiFactorAuthenticated = {
  InProgress: 'IN_PROGRESS',
  NotVerified: 'NOT_VERIFIED',
  Verified: 'VERIFIED',
} as const;

export type MultiFactorAuthenticated =
  (typeof multiFactorAuthenticated)[keyof typeof multiFactorAuthenticated];
export const multiFactorAuthenticationMode = {
  Email: 'EMAIL',
  EmailNotVerified: 'EMAIL_NOT_VERIFIED',
  NotVerified: 'NOT_VERIFIED',
  Sms: 'SMS',
  SmsNotVerified: 'SMS_NOT_VERIFIED',
} as const;

export type MultiFactorAuthenticationMode =
  (typeof multiFactorAuthenticationMode)[keyof typeof multiFactorAuthenticationMode];
export type Mutation = {
  __typename?: 'Mutation';
  createCredential: Credential;
  /** When a subscription is created/turned on, we will assign all the given roles via this operation call, for all the respective organizations admin users as assignable roles */
  credentialAddSubscriptionRoles: Maybe<Result>;
  /** When a subscription is no longer valid, we will remove all the given roles via this operation call, for all the respective organizations credentials */
  credentialRemoveSubscriptionRoles: Maybe<Result>;
  /** Create a link between one api token credentials and the organization service token. */
  credentialServiceTokenCreate: Array<CredentialServiceToken>;
  credentialUpdate: Credential;
  deleteCredential: Maybe<Result>;
  login: Maybe<CredentialSession>;
  loginLegacy: Maybe<CredentialSession>;
  /** @deprecated No longer supported */
  migrateCredentialServiceToken: Result;
  roleCreate: Maybe<Role>;
  roleDelete: Maybe<Result>;
  roleGlobalCreate: Maybe<Role>;
  roleUpdate: Maybe<Role>;
  roleValidateSlug: Maybe<Scalars['Boolean']>;
  updateCredentialSessionContext: CredentialSession;
  userCreate: User;
  /**  normal password reset. */
  userPasswordUpdate: Maybe<Result>;
  userUpdate: User;
  validateCredential: Maybe<CredentialSession>;
  validateServiceToken: Maybe<ServiceToken>;
  validateUserToken: Maybe<ServiceToken>;
};

export type MutationCreateCredentialArgs = {
  createCredentialInput: CreateCredentialInput;
};

export type MutationCredentialAddSubscriptionRolesArgs = {
  name: InputMaybe<Scalars['String']>;
  organizationIds: Array<Scalars['ID']>;
  roles: Array<Scalars['ID']>;
};

export type MutationCredentialRemoveSubscriptionRolesArgs = {
  organizationIds: Array<Scalars['ID']>;
  roles: Array<Scalars['ID']>;
};

export type MutationCredentialServiceTokenCreateArgs = {
  input: CredentialServiceTokenCreateInput;
};

export type MutationCredentialUpdateArgs = {
  input: CredentialUpdateInput;
};

export type MutationDeleteCredentialArgs = {
  id: Scalars['ID'];
};

export type MutationLoginArgs = {
  input: InputMaybe<UserLoginInput>;
};

export type MutationLoginLegacyArgs = {
  input: InputMaybe<UserLoginLegacyInput>;
};

export type MutationMigrateCredentialServiceTokenArgs = {
  input: InputMaybe<MigrateCredentialServiceTokenInput>;
};

export type MutationRoleCreateArgs = {
  input: RoleCreateInput;
};

export type MutationRoleDeleteArgs = {
  id: InputMaybe<Scalars['String']>;
};

export type MutationRoleGlobalCreateArgs = {
  input: InputMaybe<RoleGlobalCreateInput>;
};

export type MutationRoleUpdateArgs = {
  input: RoleUpdateInput;
};

export type MutationRoleValidateSlugArgs = {
  input: Scalars['String'];
};

export type MutationUpdateCredentialSessionContextArgs = {
  updateCredentialSessionInput: UpdateCredentialSessionInput;
};

export type MutationUserCreateArgs = {
  input: UserCreateInput;
};

export type MutationUserPasswordUpdateArgs = {
  currentPassword: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['String']>;
  newPassword: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type MutationValidateServiceTokenArgs = {
  storeId: InputMaybe<Scalars['Int']>;
};

export type MutationValidateUserTokenArgs = {
  storeId: InputMaybe<Scalars['Int']>;
};

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

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Permission Connection */
export type PermissionConnection = {
  __typename?: 'PermissionConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<PermissionEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

/** Permission Edge */
export type PermissionEdge = {
  __typename?: 'PermissionEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<Permission>;
};

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  credential: Maybe<Credential>;
  /** when filter is null or storeId and organizationId are both null, we will return every credentialServiceTokens for the caller's organization.  */
  credentialServiceTokens: Maybe<Array<Maybe<CredentialServiceToken>>>;
  credentials: Maybe<CredentialConnection>;
  /** @deprecated No longer supported */
  getCredentialServiceToken: Maybe<CredentialServiceToken>;
  permissions: Maybe<PermissionConnection>;
  roles: Maybe<RoleConnection>;
  rolesGlobal: Maybe<RoleConnection>;
  user: Maybe<User>;
  users: Maybe<UserConnection>;
};

export type QueryCredentialArgs = {
  id: Scalars['ID'];
};

export type QueryCredentialServiceTokensArgs = {
  filter: InputMaybe<CredentialServiceTokenQueryFilter>;
};

export type QueryCredentialsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<CredentialFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryGetCredentialServiceTokenArgs = {
  input: InputMaybe<CredentialServiceTokenQueryInput>;
};

export type QueryPermissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type QueryRolesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<RoleFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type QueryRolesGlobalArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<RoleFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  email: InputMaybe<Scalars['String']>;
};

export type QueryUsersArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
};

export const result = {
  Failure: 'FAILURE',
  Success: 'SUCCESS',
} as const;

export type Result = (typeof result)[keyof typeof result];
export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  organization: Maybe<Scalars['ID']>;
  permissions: Array<Scalars['String']>;
  /**  a unique name for your role. no space  */
  slug: Scalars['String'];
  type: RoleType;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoleCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  slug: Scalars['String'];
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Role>;
};

export type RoleFilter = {
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RoleType>;
};

export type RoleGlobalCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  slug: Scalars['String'];
  type: RoleType;
};

export const roleType = {
  Internal: 'INTERNAL',
  Organizational: 'ORGANIZATIONAL',
  Public: 'PUBLIC',
  Subscription: 'SUBSCRIPTION',
} as const;

export type RoleType = (typeof roleType)[keyof typeof roleType];
/** this call can be either a PUT or a PATCH. You can either pass in a full list of permissions (for a PUT) OR a list of permissions to add and/or remove.  */
export type RoleUpdateInput = {
  /** the description of the role. */
  description?: InputMaybe<Scalars['String']>;
  /** the ID of the role you want to update. */
  id: Scalars['ID'];
  /** the name of the role. */
  name: Scalars['String'];
  /** a full list of permissions for this role. BEWARE: this will overwrite the current list of permissions */
  permissions?: InputMaybe<Array<Scalars['String']>>;
  /** permissions to add to the current list. */
  permissionsToAdd?: InputMaybe<Array<Scalars['String']>>;
  /** permissions to add to the current list. */
  permissionsToRemove?: InputMaybe<Array<Scalars['String']>>;
};

export type ServiceToken = {
  __typename?: 'ServiceToken';
  allowedStore: Maybe<Array<Scalars['Int']>>;
  credentialToken: Scalars['String'];
  displayName: Maybe<Scalars['String']>;
  roles: Maybe<Array<Scalars['String']>>;
  serviceToken: Scalars['String'];
  storeId: Scalars['Int'];
  userIdentifier: Maybe<Scalars['String']>;
  userName: Maybe<Scalars['String']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  dateExpired: Maybe<Scalars['DateTime']>;
  hash: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mfa: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type UpdateCredentialSessionInput = {
  organization?: InputMaybe<Scalars['String']>;
};

/**  schemas */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  email: Scalars['String'];
  id: Scalars['String'];
  lastLoginAt: Maybe<Scalars['DateTime']>;
  multiFactorAuthentication: Maybe<MultiFactorAuthenticationMode>;
  multiFactorAuthenticationPhone: Maybe<Scalars['String']>;
  organizations: Array<Scalars['ID']>;
  status: Maybe<UserStatus>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

/** User Connection */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<UserEdge>>>;
  /** Field pageInfo */
  pageInfo: Maybe<PageInfo>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  multiFactorAuthentication?: InputMaybe<MultiFactorAuthenticationMode>;
  multiFactorAuthenticationPhone?: InputMaybe<Scalars['String']>;
  onBoarding?: InputMaybe<Scalars['Boolean']>;
  organizationIds: Array<Scalars['ID']>;
  password: Scalars['String'];
};

/** User Edge */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<User>;
};

export type UserFilter = {
  email?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  userId?: InputMaybe<Scalars['ID']>;
};

/**  input schemas */
export type UserLoginInput = {
  email: Scalars['String'];
  mode: Mode;
  organizationId?: InputMaybe<Scalars['ID']>;
  password: Scalars['String'];
};

export type UserLoginLegacyInput = {
  /** @deprecated */
  email?: InputMaybe<Scalars['String']>;
  storeId: Scalars['Int'];
  userToken: Scalars['String'];
};

export const userStatus = {
  Active: 'ACTIVE',
  Disabled: 'DISABLED',
} as const;

export type UserStatus = (typeof userStatus)[keyof typeof userStatus];
export type UserUpdateInput = {
  organizationIds: Array<Scalars['ID']>;
  status: UserStatus;
  userId: Scalars['ID'];
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String'];
};

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
export type LoginLegacyMutationVariables = Exact<{
  input: InputMaybe<UserLoginLegacyInput>;
}>;

export type LoginLegacyMutation = { __typename?: 'Mutation' } & {
  loginLegacy: Maybe<
    { __typename?: 'CredentialSession' } & Pick<CredentialSession, 'credential'>
  >;
};

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
export const LoginLegacyDocument = gql`
  mutation loginLegacy($input: UserLoginLegacyInput) {
    loginLegacy(input: $input) {
      credential
    }
  }
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
    loginLegacy(
      variables?: LoginLegacyMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<LoginLegacyMutation> {
      return withWrapper(
        wrappedRequestHeaders =>
          client.request<LoginLegacyMutation>(LoginLegacyDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'loginLegacy',
        'mutation'
      );
    },
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
