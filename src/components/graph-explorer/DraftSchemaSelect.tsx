import styled from 'styled-components';

import type { Size } from '@zonos/amino/types/Size';

import { Select } from 'src/components/Select';
import { useGraphHubSchema } from 'src/hooks/useGraphHubSchema';

const StyledSelect = styled(Select)`
  .react-select-control {
    min-width: 150px;
  }
`;

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

export const DraftSchemaSelect = ({
  schema,
  setSchema,
  size = 'md',
}: {
  schema: ICurrentSchemaType | null;
  size?: Size;
  setSchema: (s: ICurrentSchemaType) => void;
}) => {
  const { draftSchemaOptions, draftSchemas } = useGraphHubSchema();
  return (
    <StyledSelect
      isClearable={false}
      label="Draft schema"
      onChange={item => {
        const foundDraftItem = draftSchemas.find(s => s.id === item?.value);
        if (foundDraftItem) {
          setSchema({ schemaType: 'draft', ...foundDraftItem });
        }
      }}
      options={draftSchemaOptions}
      size={size}
      value={draftSchemaOptions.find(s => s.value === schema?.id) || null}
    />
  );
};
