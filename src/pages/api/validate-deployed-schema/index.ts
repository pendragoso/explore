import type { NextApiRequest, NextApiResponse } from 'next';

import type { IValidateDeployedSchemaRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { getChunkByDeployedSchemaId } from 'src/utils/api/schemaValidate/getChunkByDeployedSchemaId';
import { handleBulkChatBotRequest } from 'src/utils/api/schemaValidate/handleBulkChatBotRequest';
import { updateDeployedChunks } from 'src/utils/api/schemaValidate/updateDeployedChunks';
import { jsonParse } from 'src/utils/jsonParse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const { deployedSchemaId } = jsonParse(
    req.body
  ) as IValidateDeployedSchemaRequest;

  let chunkList: Awaited<ReturnType<typeof getChunkByDeployedSchemaId>> = [];
  // Get all chunks by schema id
  try {
    chunkList = await getChunkByDeployedSchemaId({
      deployedSchemaId,
      req,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Get chunk by deployed schema id error: ${error.message}`);
      return;
    }
  }

  // Filter out chunks that don't have chat completion option
  const filteredChunkList = chunkList.filter(
    chunk => chunk.chatCompletionOption?.result
  );

  let bulkJobId: number;
  let chatCompletionOptionIds: number[];
  try {
    // Send chunk query to the chatbot to queue it for processing
    const result = await handleBulkChatBotRequest({
      schemaChunks: filteredChunkList.map(chunk => ({
        data: chunk.chatCompletionOption?.result || '',
        id: chunk.id,
      })),
    });
    bulkJobId = result.bulkJobId;
    chatCompletionOptionIds = result.chatCompletionOptionIds;

    if (chatCompletionOptionIds.length !== filteredChunkList.length) {
      throw new Error(
        'Chat completion option ids length is not equal to filtered chunk list length'
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Bulk chatbot request error: ${error.message}`);
    }
    return;
  }

  // Save the new bulk job id, old completion result to `data` field
  // and replace current chat option id with the new one, to the current schema
  try {
    await updateDeployedChunks({
      bulkJobId,
      chatCompletionOptionIds,
      chunkResult: filteredChunkList.map(chunk => ({
        id: chunk.id,
        oldCompletionResult: chunk.chatCompletionOption?.result || '',
      })),
      req,
      schemaId: deployedSchemaId,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Insert deployed schema chunk error: ${error.message}`);
      return;
    }
  }

  handleHeaders(req, res);
  res.status(200);
  res.json('Import schema successfully');
};
export default handler;
