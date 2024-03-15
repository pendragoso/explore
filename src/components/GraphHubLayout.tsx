import { type ReactNode, useState } from 'react';

import styled from 'styled-components';

import { ThemeSelect } from '@zonos/amino/components/theme-select/ThemeSelect';
import { theme } from '@zonos/amino/styles/constants/theme';

import { DeployedSchemaSelect } from 'src/components/graph-explorer/DeployedSchemaSelect';
import { DraftSchemaSelect } from 'src/components/graph-explorer/DraftSchemaSelect';
import { useCurrentSchema } from 'src/hooks/useCurrentShema';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space12};
  padding: ${theme.space12} 0;
  padding-left: ${theme.space20};
  border-bottom: var(--amino-border);
`;

const StyledGroupWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.space8};
`;

const StyledContent = styled.div`
  height: calc(100% - 58px);
`;

const Right = styled.div`
  float: right;
`;

export const GraphHubLayout = ({ children }: { children: ReactNode }) => {
  const [schema, setSchema] = useCurrentSchema();

  const [schemaType] = useState<'deployed' | 'draft'>('deployed');
  return (
    <StyledWrapper>
      <StyledAction>
        <StyledGroupWrapper>
          {schemaType === 'deployed' && schema && (
            <DeployedSchemaSelect schema={schema} setSchema={setSchema} />
          )}
          {schemaType === 'draft' && schema && (
            <DraftSchemaSelect schema={schema} setSchema={setSchema} />
          )}
          {/* <Checkbox
            label="Draft"
            onChange={() =>
              setSchemaType(schemaType === 'draft' ? 'deployed' : 'draft')
            }
            checked={schemaType === 'draft'}
          /> */}
          <Right>
            <ThemeSelect type="toggle" />
          </Right>
        </StyledGroupWrapper>
      </StyledAction>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};
