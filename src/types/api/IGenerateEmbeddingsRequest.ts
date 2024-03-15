import { z } from 'zod';

export const GenerateEmbeddingsRequest = z.object({
  schema: z.enum(['auth', 'customer', 'internal']),
});

export type IGenerateEmbeddingsRequest = z.infer<
  typeof GenerateEmbeddingsRequest
>;
