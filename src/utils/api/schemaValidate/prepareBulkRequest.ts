import type { IChatBotBulkRequest } from 'src/types';
import {
  schemaChunkValidationPrompt,
  schemaValidateBasePrompt,
} from 'src/utils/api/schemaManipulation/prompts/schemaChunkValidationPrompt';

type IMessageRole = 'user' | 'assistant';

const getBasePrompt = (
  schemaApiReference: string
): { content: string; role: IMessageRole }[] => [
  {
    content: `${schemaChunkValidationPrompt}`,
    role: 'user',
  },
  {
    content: `${schemaValidateBasePrompt}\n${schemaApiReference}`,
    role: 'user',
  },
];

export const prepareBulkRequest = ({
  schemaApiReference,
}: {
  schemaApiReference: string;
}): IChatBotBulkRequest['chatRequests'][number] => {
  const chatHistories = getBasePrompt(schemaApiReference);

  const fullPrompt = chatHistories.map(({ content }) => content).join('\n');

  return {
    embeddings: 'NONE',
    parameters: {
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: '##',
      temperature: 0,
      top_p: 0,
    },
    question: fullPrompt,
    systemPromptOverride: '',
  };
};
