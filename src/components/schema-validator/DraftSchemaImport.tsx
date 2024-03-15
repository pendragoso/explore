import { useState } from 'react';

import styled from 'styled-components';

import { Input } from '@zonos/amino/components/input/Input';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { theme } from '@zonos/amino/styles/constants/theme';
import { handleFetch } from '@zonos/amino/utils/handleFetch';
import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { ImportSchemaBase } from 'src/components/schema-validator/_ImportSchemaBase';
import type { IImportDraftSchemaRequest } from 'src/types';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space16};
  flex-direction: column;
  padding-bottom: ${theme.space12};
`;

export const DraftSchemaImport = ({ onFinish }: { onFinish: () => void }) => {
  const [schemaLabel, setSchemaLabel] = useState<string | null>(null);

  const notify = useNotify();

  const onUpload = async ({
    chunkPercentSampling,
    files,
    specificTestFields,
  }: {
    chunkPercentSampling: number;
    files: File[];
    specificTestFields: string[];
  }) => {
    const schemaContent = await files[0]?.text();
    if (schemaContent && schemaLabel) {
      // upload file content to /api/import-draft-schema
      const { errors } = await handleFetch<unknown, IImportDraftSchemaRequest>(
        '/api/import-draft-schema',
        {
          body: {
            chunkPercentSampling,
            schemaContent,
            schemaLabel,
            specificTestFields,
          },
          method: 'POST',
        }
      );
      if (errors.length) {
        const firstError = errors[0]?.message || 'Unknown error';
        notify(firstError, { intent: 'error' });
        return;
      }

      notify('Imported successfully! Schema is being processed', {
        intent: 'success',
      });
      onFinish();
    }
  };

  return (
    <StyledWrapper>
      <VStack spacing={8}>
        <Input
          label="Schema name"
          onChange={e => setSchemaLabel(e.target.value)}
          value={schemaLabel}
        />
        <Text type="hint-text">
          Please select schema to upload new graphql content to validate
        </Text>
      </VStack>
      <ImportSchemaBase onUpload={onUpload} schemaName={schemaLabel || ''} />
    </StyledWrapper>
  );
};
