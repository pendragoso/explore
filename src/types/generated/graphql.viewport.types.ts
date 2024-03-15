// @ts-nocheck
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
  bigint: number;
  jsonb: Record<string, unknown> | null;
  numeric: number;
  smallint: number;
  timestamp: string;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** ordering argument of a cursor */
export const cursorOrdering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC',
} as const;

export type CursorOrdering =
  (typeof cursorOrdering)[keyof typeof cursorOrdering];
/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "invoice" */
export type Invoice = {
  __typename?: 'Invoice';
  amountDue: Maybe<Scalars['numeric']>;
  amountPaid: Maybe<Scalars['numeric']>;
  appliedBalance: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamp']>;
  currencyCode: Maybe<Scalars['String']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountName: Maybe<Scalars['String']>;
  dueDate: Maybe<Scalars['timestamp']>;
  endingBalance: Maybe<Scalars['Int']>;
  hostedInvoiceUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  /** An array relationship */
  invoiceLineGroupedByDescription: Array<InvoiceLineGroupedByDescription>;
  /** An aggregate relationship */
  invoiceLineGroupedByDescriptionAggregate: InvoiceLineGroupedByDescriptionAggregate;
  /** fetch data from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceId: Array<InvoiceLineGroupedByReferenceId>;
  /** fetch aggregated fields from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceIdAggregate: InvoiceLineGroupedByReferenceIdAggregate;
  mode: Maybe<Scalars['String']>;
  referenceId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  startingBalance: Maybe<Scalars['numeric']>;
  status: Maybe<Scalars['String']>;
  statusTransitions: Maybe<Scalars['jsonb']>;
  subtotal: Maybe<Scalars['numeric']>;
  total: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "invoice" */
export type InvoiceInvoiceLineGroupedByDescriptionArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

/** columns and relationships of "invoice" */
export type InvoiceInvoiceLineGroupedByDescriptionAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

/** columns and relationships of "invoice" */
export type InvoiceInvoiceLineGroupedByReferenceIdArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

/** columns and relationships of "invoice" */
export type InvoiceInvoiceLineGroupedByReferenceIdAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

/** columns and relationships of "invoice" */
export type InvoiceStatusTransitionsArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "invoice" */
export type InvoiceAggregate = {
  __typename?: 'InvoiceAggregate';
  aggregate: Maybe<InvoiceAggregateFields>;
  nodes: Array<Invoice>;
};

export type InvoiceAggregateBoolExp = {
  count?: InputMaybe<InvoiceAggregateBoolExpCount>;
};

/** aggregate fields of "invoice" */
export type InvoiceAggregateFields = {
  __typename?: 'InvoiceAggregateFields';
  avg: Maybe<InvoiceAvgFields>;
  count: Scalars['Int'];
  max: Maybe<InvoiceMaxFields>;
  min: Maybe<InvoiceMinFields>;
  stddev: Maybe<InvoiceStddevFields>;
  stddevPop: Maybe<InvoiceStddevPopFields>;
  stddevSamp: Maybe<InvoiceStddevSampFields>;
  sum: Maybe<InvoiceSumFields>;
  varPop: Maybe<InvoiceVarPopFields>;
  varSamp: Maybe<InvoiceVarSampFields>;
  variance: Maybe<InvoiceVarianceFields>;
};

/** aggregate fields of "invoice" */
export type InvoiceAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<InvoiceSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invoice" */
export type InvoiceAggregateOrderBy = {
  avg?: InputMaybe<InvoiceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<InvoiceMaxOrderBy>;
  min?: InputMaybe<InvoiceMinOrderBy>;
  stddev?: InputMaybe<InvoiceStddevOrderBy>;
  stddevPop?: InputMaybe<InvoiceStddevPopOrderBy>;
  stddevSamp?: InputMaybe<InvoiceStddevSampOrderBy>;
  sum?: InputMaybe<InvoiceSumOrderBy>;
  varPop?: InputMaybe<InvoiceVarPopOrderBy>;
  varSamp?: InputMaybe<InvoiceVarSampOrderBy>;
  variance?: InputMaybe<InvoiceVarianceOrderBy>;
};

/** aggregate avg on columns */
export type InvoiceAvgFields = {
  __typename?: 'InvoiceAvgFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invoice" */
export type InvoiceAvgOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "invoice". All fields are combined with a logical 'AND'. */
export type InvoiceBoolExp = {
  _and?: InputMaybe<Array<InvoiceBoolExp>>;
  _not?: InputMaybe<InvoiceBoolExp>;
  _or?: InputMaybe<Array<InvoiceBoolExp>>;
  amountDue?: InputMaybe<NumericComparisonExp>;
  amountPaid?: InputMaybe<NumericComparisonExp>;
  appliedBalance?: InputMaybe<NumericComparisonExp>;
  companyId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  currencyCode?: InputMaybe<StringComparisonExp>;
  discountAmount?: InputMaybe<NumericComparisonExp>;
  discountName?: InputMaybe<StringComparisonExp>;
  dueDate?: InputMaybe<TimestampComparisonExp>;
  endingBalance?: InputMaybe<IntComparisonExp>;
  hostedInvoiceUrl?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  invoiceLineGroupedByDescription?: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
  invoiceLineGroupedByDescriptionAggregate?: InputMaybe<InvoiceLineGroupedByDescriptionAggregateBoolExp>;
  invoiceLineGroupedByReferenceId?: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
  invoiceLineGroupedByReferenceIdAggregate?: InputMaybe<InvoiceLineGroupedByReferenceIdAggregateBoolExp>;
  mode?: InputMaybe<StringComparisonExp>;
  referenceId?: InputMaybe<StringComparisonExp>;
  relationshipId?: InputMaybe<StringComparisonExp>;
  startingBalance?: InputMaybe<NumericComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  statusTransitions?: InputMaybe<JsonbComparisonExp>;
  subtotal?: InputMaybe<NumericComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** columns and relationships of "invoice_line" */
export type InvoiceLine = {
  __typename?: 'InvoiceLine';
  amount: Maybe<Scalars['numeric']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  period: Maybe<Scalars['jsonb']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

/** columns and relationships of "invoice_line" */
export type InvoiceLinePeriodArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "invoice_line" */
export type InvoiceLineAggregate = {
  __typename?: 'InvoiceLineAggregate';
  aggregate: Maybe<InvoiceLineAggregateFields>;
  nodes: Array<InvoiceLine>;
};

export type InvoiceLineAggregateBoolExp = {
  count?: InputMaybe<InvoiceLineAggregateBoolExpCount>;
};

/** aggregate fields of "invoice_line" */
export type InvoiceLineAggregateFields = {
  __typename?: 'InvoiceLineAggregateFields';
  avg: Maybe<InvoiceLineAvgFields>;
  count: Scalars['Int'];
  max: Maybe<InvoiceLineMaxFields>;
  min: Maybe<InvoiceLineMinFields>;
  stddev: Maybe<InvoiceLineStddevFields>;
  stddevPop: Maybe<InvoiceLineStddevPopFields>;
  stddevSamp: Maybe<InvoiceLineStddevSampFields>;
  sum: Maybe<InvoiceLineSumFields>;
  varPop: Maybe<InvoiceLineVarPopFields>;
  varSamp: Maybe<InvoiceLineVarSampFields>;
  variance: Maybe<InvoiceLineVarianceFields>;
};

/** aggregate fields of "invoice_line" */
export type InvoiceLineAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<InvoiceLineSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invoice_line" */
export type InvoiceLineAggregateOrderBy = {
  avg?: InputMaybe<InvoiceLineAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<InvoiceLineMaxOrderBy>;
  min?: InputMaybe<InvoiceLineMinOrderBy>;
  stddev?: InputMaybe<InvoiceLineStddevOrderBy>;
  stddevPop?: InputMaybe<InvoiceLineStddevPopOrderBy>;
  stddevSamp?: InputMaybe<InvoiceLineStddevSampOrderBy>;
  sum?: InputMaybe<InvoiceLineSumOrderBy>;
  varPop?: InputMaybe<InvoiceLineVarPopOrderBy>;
  varSamp?: InputMaybe<InvoiceLineVarSampOrderBy>;
  variance?: InputMaybe<InvoiceLineVarianceOrderBy>;
};

/** aggregate avg on columns */
export type InvoiceLineAvgFields = {
  __typename?: 'InvoiceLineAvgFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invoice_line" */
export type InvoiceLineAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "invoice_line". All fields are combined with a logical 'AND'. */
export type InvoiceLineBoolExp = {
  _and?: InputMaybe<Array<InvoiceLineBoolExp>>;
  _not?: InputMaybe<InvoiceLineBoolExp>;
  _or?: InputMaybe<Array<InvoiceLineBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currencyCode?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  dgsReferenceId?: InputMaybe<StringComparisonExp>;
  legacyReferenceId?: InputMaybe<IntComparisonExp>;
  mode?: InputMaybe<StringComparisonExp>;
  period?: InputMaybe<JsonbComparisonExp>;
  proration?: InputMaybe<SmallintComparisonExp>;
  quantity?: InputMaybe<IntComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** columns and relationships of "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescription = {
  __typename?: 'InvoiceLineGroupedByDescription';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  invoiceReferenceId: Maybe<Scalars['String']>;
  mode: Maybe<Scalars['String']>;
  period: Maybe<Scalars['jsonb']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['bigint']>;
  relationshipId: Maybe<Scalars['String']>;
  unitPrice: Maybe<Scalars['numeric']>;
};

/** columns and relationships of "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionPeriodArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionAggregate = {
  __typename?: 'InvoiceLineGroupedByDescriptionAggregate';
  aggregate: Maybe<InvoiceLineGroupedByDescriptionAggregateFields>;
  nodes: Array<InvoiceLineGroupedByDescription>;
};

export type InvoiceLineGroupedByDescriptionAggregateBoolExp = {
  count?: InputMaybe<InvoiceLineGroupedByDescriptionAggregateBoolExpCount>;
};

/** aggregate fields of "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionAggregateFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionAggregateFields';
  avg: Maybe<InvoiceLineGroupedByDescriptionAvgFields>;
  count: Scalars['Int'];
  max: Maybe<InvoiceLineGroupedByDescriptionMaxFields>;
  min: Maybe<InvoiceLineGroupedByDescriptionMinFields>;
  stddev: Maybe<InvoiceLineGroupedByDescriptionStddevFields>;
  stddevPop: Maybe<InvoiceLineGroupedByDescriptionStddevPopFields>;
  stddevSamp: Maybe<InvoiceLineGroupedByDescriptionStddevSampFields>;
  sum: Maybe<InvoiceLineGroupedByDescriptionSumFields>;
  varPop: Maybe<InvoiceLineGroupedByDescriptionVarPopFields>;
  varSamp: Maybe<InvoiceLineGroupedByDescriptionVarSampFields>;
  variance: Maybe<InvoiceLineGroupedByDescriptionVarianceFields>;
};

/** aggregate fields of "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionAggregateOrderBy = {
  avg?: InputMaybe<InvoiceLineGroupedByDescriptionAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<InvoiceLineGroupedByDescriptionMaxOrderBy>;
  min?: InputMaybe<InvoiceLineGroupedByDescriptionMinOrderBy>;
  stddev?: InputMaybe<InvoiceLineGroupedByDescriptionStddevOrderBy>;
  stddevPop?: InputMaybe<InvoiceLineGroupedByDescriptionStddevPopOrderBy>;
  stddevSamp?: InputMaybe<InvoiceLineGroupedByDescriptionStddevSampOrderBy>;
  sum?: InputMaybe<InvoiceLineGroupedByDescriptionSumOrderBy>;
  varPop?: InputMaybe<InvoiceLineGroupedByDescriptionVarPopOrderBy>;
  varSamp?: InputMaybe<InvoiceLineGroupedByDescriptionVarSampOrderBy>;
  variance?: InputMaybe<InvoiceLineGroupedByDescriptionVarianceOrderBy>;
};

/** aggregate avg on columns */
export type InvoiceLineGroupedByDescriptionAvgFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionAvgFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "invoice_line_grouped_by_description". All fields are combined with a logical 'AND'. */
export type InvoiceLineGroupedByDescriptionBoolExp = {
  _and?: InputMaybe<Array<InvoiceLineGroupedByDescriptionBoolExp>>;
  _not?: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
  _or?: InputMaybe<Array<InvoiceLineGroupedByDescriptionBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  companyId?: InputMaybe<IntComparisonExp>;
  currencyCode?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  invoiceReferenceId?: InputMaybe<StringComparisonExp>;
  mode?: InputMaybe<StringComparisonExp>;
  period?: InputMaybe<JsonbComparisonExp>;
  proration?: InputMaybe<SmallintComparisonExp>;
  quantity?: InputMaybe<BigintComparisonExp>;
  relationshipId?: InputMaybe<StringComparisonExp>;
  unitPrice?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type InvoiceLineGroupedByDescriptionMaxFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionMaxFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  invoiceReferenceId: Maybe<Scalars['String']>;
  mode: Maybe<Scalars['String']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['bigint']>;
  relationshipId: Maybe<Scalars['String']>;
  unitPrice: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type InvoiceLineGroupedByDescriptionMinFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionMinFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  invoiceReferenceId: Maybe<Scalars['String']>;
  mode: Maybe<Scalars['String']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['bigint']>;
  relationshipId: Maybe<Scalars['String']>;
  unitPrice: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "invoice_line_grouped_by_description". */
export type InvoiceLineGroupedByDescriptionOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  period?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** select columns of table "invoice_line_grouped_by_description" */
export const invoiceLineGroupedByDescriptionSelectColumn = {
  /** column name */
  Amount: 'amount',
  /** column name */
  CompanyId: 'companyId',
  /** column name */
  CurrencyCode: 'currencyCode',
  /** column name */
  Description: 'description',
  /** column name */
  InvoiceReferenceId: 'invoiceReferenceId',
  /** column name */
  Mode: 'mode',
  /** column name */
  Period: 'period',
  /** column name */
  Proration: 'proration',
  /** column name */
  Quantity: 'quantity',
  /** column name */
  RelationshipId: 'relationshipId',
  /** column name */
  UnitPrice: 'unitPrice',
} as const;

export type InvoiceLineGroupedByDescriptionSelectColumn =
  (typeof invoiceLineGroupedByDescriptionSelectColumn)[keyof typeof invoiceLineGroupedByDescriptionSelectColumn];
/** aggregate stddev on columns */
export type InvoiceLineGroupedByDescriptionStddevFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionStddevFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type InvoiceLineGroupedByDescriptionStddevPopFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionStddevPopFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type InvoiceLineGroupedByDescriptionStddevSampFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionStddevSampFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: InvoiceLineGroupedByDescriptionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type InvoiceLineGroupedByDescriptionStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']>;
  companyId?: InputMaybe<Scalars['Int']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  invoiceReferenceId?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['jsonb']>;
  proration?: InputMaybe<Scalars['smallint']>;
  quantity?: InputMaybe<Scalars['bigint']>;
  relationshipId?: InputMaybe<Scalars['String']>;
  unitPrice?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type InvoiceLineGroupedByDescriptionSumFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionSumFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['bigint']>;
  unitPrice: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type InvoiceLineGroupedByDescriptionVarPopFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionVarPopFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type InvoiceLineGroupedByDescriptionVarSampFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionVarSampFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type InvoiceLineGroupedByDescriptionVarianceFields = {
  __typename?: 'InvoiceLineGroupedByDescriptionVarianceFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  unitPrice: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invoice_line_grouped_by_description" */
export type InvoiceLineGroupedByDescriptionVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  unitPrice?: InputMaybe<OrderBy>;
};

/** columns and relationships of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceId = {
  __typename?: 'InvoiceLineGroupedByReferenceId';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  /** An array relationship */
  invoiceLinesDgs: Array<InvoiceLine>;
  /** An aggregate relationship */
  invoiceLinesDgsAggregate: InvoiceLineAggregate;
  /** An array relationship */
  invoiceLinesLegacy: Array<InvoiceLine>;
  /** An aggregate relationship */
  invoiceLinesLegacyAggregate: InvoiceLineAggregate;
  invoiceReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  vendorOrderId: Maybe<Scalars['String']>;
};

/** columns and relationships of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdInvoiceLinesDgsArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

/** columns and relationships of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdInvoiceLinesDgsAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

/** columns and relationships of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdInvoiceLinesLegacyArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

/** columns and relationships of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdInvoiceLinesLegacyAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

/** aggregated selection of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdAggregate = {
  __typename?: 'InvoiceLineGroupedByReferenceIdAggregate';
  aggregate: Maybe<InvoiceLineGroupedByReferenceIdAggregateFields>;
  nodes: Array<InvoiceLineGroupedByReferenceId>;
};

export type InvoiceLineGroupedByReferenceIdAggregateBoolExp = {
  count?: InputMaybe<InvoiceLineGroupedByReferenceIdAggregateBoolExpCount>;
};

/** aggregate fields of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdAggregateFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdAggregateFields';
  avg: Maybe<InvoiceLineGroupedByReferenceIdAvgFields>;
  count: Scalars['Int'];
  max: Maybe<InvoiceLineGroupedByReferenceIdMaxFields>;
  min: Maybe<InvoiceLineGroupedByReferenceIdMinFields>;
  stddev: Maybe<InvoiceLineGroupedByReferenceIdStddevFields>;
  stddevPop: Maybe<InvoiceLineGroupedByReferenceIdStddevPopFields>;
  stddevSamp: Maybe<InvoiceLineGroupedByReferenceIdStddevSampFields>;
  sum: Maybe<InvoiceLineGroupedByReferenceIdSumFields>;
  varPop: Maybe<InvoiceLineGroupedByReferenceIdVarPopFields>;
  varSamp: Maybe<InvoiceLineGroupedByReferenceIdVarSampFields>;
  variance: Maybe<InvoiceLineGroupedByReferenceIdVarianceFields>;
};

/** aggregate fields of "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdAggregateOrderBy = {
  avg?: InputMaybe<InvoiceLineGroupedByReferenceIdAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<InvoiceLineGroupedByReferenceIdMaxOrderBy>;
  min?: InputMaybe<InvoiceLineGroupedByReferenceIdMinOrderBy>;
  stddev?: InputMaybe<InvoiceLineGroupedByReferenceIdStddevOrderBy>;
  stddevPop?: InputMaybe<InvoiceLineGroupedByReferenceIdStddevPopOrderBy>;
  stddevSamp?: InputMaybe<InvoiceLineGroupedByReferenceIdStddevSampOrderBy>;
  sum?: InputMaybe<InvoiceLineGroupedByReferenceIdSumOrderBy>;
  varPop?: InputMaybe<InvoiceLineGroupedByReferenceIdVarPopOrderBy>;
  varSamp?: InputMaybe<InvoiceLineGroupedByReferenceIdVarSampOrderBy>;
  variance?: InputMaybe<InvoiceLineGroupedByReferenceIdVarianceOrderBy>;
};

/** aggregate avg on columns */
export type InvoiceLineGroupedByReferenceIdAvgFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdAvgFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "invoice_line_grouped_by_reference_id". All fields are combined with a logical 'AND'. */
export type InvoiceLineGroupedByReferenceIdBoolExp = {
  _and?: InputMaybe<Array<InvoiceLineGroupedByReferenceIdBoolExp>>;
  _not?: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
  _or?: InputMaybe<Array<InvoiceLineGroupedByReferenceIdBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  companyId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currencyCode?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  dgsReferenceId?: InputMaybe<StringComparisonExp>;
  invoiceLinesDgs?: InputMaybe<InvoiceLineBoolExp>;
  invoiceLinesDgsAggregate?: InputMaybe<InvoiceLineAggregateBoolExp>;
  invoiceLinesLegacy?: InputMaybe<InvoiceLineBoolExp>;
  invoiceLinesLegacyAggregate?: InputMaybe<InvoiceLineAggregateBoolExp>;
  invoiceReferenceId?: InputMaybe<StringComparisonExp>;
  legacyReferenceId?: InputMaybe<IntComparisonExp>;
  mode?: InputMaybe<StringComparisonExp>;
  orderId?: InputMaybe<StringComparisonExp>;
  relationshipId?: InputMaybe<StringComparisonExp>;
  vendorOrderId?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type InvoiceLineGroupedByReferenceIdMaxFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdMaxFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  invoiceReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  vendorOrderId: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  vendorOrderId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type InvoiceLineGroupedByReferenceIdMinFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdMinFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  invoiceReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  vendorOrderId: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  vendorOrderId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "invoice_line_grouped_by_reference_id". */
export type InvoiceLineGroupedByReferenceIdOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  invoiceLinesDgsAggregate?: InputMaybe<InvoiceLineAggregateOrderBy>;
  invoiceLinesLegacyAggregate?: InputMaybe<InvoiceLineAggregateOrderBy>;
  invoiceReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  vendorOrderId?: InputMaybe<OrderBy>;
};

/** select columns of table "invoice_line_grouped_by_reference_id" */
export const invoiceLineGroupedByReferenceIdSelectColumn = {
  /** column name */
  Amount: 'amount',
  /** column name */
  CompanyId: 'companyId',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CurrencyCode: 'currencyCode',
  /** column name */
  Description: 'description',
  /** column name */
  DgsReferenceId: 'dgsReferenceId',
  /** column name */
  InvoiceReferenceId: 'invoiceReferenceId',
  /** column name */
  LegacyReferenceId: 'legacyReferenceId',
  /** column name */
  Mode: 'mode',
  /** column name */
  OrderId: 'orderId',
  /** column name */
  RelationshipId: 'relationshipId',
  /** column name */
  VendorOrderId: 'vendorOrderId',
} as const;

export type InvoiceLineGroupedByReferenceIdSelectColumn =
  (typeof invoiceLineGroupedByReferenceIdSelectColumn)[keyof typeof invoiceLineGroupedByReferenceIdSelectColumn];
/** aggregate stddev on columns */
export type InvoiceLineGroupedByReferenceIdStddevFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdStddevFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type InvoiceLineGroupedByReferenceIdStddevPopFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdStddevPopFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type InvoiceLineGroupedByReferenceIdStddevSampFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdStddevSampFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: InvoiceLineGroupedByReferenceIdStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type InvoiceLineGroupedByReferenceIdStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dgsReferenceId?: InputMaybe<Scalars['String']>;
  invoiceReferenceId?: InputMaybe<Scalars['String']>;
  legacyReferenceId?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  relationshipId?: InputMaybe<Scalars['String']>;
  vendorOrderId?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type InvoiceLineGroupedByReferenceIdSumFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdSumFields';
  amount: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type InvoiceLineGroupedByReferenceIdVarPopFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdVarPopFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type InvoiceLineGroupedByReferenceIdVarSampFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdVarSampFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type InvoiceLineGroupedByReferenceIdVarianceFields = {
  __typename?: 'InvoiceLineGroupedByReferenceIdVarianceFields';
  amount: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invoice_line_grouped_by_reference_id" */
export type InvoiceLineGroupedByReferenceIdVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
};

/** aggregate max on columns */
export type InvoiceLineMaxFields = {
  __typename?: 'InvoiceLineMaxFields';
  amount: Maybe<Scalars['numeric']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "invoice_line" */
export type InvoiceLineMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type InvoiceLineMinFields = {
  __typename?: 'InvoiceLineMinFields';
  amount: Maybe<Scalars['numeric']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  currencyCode: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  dgsReferenceId: Maybe<Scalars['String']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  mode: Maybe<Scalars['String']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['Int']>;
  type: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "invoice_line" */
export type InvoiceLineMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "invoice_line". */
export type InvoiceLineOrderBy = {
  amount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  dgsReferenceId?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  period?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "invoice_line" */
export const invoiceLineSelectColumn = {
  /** column name */
  Amount: 'amount',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CurrencyCode: 'currencyCode',
  /** column name */
  Description: 'description',
  /** column name */
  DgsReferenceId: 'dgsReferenceId',
  /** column name */
  LegacyReferenceId: 'legacyReferenceId',
  /** column name */
  Mode: 'mode',
  /** column name */
  Period: 'period',
  /** column name */
  Proration: 'proration',
  /** column name */
  Quantity: 'quantity',
  /** column name */
  Type: 'type',
} as const;

export type InvoiceLineSelectColumn =
  (typeof invoiceLineSelectColumn)[keyof typeof invoiceLineSelectColumn];
/** aggregate stddev on columns */
export type InvoiceLineStddevFields = {
  __typename?: 'InvoiceLineStddevFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invoice_line" */
export type InvoiceLineStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type InvoiceLineStddevPopFields = {
  __typename?: 'InvoiceLineStddevPopFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "invoice_line" */
export type InvoiceLineStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type InvoiceLineStddevSampFields = {
  __typename?: 'InvoiceLineStddevSampFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "invoice_line" */
export type InvoiceLineStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "invoice_line" */
export type InvoiceLineStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: InvoiceLineStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type InvoiceLineStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  dgsReferenceId?: InputMaybe<Scalars['String']>;
  legacyReferenceId?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['jsonb']>;
  proration?: InputMaybe<Scalars['smallint']>;
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type InvoiceLineSumFields = {
  __typename?: 'InvoiceLineSumFields';
  amount: Maybe<Scalars['numeric']>;
  legacyReferenceId: Maybe<Scalars['Int']>;
  proration: Maybe<Scalars['smallint']>;
  quantity: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "invoice_line" */
export type InvoiceLineSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type InvoiceLineVarPopFields = {
  __typename?: 'InvoiceLineVarPopFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "invoice_line" */
export type InvoiceLineVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type InvoiceLineVarSampFields = {
  __typename?: 'InvoiceLineVarSampFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "invoice_line" */
export type InvoiceLineVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type InvoiceLineVarianceFields = {
  __typename?: 'InvoiceLineVarianceFields';
  amount: Maybe<Scalars['Float']>;
  legacyReferenceId: Maybe<Scalars['Float']>;
  proration: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invoice_line" */
export type InvoiceLineVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  legacyReferenceId?: InputMaybe<OrderBy>;
  proration?: InputMaybe<OrderBy>;
  quantity?: InputMaybe<OrderBy>;
};

/** aggregate max on columns */
export type InvoiceMaxFields = {
  __typename?: 'InvoiceMaxFields';
  amountDue: Maybe<Scalars['numeric']>;
  amountPaid: Maybe<Scalars['numeric']>;
  appliedBalance: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamp']>;
  currencyCode: Maybe<Scalars['String']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountName: Maybe<Scalars['String']>;
  dueDate: Maybe<Scalars['timestamp']>;
  endingBalance: Maybe<Scalars['Int']>;
  hostedInvoiceUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  mode: Maybe<Scalars['String']>;
  referenceId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  startingBalance: Maybe<Scalars['numeric']>;
  status: Maybe<Scalars['String']>;
  subtotal: Maybe<Scalars['numeric']>;
  total: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "invoice" */
export type InvoiceMaxOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  discountName?: InputMaybe<OrderBy>;
  dueDate?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  hostedInvoiceUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  referenceId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type InvoiceMinFields = {
  __typename?: 'InvoiceMinFields';
  amountDue: Maybe<Scalars['numeric']>;
  amountPaid: Maybe<Scalars['numeric']>;
  appliedBalance: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamp']>;
  currencyCode: Maybe<Scalars['String']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountName: Maybe<Scalars['String']>;
  dueDate: Maybe<Scalars['timestamp']>;
  endingBalance: Maybe<Scalars['Int']>;
  hostedInvoiceUrl: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  mode: Maybe<Scalars['String']>;
  referenceId: Maybe<Scalars['String']>;
  relationshipId: Maybe<Scalars['String']>;
  startingBalance: Maybe<Scalars['numeric']>;
  status: Maybe<Scalars['String']>;
  subtotal: Maybe<Scalars['numeric']>;
  total: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "invoice" */
export type InvoiceMinOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  discountName?: InputMaybe<OrderBy>;
  dueDate?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  hostedInvoiceUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mode?: InputMaybe<OrderBy>;
  referenceId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "invoice". */
export type InvoiceOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyCode?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  discountName?: InputMaybe<OrderBy>;
  dueDate?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  hostedInvoiceUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invoiceLineGroupedByDescriptionAggregate?: InputMaybe<InvoiceLineGroupedByDescriptionAggregateOrderBy>;
  invoiceLineGroupedByReferenceIdAggregate?: InputMaybe<InvoiceLineGroupedByReferenceIdAggregateOrderBy>;
  mode?: InputMaybe<OrderBy>;
  referenceId?: InputMaybe<OrderBy>;
  relationshipId?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  statusTransitions?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "invoice" */
export const invoiceSelectColumn = {
  /** column name */
  AmountDue: 'amountDue',
  /** column name */
  AmountPaid: 'amountPaid',
  /** column name */
  AppliedBalance: 'appliedBalance',
  /** column name */
  CompanyId: 'companyId',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  CurrencyCode: 'currencyCode',
  /** column name */
  DiscountAmount: 'discountAmount',
  /** column name */
  DiscountName: 'discountName',
  /** column name */
  DueDate: 'dueDate',
  /** column name */
  EndingBalance: 'endingBalance',
  /** column name */
  HostedInvoiceUrl: 'hostedInvoiceUrl',
  /** column name */
  Id: 'id',
  /** column name */
  Mode: 'mode',
  /** column name */
  ReferenceId: 'referenceId',
  /** column name */
  RelationshipId: 'relationshipId',
  /** column name */
  StartingBalance: 'startingBalance',
  /** column name */
  Status: 'status',
  /** column name */
  StatusTransitions: 'statusTransitions',
  /** column name */
  Subtotal: 'subtotal',
  /** column name */
  Total: 'total',
} as const;

export type InvoiceSelectColumn =
  (typeof invoiceSelectColumn)[keyof typeof invoiceSelectColumn];
/** aggregate stddev on columns */
export type InvoiceStddevFields = {
  __typename?: 'InvoiceStddevFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invoice" */
export type InvoiceStddevOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type InvoiceStddevPopFields = {
  __typename?: 'InvoiceStddevPopFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by stddevPop() on columns of table "invoice" */
export type InvoiceStddevPopOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type InvoiceStddevSampFields = {
  __typename?: 'InvoiceStddevSampFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by stddevSamp() on columns of table "invoice" */
export type InvoiceStddevSampOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "invoice" */
export type InvoiceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: InvoiceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type InvoiceStreamCursorValueInput = {
  amountDue?: InputMaybe<Scalars['numeric']>;
  amountPaid?: InputMaybe<Scalars['numeric']>;
  appliedBalance?: InputMaybe<Scalars['numeric']>;
  companyId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  currencyCode?: InputMaybe<Scalars['String']>;
  discountAmount?: InputMaybe<Scalars['numeric']>;
  discountName?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['timestamp']>;
  endingBalance?: InputMaybe<Scalars['Int']>;
  hostedInvoiceUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<Scalars['String']>;
  referenceId?: InputMaybe<Scalars['String']>;
  relationshipId?: InputMaybe<Scalars['String']>;
  startingBalance?: InputMaybe<Scalars['numeric']>;
  status?: InputMaybe<Scalars['String']>;
  statusTransitions?: InputMaybe<Scalars['jsonb']>;
  subtotal?: InputMaybe<Scalars['numeric']>;
  total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type InvoiceSumFields = {
  __typename?: 'InvoiceSumFields';
  amountDue: Maybe<Scalars['numeric']>;
  amountPaid: Maybe<Scalars['numeric']>;
  appliedBalance: Maybe<Scalars['numeric']>;
  companyId: Maybe<Scalars['Int']>;
  discountAmount: Maybe<Scalars['numeric']>;
  endingBalance: Maybe<Scalars['Int']>;
  startingBalance: Maybe<Scalars['numeric']>;
  subtotal: Maybe<Scalars['numeric']>;
  total: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "invoice" */
export type InvoiceSumOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type InvoiceVarPopFields = {
  __typename?: 'InvoiceVarPopFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by varPop() on columns of table "invoice" */
export type InvoiceVarPopOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type InvoiceVarSampFields = {
  __typename?: 'InvoiceVarSampFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by varSamp() on columns of table "invoice" */
export type InvoiceVarSampOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type InvoiceVarianceFields = {
  __typename?: 'InvoiceVarianceFields';
  amountDue: Maybe<Scalars['Float']>;
  amountPaid: Maybe<Scalars['Float']>;
  appliedBalance: Maybe<Scalars['Float']>;
  companyId: Maybe<Scalars['Float']>;
  discountAmount: Maybe<Scalars['Float']>;
  endingBalance: Maybe<Scalars['Float']>;
  startingBalance: Maybe<Scalars['Float']>;
  subtotal: Maybe<Scalars['Float']>;
  total: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invoice" */
export type InvoiceVarianceOrderBy = {
  amountDue?: InputMaybe<OrderBy>;
  amountPaid?: InputMaybe<OrderBy>;
  appliedBalance?: InputMaybe<OrderBy>;
  companyId?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  endingBalance?: InputMaybe<OrderBy>;
  startingBalance?: InputMaybe<OrderBy>;
  subtotal?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export const orderBy = {
  /** in ascending order, nulls last */
  Asc: 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst: 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast: 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc: 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst: 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast: 'DESC_NULLS_LAST',
} as const;

export type OrderBy = (typeof orderBy)[keyof typeof orderBy];
/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'Organization';
  companyId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  /** An array relationship */
  invoices: Array<Invoice>;
  /** An aggregate relationship */
  invoicesAggregate: InvoiceAggregate;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Scalars['String']>;
  references: Maybe<Scalars['jsonb']>;
  storeId: Maybe<Scalars['Int']>;
  stripeCustomerId: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** columns and relationships of "organization" */
export type OrganizationInvoicesArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

/** columns and relationships of "organization" */
export type OrganizationInvoicesAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

/** columns and relationships of "organization" */
export type OrganizationReferencesArgs = {
  path: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "organization" */
export type OrganizationAggregate = {
  __typename?: 'OrganizationAggregate';
  aggregate: Maybe<OrganizationAggregateFields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type OrganizationAggregateFields = {
  __typename?: 'OrganizationAggregateFields';
  avg: Maybe<OrganizationAvgFields>;
  count: Scalars['Int'];
  max: Maybe<OrganizationMaxFields>;
  min: Maybe<OrganizationMinFields>;
  stddev: Maybe<OrganizationStddevFields>;
  stddevPop: Maybe<OrganizationStddevPopFields>;
  stddevSamp: Maybe<OrganizationStddevSampFields>;
  sum: Maybe<OrganizationSumFields>;
  varPop: Maybe<OrganizationVarPopFields>;
  varSamp: Maybe<OrganizationVarSampFields>;
  variance: Maybe<OrganizationVarianceFields>;
};

/** aggregate fields of "organization" */
export type OrganizationAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<OrganizationSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type OrganizationAvgFields = {
  __typename?: 'OrganizationAvgFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type OrganizationBoolExp = {
  _and?: InputMaybe<Array<OrganizationBoolExp>>;
  _not?: InputMaybe<OrganizationBoolExp>;
  _or?: InputMaybe<Array<OrganizationBoolExp>>;
  companyId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  invoices?: InputMaybe<InvoiceBoolExp>;
  invoicesAggregate?: InputMaybe<InvoiceAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  parent?: InputMaybe<StringComparisonExp>;
  references?: InputMaybe<JsonbComparisonExp>;
  storeId?: InputMaybe<IntComparisonExp>;
  stripeCustomerId?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type OrganizationMaxFields = {
  __typename?: 'OrganizationMaxFields';
  companyId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
  stripeCustomerId: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type OrganizationMinFields = {
  __typename?: 'OrganizationMinFields';
  companyId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
  stripeCustomerId: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "organization". */
export type OrganizationOrderBy = {
  companyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  invoicesAggregate?: InputMaybe<InvoiceAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  parent?: InputMaybe<OrderBy>;
  references?: InputMaybe<OrderBy>;
  storeId?: InputMaybe<OrderBy>;
  stripeCustomerId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "organization" */
export const organizationSelectColumn = {
  /** column name */
  CompanyId: 'companyId',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Parent: 'parent',
  /** column name */
  References: 'references',
  /** column name */
  StoreId: 'storeId',
  /** column name */
  StripeCustomerId: 'stripeCustomerId',
  /** column name */
  Type: 'type',
} as const;

export type OrganizationSelectColumn =
  (typeof organizationSelectColumn)[keyof typeof organizationSelectColumn];
/** aggregate stddev on columns */
export type OrganizationStddevFields = {
  __typename?: 'OrganizationStddevFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddevPop on columns */
export type OrganizationStddevPopFields = {
  __typename?: 'OrganizationStddevPopFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddevSamp on columns */
export type OrganizationStddevSampFields = {
  __typename?: 'OrganizationStddevSampFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "organization" */
export type OrganizationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: OrganizationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OrganizationStreamCursorValueInput = {
  companyId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  references?: InputMaybe<Scalars['jsonb']>;
  storeId?: InputMaybe<Scalars['Int']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type OrganizationSumFields = {
  __typename?: 'OrganizationSumFields';
  companyId: Maybe<Scalars['Int']>;
  storeId: Maybe<Scalars['Int']>;
};

/** aggregate varPop on columns */
export type OrganizationVarPopFields = {
  __typename?: 'OrganizationVarPopFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate varSamp on columns */
export type OrganizationVarSampFields = {
  __typename?: 'OrganizationVarSampFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type OrganizationVarianceFields = {
  __typename?: 'OrganizationVarianceFields';
  companyId: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** columns and relationships of "promo_code" */
export type PromoCode = {
  __typename?: 'PromoCode';
  appliesTo: Maybe<Scalars['String']>;
  categoryToApply: Maybe<Scalars['String']>;
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamp']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountPercentage: Maybe<Scalars['numeric']>;
  endsAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  maxUsageLimit: Maybe<Scalars['Int']>;
  maxUsagePerUser: Maybe<Scalars['Int']>;
  minimumOrderAmount: Maybe<Scalars['numeric']>;
  skuToApply: Maybe<Scalars['String']>;
  startsAt: Maybe<Scalars['timestamp']>;
  status: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
  usageCount: Maybe<Scalars['Int']>;
};

/** aggregated selection of "promo_code" */
export type PromoCodeAggregate = {
  __typename?: 'PromoCodeAggregate';
  aggregate: Maybe<PromoCodeAggregateFields>;
  nodes: Array<PromoCode>;
};

/** aggregate fields of "promo_code" */
export type PromoCodeAggregateFields = {
  __typename?: 'PromoCodeAggregateFields';
  avg: Maybe<PromoCodeAvgFields>;
  count: Scalars['Int'];
  max: Maybe<PromoCodeMaxFields>;
  min: Maybe<PromoCodeMinFields>;
  stddev: Maybe<PromoCodeStddevFields>;
  stddevPop: Maybe<PromoCodeStddevPopFields>;
  stddevSamp: Maybe<PromoCodeStddevSampFields>;
  sum: Maybe<PromoCodeSumFields>;
  varPop: Maybe<PromoCodeVarPopFields>;
  varSamp: Maybe<PromoCodeVarSampFields>;
  variance: Maybe<PromoCodeVarianceFields>;
};

/** aggregate fields of "promo_code" */
export type PromoCodeAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<PromoCodeSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type PromoCodeAvgFields = {
  __typename?: 'PromoCodeAvgFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "promo_code". All fields are combined with a logical 'AND'. */
export type PromoCodeBoolExp = {
  _and?: InputMaybe<Array<PromoCodeBoolExp>>;
  _not?: InputMaybe<PromoCodeBoolExp>;
  _or?: InputMaybe<Array<PromoCodeBoolExp>>;
  appliesTo?: InputMaybe<StringComparisonExp>;
  categoryToApply?: InputMaybe<StringComparisonExp>;
  code?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestampComparisonExp>;
  discountAmount?: InputMaybe<NumericComparisonExp>;
  discountPercentage?: InputMaybe<NumericComparisonExp>;
  endsAt?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  maxUsageLimit?: InputMaybe<IntComparisonExp>;
  maxUsagePerUser?: InputMaybe<IntComparisonExp>;
  minimumOrderAmount?: InputMaybe<NumericComparisonExp>;
  skuToApply?: InputMaybe<StringComparisonExp>;
  startsAt?: InputMaybe<TimestampComparisonExp>;
  status?: InputMaybe<StringComparisonExp>;
  storeId?: InputMaybe<IntComparisonExp>;
  usageCount?: InputMaybe<IntComparisonExp>;
};

/** input type for incrementing numeric columns in table "promo_code" */
export type PromoCodeIncInput = {
  discountAmount?: InputMaybe<Scalars['numeric']>;
  discountPercentage?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  maxUsageLimit?: InputMaybe<Scalars['Int']>;
  maxUsagePerUser?: InputMaybe<Scalars['Int']>;
  minimumOrderAmount?: InputMaybe<Scalars['numeric']>;
  storeId?: InputMaybe<Scalars['Int']>;
  usageCount?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "promo_code" */
export type PromoCodeInsertInput = {
  appliesTo?: InputMaybe<Scalars['String']>;
  categoryToApply?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  discountAmount?: InputMaybe<Scalars['numeric']>;
  discountPercentage?: InputMaybe<Scalars['numeric']>;
  endsAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  maxUsageLimit?: InputMaybe<Scalars['Int']>;
  maxUsagePerUser?: InputMaybe<Scalars['Int']>;
  minimumOrderAmount?: InputMaybe<Scalars['numeric']>;
  skuToApply?: InputMaybe<Scalars['String']>;
  startsAt?: InputMaybe<Scalars['timestamp']>;
  status?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
  usageCount?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type PromoCodeMaxFields = {
  __typename?: 'PromoCodeMaxFields';
  appliesTo: Maybe<Scalars['String']>;
  categoryToApply: Maybe<Scalars['String']>;
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamp']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountPercentage: Maybe<Scalars['numeric']>;
  endsAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  maxUsageLimit: Maybe<Scalars['Int']>;
  maxUsagePerUser: Maybe<Scalars['Int']>;
  minimumOrderAmount: Maybe<Scalars['numeric']>;
  skuToApply: Maybe<Scalars['String']>;
  startsAt: Maybe<Scalars['timestamp']>;
  status: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
  usageCount: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type PromoCodeMinFields = {
  __typename?: 'PromoCodeMinFields';
  appliesTo: Maybe<Scalars['String']>;
  categoryToApply: Maybe<Scalars['String']>;
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamp']>;
  discountAmount: Maybe<Scalars['numeric']>;
  discountPercentage: Maybe<Scalars['numeric']>;
  endsAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  maxUsageLimit: Maybe<Scalars['Int']>;
  maxUsagePerUser: Maybe<Scalars['Int']>;
  minimumOrderAmount: Maybe<Scalars['numeric']>;
  skuToApply: Maybe<Scalars['String']>;
  startsAt: Maybe<Scalars['timestamp']>;
  status: Maybe<Scalars['String']>;
  storeId: Maybe<Scalars['Int']>;
  usageCount: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "promo_code" */
export type PromoCodeMutationResponse = {
  __typename?: 'PromoCodeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PromoCode>;
};

/** Ordering options when selecting data from "promo_code". */
export type PromoCodeOrderBy = {
  appliesTo?: InputMaybe<OrderBy>;
  categoryToApply?: InputMaybe<OrderBy>;
  code?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  discountAmount?: InputMaybe<OrderBy>;
  discountPercentage?: InputMaybe<OrderBy>;
  endsAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  maxUsageLimit?: InputMaybe<OrderBy>;
  maxUsagePerUser?: InputMaybe<OrderBy>;
  minimumOrderAmount?: InputMaybe<OrderBy>;
  skuToApply?: InputMaybe<OrderBy>;
  startsAt?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  storeId?: InputMaybe<OrderBy>;
  usageCount?: InputMaybe<OrderBy>;
};

/** select columns of table "promo_code" */
export const promoCodeSelectColumn = {
  /** column name */
  AppliesTo: 'appliesTo',
  /** column name */
  CategoryToApply: 'categoryToApply',
  /** column name */
  Code: 'code',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  DiscountAmount: 'discountAmount',
  /** column name */
  DiscountPercentage: 'discountPercentage',
  /** column name */
  EndsAt: 'endsAt',
  /** column name */
  Id: 'id',
  /** column name */
  MaxUsageLimit: 'maxUsageLimit',
  /** column name */
  MaxUsagePerUser: 'maxUsagePerUser',
  /** column name */
  MinimumOrderAmount: 'minimumOrderAmount',
  /** column name */
  SkuToApply: 'skuToApply',
  /** column name */
  StartsAt: 'startsAt',
  /** column name */
  Status: 'status',
  /** column name */
  StoreId: 'storeId',
  /** column name */
  UsageCount: 'usageCount',
} as const;

export type PromoCodeSelectColumn =
  (typeof promoCodeSelectColumn)[keyof typeof promoCodeSelectColumn];
/** input type for updating data in table "promo_code" */
export type PromoCodeSetInput = {
  appliesTo?: InputMaybe<Scalars['String']>;
  categoryToApply?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  discountAmount?: InputMaybe<Scalars['numeric']>;
  discountPercentage?: InputMaybe<Scalars['numeric']>;
  endsAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  maxUsageLimit?: InputMaybe<Scalars['Int']>;
  maxUsagePerUser?: InputMaybe<Scalars['Int']>;
  minimumOrderAmount?: InputMaybe<Scalars['numeric']>;
  skuToApply?: InputMaybe<Scalars['String']>;
  startsAt?: InputMaybe<Scalars['timestamp']>;
  status?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
  usageCount?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type PromoCodeStddevFields = {
  __typename?: 'PromoCodeStddevFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** aggregate stddevPop on columns */
export type PromoCodeStddevPopFields = {
  __typename?: 'PromoCodeStddevPopFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** aggregate stddevSamp on columns */
export type PromoCodeStddevSampFields = {
  __typename?: 'PromoCodeStddevSampFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "promo_code" */
export type PromoCodeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PromoCodeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PromoCodeStreamCursorValueInput = {
  appliesTo?: InputMaybe<Scalars['String']>;
  categoryToApply?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  discountAmount?: InputMaybe<Scalars['numeric']>;
  discountPercentage?: InputMaybe<Scalars['numeric']>;
  endsAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  maxUsageLimit?: InputMaybe<Scalars['Int']>;
  maxUsagePerUser?: InputMaybe<Scalars['Int']>;
  minimumOrderAmount?: InputMaybe<Scalars['numeric']>;
  skuToApply?: InputMaybe<Scalars['String']>;
  startsAt?: InputMaybe<Scalars['timestamp']>;
  status?: InputMaybe<Scalars['String']>;
  storeId?: InputMaybe<Scalars['Int']>;
  usageCount?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type PromoCodeSumFields = {
  __typename?: 'PromoCodeSumFields';
  discountAmount: Maybe<Scalars['numeric']>;
  discountPercentage: Maybe<Scalars['numeric']>;
  id: Maybe<Scalars['Int']>;
  maxUsageLimit: Maybe<Scalars['Int']>;
  maxUsagePerUser: Maybe<Scalars['Int']>;
  minimumOrderAmount: Maybe<Scalars['numeric']>;
  storeId: Maybe<Scalars['Int']>;
  usageCount: Maybe<Scalars['Int']>;
};

export type PromoCodeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PromoCodeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PromoCodeSetInput>;
  /** filter the rows which have to be updated */
  where: PromoCodeBoolExp;
};

/** aggregate varPop on columns */
export type PromoCodeVarPopFields = {
  __typename?: 'PromoCodeVarPopFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** aggregate varSamp on columns */
export type PromoCodeVarSampFields = {
  __typename?: 'PromoCodeVarSampFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type PromoCodeVarianceFields = {
  __typename?: 'PromoCodeVarianceFields';
  discountAmount: Maybe<Scalars['Float']>;
  discountPercentage: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  maxUsageLimit: Maybe<Scalars['Float']>;
  maxUsagePerUser: Maybe<Scalars['Float']>;
  minimumOrderAmount: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
  usageCount: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type SmallintComparisonExp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type InvoiceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InvoiceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<InvoiceBoolExp>;
  predicate: IntComparisonExp;
};

export type InvoiceLineAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InvoiceLineSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<InvoiceLineBoolExp>;
  predicate: IntComparisonExp;
};

export type InvoiceLineGroupedByDescriptionAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
  predicate: IntComparisonExp;
};

export type InvoiceLineGroupedByReferenceIdAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "promo_code" */
  deletePromoCode: Maybe<PromoCodeMutationResponse>;
  /** insert data into the table: "promo_code" */
  insertPromoCode: Maybe<PromoCodeMutationResponse>;
  /** insert a single row into the table: "promo_code" */
  insertPromoCodeOne: Maybe<PromoCode>;
  /** update data of the table: "promo_code" */
  updatePromoCode: Maybe<PromoCodeMutationResponse>;
  /** update multiples rows of table: "promo_code" */
  updatePromoCodeMany: Maybe<Array<Maybe<PromoCodeMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeletePromoCodeArgs = {
  where: PromoCodeBoolExp;
};

/** mutation root */
export type Mutation_RootInsertPromoCodeArgs = {
  objects: Array<PromoCodeInsertInput>;
};

/** mutation root */
export type Mutation_RootInsertPromoCodeOneArgs = {
  object: PromoCodeInsertInput;
};

/** mutation root */
export type Mutation_RootUpdatePromoCodeArgs = {
  _inc: InputMaybe<PromoCodeIncInput>;
  _set: InputMaybe<PromoCodeSetInput>;
  where: PromoCodeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdatePromoCodeManyArgs = {
  updates: Array<PromoCodeUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "invoice" */
  invoice: Array<Invoice>;
  /** fetch aggregated fields from the table: "invoice" */
  invoiceAggregate: InvoiceAggregate;
  /** fetch data from the table: "invoice_line" */
  invoiceLine: Array<InvoiceLine>;
  /** fetch aggregated fields from the table: "invoice_line" */
  invoiceLineAggregate: InvoiceLineAggregate;
  /** An array relationship */
  invoiceLineGroupedByDescription: Array<InvoiceLineGroupedByDescription>;
  /** An aggregate relationship */
  invoiceLineGroupedByDescriptionAggregate: InvoiceLineGroupedByDescriptionAggregate;
  /** fetch data from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceId: Array<InvoiceLineGroupedByReferenceId>;
  /** fetch aggregated fields from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceIdAggregate: InvoiceLineGroupedByReferenceIdAggregate;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organizationAggregate: OrganizationAggregate;
  /** fetch data from the table: "promo_code" */
  promoCode: Array<PromoCode>;
  /** fetch aggregated fields from the table: "promo_code" */
  promoCodeAggregate: PromoCodeAggregate;
};

export type Query_RootInvoiceArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

export type Query_RootInvoiceAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

export type Query_RootInvoiceLineArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

export type Query_RootInvoiceLineAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

export type Query_RootInvoiceLineGroupedByDescriptionArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

export type Query_RootInvoiceLineGroupedByDescriptionAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

export type Query_RootInvoiceLineGroupedByReferenceIdArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

export type Query_RootInvoiceLineGroupedByReferenceIdAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

export type Query_RootOrganizationArgs = {
  distinctOn: InputMaybe<Array<OrganizationSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<OrganizationOrderBy>>;
  where: InputMaybe<OrganizationBoolExp>;
};

export type Query_RootOrganizationAggregateArgs = {
  distinctOn: InputMaybe<Array<OrganizationSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<OrganizationOrderBy>>;
  where: InputMaybe<OrganizationBoolExp>;
};

export type Query_RootPromoCodeArgs = {
  distinctOn: InputMaybe<Array<PromoCodeSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<PromoCodeOrderBy>>;
  where: InputMaybe<PromoCodeBoolExp>;
};

export type Query_RootPromoCodeAggregateArgs = {
  distinctOn: InputMaybe<Array<PromoCodeSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<PromoCodeOrderBy>>;
  where: InputMaybe<PromoCodeBoolExp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "invoice" */
  invoice: Array<Invoice>;
  /** fetch aggregated fields from the table: "invoice" */
  invoiceAggregate: InvoiceAggregate;
  /** fetch data from the table: "invoice_line" */
  invoiceLine: Array<InvoiceLine>;
  /** fetch aggregated fields from the table: "invoice_line" */
  invoiceLineAggregate: InvoiceLineAggregate;
  /** An array relationship */
  invoiceLineGroupedByDescription: Array<InvoiceLineGroupedByDescription>;
  /** An aggregate relationship */
  invoiceLineGroupedByDescriptionAggregate: InvoiceLineGroupedByDescriptionAggregate;
  /** fetch data from the table in a streaming manner: "invoice_line_grouped_by_description" */
  invoiceLineGroupedByDescriptionStream: Array<InvoiceLineGroupedByDescription>;
  /** fetch data from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceId: Array<InvoiceLineGroupedByReferenceId>;
  /** fetch aggregated fields from the table: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceIdAggregate: InvoiceLineGroupedByReferenceIdAggregate;
  /** fetch data from the table in a streaming manner: "invoice_line_grouped_by_reference_id" */
  invoiceLineGroupedByReferenceIdStream: Array<InvoiceLineGroupedByReferenceId>;
  /** fetch data from the table in a streaming manner: "invoice_line" */
  invoiceLineStream: Array<InvoiceLine>;
  /** fetch data from the table in a streaming manner: "invoice" */
  invoiceStream: Array<Invoice>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organizationAggregate: OrganizationAggregate;
  /** fetch data from the table in a streaming manner: "organization" */
  organizationStream: Array<Organization>;
  /** fetch data from the table: "promo_code" */
  promoCode: Array<PromoCode>;
  /** fetch aggregated fields from the table: "promo_code" */
  promoCodeAggregate: PromoCodeAggregate;
  /** fetch data from the table in a streaming manner: "promo_code" */
  promoCodeStream: Array<PromoCode>;
};

export type Subscription_RootInvoiceArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

export type Subscription_RootInvoiceAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceOrderBy>>;
  where: InputMaybe<InvoiceBoolExp>;
};

export type Subscription_RootInvoiceLineArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

export type Subscription_RootInvoiceLineAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineOrderBy>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByDescriptionArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByDescriptionAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByDescriptionSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByDescriptionOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByDescriptionStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<InvoiceLineGroupedByDescriptionStreamCursorInput>>;
  where: InputMaybe<InvoiceLineGroupedByDescriptionBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByReferenceIdArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByReferenceIdAggregateArgs = {
  distinctOn: InputMaybe<Array<InvoiceLineGroupedByReferenceIdSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<InvoiceLineGroupedByReferenceIdOrderBy>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

export type Subscription_RootInvoiceLineGroupedByReferenceIdStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<InvoiceLineGroupedByReferenceIdStreamCursorInput>>;
  where: InputMaybe<InvoiceLineGroupedByReferenceIdBoolExp>;
};

export type Subscription_RootInvoiceLineStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<InvoiceLineStreamCursorInput>>;
  where: InputMaybe<InvoiceLineBoolExp>;
};

export type Subscription_RootInvoiceStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<InvoiceStreamCursorInput>>;
  where: InputMaybe<InvoiceBoolExp>;
};

export type Subscription_RootOrganizationArgs = {
  distinctOn: InputMaybe<Array<OrganizationSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<OrganizationOrderBy>>;
  where: InputMaybe<OrganizationBoolExp>;
};

export type Subscription_RootOrganizationAggregateArgs = {
  distinctOn: InputMaybe<Array<OrganizationSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<OrganizationOrderBy>>;
  where: InputMaybe<OrganizationBoolExp>;
};

export type Subscription_RootOrganizationStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<OrganizationStreamCursorInput>>;
  where: InputMaybe<OrganizationBoolExp>;
};

export type Subscription_RootPromoCodeArgs = {
  distinctOn: InputMaybe<Array<PromoCodeSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<PromoCodeOrderBy>>;
  where: InputMaybe<PromoCodeBoolExp>;
};

export type Subscription_RootPromoCodeAggregateArgs = {
  distinctOn: InputMaybe<Array<PromoCodeSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  orderBy: InputMaybe<Array<PromoCodeOrderBy>>;
  where: InputMaybe<PromoCodeBoolExp>;
};

export type Subscription_RootPromoCodeStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<PromoCodeStreamCursorInput>>;
  where: InputMaybe<PromoCodeBoolExp>;
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
export type GetSchemaQueryVariables = Exact<{ [key: string]: never }>;

export type GetSchemaQuery = { __typename?: 'query_root' } & {
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
