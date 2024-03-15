import type { NextApiRequest, NextApiResponse } from 'next';

import { ValidateDraftSchemaRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { paginateCallback } from 'src/utils/api/paginateCallback';
import {
  type IDraftChunk,
  getDraftSchemaWithChunksById,
} from 'src/utils/api/schemaValidate/getDraftSchemaWithChunksById';
import { handleBulkChatBotRequest } from 'src/utils/api/schemaValidate/handleBulkChatBotRequest';
import { updateDraftChunks } from 'src/utils/api/schemaValidate/updateDraftChunks';
import { jsonParse } from 'src/utils/jsonParse';

const processAndChunkRequest = async ({
  chunksToValidate,
  draftSchemaId,
  req,
}: {
  chunksToValidate: IDraftChunk[];
  draftSchemaId: number;
  req: NextApiRequest;
}) => {
  let bulkJobId: number;
  let chatCompletionOptionIds: number[];
  try {
    // Send chunk query to the chatbot to queue it for processing
    const result = await handleBulkChatBotRequest({
      schemaChunks: chunksToValidate.map(chunk => ({
        data: chunk.chatCompletionOption?.result || '',
        id: chunk.id,
      })),
    });
    bulkJobId = result.bulkJobId;
    chatCompletionOptionIds = result.chatCompletionOptionIds;

    if (chatCompletionOptionIds.length !== chunksToValidate.length) {
      throw new Error(
        'Chat completion option ids length is not equal to filtered chunk list length'
      );
    }
  } catch (error) {
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Bulk chatbot request error: ${errorMessage}`);
  }

  // Save the new bulk job id, old completion result to `apiReferenceData` field,
  // and replace current chat option id with the new one to the current schema
  try {
    await updateDraftChunks({
      bulkJobId,
      chatCompletionOptionIds,
      chunkResult: chunksToValidate.map(chunk => ({
        apiReferenceDataLabel: chunk.apiReferenceDataLabel,
        chatCompletionResult: chunk.chatCompletionOption?.result || '',
        id: chunk.id,
        userId: chunk.userId,
      })),
      req,
      schemaId: draftSchemaId,
    });
  } catch (error) {
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Update draft schema chunk error: ${errorMessage}`);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const bodyJson = jsonParse(req.body);
  const parsedBody = ValidateDraftSchemaRequest.safeParse(bodyJson);
  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }
  const { draftSchemaId } = parsedBody.data;

  let schemaResult: Awaited<ReturnType<typeof getDraftSchemaWithChunksById>>;
  // Get all chunks by schema id
  try {
    schemaResult = await getDraftSchemaWithChunksById({
      draftSchemaId,
      req,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Get chunk by draft schema id error: ${error.message}`);
    }
    return;
  }

  const { draftSchemaChunks } = schemaResult;
  // Filter out chunks that don't have chat completion option
  // Only chunk that hasn't been validated doesn't have apiReferenceData
  const filteredChunkList = draftSchemaChunks.filter(
    chunk => chunk.chatCompletionOption?.result && !chunk.apiReferenceData
  );

  if (!filteredChunkList.length) {
    // no chunks ready to validate
    res.status(204).send("No chunk ready to validate, don't need to validate");
    return;
  }

  const promiseResults = await paginateCallback({
    arrayToPaginate: filteredChunkList,
    callback: async chunksToValidate =>
      processAndChunkRequest({
        chunksToValidate,
        draftSchemaId,
        req,
      }),
  });

  const failedResults = promiseResults.filter(
    result => result.status === 'rejected'
  );
  if (failedResults.length > 0) {
    res.status(500);
    res.json(
      failedResults.map(
        result => result.status === 'rejected' && { reason: `${result.reason}` }
      )
    );
    return;
  }
  handleHeaders(req, res);
  res.status(200);
  res.json('Validate schema successfully');
};
export default handler;
