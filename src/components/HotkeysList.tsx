import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import styled from 'styled-components';

import { Dialog } from '@zonos/amino/components/dialog/Dialog';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { theme } from '@zonos/amino/styles/constants/theme';

export const hotkeys = {
  'Open hotkey list': 'alt+h',
  'Open store switcher': 'alt+s',
  'Toggle sidebar': 'alt+b',
};

const StyledVStack = styled(VStack)`
  margin-bottom: ${theme.space16};
`;

export const KeyboardButton = styled.kbd`
  border-radius: 4px;
  padding: 4px;
  background-color: ${theme.gray50};
  box-shadow: ${theme.v3ShadowBase};
`;

export const HotkeysList = () => {
  const [open, setOpen] = useState(false);

  useHotkeys(hotkeys['Open hotkey list'], e => {
    e.preventDefault();
    setOpen(!open);
  });

  return (
    <Dialog label="Hotkeys" onClose={() => setOpen(false)} open={open}>
      <StyledVStack>
        {Object.entries(hotkeys).map(([label, hotkey]) => (
          <div key={label}>
            <Text>{label}</Text>: <KeyboardButton>{hotkey}</KeyboardButton>
          </div>
        ))}
      </StyledVStack>
    </Dialog>
  );
};
