import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import styled from 'styled-components';

import { theme } from '@zonos/amino/styles/constants/theme';

import { GraphHubLayout } from 'src/components/GraphHubLayout';
import { hotkeys } from 'src/components/HotkeysList';
import { Loading } from 'src/components/Loading';
import { SideBar } from 'src/components/SideBar';
import { LoadingWrapper } from 'src/components/ui/LoadingWrapper';
import { useCurrentSchema } from 'src/hooks/useCurrentShema';

import { GraphExplorer } from './GraphExplorer';

const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  > * {
    flex: 1;
    transition: 0.3s flex-basis ease;
    min-width: 0;
  }
  > *:not(last-child) {
    border-right: 1px solid ${theme.gray200};
  }
`;

const StyledContentWrapper = styled.div`
  overflow: auto;
`;

export const MainPage = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  useHotkeys(hotkeys['Toggle sidebar'], e => {
    e.preventDefault();
    setSideBarOpen(prevOpen => !prevOpen);
  });

  const [schema] = useCurrentSchema();

  const renderContent = () => {
    if (!schema) {
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      );
    }

    return (
      <GraphHubLayout>
        <GraphExplorer
          schema={schema}
          setSideBarOpen={setSideBarOpen}
          sidebarOpen={sideBarOpen}
        />
      </GraphHubLayout>
    );
  };

  return (
    <StyledLayout>
      <SideBar collapsed={!sideBarOpen} />
      <StyledContentWrapper
        style={{ flexBasis: sideBarOpen ? 'calc(100% - 300px)' : '100%' }}
      >
        {renderContent()}
      </StyledContentWrapper>
    </StyledLayout>
  );
};
