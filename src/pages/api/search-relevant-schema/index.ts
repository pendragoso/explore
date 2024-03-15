import { type NextRequest, NextResponse } from 'next/server';

import { type IntrospectionQuery, buildClientSchema } from 'graphql';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { getDeployedSchemaJson } from 'src/utils/api/getDeployedSchemaJson';
import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import { searchRelevantSchemaPrompt } from 'src/utils/api/schemaManipulation/prompts/searchRelevantSchemaPrompt';
import { streamOpenAi } from 'src/utils/api/schemaManipulation/streamOpenAi';

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

  const { errors, json: schemaData } = await getDeployedSchemaJson({
    req,
    schema,
  });

  if (!schemaData || errors.length) {
    throw new Error('No schema found');
  }
  const schemaQuery = schemaData as unknown as IntrospectionQuery;

  const clientSchema = buildClientSchema(schemaQuery);
  const schemaType = convertToSchemaType(clientSchema);
  // for now, we only care about the last message because we are overload with token from schem type
  const lastUserMessage = messageToSend.at(-1);

  if (!lastUserMessage || lastUserMessage.role !== 'user') {
    return new NextResponse('Please provide an instruction');
  }
  const stream = await streamOpenAi({
    messageToSend: [
      {
        content: `Below is the schema type api reference for a ${schema} schema:\n${schemaType}.\nRead it and follow the instruction below:`,
        role: 'user',
      },
      {
        ...lastUserMessage,
        // replace the instruction in the prompt with the last user message
        content: searchRelevantSchemaPrompt.replace(
          '{instruction}',
          lastUserMessage.content
        ),
      },
    ],
    systemPrompt: searchRelevantSchemaPrompt,
  });
  return new NextResponse(stream);
};

export default handler;
