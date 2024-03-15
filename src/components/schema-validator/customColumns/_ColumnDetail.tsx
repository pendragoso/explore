import { useState } from 'react';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { Dialog } from '@zonos/amino/components/dialog/Dialog';
import { Text } from '@zonos/amino/components/text/Text';
import { Textarea } from '@zonos/amino/components/textarea/Textarea';
import { ChevronDownIcon } from '@zonos/amino/icons/ChevronDownIcon';
import { theme } from '@zonos/amino/styles/constants/theme';
import { truncateText } from '@zonos/amino/utils/truncateText';

import { Tooltip } from 'src/components/ui/Tooltip';

const StyledTextarea = styled(Textarea)`
  font-size: ${theme.fontSizeBase};
  font-family: ${theme.fontSans};
  line-height: ${theme.lineHeightBase};
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledAction = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const truncateLength = 40;

export const ColumnDetail = ({ result }: { result: string }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const truncatedText = truncateText({
    length: truncateLength,
    text: result,
  });
  const isTruncated = result.length > truncateLength;
  return (
    <StyledWrapper>
      {truncatedText}
      <StyledAction>
        {isTruncated && (
          <Tooltip showTooltip subtitle="Click here to see full data">
            <Button
              icon={<ChevronDownIcon size={14} />}
              onClick={() => setDialogOpen(true)}
              size="sm"
            />
          </Tooltip>
        )}
      </StyledAction>
      <Dialog
        label={<Text type="small-header">Column detail</Text>}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <StyledTextarea
          readOnly
          rows={12}
          value={result.replace(/^\n+/g, '\n')}
        />
      </Dialog>
    </StyledWrapper>
  );
};
