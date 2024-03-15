import { GraphQLSchema } from 'graphql';

import { extractSchemaChunk } from 'src/utils/api/schemaImport/extractSchemaChunk';
import { prepareBulkRequest } from 'src/utils/api/schemaImport/prepareBulkRequest';
import { getFieldName } from 'src/utils/api/schemaManipulation/getFieldName';

type IExtractedChunkType<T = 'requiredFieldOnly' | 'optionalFieldOnly'> = {
  chunkType: T;
  extractedChunkSchema: GraphQLSchema;
  fieldName: string;
};

/**
 * Prepare chunk schema request, break down the graphql schema into smaller chunks (required fields, optional fields)
 */
export const prepareChunkSchemaRequest = ({
  graphqlSchemas,
  schemaType,
}: {
  graphqlSchemas: GraphQLSchema[];
  schemaType: 'query' | 'mutation';
}) => {
  const extractedRequiredFieldsSchemas: IExtractedChunkType<'requiredFieldOnly'>[] =
    graphqlSchemas.map(querySchema => ({
      chunkType: 'requiredFieldOnly',
      extractedChunkSchema: extractSchemaChunk({
        graphqlSchema: querySchema,
        schemaType,
        type: 'requiredFieldOnly',
      }),
      fieldName: getFieldName({
        schema: querySchema,
        type: schemaType,
      }),
    }));

  const extractedOptionalFieldsSchemas: IExtractedChunkType<'optionalFieldOnly'>[] =
    graphqlSchemas.map(querySchema => ({
      chunkType: 'optionalFieldOnly',
      extractedChunkSchema: extractSchemaChunk({
        graphqlSchema: querySchema,
        schemaType,
        type: 'optionalFieldOnly',
      }),
      fieldName: getFieldName({
        schema: querySchema,
        type: schemaType,
      }),
    }));
  return {
    /** Schema extracted optional fields */
    extractedOptionalFieldsSchemas,
    /** Schema extracted required fields */
    extractedRequiredFieldsSchemas,
    /** Ready request with schema extracted optional fields only */
    requestsWithOptionalFields: extractedOptionalFieldsSchemas.map(
      ({ chunkType, extractedChunkSchema }) => {
        const fieldName = getFieldName({
          schema: extractedChunkSchema,
          type: schemaType,
        });
        return prepareBulkRequest({
          graphqlSchema: extractedChunkSchema,
          meta: {
            chunkFieldName: fieldName,
            chunkType,
          },
        });
      }
    ),
    /** Ready request with schema extracted required fields only */
    requestsWithRequiredFields: extractedRequiredFieldsSchemas.map(
      ({ chunkType, extractedChunkSchema }) => {
        const fieldName = getFieldName({
          schema: extractedChunkSchema,
          type: schemaType,
        });
        return prepareBulkRequest({
          graphqlSchema: extractedChunkSchema,
          meta: {
            chunkFieldName: fieldName,
            chunkType,
          },
        });
      }
    ),
  };
};
