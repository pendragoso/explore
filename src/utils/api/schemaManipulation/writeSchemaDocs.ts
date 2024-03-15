import { existsSync, mkdir } from 'fs';
import { writeFile } from 'fs/promises';

import type { ISchema } from 'src/utils/gqlRequest';

import { fetchOpenAi } from './fetchOpenAi';

const rootFolder = process.cwd();
const folderPath = `${rootFolder}/src/types/generated` as const;

/**
 * Writting schema docs to the file system
 * @writtenPath src/types/generated/${schema}/docs/${schema}_${fieldName}.txt
 */
export const writeSchemaDocs = async ({
  fieldName,
  messageToSend,
  schema,
}: {
  fieldName: string;
  // Prompt to ask openai
  messageToSend: {
    content: string;
    role: 'user' | 'assistant';
  }[];
  schema: ISchema;
}) => {
  if (fieldName) {
    const nameWithPrefix = `${schema}_${fieldName}`;
    const writeFolder = `${folderPath}/${schema}/docs`;
    const promptsFolder = `${folderPath}/${schema}/prompts`;
    if (!existsSync(writeFolder)) {
      mkdir(writeFolder, { recursive: true }, err => {
        if (err) throw err;
      });
    }
    if (!existsSync(promptsFolder)) {
      throw new Error(`Prompts folder ${promptsFolder} does not exist`);
    }

    const result = await fetchOpenAi({
      messageToSend,
    });
    const summarizedResult = result.choices[0]?.message.content
      .replace('\n\n', '')
      .trim();
    // do nothing if there is no result
    if (!summarizedResult) {
      return;
    }
    await writeFile(`${writeFolder}/${nameWithPrefix}.txt`, summarizedResult, {
      encoding: 'utf-8',
      flag: 'w',
    });
  }
};
