import type { IChatBotChatRequest } from 'src/types';

export type IChatBotBulkRequest = {
  chatRequests: IChatBotChatRequest[];
  meta?: Record<string, unknown>;
  projectLabel?: string;
};

export type IChatBotBulkResponse = {
  bulkJobId: number;
  chatCompletionOptionIds: number[];
};
