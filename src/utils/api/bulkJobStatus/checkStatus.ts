import { handleFetch } from '@zonos/amino/utils/handleFetch';

import type { IBulkJobStatusRequest, IBulkJobStatusResponse } from 'src/types';
import { getChatbotRequestParameters } from 'src/utils/api/getChatbotRequestParameters';

export const checkStatus = async (bulkJobId: number) => {
  const { headers, url } = getChatbotRequestParameters();

  const { errors, json } = await handleFetch<
    IBulkJobStatusResponse,
    IBulkJobStatusRequest
  >(`${url}/api/bulk/status/${bulkJobId}`, {
    headers,
  });

  if (errors.length) {
    throw new Error(errors[0]?.message || 'Unknown error from chatbot.');
  }

  if (!json) {
    throw new Error('Error when sending bulk request to chatbot.');
  }

  return json;
};
