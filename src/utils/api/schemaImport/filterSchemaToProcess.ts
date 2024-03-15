import type { GraphQLSchema } from 'graphql';

import { getRandomPercentageRecords } from 'src/utils/getRandomPercentageRecords';

export const filterSchemaToProcess = ({
  chunkPercentSampling,
  groupSchemas,
  specificTestFields,
}: {
  // percentage of chunk to randomly sample
  chunkPercentSampling: number;
  groupSchemas: {
    fieldName: string;
    schema: GraphQLSchema;
    schemaType: 'query' | 'mutation';
  }[];
  // specific fields to test
  specificTestFields: string[];
}) => {
  // if `specificTestFields` has something, filter the schema to process and ignore `chunkPercentSampling`
  if (specificTestFields.length > 0) {
    return groupSchemas.filter(({ fieldName }) =>
      specificTestFields.includes(fieldName)
    );
  }
  if (chunkPercentSampling === 100) {
    // Do nothing if `chunkPercentSampling` is 100
    return groupSchemas;
  }
  // if `specificTestFields` is empty, filter random amount of sampling using `chunkPercentSampling`
  return getRandomPercentageRecords(groupSchemas, chunkPercentSampling);
};
