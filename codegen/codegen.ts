import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import { generateAuth } from './auth.codegen';
import { generateCustomer } from './customer.codegen';
import { generateFrontend } from './frontend.codegen';
import { generateInternal } from './internal.codegen';
import { generateViewport } from './viewport.codegen';
import { generateWeaviate } from './weaviate.codegen';

export type GenerateConfig = CodegenConfig['generates'];

// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript
const pluginConfigTypescript = {
  avoidOptionals: {
    defaultValue: true,
    field: true,
    inputValue: false,
    object: true,
  },
  // Use Unions instead of Enums
  enumsAsConst: true,
} as const satisfies TypeScriptPluginConfig;

// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
const pluginConfigTypescriptOperations = {
  /**
   * Try to use defined scalar instead of using primitive type (number,string, ...) for more descriptive
   * @example
   `duties: Maybe<Scalars['Decimal']>` is more descriptive than `duties: number`
   */
  preResolveTypes: false,
  // Warns for undefined (any) type scalars
  strictScalars: true,
} as const satisfies TypeScriptDocumentsPluginConfig;

const config: CodegenConfig = {
  config: {
    ...pluginConfigTypescript,
    ...pluginConfigTypescriptOperations,
  },
  generates: {
    ...generateAuth,
    ...generateCustomer,
    ...generateInternal,
    ...generateFrontend,
    ...generateViewport,
    ...generateWeaviate,
  },
  hooks: {
    afterAllFileWrite: ['ts-node ./codegen/formatCodegen.ts'],
  },
};

export default config;
