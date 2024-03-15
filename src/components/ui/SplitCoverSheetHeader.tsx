import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { Text } from '@zonos/amino/components/text/Text';
import { RemoveIcon } from '@zonos/amino/icons/RemoveIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

const Header = styled.div`
  display: flex;
  padding: ${theme.space12};
  border-bottom: 1px solid ${theme.gray200};
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  gap: ${theme.space8};
`;

const StyledCloseButton = styled(Button)`
  margin-right: ${theme.space24};
`;

type Props = {
  coverSheetActionId: string;
  label: string;
  onClose: () => void;
};

export const SplitCoverSheetHeader = ({
  coverSheetActionId,
  label,
  onClose,
}: Props) => (
  <Header>
    <StyledCloseButton icon={<RemoveIcon size={20} />} onClick={onClose} />
    <Text type="header">{label}</Text>
    <ActionsWrapper id={coverSheetActionId} />
  </Header>
);
