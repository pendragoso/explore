import { z } from 'zod';

export const ImportDraftSchemaRequest = z.object({
  chunkPercentSampling: z.number(),
  schemaContent: z.string(),
  schemaLabel: z.string(),
  specificTestFields: z.array(z.string()),
});

export type IImportDraftSchemaRequest = z.infer<
  typeof ImportDraftSchemaRequest
>;
