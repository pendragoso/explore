import { z } from 'zod';

export const GetSchemaRequest = z.object({
  schemaId: z.coerce.number(),
  schemaType: z.union([z.literal('deployed'), z.literal('draft')]),
});

export type IGetSchemaRequest = z.infer<typeof GetSchemaRequest>;
