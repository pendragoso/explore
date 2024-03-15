import { z } from 'zod';

import type { Prompt_BulkJobStatus_Enum } from 'src/types/generated/graphql.frontend.types';

export const BulkJobStatusRequest = z.object({
  bulkJobId: z.coerce.number(),
});

export type IBulkJobStatusRequest = z.infer<typeof BulkJobStatusRequest>;

export type IBulkJobStatusResponse = {
  completedRequests: number;
  status: Prompt_BulkJobStatus_Enum;
  totalRequests: number;
};
