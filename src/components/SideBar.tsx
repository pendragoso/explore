import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import styled from 'styled-components';

import { UserAvatar } from '@zonos/amino/components/avatar/UserAvatar';
import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { TextAvatar } from '@zonos/amino/components/text-avatar/TextAvatar';
import { theme } from '@zonos/amino/styles/constants/theme';
import { useSwrt } from '@zonos/amino/utils/hooks/useSwrt';

import {
  hotkeys,
  HotkeysList,
  KeyboardButton,
} from 'src/components/HotkeysList';
import { HomePageLink } from 'src/components/sidebar/HomePageLink';
import { SchemaValidatorLink } from 'src/components/sidebar/ValidatorLink';
import { StoreSwitcher } from 'src/components/store-switcher/StoreSwitcher';
import { useStore } from 'src/hooks/useStore';
import { useUser } from 'src/hooks/useUser';
import {
  type IElastic,
  type IElasticStore,
  elasticStoreFields,
} from 'src/types';

import { FeatureAspectsLink } from './sidebar/FeatureAspectsLink';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled(Text)`
  text-align: center;
  padding: ${theme.space12};
  margin-bottom: ${theme.space24};
  border-bottom: ${theme.border};
`;

const Top = styled.div`
  padding: ${theme.space12};
  display: flex;
  flex-direction: column;
  gap: ${theme.space24};
`;

const StyledSidebarWrapper = styled(VStack)``;

const Bottom = styled.div`
  padding: ${theme.space12};
`;

const StoreInfo = styled.div`
  cursor: pointer;
  padding: ${theme.space8};
  display: flex;
  justify-content: flex-start;
  gap: ${theme.space12};

  &:hover {
    background-color: ${theme.gray50};
  }
`;

const UserInfo = styled.div`
  padding: ${theme.space8};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${theme.space16};
`;

const HotkeyHint = styled.div`
  text-align: center;
  padding-bottom: ${theme.space8};
  margin-bottom: ${theme.space8};
  border-bottom: ${theme.border};
`;

type Props = {
  className?: string;
  collapsed: boolean;
};

export const SideBar = ({ className, collapsed }: Props) => {
  const { user } = useUser();
  const { store } = useStore();

  const [storeSwitcherOpen, setStoreSwitcherOpen] = useState(false);

  useHotkeys(hotkeys['Open store switcher'], e => {
    e.preventDefault();
    setStoreSwitcherOpen(!storeSwitcherOpen);
  });

  const { data: storesData } = useSwrt<IElastic<IElasticStore>>(
    () =>
      `/api/elastic/search/stores/store?size=10000&sort=id:desc&q=_exists_:id undefined&_source=${elasticStoreFields.join()}`
  );
  const storeData = storesData?.json?.hits.hits;

  const { data: allowedStoresData } = useSwrt<IElastic<IElasticStore>>(() =>
    user?.allowedStores.length
      ? `/api/elastic/search/stores/store?size=${
          user.allowedStores.length
        }&_source=${elasticStoreFields.join()}`
      : null
  );
  const allowedStoreData = allowedStoresData?.json?.hits.hits;

  const stores = storeData
    ?.map(s => s._source)
    .concat(allowedStoreData?.map(s => s._source) || []);

  const width = collapsed ? '0' : '300px';

  return (
    <>
      <Wrapper
        className={className}
        style={{ flexBasis: width, opacity: width === '0' ? 0 : 1 }}
      >
        <Top>
          <Header type="header">Explore</Header>
          <StyledSidebarWrapper spacing={8}>
            <HomePageLink />
            <FeatureAspectsLink />
            <SchemaValidatorLink />
          </StyledSidebarWrapper>
        </Top>
        <Bottom>
          <HotkeyHint>
            <Text type="hint-text">
              Press <KeyboardButton>alt+h</KeyboardButton> to open hotkey list.
            </Text>
          </HotkeyHint>
          <StoreInfo onClick={() => setStoreSwitcherOpen(true)}>
            <TextAvatar label={store?.name || 'Default'} />
            <VStack spacing={0}>
              <strong>
                {store?.id} - {store?.name}
              </strong>
              <Text type="subtitle">Click to switch...</Text>
            </VStack>
          </StoreInfo>
          <UserInfo>
            <UserAvatar shape="round" />
            <Text>{user?.email}</Text>
          </UserInfo>
        </Bottom>
      </Wrapper>
      {stores && (
        <StoreSwitcher
          handleClose={() => setStoreSwitcherOpen(false)}
          open={storeSwitcherOpen}
          stores={stores}
        />
      )}
      <HotkeysList />
    </>
  );
};
