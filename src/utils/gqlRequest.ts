import { ClientError, GraphQLClient } from 'graphql-request';
import type { GraphQLError } from 'graphql-request/dist/types';

import {
  type Sdk as AuthSdk,
  getSdk as getAuthSdk,
} from 'src/types/generated/graphql.auth.types';
import {
  type Sdk as CustomerSdk,
  getSdk as getCustomerSdk,
} from 'src/types/generated/graphql.customer.types';
import {
  type Sdk as FrontendSdk,
  getSdk as getFrontendSdk,
} from 'src/types/generated/graphql.frontend.types';
import {
  type Sdk as InternalSdk,
  getSdk as getInternalSdk,
} from 'src/types/generated/graphql.internal.types';
import {
  type Sdk as ViewportSdk,
  getSdk as getViewportSdk,
} from 'src/types/generated/graphql.viewport.types';
import {
  type Sdk as WeaviateSdk,
  getSdk as getWeaviateSdk,
} from 'src/types/generated/graphql.weaviate.types';

export type ISchema =
  | 'auth'
  | 'customer'
  | 'internal'
  | 'frontend'
  | 'viewport'
  | 'weaviate';

type IAuthQueryName = keyof AuthSdk;
type ICustomerQueryName = keyof CustomerSdk;
type IInternalQueryName = keyof InternalSdk;
type IFrontendQueryName = keyof FrontendSdk;
type IViewportQueryName = keyof ViewportSdk;
type IWeaviateQueryName = keyof WeaviateSdk;

type ICustomerEndpoint = `customer/${ICustomerQueryName}`;
type IAuthEndpoint = `auth/${IAuthQueryName}`;
type IInternalEndpoint = `internal/${IInternalQueryName}`;
type IFrontendEndpoint = `frontend/${IFrontendQueryName}`;
type IViewportEndpoint = `viewport/${IViewportQueryName}`;
type IWeaviateEndpoint = `weaviate/${IWeaviateQueryName}`;

export type IEndpoint =
  | ICustomerEndpoint
  | IAuthEndpoint
  | IInternalEndpoint
  | IFrontendEndpoint
  | IViewportEndpoint
  | IWeaviateEndpoint;

type ISdkMethod<TEndpoint extends IEndpoint> =
  TEndpoint extends `auth/${infer A}`
    ? A extends IAuthQueryName
      ? AuthSdk[A]
      : never
    : TEndpoint extends `customer/${infer C}`
    ? C extends ICustomerQueryName
      ? CustomerSdk[C]
      : never
    : TEndpoint extends `internal/${infer I}`
    ? I extends IInternalQueryName
      ? InternalSdk[I]
      : never
    : TEndpoint extends `frontend/${infer P}`
    ? P extends IFrontendQueryName
      ? FrontendSdk[P]
      : never
    : TEndpoint extends `viewport/${infer V}`
    ? V extends IViewportQueryName
      ? ViewportSdk[V]
      : never
    : TEndpoint extends `weaviate/${infer W}`
    ? W extends IWeaviateQueryName
      ? WeaviateSdk[W]
      : never
    : never;

type IQueryNameFromEndpoint<TEndpoint extends IEndpoint> =
  TEndpoint extends `${ISchema}/${infer Q}`
    ? Q extends IAuthQueryName
      ? Q
      : Q extends ICustomerQueryName
      ? Q
      : Q extends IInternalQueryName
      ? Q
      : Q extends IFrontendQueryName
      ? Q
      : Q extends IViewportQueryName
      ? Q
      : Q extends IWeaviateQueryName
      ? Q
      : never
    : never;

/**
 * Convert the directed positional arguments for each sdk method into an object while
 * maintaining optional parameters.
 */
type ISdkMethodVariables<TEndpoint extends IEndpoint> = Parameters<
  ISdkMethod<TEndpoint>
>[0] &
  undefined extends never
  ? { variables: Parameters<ISdkMethod<TEndpoint>>[0] }
  : { variables?: Parameters<ISdkMethod<TEndpoint>>[0] };

export type IGQLReturnJson<TEndpoint extends IEndpoint> = Awaited<
  ReturnType<ISdkMethod<TEndpoint>>
>;

export type IGQLReturn<TEndpoint extends IEndpoint> = {
  errors: GraphQLError[];
  json: IGQLReturnJson<TEndpoint> | null;
};

const getSdk = (schema: ISchema) => {
  switch (schema) {
    case 'auth': {
      return getAuthSdk;
    }
    case 'customer': {
      return getCustomerSdk;
    }
    case 'internal': {
      return getInternalSdk;
    }
    case 'frontend': {
      return getFrontendSdk;
    }
    case 'viewport': {
      return getViewportSdk;
    }
    case 'weaviate': {
      return getWeaviateSdk;
    }
    default:
      throw new Error('Your query schema is missing');
  }
};

export type GQLParams<TEndpoint extends IEndpoint> = {
  customUrl?: string;
  endpoint: TEndpoint;
  requestHeaders?: Parameters<ISdkMethod<TEndpoint>>[1];
  customFetch?: () => Promise<unknown>;
} & ISdkMethodVariables<TEndpoint>;

/**
 * @example
 * const { json, errors } = await gqlRequest({
 *   endpoint: 'auth/getCredentialServiceToken',
 *   variables: { input: { mode: 'LIVE', storeId: 3 } },
 * });
 */
export const gqlRequest = async <TEndpoint extends IEndpoint>({
  customFetch,
  customUrl,
  endpoint,
  requestHeaders,
  variables,
}: GQLParams<TEndpoint>): Promise<IGQLReturn<TEndpoint>> => {
  const client = new GraphQLClient(customUrl || `/api/graphql/${endpoint}`, {
    fetch: customFetch || fetch,
  });
  const [schema, queryName] = endpoint.split('/') as [
    ISchema,
    IQueryNameFromEndpoint<TEndpoint>
  ];
  const sdk = getSdk(schema)(client);
  const sdkMethod = sdk[queryName];
  try {
    if (typeof sdkMethod === 'function') {
      const json: IGQLReturnJson<TEndpoint> = await sdkMethod(
        variables,
        requestHeaders
      );
      return { errors: [], json };
    }
    throw new Error(`Your schema function is missing`);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    if (e instanceof ClientError) {
      return {
        errors: e.response.errors || [
          { message: 'Unknown graphql error' } as GraphQLError,
        ],
        json: null,
      };
    }
    return {
      errors: [{ message: JSON.stringify(e) } as GraphQLError],
      json: null,
    };
  }
};
