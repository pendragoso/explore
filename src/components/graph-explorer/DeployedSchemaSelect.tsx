import styled from 'styled-components';

import type { Size } from '@zonos/amino/types/Size';

import { Select } from 'src/components/Select';
import { useGraphHubSchema } from 'src/hooks/useGraphHubSchema';

const StyledSelect = styled(Select)`
  .react-select-control {
    min-width: 200px;
  }
`;

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

export const DeployedSchemaSelect = ({
  schema,
  setSchema,
  size = 'md',
}: {
  schema: ICurrentSchemaType | null;
  size?: Size;
  setSchema: (s: ICurrentSchemaType) => void;
}) => {
  const { deployedSchemaOptions, deployedSchemas } = useGraphHubSchema();
  return (
    <StyledSelect
      isClearable={false}
      onChange={item => {
        const foundDeployedItem = deployedSchemas.find(
          s => s.id === item?.value
        );
        if (foundDeployedItem) {
          setSchema({ schemaType: 'deployed', ...foundDeployedItem });
        }
      }}
      options={deployedSchemaOptions}
      size={size}
      value={deployedSchemaOptions.find(s => s.value === schema?.id) || null}
    />
  );
};
