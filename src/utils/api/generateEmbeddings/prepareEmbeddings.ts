import type { IntrospectionQuery } from 'graphql';
import capitalize from 'lodash/capitalize';

import { preparePaginateChunkSchema } from 'src/utils/api/preparePaginateChunkSchema';
import { extractSchemaChunk } from 'src/utils/api/schemaImport/extractSchemaChunk';
import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import { extractAndConvertSchema } from 'src/utils/api/schemaManipulation/extractAndConvertSchema';

export type IDocument = {
  metadata: Record<string, unknown>;
  pageContent: string;
};

export const prepareEmbeddings = ({
  introspectionQuery,
  schemaLabel,
}: {
  introspectionQuery: IntrospectionQuery;
  schemaLabel: string;
}): IDocument[] => {
  // Chunk the schema
  const extractedSchema = extractAndConvertSchema({
    schema: introspectionQuery,
  });

  const querySchemas = preparePaginateChunkSchema({
    chunkSchemas: extractedSchema.chunkedQuerySchema,
    schemaType: 'query',
  });
  const mutationSchemas = preparePaginateChunkSchema({
    chunkSchemas: extractedSchema.chunkedMutationSchema,
    schemaType: 'mutation',
  });

  const schemaGroup = [...querySchemas, ...mutationSchemas];

  const chunkSchemas = schemaGroup.map(({ fieldName, schema, schemaType }) => ({
    fieldName,
    modifiedSchema: extractSchemaChunk({
      extractType: 'removeAllComments',
      graphqlSchema: schema,
      schemaType,
      type: 'all',
    }),
    schemaType,
  }));

  return chunkSchemas.map(({ fieldName, modifiedSchema, schemaType }) => {
    const pageContent = `
Below is schema definition for ${schemaType} "${fieldName}" from schema "${capitalize(
      schemaLabel
    )}":
${convertToSchemaType(modifiedSchema)}`;
    return {
      metadata: {
        fieldName,
        schemaType,
      },
      pageContent,
    };
  });
};
