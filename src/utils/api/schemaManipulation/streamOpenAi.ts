import {
  type ParsedEvent,
  type ReconnectInterval,
  createParser,
} from 'eventsource-parser';

import { basePrompt } from 'src/utils/api/schemaManipulation/prompts/basePrompt';
import { env } from 'src/utils/environment';
import { jsonParse } from 'src/utils/jsonParse';

type Props = {
  messageToSend: {
    content: string;
    role: 'user' | 'assistant';
  }[];
  /**
   * @param systemPrompt - Prompt to ask openai
   * @default basePrompt
   */
  systemPrompt?: string;
};

type ICompletionsResponse = {
  choices: {
    delta: {
      content: string;
    };
    finish_reason: null;
    index: number;
  }[];
  created: number;
  id: string;
  model: string;
  object: string;
};

type ICompletionsErrorResponse = {
  error?: {
    code: string;
    message: string;
    statusCode: number;
  };
};

export const streamOpenAi = async ({
  messageToSend,
  systemPrompt = basePrompt,
}: Props) => {
  const openAiSecretKey = env.OPEN_AI_API_KEY;
  const openAiOrganization = env.OPEN_AI_ORGANIZATION;
  // call to openai to ask question
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    body: JSON.stringify({
      frequency_penalty: 0,
      messages: [
        {
          content: systemPrompt,
          role: 'system',
        },
        ...messageToSend,
      ],
      model: 'gpt-4',
      presence_penalty: 0,
      stop: ['##'],
      stream: true,
      temperature: 0,
      top_p: 0,
    }),
    headers: {
      'OpenAI-Organization': openAiOrganization,
      authorization: `Bearer ${openAiSecretKey}`,
      'content-type': 'application/json',
    },
    method: 'post',
  });
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (response.status !== 200) {
    const result = await response.json<ICompletionsErrorResponse>();
    if (result.error) {
      return result.error.message;
    }
  }

  const streamResponse = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const { data } = event;

          try {
            const json = jsonParse<ICompletionsResponse>(data);
            if (json?.choices[0]?.finish_reason != null) {
              controller.close();
              return;
            }
            const text = json?.choices[0]?.delta.content;
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
