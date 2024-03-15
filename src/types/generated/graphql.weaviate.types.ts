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
};

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObj = {
  __typename?: 'AggregateObjectsObj';
  /** subheading search */
  Subheadings: Maybe<Array<Maybe<AggregateSubheadings>>>;
};

/** An object allowing Aggregation of %ss on a local Weaviate */
export type AggregateObjectsObjSubheadingsArgs = {
  ask: InputMaybe<QnATransformersAggregateSubheadingsAskInpObj>;
  groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hybrid: InputMaybe<AggregateObjectsSubheadingsHybridInpObj>;
  limit: InputMaybe<Scalars['Int']>;
  nearObject: InputMaybe<AggregateObjectsSubheadingsNearObjectInpObj>;
  nearText: InputMaybe<Txt2VecCohereAggregateSubheadingsNearTextInpObj>;
  nearVector: InputMaybe<AggregateObjectsSubheadingsNearVectorInpObj>;
  objectLimit: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AggregateObjectsSubheadingsWhereInpObj>;
};

/** Hybrid search */
export type AggregateObjectsSubheadingsHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']>;
  /** Query string */
  query?: InputMaybe<Scalars['String']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type AggregateObjectsSubheadingsNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']>;
};

export type AggregateObjectsSubheadingsNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']>>;
};

export type AggregateObjectsSubheadingsWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float'];
};

export type AggregateObjectsSubheadingsWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float'];
};

export type AggregateObjectsSubheadingsWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: AggregateObjectsSubheadingsWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: AggregateObjectsSubheadingsWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type AggregateObjectsSubheadingsWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsSubheadingsWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsSubheadingsWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['Boolean']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['String']>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsSubheadingsWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['Int']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['Float']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['String']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['String']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type AggregateObjectsSubheadingsWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<AggregateObjectsSubheadingsWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<AggregateObjectsSubheadingsWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['Boolean']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['String']>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<AggregateObjectsSubheadingsWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['Int']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['Float']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['String']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['String']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export const aggregateObjectsSubheadingsWhereOperatorEnum = {
  And: 'And',
  Equal: 'Equal',
  GreaterThan: 'GreaterThan',
  GreaterThanEqual: 'GreaterThanEqual',
  IsNull: 'IsNull',
  LessThan: 'LessThan',
  LessThanEqual: 'LessThanEqual',
  Like: 'Like',
  Not: 'Not',
  NotEqual: 'NotEqual',
  Or: 'Or',
  WithinGeoRange: 'WithinGeoRange',
} as const;

export type AggregateObjectsSubheadingsWhereOperatorEnum =
  (typeof aggregateObjectsSubheadingsWhereOperatorEnum)[keyof typeof aggregateObjectsSubheadingsWhereOperatorEnum];
/** subheading search */
export type AggregateSubheadings = {
  __typename?: 'AggregateSubheadings';
  /** Indicates the group of returned data */
  groupedBy: Maybe<AggregateSubheadingsGroupedByObj>;
  /** An object used to Get Meta information about Objects on a local Weaviate */
  meta: Maybe<AggregateSubheadingsMetaObject>;
  /** Aggregate this property"prompt" */
  prompt: Maybe<AggregateSubheadingspromptObj>;
  /** Aggregate this property"subheading" */
  subheading: Maybe<AggregateSubheadingssubheadingObj>;
};

/** An object containing the path and value of the grouped property */
export type AggregateSubheadingsGroupedByObj = {
  __typename?: 'AggregateSubheadingsGroupedByObj';
  /** The path of the grouped property */
  path: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The value of the grouped property */
  value: Maybe<Scalars['String']>;
};

export type AggregateSubheadingsMetaObject = {
  __typename?: 'AggregateSubheadingsMetaObject';
  count: Maybe<Scalars['Int']>;
};

/** An object containing Aggregation information about this property */
export type AggregateSubheadingspromptObj = {
  __typename?: 'AggregateSubheadingspromptObj';
  /** The total amount of found instances for this property */
  count: Maybe<Scalars['Int']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences: Maybe<
    Array<Maybe<AggregateSubheadingspromptTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type: Maybe<Scalars['String']>;
};

/** An object containing Aggregation information about this property */
export type AggregateSubheadingspromptObjTopOccurrencesArgs = {
  limit: InputMaybe<Scalars['Int']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateSubheadingspromptTopOccurrencesObj = {
  __typename?: 'AggregateSubheadingspromptTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs: Maybe<Scalars['Int']>;
  /** The most frequently occurring value for this property */
  value: Maybe<Scalars['String']>;
};

/** An object containing Aggregation information about this property */
export type AggregateSubheadingssubheadingObj = {
  __typename?: 'AggregateSubheadingssubheadingObj';
  /** The total amount of found instances for this property */
  count: Maybe<Scalars['Int']>;
  /** An object containing data about the most frequently occurring values for this property */
  topOccurrences: Maybe<
    Array<Maybe<AggregateSubheadingssubheadingTopOccurrencesObj>>
  >;
  /** Aggregate on the total amount of found property values */
  type: Maybe<Scalars['String']>;
};

/** An object containing Aggregation information about this property */
export type AggregateSubheadingssubheadingObjTopOccurrencesArgs = {
  limit: InputMaybe<Scalars['Int']>;
};

/** An object containing data about the most frequently occurring values for this property */
export type AggregateSubheadingssubheadingTopOccurrencesObj = {
  __typename?: 'AggregateSubheadingssubheadingTopOccurrencesObj';
  /** How often the most frequently occurring value for this property occurs */
  occurs: Maybe<Scalars['Int']>;
  /** The most frequently occurring value for this property */
  value: Maybe<Scalars['String']>;
};

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObj = {
  __typename?: 'GetObjectsObj';
  /** subheading search */
  Subheadings: Maybe<Array<Maybe<Subheadings>>>;
};

/** An object used to get %ss on a local Weaviate */
export type GetObjectsObjSubheadingsArgs = {
  after: InputMaybe<Scalars['String']>;
  ask: InputMaybe<QnATransformersGetObjectsSubheadingsAskInpObj>;
  bm25: InputMaybe<GetObjectsSubheadingsHybridGetBm25InpObj>;
  group: InputMaybe<GetObjectsSubheadingsGroupInpObj>;
  groupBy: InputMaybe<GetObjectsSubheadingsGroupByInpObj>;
  hybrid: InputMaybe<GetObjectsSubheadingsHybridInpObj>;
  limit: InputMaybe<Scalars['Int']>;
  nearObject: InputMaybe<GetObjectsSubheadingsNearObjectInpObj>;
  nearText: InputMaybe<Txt2VecCohereGetObjectsSubheadingsNearTextInpObj>;
  nearVector: InputMaybe<GetObjectsSubheadingsNearVectorInpObj>;
  offset: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<Array<InputMaybe<GetObjectsSubheadingsSortInpObj>>>;
  where: InputMaybe<GetObjectsSubheadingsWhereInpObj>;
};

/** Specify the property of the class to group by */
export type GetObjectsSubheadingsGroupByInpObj = {
  /** Specify the number of groups to be created */
  groups: Scalars['Int'];
  /** Specify the number of max objects in group */
  objectsPerGroup: Scalars['Int'];
  /** Specify the path from the objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path: Array<InputMaybe<Scalars['String']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsSubheadingsGroupInpObj = {
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars['Float'];
  type?: InputMaybe<GetObjectsSubheadingsGroupInpObjTypeEnum>;
};

export const getObjectsSubheadingsGroupInpObjTypeEnum = {
  Closest: 'closest',
  Merge: 'merge',
} as const;

export type GetObjectsSubheadingsGroupInpObjTypeEnum =
  (typeof getObjectsSubheadingsGroupInpObjTypeEnum)[keyof typeof getObjectsSubheadingsGroupInpObjTypeEnum];
export type GetObjectsSubheadingsHybridGetBm25InpObj = {
  /** The properties to search in */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The query to search for */
  query?: InputMaybe<Scalars['String']>;
};

/** Hybrid search */
export type GetObjectsSubheadingsHybridInpObj = {
  /** Search weight */
  alpha?: InputMaybe<Scalars['Float']>;
  /** Which properties should be included in the sparse search */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Query string */
  query?: InputMaybe<Scalars['String']>;
  /** Vector search */
  vector?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type GetObjectsSubheadingsNearObjectInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']>;
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Concept identifier in the uuid format */
  id?: InputMaybe<Scalars['String']>;
};

export type GetObjectsSubheadingsNearVectorInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Target vector to be used in kNN search */
  vector: Array<InputMaybe<Scalars['Float']>>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsSubheadingsSortInpObj = {
  /** Specify the sort order, either ascending (asc) which is default or descending (desc) */
  order?: InputMaybe<GetObjectsSubheadingsSortInpObjTypeEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Get', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export const getObjectsSubheadingsSortInpObjTypeEnum = {
  Asc: 'asc',
  Desc: 'desc',
} as const;

export type GetObjectsSubheadingsSortInpObjTypeEnum =
  (typeof getObjectsSubheadingsSortInpObjTypeEnum)[keyof typeof getObjectsSubheadingsSortInpObjTypeEnum];
export type GetObjectsSubheadingsWhereGeoRangeDistanceInpObj = {
  /** The maximum distance from the point specified geoCoordinates. */
  max: Scalars['Float'];
};

export type GetObjectsSubheadingsWhereGeoRangeGeoCoordinatesInpObj = {
  /** The latitude (in decimal format) of the geoCoordinates to search around. */
  latitude: Scalars['Float'];
  /** The longitude (in decimal format) of the geoCoordinates to search around. */
  longitude: Scalars['Float'];
};

export type GetObjectsSubheadingsWhereGeoRangeInpObj = {
  /** The distance from the point specified via geoCoordinates. */
  distance: GetObjectsSubheadingsWhereGeoRangeDistanceInpObj;
  /** The geoCoordinates that form the center point of the search. */
  geoCoordinates: GetObjectsSubheadingsWhereGeoRangeGeoCoordinatesInpObj;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type GetObjectsSubheadingsWhereInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsSubheadingsWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsSubheadingsWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['Boolean']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['String']>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsSubheadingsWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['Int']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['Float']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['String']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['String']>;
};

/** An object containing the Operands that can be applied to a 'where' filter */
export type GetObjectsSubheadingsWhereOperandsInpObj = {
  /** Contains the Operands that can be applied to a 'where' filter */
  operands?: InputMaybe<
    Array<InputMaybe<GetObjectsSubheadingsWhereOperandsInpObj>>
  >;
  /** Contains the Operators that can be applied to a 'where' filter */
  operator?: InputMaybe<GetObjectsSubheadingsWhereOperatorEnum>;
  /** Specify the path from the Objects fields to the property name (e.g. ['Things', 'City', 'population'] leads to the 'population' property of a 'City' object) */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Specify a Boolean value that the target property will be compared to */
  valueBoolean?: InputMaybe<Scalars['Boolean']>;
  /** Specify a String value that the target property will be compared to */
  valueDate?: InputMaybe<Scalars['String']>;
  /** Specify both geo-coordinates (latitude and longitude as decimals) and a maximum distance from the described coordinates. The search will return any result which is located less than or equal to the specified maximum distance in km away from the specified point. */
  valueGeoRange?: InputMaybe<GetObjectsSubheadingsWhereGeoRangeInpObj>;
  /** Specify an Integer value that the target property will be compared to */
  valueInt?: InputMaybe<Scalars['Int']>;
  /** Specify a Float value that the target property will be compared to */
  valueNumber?: InputMaybe<Scalars['Float']>;
  /** Specify a String value that the target property will be compared to */
  valueString?: InputMaybe<Scalars['String']>;
  /** Specify a Text value that the target property will be compared to */
  valueText?: InputMaybe<Scalars['String']>;
};

/** An object containing the Operators that can be applied to a 'where' filter */
export const getObjectsSubheadingsWhereOperatorEnum = {
  And: 'And',
  Equal: 'Equal',
  GreaterThan: 'GreaterThan',
  GreaterThanEqual: 'GreaterThanEqual',
  IsNull: 'IsNull',
  LessThan: 'LessThan',
  LessThanEqual: 'LessThanEqual',
  Like: 'Like',
  Not: 'Not',
  NotEqual: 'NotEqual',
  Or: 'Or',
  WithinGeoRange: 'WithinGeoRange',
} as const;

export type GetObjectsSubheadingsWhereOperatorEnum =
  (typeof getObjectsSubheadingsWhereOperatorEnum)[keyof typeof getObjectsSubheadingsWhereOperatorEnum];
/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersAggregateSubheadingsAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Question to be answered */
  question: Scalars['String'];
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type QnATransformersGetObjectsSubheadingsAskInpObj = {
  /** Properties which contains text */
  properties?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Question to be answered */
  question: Scalars['String'];
};

/** subheading search */
export type Subheadings = {
  __typename?: 'Subheadings';
  _additional: Maybe<SubheadingsAdditional>;
  /** Content that will be vectorized */
  prompt: Maybe<Scalars['String']>;
  /** Response */
  subheading: Maybe<Scalars['String']>;
};

export type SubheadingsAdditional = {
  __typename?: 'SubheadingsAdditional';
  answer: Maybe<SubheadingsAdditionalAnswer>;
  certainty: Maybe<Scalars['Float']>;
  classification: Maybe<SubheadingsAdditionalClassification>;
  creationTimeUnix: Maybe<Scalars['String']>;
  distance: Maybe<Scalars['Float']>;
  explainScore: Maybe<Scalars['String']>;
  featureProjection: Maybe<SubheadingsAdditionalFeatureProjection>;
  group: Maybe<SubheadingsAdditionalGroup>;
  /** The UUID of a Object, assigned by its local Weaviate */
  id: Maybe<Scalars['String']>;
  lastUpdateTimeUnix: Maybe<Scalars['String']>;
  score: Maybe<Scalars['String']>;
  vector: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SubheadingsAdditionalFeatureProjectionArgs = {
  algorithm: InputMaybe<Scalars['String']>;
  dimensions: InputMaybe<Scalars['Int']>;
  iterations: InputMaybe<Scalars['Int']>;
  learningRate: InputMaybe<Scalars['Int']>;
  perplexity: InputMaybe<Scalars['Int']>;
};

export type SubheadingsAdditionalAnswer = {
  __typename?: 'SubheadingsAdditionalAnswer';
  endPosition: Maybe<Scalars['Int']>;
  hasAnswer: Maybe<Scalars['Boolean']>;
  property: Maybe<Scalars['String']>;
  result: Maybe<Scalars['String']>;
  startPosition: Maybe<Scalars['Int']>;
};

export type SubheadingsAdditionalClassification = {
  __typename?: 'SubheadingsAdditionalClassification';
  basedOn: Maybe<Array<Maybe<Scalars['String']>>>;
  classifiedFields: Maybe<Array<Maybe<Scalars['String']>>>;
  completed: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  scope: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SubheadingsAdditionalFeatureProjection = {
  __typename?: 'SubheadingsAdditionalFeatureProjection';
  vector: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SubheadingsAdditionalGroup = {
  __typename?: 'SubheadingsAdditionalGroup';
  count: Maybe<Scalars['Int']>;
  groupedBy: Maybe<SubheadingsAdditionalGroupGroupedBy>;
  hits: Maybe<Array<Maybe<SubheadingsAdditionalGroupHits>>>;
  id: Maybe<Scalars['Int']>;
  maxDistance: Maybe<Scalars['Float']>;
  minDistance: Maybe<Scalars['Float']>;
};

export type SubheadingsAdditionalGroupGroupedBy = {
  __typename?: 'SubheadingsAdditionalGroupGroupedBy';
  path: Maybe<Array<Maybe<Scalars['String']>>>;
  value: Maybe<Scalars['String']>;
};

export type SubheadingsAdditionalGroupHits = {
  __typename?: 'SubheadingsAdditionalGroupHits';
  _additional: Maybe<SubheadingsAdditionalGroupHitsAdditional>;
  /** Content that will be vectorized */
  prompt: Maybe<Scalars['String']>;
  /** Response */
  subheading: Maybe<Scalars['String']>;
};

export type SubheadingsAdditionalGroupHitsAdditional = {
  __typename?: 'SubheadingsAdditionalGroupHitsAdditional';
  distance: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['String']>;
  vector: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Txt2VecCohereAggregateSubheadingsMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars['Float'];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecCohereAggregateSubheadingsMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecCohereAggregateSubheadingsMoveAwayFromMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars['String']>;
    /** id of an object */
    id?: InputMaybe<Scalars['String']>;
  };

export type Txt2VecCohereAggregateSubheadingsMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars['Float'];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecCohereAggregateSubheadingsMoveToMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecCohereAggregateSubheadingsMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecCohereAggregateSubheadingsNearTextInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  concepts: Array<InputMaybe<Scalars['String']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecCohereAggregateSubheadingsMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecCohereAggregateSubheadingsMoveTo>;
};

export type Txt2VecCohereGetObjectsSubheadingsMoveAwayFrom = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars['Float'];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecCohereGetObjectsSubheadingsMoveAwayFromMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecCohereGetObjectsSubheadingsMoveAwayFromMovementObjectsInpObj =
  {
    /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
    beacon?: InputMaybe<Scalars['String']>;
    /** id of an object */
    id?: InputMaybe<Scalars['String']>;
  };

export type Txt2VecCohereGetObjectsSubheadingsMoveTo = {
  /** Keywords are a list of search terms. Array type, e.g. ["keyword 1", "keyword 2"] */
  concepts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The force to apply for a particular movements. Must be between 0 and 1 where 0 is equivalent to no movement and 1 is equivalent to largest movement possible */
  force: Scalars['Float'];
  /** objects */
  objects?: InputMaybe<
    Array<
      InputMaybe<Txt2VecCohereGetObjectsSubheadingsMoveToMovementObjectsInpObj>
    >
  >;
};

/** Movement Object */
export type Txt2VecCohereGetObjectsSubheadingsMoveToMovementObjectsInpObj = {
  /** Concept identifier in the beacon format, such as weaviate://<hostname>/<kind>/id */
  beacon?: InputMaybe<Scalars['String']>;
  /** id of an object */
  id?: InputMaybe<Scalars['String']>;
};

/** An object containing filter options for a local Get query, used to convert the result to the specified filters */
export type Txt2VecCohereGetObjectsSubheadingsNearTextInpObj = {
  /** Normalized Distance between the result item and the search vector. Normalized to be between 0 (identical vectors) and 1 (perfect opposite). */
  certainty?: InputMaybe<Scalars['Float']>;
  concepts: Array<InputMaybe<Scalars['String']>>;
  /** The required degree of similarity between an object's characteristics and the provided filter values */
  distance?: InputMaybe<Scalars['Float']>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveAwayFrom?: InputMaybe<Txt2VecCohereGetObjectsSubheadingsMoveAwayFrom>;
  /** Move your search term closer to or further away from another vector described by keywords */
  moveTo?: InputMaybe<Txt2VecCohereGetObjectsSubheadingsMoveTo>;
};

/** Location of the root query */
export type WeaviateObj = {
  __typename?: 'WeaviateObj';
  /** Filter options for a local Aggregate query, used to convert the result to the specified filters */
  Aggregate: Maybe<AggregateObjectsObj>;
  /** Get Objects on a local Weaviate */
  Get: Maybe<GetObjectsObj>;
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

export type GetSchemaQuery = { __typename?: 'WeaviateObj' } & {
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
