export const modelLimit = {
  'gpt-3.5': 4096,
  'gpt-3.5-turbo': 4096,
  'gpt-4': 8192,
} as const;

const isInModelList = (model: string): model is keyof typeof modelLimit =>
  Object.keys(modelLimit).includes(model);

export const getModelLimit = (model: string) =>
  isInModelList(model) ? modelLimit[model] : 4096;
