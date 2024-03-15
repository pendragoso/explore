import type { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';

import { LegacyText } from '@zonos/amino/components/text/LegacyText';
import { CheckmarkIcon } from '@zonos/amino/icons/CheckmarkIcon';
import { CopyIcon } from '@zonos/amino/icons/CopyIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

import { useClipboard } from 'src/hooks/useClipboard';

import { Tooltip } from './Tooltip';

const Fields = styled.div`
  cursor: pointer;
`;

const CopyChildrenWrapper = styled.div``;

const StyledWrapper = styled.div`
  position: relative;
  ${Fields} {
    position: relative;
    flex-direction: row;
    align-items: center;
    display: flex;
  }
  &.not-full-width {
    ${Fields}, ${CopyChildrenWrapper} {
      display: inline-flex;
    }
  }
  :last-of-type {
    margin-bottom: 0;
  }
`;
const StyledIcon = styled.div`
  position: absolute;
  right: ${theme.space16};
`;

type Props = {
  children: ReactNode;
  className?: string;
  /**
   * @param hideCanCopy - Hide the copy icon
   */
  hideCanCopy?: boolean;
  /**
   * @param hideDidCopy - Hide the did copy icon
   */
  hideDidCopy?: boolean;
  /**
   * @param hideLabel - Hide label text
   */
  hideLabel?: boolean;
  /**
   * @param isNotFullWidth - detect if the copy children element are not a full width element
   * @issue
   * This is used to resolve the Tooltip position when the copy children element are `inline-block` element, and <Fields /> element is a block element.
   * The Tooltip will be shown at the center at the bottom of the Fields element, which is way too far from the copy children element.
   * @solution
   * This will set inline-flex to the Fields element, so the Tooltip will be shown at the center of the copy children element.
   * @default false
   */
  isNotFullWidth?: boolean;
  label: string;
  notificationText?: string;
  tooltip?: string;
  value: string | number | null;
};

export const Copy = ({
  children,
  className,
  hideCanCopy,
  hideDidCopy,
  hideLabel,
  isNotFullWidth,
  label,
  notificationText,
  tooltip = 'Click to copy',
  value,
}: Props) => {
  const { copied, copyClass } = useClipboard({
    copiedTextSuccess: notificationText,
    label,
  });

  return (
    <StyledWrapper
      className={[isNotFullWidth ? 'not-full-width' : '', className || ''].join(
        ' '
      )}
    >
      {label && !hideLabel && (
        <LegacyText type="input-label">{label}</LegacyText>
      )}

      <CopyChildrenWrapper>
        <Tooltip showTooltip subtitle={tooltip}>
          <Fields className={copyClass} data-clipboard-text={value}>
            {children}
            <StyledIcon>
              <AnimatePresence initial={false} mode="wait">
                {copied && !hideDidCopy && (
                  <motion.div
                    key="copied"
                    animate={{ opacity: 1, scale: 1, translateX: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{
                      opacity: 0,
                      scale: 1,
                      translateX: -5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckmarkIcon color="blue600" size={20} />
                  </motion.div>
                )}

                {!copied && !hideCanCopy && (
                  <motion.div
                    key="copy"
                    animate={{ opacity: 1, scale: 1, translateX: 0 }}
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <CopyIcon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </StyledIcon>
          </Fields>
        </Tooltip>
      </CopyChildrenWrapper>
    </StyledWrapper>
  );
};
