import { useState } from 'react';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { theme } from '@zonos/amino/styles/constants/theme';
import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { DeployedSchemaSelect } from 'src/components/graph-explorer/DeployedSchemaSelect';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space16};
  flex-direction: column;
  padding-bottom: ${theme.space12};
`;

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

export const DeployedSchemaImport = ({
  onFinish,
}: {
  onFinish: () => void;
}) => {
  const [schema, setSchema] = useState<ICurrentSchemaType | null>(null);

  const notify = useNotify();
  const handleRefetch = async () => {
    onFinish();
    notify('Schema re-fetched', { intent: 'success' });
  };
  return (
    <StyledWrapper>
      <VStack spacing={8}>
        <DeployedSchemaSelect schema={schema} setSchema={setSchema} size="xl" />
        <Text type="hint-text">
          Please select schema to upload new graphql content to validate
        </Text>
      </VStack>
      <Button onClick={handleRefetch}>Re-fetch schema</Button>
    </StyledWrapper>
  );
};
