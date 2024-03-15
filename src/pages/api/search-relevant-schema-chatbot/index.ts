import { type NextRequest, NextResponse } from 'next/server';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import {
  searchRelevantSchemaBasePrompt,
  searchRelevantSchemaSystemPrompt,
} from 'src/utils/api/schemaManipulation/prompts/searchRelevantSchemaPrompt';
import { streamChatbot } from 'src/utils/api/schemaManipulation/streamChatbot';

export const config = {
  runtime: 'edge',
};

type IRequestBody = {
  messageToSend: {
    content: string;
    role: 'user' | 'assistant';
  }[];
  schema: GraphHub_DeployedSchemaLabel_Enum;
};

const handler = async (req: NextRequest) => {
  const body = await req.json<IRequestBody>();
  const { messageToSend, schema } = body;

  // for now, we only care about the last message because we are overload with token from schem type
  const lastUserMessage = messageToSend.at(-1);

  if (!lastUserMessage || lastUserMessage.role !== 'user') {
    return new NextResponse('Please provide an instruction');
  }
  const stream = await streamChatbot({
    messageToSend: [
      {
        content: `Above is the GraphQl schema type document for a "${schema}" schema\nFollow the instruction below`,
        role: 'user',
      },
      {
        ...lastUserMessage,
        // replace the instruction in the prompt with the last user message
        content: searchRelevantSchemaBasePrompt(lastUserMessage.content),
      },
    ],
    schema,
    systemPrompt: searchRelevantSchemaSystemPrompt,
  });
  return new NextResponse(stream);
};

export default handler;
