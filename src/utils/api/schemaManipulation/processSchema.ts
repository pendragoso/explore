import { countTokens } from 'src/utils/api/schemaManipulation/countTokens';
import { writeSchemaPrompt } from 'src/utils/api/schemaManipulation/writeSchemaPrompt';
import type { ISchema } from 'src/utils/gqlRequest';

import { writeSchemaDocs } from './writeSchemaDocs';

type IPromptMessage = {
  content: string;
  role: 'user' | 'assistant';
};

export const processSchema = async ({
  chatHistories,
  fieldName,
  schema,
}: {
  chatHistories: IPromptMessage[];
  fieldName: string;
  schema: ISchema;
}) => {
  const fullPrompt = chatHistories.map(({ content }) => content).join('\n');
  const { tokenCount } = countTokens({ model: 'gpt-4', text: fullPrompt });

  const { isFileChanged } = await writeSchemaPrompt({
    fieldName,
    schema,
    schemaPrompt: fullPrompt,
  });
  if (isFileChanged && tokenCount < 8000) {
    await writeSchemaDocs({ fieldName, messageToSend: chatHistories, schema });

    console.info('Finished writing schema docs', fieldName, tokenCount);
  } else if (!isFileChanged) {
    console.info("File hasn't changed", fieldName, tokenCount);
  } else {
    console.error('Token count is too high', fieldName, tokenCount);
  }
};
