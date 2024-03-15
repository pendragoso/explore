import { basePrompt } from 'src/utils/api/schemaManipulation/prompts/basePrompt';
import { env } from 'src/utils/environment';

type IOpenAiCompletionsResponse = {
  choices: {
    finish_reason: string;
    index: 0;
    logprobs: null | string;
    message: {
      content: string;
      role: 'assistant';
    };
  }[];
  created: number;
  model: string;
  object: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  };
};

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

export const fetchOpenAi = async ({
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
      stream: false,
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
  if (!response.ok) {
    console.error(await response.text());
    // display error
    throw new Error(response.statusText);
  }
  const result = await response.json<IOpenAiCompletionsResponse>();
  return result;
};
