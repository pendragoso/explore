import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateViewport = {
  'src/types/generated/graphql.viewport.schema.json': {
    plugins: ['introspection'],
    schema: {
      [`${process.env.VIEWPORT_GRAPH_URL}`]: {
        headers: {
          'x-hasura-admin-secret': `${process.env.VIEWPORT_GRAPH_ADMIN_SECRET}`,
        },
      },
    },
  },
  'src/types/generated/graphql.viewport.types.ts': {
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
      },
    } satisfies TypeScriptDocumentsPluginConfig,
    documents: '**/*.graphql.viewport.ts',
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
      [`${process.env.VIEWPORT_GRAPH_URL}`]: {
        headers: {
          'x-hasura-admin-secret': `${process.env.VIEWPORT_GRAPH_ADMIN_SECRET}`,
        },
      },
    },
  },
} satisfies GenerateConfig;
