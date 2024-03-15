import { type TiktokenModel, encoding_for_model } from '@dqbd/tiktoken';

export const currentModelOptions: {
  maxTokens: number;
  model: TiktokenModel;
  tokenOffset: number;
}[] = [
  { maxTokens: 2049, model: 'davinci-codex', tokenOffset: 0 },
  { maxTokens: 2049, model: 'cushman-codex', tokenOffset: 0 },
  { maxTokens: 2049, model: 'text-embedding-ada-002', tokenOffset: 0 },
  { maxTokens: 8192, model: 'gpt-4', tokenOffset: 60 },
  { maxTokens: 8192, model: 'gpt-4-0314', tokenOffset: 0 },
  { maxTokens: 32768, model: 'gpt-4-32k', tokenOffset: 0 },
  { maxTokens: 32768, model: 'gpt-4-32k-0314', tokenOffset: 0 },
  { maxTokens: 4096, model: 'gpt-3.5-turbo', tokenOffset: 0 },
  { maxTokens: 4096, model: 'gpt-3.5-turbo-0301', tokenOffset: 0 },
];

const getModelOption = (tokenModel: string | null) =>
  currentModelOptions.find(({ model }) => tokenModel === model);

export const countTokens = ({
  model,
  text,
}: {
  model: string | null;
  text: string;
}) => {
  const fallbackLength = Math.ceil(text.length / 4);

  const modelOption = getModelOption(model);

  if (!model || !modelOption) {
    console.error(
      `Couldn't find model ${model} , fallback to approximate calculation`
    );
    return { maxTokens: 2049, tokenCount: fallbackLength };
  }

  // turn text into GPT model consumable tokens
  const encoding = encoding_for_model(modelOption.model);

  const tokens = encoding.encode(text);
  encoding.free();

  const tokenCount = tokens.length + modelOption.tokenOffset;

  if (tokenCount > modelOption.maxTokens) {
    console.error(
      `Text length ${tokens.length} exceeds max tokens ${modelOption.maxTokens} for model ${model}`
    );
  }
  return { maxTokens: modelOption.maxTokens, tokenCount };
};
