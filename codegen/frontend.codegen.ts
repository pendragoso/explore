import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateFrontend = {
  'src/types/generated/graphql.frontend.schema.json': {
    plugins: ['introspection'],
    schema: {
      [`${process.env.FRONTEND_GRAPH_URL}`]: {
        headers: {
          'x-hasura-admin-secret': `${process.env.FRONTEND_GRAPH_ADMIN_SECRET}`,
        },
      },
    },
  },
  'src/types/generated/graphql.frontend.types.ts': {
    config: {
      scalars: {
        bigint: 'number',
        bpchar: 'string',
        json: 'string',
        jsonb: 'Record<string, unknown> | null', // JSON object
        numeric: 'number',
        smallint: 'number',
        timestamp: 'string',
        timestamptz: 'string',
        uuid: 'string',
        vector: 'string',
      },
    } satisfies TypeScriptDocumentsPluginConfig,
    documents: '**/*.graphql.frontend.ts',
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-graphql-request',
      {
        add: {
          content: ['// @ts-nocheck'],
        },
      },
    ],
    schema: {
      [`${process.env.FRONTEND_GRAPH_URL}`]: {
        headers: {
          'x-hasura-admin-secret': `${process.env.FRONTEND_GRAPH_ADMIN_SECRET}`,
        },
      },
    },
  },
} satisfies GenerateConfig;
