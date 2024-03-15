import { z } from 'zod';

export const ValidateDraftSchemaRequest = z.object({
  draftSchemaId: z.number(),
});

export type IValidateDraftSchemaRequest = z.infer<
  typeof ValidateDraftSchemaRequest
>;
