import { readFile } from 'fs/promises';
import { cwd } from 'process';
import { describe, expect } from 'vitest';

import { prepareEmbeddings } from 'src/utils/api/generateEmbeddings/prepareEmbeddings';
import { convertToInstrospectionQuery } from 'src/utils/api/schemaManipulation/convertToInstrospectionQuery';

describe('prepareEmbeddings', test => {
  test('should return an array of IDocument', async () => {
    const graphqlsContent = await readFile(
      `${cwd()}/src/utils/api/generateEmbeddings/__tests__/__mocks__/internal_root.graphqls`,
      'utf-8'
    );
    const introspectionQuery = convertToInstrospectionQuery({
      graphqlsContent,
    });
    if (!introspectionQuery) {
      throw new Error('Failed to convert to introspection query');
    }

    expect(
      prepareEmbeddings({ introspectionQuery, schemaLabel: 'internal' })
    ).toMatchSnapshot();
  });
});
