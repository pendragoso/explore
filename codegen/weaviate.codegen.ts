import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateWeaviate = {
  'src/types/generated/graphql.weaviate.schema.json': {
    plugins: ['introspection'],
    schema: {
      [`${process.env.WEAVIATE_GRAPH_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.WEAVIATE_GRAPH_API_KEY}`,
        },
      },
    },
  },
  'src/types/generated/graphql.weaviate.types.ts': {
    config: {
      defaultScalarType: 'unknown',
      scalars: {},
    } satisfies TypeScriptDocumentsPluginConfig,
    documents: '**/*.graphql.weaviate.ts',
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-graphql-request',
    ],
    schema: {
      [`${process.env.WEAVIATE_GRAPH_URL}`]: {
        headers: {
          Authorization: `Bearer ${process.env.WEAVIATE_GRAPH_API_KEY}`,
        },
      },
    },
  },
} satisfies GenerateConfig;
