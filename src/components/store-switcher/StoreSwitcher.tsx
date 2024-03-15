import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { Surface } from '@zonos/amino/components/surface/Surface';
import { theme } from '@zonos/amino/styles/constants/theme';

import type { IElasticStore } from 'src/types';

import { AccountList } from './StoreList';

const SwitcherSurface = styled(Surface)`
  z-index: 99999;
  overflow-x: hidden;
  width: 400px;
  box-sizing: border-box;
  padding: 0;
  margin-left: 0;
  margin-top: 30px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: ${theme.radius12};
  position: absolute;
  overscroll-behavior: contain;
`;

const Switcher = styled(motion.div)`
  position: absolute;
  left: calc(50% - 200px);
  top: 10%;
  z-index: 99998;
  overscroll-behavior: contain;
`;

const StyledBackdrop = styled(motion.div)`
  /* This is a dark mode value hardcoded :) */
  background: ${theme.gray100};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 999;
  position: fixed;
`;

const ForegroundBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  open: boolean;
  stores: IElasticStore[];
  handleClose: () => void;
};

export const StoreSwitcher = ({ handleClose, open, stores }: Props) => (
  <AnimatePresence>
    {open && (
      <>
        <StyledBackdrop
          key="account-switcher-backdrop"
          animate={{ opacity: 0.65 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        <ForegroundBackdrop onClick={handleClose}>
          <Switcher
            key="account-switcher-dialog"
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 5 }}
            initial={{ opacity: 0, translateY: 5 }}
            onClick={e => {
              // Prevent dialog from closing when clicking in the dialog
              e.stopPropagation();
            }}
            transition={{ duration: 0.2 }}
          >
            <SwitcherSurface depth="depth64">
              <AccountList onClose={handleClose} stores={stores} />
            </SwitcherSurface>
          </Switcher>
        </ForegroundBackdrop>
      </>
    )}
  </AnimatePresence>
);
