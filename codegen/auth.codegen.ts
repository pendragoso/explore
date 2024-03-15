import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateAuth = {
  'src/types/generated/graphql.auth.schema.json': {
    plugins: ['introspection'],
    schema: process.env.AUTH_GRAPH_URL,
  },
  'src/types/generated/graphql.auth.types.ts': {
    config: {
      scalars: {
        DateTime: 'string',
        Decimal: 'number',
        ZonedDateTime: 'string',
        _FieldSet: 'string',
        federation__FieldSet: 'string',
        link__Import: 'string',
      },
    } satisfies TypeScriptDocumentsPluginConfig,
    documents: 'src/**/*.graphql.auth.ts',
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-graphql-request',
    ],
    schema: process.env.AUTH_GRAPH_URL,
  },
} satisfies GenerateConfig;
