import {
  type ParsedEvent,
  type ReconnectInterval,
  createParser,
} from 'eventsource-parser';

import type { IChatBotChatRequest } from 'src/types';
import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { getChatbotRequestParameters } from 'src/utils/api/getChatbotRequestParameters';
import { basePrompt } from 'src/utils/api/schemaManipulation/prompts/basePrompt';
import { jsonParse } from 'src/utils/jsonParse';

/** Check if message includes open ai error maximum context length */
const isReachedMaximumContext = (message: string | undefined) =>
  message && message.includes('maximum context length');
const isTerminated = (message: string | undefined) =>
  message && message.includes('terminated');

type IStreamEvent =
  | {
      type: 'DONE';
    }
  | {
      message: string;
      type: 'MESSAGE';
    }
  | {
      sources: string[];
      type: 'SOURCES';
    }
  | {
      error:
        | {
            error?: {
              message: string;
            };
            message?: string;
          }
        | string;
      type: 'ERROR';
    };

type Props = {
  messageToSend: {
    content: string;
    role: 'user' | 'assistant';
  }[];
  schema: GraphHub_DeployedSchemaLabel_Enum;
  /**
   * @param systemPrompt - Prompt to ask openai
   * @default basePrompt
   */
  systemPrompt?: string;
};

export const streamChatbot = async ({
  messageToSend,
  schema,
  systemPrompt = basePrompt,
}: Props) => {
  const { headers, url } = getChatbotRequestParameters();
  const response = await fetch(`${url}/api/chat`, {
    body: JSON.stringify({
      embeddings: `explore_zonos_com/${schema}`,
      numDocs: 1,
      parameters: {
        frequency_penalty: 0,
        model: 'gpt-4',
        presence_penalty: 0,
        stop: ['##'],
        stream: true,
        temperature: 0,
        top_p: 0,
      },
      question: messageToSend.map(({ content }) => content).join('\n'),
      systemPromptOverride: systemPrompt,
    } satisfies IChatBotChatRequest),
    headers,
    method: 'POST',
  });
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (response.status !== 200) {
    const result = await response.json<{ error?: { message: string } }>();
    if (result.error && result.error.message) {
      return result.error.message;
    }
  }

  const streamResponse = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const { data } = event;

          try {
            const json = jsonParse<IStreamEvent>(data);
            if (!json) {
              const queue = encoder.encode(
                `\nError when getting streaming response!`
              );
              controller.enqueue(queue);
              return;
            }
            if (json.type === 'ERROR') {
              let errorMessage = '';
              const { error } = json;
              if (
                typeof error === 'object' &&
                isReachedMaximumContext(error.error?.message)
              ) {
                errorMessage = `Couldn't execute this schema because it may be too big. Please try again with different instruction.`;
              }
              if (typeof error === 'string' && isTerminated(error)) {
                errorMessage = `\nResponse is terminated because it reaches the maximum length from open ai. Please try again with different instruction.`;
              }
              const queue = encoder.encode(errorMessage);
              controller.enqueue(queue);
              return;
            }
            if (json.type === 'DONE') {
              controller.close();
              return;
            }
            const text = json.type === 'MESSAGE' ? json.message : '';
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);
      if (response.body) {
        const reader = response.body.getReader();
        try {
          let isDone = true;
          while (isDone) {
            // streming needs to be done in the await loop
            // eslint-disable-next-line no-await-in-loop
            const { done, value } = await reader.read();
            if (done) {
              isDone = false;
            }
            parser.feed(decoder.decode(value));
          }
        } finally {
          reader.releaseLock();
        }
      }
    },
  });
  return streamResponse;
};
