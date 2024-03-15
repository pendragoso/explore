import { z } from 'zod';

export const GetSchemaFieldsRequest = z.object({
  schemaContent: z.string(),
});

export type IGetSchemaFieldsRequest = z.infer<typeof GetSchemaFieldsRequest>;

export type IGetSchemaFieldsResponse = {
  mutationFieldNames: string[];
  queryFieldNames: string[];
};
