import { z } from 'zod';

export const SchemaRetryRequest = z.object({
  chunkId: z.coerce.number(),
});

export type ISchemaRetryRequest = z.infer<typeof SchemaRetryRequest>;
