import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateInternal = {
  'src/types/generated/graphql.internal.types.ts': {
    schema: process.env.INTERNAL_GRAPH_URL,
    documents: '**/*.graphql.internal.ts',
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-graphql-request',
    ],
    config: {
      scalars: {
        DateTime: 'string',
        Decimal: 'number',
        ZonedDateTime: 'string',
      },
    } satisfies TypeScriptDocumentsPluginConfig,
  },
  'src/types/generated/graphql.internal.schema.json': {
    schema: process.env.INTERNAL_GRAPH_URL,
    plugins: ['introspection'],
  },
} satisfies GenerateConfig;
