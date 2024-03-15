export type IChatBotChatRequest<
  TMeta extends Record<string, unknown> = Record<string, unknown>
> = {
  embeddings?: string;
  history?: [string, string][];
  meta?: TMeta;
  numDocs?: number;
  parameters?: {
    frequency_penalty?: number;
    logit_bias?: Record<string, number>;
    max_tokens?: number;
    model?: string;
    n?: number;
    presence_penalty?: number;
    stop: string | string[];
    stream?: boolean;
    temperature?: number;
    top_p?: number;
    user?: string;
  };
  question: string;
  showSources?: boolean;
  systemPromptOverride?: string;
  webhook?: {
    meta: string;
    url: string;
  };
};

export type IChatBotChatResponse = {
  bulkJobId: number;
  chatCompletionOptionIds: number[];
};
