import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useCurrentSchema } from 'src/hooks/useCurrentShema';

type IBotState = 'loading' | 'idle' | 'error' | 'replying';

type IMessage = {
  content: string;
  role: 'user' | 'assistant';
};

type IRequestBody = {
  messageToSend: {
    content: string;
    role: 'user' | 'assistant';
  }[];
  schema: string;
};

type Props = {
  inputRef: RefObject<HTMLTextAreaElement>;
  messageListRef: RefObject<HTMLDivElement>;
  messageToSend: IMessage[];
  setMessageToSend: Dispatch<SetStateAction<IMessage[]>>;
};

export const useChatbot = ({
  inputRef,
  messageListRef,
  messageToSend,
  setMessageToSend,
}: Props) => {
  const [chatbox, setChatbox] = useState('');
  const [botState, setBotState] = useState<IBotState>('idle');
  const [abortController, setAbortController] =
    useState<AbortController | null>();
  const [schema] = useCurrentSchema();

  const handleStopConversation = useCallback(() => {
    if (abortController) {
      abortController.abort();
      setBotState('idle');
    }
  }, [abortController]);

  const handleSend = useCallback(
    async (messages: IMessage[]) => {
      if (!schema) {
        return;
      }
      setTimeout(() => {
        // change bot to loading state
        setBotState('loading');
      }, 400);
      // clean chatbox
      setChatbox('');
      const controller = new AbortController();
      // save abort controller for later use
      setAbortController(controller);

      const body: IRequestBody = {
        messageToSend: messages,
        schema: schema.label,
      };

      const response = await fetch(`/api/search-relevant-schema-chatbot`, {
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        signal: controller.signal,
      });

      if (!response.ok) {
        setBotState('idle');
        setAbortController(null);
        return;
      }
      const data = response.body;

      if (!data) {
        setBotState('idle');
        setAbortController(null);
        return;
      }
      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let newText = '';
      let isFirst = true;
      while (!done) {
        // eslint-disable-next-line no-await-in-loop
        const { done: doneReading, value } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        newText += chunkValue;
        if (isFirst) {
          setBotState('replying');
          // push new bot message if it started streaming
          isFirst = false;
          setMessageToSend(currentMessages => [
            ...currentMessages,
            { content: chunkValue, role: 'assistant' },
          ]);
        } else {
          // update bot message if it is still streaming
          const updatedMessage: IMessage = {
            content: newText,
            role: 'assistant',
          };
          // update last message
          setMessageToSend(currentMessages =>
            currentMessages.map((message, index) =>
              index === currentMessages.length - 1 ? updatedMessage : message
            )
          );
        }
      }

      // change bot to idle state when streaming is done
      setBotState('idle');
      setAbortController(null);
    },
    [schema, setMessageToSend]
  );

  const handleRegenerateResponse = useCallback(async () => {
    // remove last bot message
    const updatedMessagesToSend: IMessage[] = messageToSend.filter(
      (message, index) =>
        !(message.role === 'assistant' && index === messageToSend.length - 1)
    );
    setMessageToSend(updatedMessagesToSend);
    setBotState('loading');
    setTimeout(() => {
      handleSend(updatedMessagesToSend);
    }, 200);
  }, [handleSend, messageToSend, setMessageToSend]);

  // Auto scroll chat to bottom
  useEffect(() => {
    const messageList = messageListRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [botState, messageListRef, messageToSend]);

  useEffect(() => {
    if (botState === 'idle') {
      inputRef.current?.focus();
    }
  }, [botState, inputRef]);

  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.style.height = 'inherit';
      input.style.height = `${input.scrollHeight}px`;
      input.style.overflow = `${input.scrollHeight > 400 ? 'auto' : 'hidden'}`;
    }
  }, [chatbox, inputRef]);

  return {
    botState,
    chatbox,
    handleRegenerateResponse,
    handleSend,
    handleStopConversation,
    setBotState,
    setChatbox,
  };
};
