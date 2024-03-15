import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { GraphMatrix } from '@zonos/amino/components/graph-matrix/GraphMatrix';
import { ChevronLeftIcon } from '@zonos/amino/icons/ChevronLeftIcon';
import { LinkIcon } from '@zonos/amino/icons/LinkIcon';
import { RocketDuotoneIcon } from '@zonos/amino/icons/RocketDuotoneIcon';
import { RocketIcon } from '@zonos/amino/icons/RocketIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

import { ChatBotSidebar } from 'src/components/graph-explorer/ChatBotSidebar';
import { ShareQuerySidebar } from 'src/components/graph-explorer/ShareQuerySidebar';
import { Loading } from 'src/components/Loading';
import { ThemeMatcher } from 'src/components/ThemeMatcher';
import { LoadingWrapper } from 'src/components/ui/LoadingWrapper';
import { useFetchedSchema } from 'src/hooks/useFetchedSchema';
import { useGraphiqlFetcher } from 'src/hooks/useGraphiqlFetcher';
import { useUser } from 'src/hooks/useUser';

const SideBarIcon = styled(ChevronLeftIcon)<{ $collapsed: boolean }>`
  transition: ${theme.transition};
  transform: rotate(${p => (p.$collapsed ? '180deg' : '0deg')});
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .graphiql-execute-button {
    background-color: ${theme.red500};
    &:hover {
      background-color: ${theme.red400};
    }
  }

  .graphiql-explorer-graphql-arguments {
    background-color: ${theme.gray50};
    margin-bottom: ${theme.space8};
    padding: ${theme.space8};
    border-radius: ${theme.radius6};
  }
`;

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

type Props = {
  schema: ICurrentSchemaType;
  sidebarOpen: boolean;
  setSideBarOpen: (value: boolean) => void;
};

export const GraphExplorer = ({
  schema,
  setSideBarOpen,
  sidebarOpen,
}: Props) => {
  const { fetchedSchema, isLoading } = useFetchedSchema({
    schemaId: schema.id,
    schemaType: schema.schemaType,
  });

  const { user } = useUser();

  const { graphiqlFetcher } = useGraphiqlFetcher();

  const [variables, setVariables] = useState('');
  const [query, setQuery] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [shareQueryOpen, setShareQueryOpen] = useState(false);

  const schemaLabel = schema.label;
  const showChatAssistantFeature = schemaLabel !== 'frontend';
  useEffect(() => {
    if (!showChatAssistantFeature && chatOpen) {
      // close chat assistant when schema is changed
      setChatOpen(false);
    }
  }, [chatOpen, showChatAssistantFeature]);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      {user?.id && (
        <ShareQuerySidebar
          open={shareQueryOpen}
          query={query}
          schema={schema}
          setOpen={setShareQueryOpen}
          setQuery={setQuery}
          setVariables={setVariables}
          userId={user.id}
          variables={variables}
        />
      )}
      <ChatBotSidebar
        open={chatOpen}
        setOpen={setChatOpen}
        setQuery={setQuery}
        setVariables={setVariables}
      />
      {graphiqlFetcher && (
        <GraphMatrix
          customToolbar={
            <>
              {showChatAssistantFeature && (
                <GraphMatrix.ToolbarButton
                  label={chatOpen ? 'Close copilot' : 'Open copilot'}
                  onClick={() => setChatOpen(!chatOpen)}
                >
                  {chatOpen ? (
                    <RocketDuotoneIcon
                      color="red1000"
                      secondaryColor="red500"
                    />
                  ) : (
                    <RocketIcon color="gray300" />
                  )}
                </GraphMatrix.ToolbarButton>
              )}
              <GraphMatrix.ToolbarButton
                label={
                  shareQueryOpen ? 'Close share window' : 'Open share window'
                }
                onClick={() => setShareQueryOpen(!shareQueryOpen)}
              >
                <LinkIcon color={!shareQueryOpen ? 'gray400' : 'red700'} />
              </GraphMatrix.ToolbarButton>
              <GraphMatrix.ToolbarButton
                label="Open sidebar"
                onClick={() => setSideBarOpen(!sidebarOpen)}
              >
                <SideBarIcon $collapsed={!sidebarOpen} />
              </GraphMatrix.ToolbarButton>
              <ThemeMatcher />
            </>
          }
          fetcher={graphiqlFetcher}
          onEditQuery={setQuery}
          onEditVariables={setVariables}
          query={query}
          schema={fetchedSchema}
          schemaName={schemaLabel}
          url={`/api/graphql/${schema.label}`}
          variables={variables}
        />
      )}
    </Wrapper>
  );
};
