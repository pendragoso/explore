import { memo, useCallback, useMemo, useRef, useState } from 'react';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { Textarea } from '@zonos/amino/components/textarea/Textarea';
import { CodeIcon } from '@zonos/amino/icons/CodeIcon';
import { PauseCircleIcon } from '@zonos/amino/icons/PauseCircleIcon';
import { RefreshIcon } from '@zonos/amino/icons/RefreshIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

import { SlideOver } from 'src/components/graph-explorer/SlideOver';
import { SendIcon } from 'src/components/ui/SendIcon';
import { Tooltip } from 'src/components/ui/Tooltip';
import { ZonosIcon } from 'src/components/ZonosIcon';
import { useChatbot } from 'src/hooks/useChatbot';
import { addKey } from 'src/utils/addKey';
import { extractGptResult } from 'src/utils/api/schemaManipulation/extractGptResult';

const StyledRegenerationWrapper = styled.div`
  position: absolute;
  bottom: calc(100% + ${theme.space4});
  left: 0;
  z-index: 1;
  right: 0;
  justify-content: center;
  display: flex;
  gap: ${theme.space8};
`;

const StyledInputAction = styled.div``;

const StyledInputWrapper = styled.div`
  position: relative;
  ${StyledInputAction} {
    position: absolute;
    right: ${theme.space16};
    top: calc(50% - ${theme.space16});
    z-index: 2;
  }
`;
const StyledTextarea = styled(Textarea)`
  textarea {
    resize: none;
    &.has-label {
      padding-right: ${theme.space52};
    }
  }
`;

const StyledMessageBox = styled(Text)`
  background-color: ${theme.gray0};
  border-radius: ${theme.radius8};
  padding: ${theme.space12};
`;

const StyledMessageBase = styled.div`
  display: flex;
  align-items: top;
  gap: ${theme.space8};
  > div {
    flex-basis: 40px;
    flex-shrink: 0;
  }
  pre {
    white-space: break-spaces;
  }
`;
const StyledUserMessage = styled(StyledMessageBase)`
  justify-content: flex-end;
  ${StyledMessageBox} {
    background-color: ${theme.blue600};
    color: white;
    font-weight: 600;
  }
`;
const StyledBotMessage = styled(StyledMessageBase)`
  &.loading pre {
    &:after {
      content: '.';
      animation: dots 1200ms linear infinite;
    }
  }

  @keyframes dots {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;

const StyledSlideOver = styled(SlideOver)`
  > div:nth-child(2) {
    gap: ${theme.space40};
  }
`;

const ChatMessagesWrapper = styled.div`
  flex: 1 1;
  background-color: ${theme.gray50};
  border: 1px solid ${theme.gray300};
  border-radius: ${theme.radius8};
  padding: ${theme.space8};
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
  min-height: 0px;
`;

const StyledWrapper = styled.div`
  overflow: auto;
  align-items: flex-end;
  width: 100%;
  > div {
    flex-basis: 100%;
  }
`;
type IChatMessage = {
  content: string;
  role: 'user' | 'assistant';
};

type Props = {
  className?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  setQuery: (query: string) => void;
  setVariables: (query: string) => void;
};

const ChatBotComponent = ({
  className = '',
  open,
  setOpen,
  setQuery,
  setVariables,
}: Props) => {
  const [chatMessages, setChatMessages] = useState<IChatMessage[]>([]);
  const messageListRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const {
    botState,
    chatbox,
    handleRegenerateResponse,
    handleSend,
    handleStopConversation,
    setChatbox,
  } = useChatbot({
    inputRef,
    messageListRef,
    messageToSend: chatMessages,
    setMessageToSend: setChatMessages,
  });
  const keySet = useMemo(() => new Set(), []);
  const showRegenerateButton = chatMessages.length > 1 && botState === 'idle';

  const onSubmit = useCallback(() => {
    const updatedMessagesToSend: IChatMessage[] = [
      ...chatMessages,
      {
        content: chatbox.trim(),
        role: 'user',
      },
    ];
    setChatMessages(updatedMessagesToSend);
    handleSend(updatedMessagesToSend);
  }, [chatMessages, chatbox, handleSend, setChatMessages]);

  const onApply = useCallback(() => {
    const lastBotMessage = chatMessages[chatMessages.length - 1];
    if (lastBotMessage?.role === 'assistant' && lastBotMessage.content) {
      const { query, variables } = extractGptResult(lastBotMessage.content);
      if (query) {
        setQuery(query);
      }
      if (variables) {
        setVariables(variables);
      }
    }
  }, [chatMessages, setQuery, setVariables]);

  const renderMessages = useMemo(() => {
    const lastMessage =
      botState === 'loading'
        ? [
            {
              content: '',
              role: 'assissant',
            },
          ]
        : [];
    const messages = [...chatMessages, ...lastMessage].map(addKey);
    return (
      <>
        {messages.map(({ content, key, role }, index) => {
          if (role === 'user') {
            return (
              <StyledUserMessage key={key}>
                <StyledMessageBox type="body">
                  <pre>{content}</pre>
                </StyledMessageBox>
              </StyledUserMessage>
            );
          }
          return (
            <StyledBotMessage
              key={key}
              // apply bot state on last message
              className={index === messages.length - 1 ? botState : ''}
            >
              <div>
                <ZonosIcon size="40" />
              </div>
              <StyledMessageBox type="body">
                <pre>{content}</pre>
              </StyledMessageBox>
            </StyledBotMessage>
          );
        })}
      </>
    );
  }, [botState, chatMessages]);

  const isDisabled = botState === 'loading' || botState === 'replying';
  return (
    <StyledSlideOver
      className={className}
      onClose={() => setOpen(false)}
      open={open}
      title="Copilot"
      width="40%"
    >
      <ChatMessagesWrapper>
        <StyledWrapper ref={messageListRef}>
          <VStack>{renderMessages}</VStack>
        </StyledWrapper>
      </ChatMessagesWrapper>
      <StyledInputWrapper>
        {showRegenerateButton && (
          <StyledRegenerationWrapper>
            <Button
              icon={<RefreshIcon size={16} />}
              onClick={handleRegenerateResponse}
              size="sm"
            >
              Regenerate response
            </Button>
            <Tooltip
              showTooltip
              subtitle="Apply last message to query and variables"
            >
              <Button
                icon={<CodeIcon size={16} />}
                onClick={onApply}
                size="sm"
              />
            </Tooltip>
          </StyledRegenerationWrapper>
        )}
        <StyledTextarea
          ref={inputRef}
          disabled={isDisabled}
          label="Ask me about a query..."
          onChange={e => setChatbox(e.target.value)}
          onKeyDown={e => {
            keySet.add(e.key);
            // if shift + enter, skip and add new line
            if (e.key === 'Enter' && !keySet.has('Shift')) {
              e.preventDefault();
              onSubmit();
            }
          }}
          onKeyUp={e => {
            keySet.delete(e.key);
          }}
          rows={1}
          value={chatbox}
        />
        <StyledInputAction>
          {botState === 'idle' ? (
            <Button icon={<SendIcon />} onClick={onSubmit} variant="subtle" />
          ) : (
            <Button
              icon={<PauseCircleIcon />}
              onClick={handleStopConversation}
              variant="subtle"
            />
          )}
        </StyledInputAction>
      </StyledInputWrapper>
    </StyledSlideOver>
  );
};

export const ChatBotSidebar = memo(ChatBotComponent);
