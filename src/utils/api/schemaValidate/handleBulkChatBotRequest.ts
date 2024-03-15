import { handleFetch } from '@zonos/amino/utils/handleFetch';

import type { IChatBotBulkRequest, IChatBotBulkResponse } from 'src/types';
import { getChatbotRequestParameters } from 'src/utils/api/getChatbotRequestParameters';
import { prepareBulkRequest } from 'src/utils/api/schemaValidate/prepareBulkRequest';

type Params = {
  schemaChunks: {
    data: string;
    id: number;
  }[];
};

/**
 * Send chunk schema to bulk chatbot endpoint
 */
export const handleBulkChatBotRequest = async ({ schemaChunks }: Params) => {
  const bulkChatBotRequests = [
    ...schemaChunks.map(chunk =>
      prepareBulkRequest({
        schemaApiReference: chunk.data,
      })
    ),
  ];

  const { headers, url } = getChatbotRequestParameters();

  const { errors, json } = await handleFetch<
    IChatBotBulkResponse,
    IChatBotBulkRequest
  >(`${url}/api/bulk`, {
    body: {
      chatRequests: bulkChatBotRequests,
      meta: {
        type: 'schema-validation',
      },
      projectLabel: 'explore_schema_validation',
    },
    headers,
    method: 'POST',
  });

  if (errors.length) {
    throw new Error(errors[0]?.message || 'Unknown error from chatbot.');
  }

  if (!json) {
    throw new Error('Error when sending bulk request to chatbot.');
  }

  return json;
};
