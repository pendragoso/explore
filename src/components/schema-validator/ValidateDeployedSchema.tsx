import { useState } from 'react';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { theme } from '@zonos/amino/styles/constants/theme';
import { handleFetch } from '@zonos/amino/utils/handleFetch';
import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { DeployedSchemaSelect } from 'src/components/graph-explorer/DeployedSchemaSelect';
import { Tooltip } from 'src/components/ui/Tooltip';
import type { IValidateDeployedSchemaRequest } from 'src/types';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space16};
  flex-direction: column;
  padding-bottom: ${theme.space12};
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

export const ValidateDeployedSchema = ({
  onFinish,
}: {
  onFinish: () => Promise<void>;
}) => {
  const [schema, setSchema] = useState<ICurrentSchemaType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const notify = useNotify();

  const onValidate = async () => {
    if (schema) {
      setIsLoading(true);
      // upload file content to /api/import-deployed-schema
      const { errors } = await handleFetch<
        unknown,
        IValidateDeployedSchemaRequest
      >('/api/validate-deployed-schema', {
        body: {
          deployedSchemaId: schema.id,
        },
        method: 'POST',
      });
      if (errors.length) {
        const firstError = errors[0]?.message || 'Unknown error';
        notify(firstError, { intent: 'error' });
        return;
      }

      notify('Imported successfully! Schema is being processed', {
        intent: 'success',
      });
      await onFinish();
      setIsLoading(false);
    }
  };

  const isDisabled = !schema?.id;
  return (
    <StyledWrapper>
      <VStack spacing={8}>
        <DeployedSchemaSelect schema={schema} setSchema={setSchema} size="xl" />
        <Text type="hint-text">Please select schema you want to validate</Text>
        <Tooltip showTooltip={isDisabled} subtitle="Please select schema">
          <StyledButton
            disabled={isDisabled}
            loading={isLoading}
            onClick={onValidate}
            variant="primary"
          >
            Validate
          </StyledButton>
        </Tooltip>
      </VStack>
    </StyledWrapper>
  );
};
