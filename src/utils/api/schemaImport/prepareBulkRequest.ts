import { GraphQLSchema } from 'graphql';

import type { IChatBotChatRequest, ISchemaImportMeta } from 'src/types';
import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import {
  schemaChunkGenerationPrompt,
  schemaSystemBasePrompt,
} from 'src/utils/api/schemaManipulation/prompts/schemaChunkGenerationPrompt';

type IMessageRole = 'user' | 'assistant';

const getBasePrompt = (
  graphqlSchemaType: string
): { content: string; role: IMessageRole }[] => [
  {
    content: schemaChunkGenerationPrompt({
      schemaContent: graphqlSchemaType,
    }),
    role: 'user',
  },
];

export const prepareBulkRequest = ({
  graphqlSchema,
  meta,
}: {
  graphqlSchema: GraphQLSchema;
  meta: ISchemaImportMeta;
}): IChatBotChatRequest => {
  // convert to schema type definition file
  const graphqlSchemaType = convertToSchemaType(graphqlSchema);

  const chatHistories = getBasePrompt(graphqlSchemaType);

  const fullPrompt = chatHistories.map(({ content }) => content).join('\n');

  return {
    embeddings: 'NONE',
    meta,
    parameters: {
      frequency_penalty: 0,
      model: 'gpt-4',
      presence_penalty: 0,
      stop: ['##'],
      temperature: 0,
      top_p: 0,
    },
    question: fullPrompt,
    systemPromptOverride: schemaSystemBasePrompt,
  };
};
