import { existsSync, mkdir } from 'fs';
import { writeFile } from 'fs/promises';

import type { ISchema } from 'src/utils/gqlRequest';

import { checkIfFileChanged } from './checkIfFileChanged';

const rootFolder = process.cwd();
const folderPath = `${rootFolder}/src/types/generated` as const;

/**
 * Writing schema types to the file system
 * @writtenPath src/types/generated/${schema}/types/${schema}_${fieldName}.graphqls
 */
export const writeSchemaPrompt = async ({
  fieldName,
  schema,
  schemaPrompt,
}: {
  fieldName: string;
  schema: ISchema;
  // This schema would only have either one query or mutation
  schemaPrompt: string;
}) => {
  if (fieldName) {
    const nameWithPrefix = `${schema}_${fieldName}`;
    const writeFolder = `${folderPath}/${schema}/prompts`;
    if (!existsSync(writeFolder)) {
      mkdir(writeFolder, { recursive: true }, err => {
        if (err) throw err;
      });
    }
    const isFileChanged = await checkIfFileChanged({
      filePath: `${writeFolder}/${nameWithPrefix}.graphqls`,
      text: schemaPrompt,
    });

    if (isFileChanged) {
      console.info(`File changed: ${nameWithPrefix}.graphqls`);
      // Only write if schema file graphqls changed
      await writeFile(
        `${writeFolder}/${nameWithPrefix}.graphqls`,
        schemaPrompt,
        {
          encoding: 'utf-8',
          flag: 'w',
        }
      );
    }
    return { isFileChanged };
  }
  return {
    isFileChanged: false,
  };
};
