import { GraphQLSchema } from 'graphql';

import { handleFetch } from '@zonos/amino/utils/handleFetch';

import type {
  IChatBotBulkRequest,
  IChatBotBulkResponse,
  IChatBotChatRequest,
  ISchemaImportMeta,
} from 'src/types';
import { getChatbotRequestParameters } from 'src/utils/api/getChatbotRequestParameters';

export type ISchema = {
  schema: GraphQLSchema;
  schemaType: 'query' | 'mutation';
};

/**
 * Send chunk schema to bulk chatbot endpoint
 */
export const handleBulkChatBotRequest = async ({
  bulkChatBotRequests,
}: {
  bulkChatBotRequests: IChatBotChatRequest[];
}) => {
  const { headers, url } = getChatbotRequestParameters();

  const meta: ISchemaImportMeta = {
    bulkRequestType: 'importSchema',
  };

  const { errors, json } = await handleFetch<
    IChatBotBulkResponse,
    IChatBotBulkRequest
  >(`${url}/api/bulk`, {
    body: {
      chatRequests: bulkChatBotRequests,
      meta,
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
