import type { NextApiRequest } from 'next';
import type { NextRequest } from 'next/server';

import { getMiddlewareHeader } from 'src/middleware';
import type { IUser } from 'src/types';
import { getFeatureAllowed } from 'src/utils/api/getFeatureAllowed';
import { isNextApiRequest } from 'src/utils/api/isNextApiRequest';
import { env } from 'src/utils/environment';
import type { ISchema } from 'src/utils/gqlRequest';

type IGraphQlVariables = {
  allowMutation: boolean;
  headers: Record<string, string>;
  url: string;
};

const getHeadersWithToken = (req: NextApiRequest | NextRequest) => {
  const credentialtoken = isNextApiRequest(req)
    ? req.headers.credentialtoken
    : req.headers.get('credentialtoken');

  const token = typeof credentialtoken === 'string' ? credentialtoken : '';
  if (!token) {
    console.error(`API requires a credentialtoken header: ${req.url}`);
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Credentialtoken: token,
  };
};

export const getViewportGraphQlVariables = async ({
  user,
}: {
  user: IUser | null;
}): Promise<IGraphQlVariables> => {
  let allowMutation = false;

  if (user) {
    // Check if user is allowed to mutate
    allowMutation = await getFeatureAllowed({
      featureKey: 'explore_frontend_mutation',
      user,
    });
  }

  return {
    allowMutation,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': env.VIEWPORT_GRAPH_ADMIN_SECRET,
    },
    url: env.VIEWPORT_GRAPH_URL,
  };
};

export const getWeaviateGraphQlVariables = async ({
  user,
}: {
  user: IUser | null;
}): Promise<IGraphQlVariables> => {
  let allowMutation = false;

  if (user) {
    // Check if user is allowed to mutate
    allowMutation = await getFeatureAllowed({
      featureKey: 'explore_weaviate_mutation',
      user,
    });
  }

  return {
    allowMutation,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${env.WEAVIATE_GRAPH_API_KEY}`,
      'Content-Type': 'application/json',
    },
    url: env.WEAVIATE_GRAPH_URL,
  };
};

export const getFrontendGraphQlVariables = async ({
  req,
  user,
}: {
  req: NextApiRequest | NextRequest | null;
  user: IUser | null;
}): Promise<IGraphQlVariables> => {
  let allowMutation = false;

  if (req?.url?.includes('insertGraphHub')) {
    allowMutation = true;
  } else if (user) {
    // Check if user is allowed to mutate
    allowMutation = await getFeatureAllowed({
      featureKey: 'explore_frontend_mutation',
      user,
    });
  }

  return {
    allowMutation,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': env.FRONTEND_GRAPH_ADMIN_SECRET,
    },
    url: env.FRONTEND_GRAPH_URL,
  };
};

export const getGraphQlVariables = async ({
  req,
  schema,
}: {
  req: NextApiRequest | NextRequest;
  schema: ISchema;
}): Promise<IGraphQlVariables> => {
  switch (schema) {
    case 'auth':
      return {
        allowMutation: true,
        headers: getHeadersWithToken(req),
        url: env.AUTH_GRAPH_URL,
      };
    case 'customer':
      return {
        allowMutation: true,
        headers: getHeadersWithToken(req),
        url: env.CUSTOMER_GRAPH_URL,
      };
    case 'internal':
      return {
        allowMutation: true,
        headers: getHeadersWithToken(req),
        url: env.INTERNAL_GRAPH_URL,
      };
    case 'frontend': {
      const user = getMiddlewareHeader({
        key: 'x-internal-middleware-user',
        req,
      });
      return getFrontendGraphQlVariables({ req, user });
    }
    case 'viewport': {
      const user = getMiddlewareHeader({
        key: 'x-internal-middleware-user',
        req,
      });

      return getViewportGraphQlVariables({ user });
    }
    case 'weaviate':
    default: {
      const user = getMiddlewareHeader({
        key: 'x-internal-middleware-user',
        req,
      });
      return getWeaviateGraphQlVariables({ user });
    }
  }
};
