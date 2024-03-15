import { useState } from 'react';

import capitalize from 'lodash/capitalize';
import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { HStack } from '@zonos/amino/components/stack/HStack';
import { Textarea } from '@zonos/amino/components/textarea/Textarea';
import { LinkIcon } from '@zonos/amino/icons/LinkIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

import { SlideOver } from 'src/components/graph-explorer/SlideOver';
import { Select } from 'src/components/Select';
import { Copy } from 'src/components/ui/Copy';
import { Tooltip } from 'src/components/ui/Tooltip';
import { useShareQuery } from 'src/hooks/graphiql-plugin/useShareQuery';
import { useGraphHubCategory } from 'src/hooks/useGraphHubCategory';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.space8};
  padding: ${theme.space8};
  height: 100%;
`;

const StyledTextarea = styled(Textarea)`
  flex-grow: 1;
  > div,
  textarea {
    height: 100%;
  }
`;
const StyledActionWrapper = styled(HStack)`
  display: flex;
`;

type Props = {
  open: boolean;
  query: string;
  schema: {
    id: number;
    label: string;
    schemaType: 'deployed' | 'draft';
  };
  userId: string;
  variables: string;
  setOpen: (open: boolean) => void;
  setQuery: (query: string) => void;
  setVariables: (variables: string) => void;
};

export const ShareQuerySidebar = ({
  open,
  query,
  schema,
  setOpen,
  setQuery,
  setVariables,
  userId,
  variables,
}: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const {
    firstError,
    isSubmitting,
    shareQueryDeployedSchema,
    shareQueryDraftSchema,
    shareUrl,
  } = useShareQuery({
    categoryId: selectedCategoryId,
    query,
    setQuery,
    setVariables,
    userId,
    variables,
  });
  const { firstCategory, options } = useGraphHubCategory({
    setSelectedCategoryId,
  });

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <SlideOver
      onClose={() => setOpen(false)}
      open={open}
      title={`${capitalize(schema.label)} graph`}
      width="500px"
    >
      <StyledWrapper>
        <Select
          isClearable={false}
          label="Category"
          onChange={e => {
            if (e) {
              const intValue = parseInt(e.value, 10);
              setSelectedCategoryId(intValue);
            }
          }}
          options={options}
          value={
            options.find(
              option => selectedCategoryId?.toString() === option.value
            ) || firstCategory
          }
        />
        <StyledTextarea disabled title="Query" value={query} />
        <StyledTextarea disabled title="Variables" value={variables} />
        <StyledActionWrapper spacing={8}>
          <Tooltip showTooltip={!!firstError} subtitle={firstError}>
            <Button
              disabled={!!firstError}
              loading={isSubmitting}
              onClick={() =>
                schema.schemaType === 'deployed'
                  ? shareQueryDeployedSchema({
                      deployedSchemaId: schema.id,
                    })
                  : shareQueryDraftSchema({
                      draftSchemaId: schema.id,
                    })
              }
            >
              Clone
            </Button>
          </Tooltip>
          {shareUrl && (
            <Copy
              hideCanCopy
              hideDidCopy
              hideLabel
              label="Click to copy"
              value={`${origin}${shareUrl}`}
            >
              <Button icon={<LinkIcon />} />
            </Copy>
          )}
        </StyledActionWrapper>
      </StyledWrapper>
    </SlideOver>
  );
};
