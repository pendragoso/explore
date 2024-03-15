import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { type ListChildComponentProps, FixedSizeList } from 'react-window';

import styled from 'styled-components';

import { TextAvatar } from '@zonos/amino/components/text-avatar/TextAvatar';
import { theme } from '@zonos/amino/styles/constants/theme';
import { getFuzzySearch } from '@zonos/amino/utils/getFuzzySearch';
import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { useStore } from 'src/hooks/useStore';
import type { IElasticStore } from 'src/types';

import { Inactive } from './Inactive';

const StyledInput = styled.input`
  border: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 18px;
  padding: ${theme.space16} ${theme.space24};
  width: 100%;
  outline: none;

  border-bottom: ${theme.border};
`;

type StoreItemProps = {
  selected: boolean;
  style: CSSProperties;
  onClick: () => void;
};

const StoreItem = styled.div<StoreItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${theme.space24};
  margin-right: ${theme.spaceNegative24};
  cursor: pointer;
  background: ${p => (p.selected ? `${theme.gray100}` : `${theme.gray0}`)};

  &:hover,
  &:focus {
    outline: none;
    background: ${p => (p.selected ? `${theme.gray100}` : `${theme.gray50}`)};
  }

  strong {
    font-weight: 500 !important;
    flex: 1;
  }

  span {
    font-weight: 500;
    margin-right: ${theme.space24};
    font-family: ${theme.fontMono};
  }

  & > div {
    margin-right: ${theme.space16};
  }
`;

const StyledList = styled(FixedSizeList)`
  margin-top: ${theme.space40};
  margin: 0;

  ::-webkit-scrollbar {
    background: ${theme.gray50};
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.gray50};
    box-shadow: ${theme.v3ShadowInset};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.gray100};
    border-radius: ${theme.radius8};
    box-shadow: ${theme.v3ShadowMedium};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.gray200};
  }
`;

const NoStores = styled.div`
  padding: ${theme.space24};
  text-align: center;
`;

const StoreFilter = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  margin-bottom: ${theme.space24};
  box-sizing: border-box;
  margin-top: ${theme.spaceNegative24};
`;

type Props = {
  stores: IElasticStore[];
  onClose: () => void;
};

type IRequiredStoreFields = Pick<IElasticStore, 'id' | 'name' | 'active'>;

type IFilteredStore = IRequiredStoreFields &
  Partial<Omit<IElasticStore, keyof IRequiredStoreFields>>;

export const AccountList = ({ onClose, stores }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const notify = useNotify();
  const { prefetchStore, setStoreId } = useStore();

  const [filter, setFilter] = useState('');
  const [filteredStores, setFilteredStores] = useState<IFilteredStore[]>([]);
  const [selectedPointer, setSelectedPointer] = useState(-1);

  const sortByActivity = (storeList: IFilteredStore[]) =>
    storeList.sort((a, b) => {
      if (a.active && b.active) {
        return 0;
      }
      return b.active ? 1 : -1;
    });

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [inputRef]);

  useEffect(() => {
    if (filter.length > 0) {
      const { fuzzySearch } = getFuzzySearch({
        array: stores,
        options: {
          distance: 100,
          keys: ['name', 'id'],
          location: 0,
          minMatchCharLength: 1,
          shouldSort: true,
          threshold: 0.1,
        },
      });

      const prefilteredStores = fuzzySearch.search(filter);
      const sortedStores = sortByActivity(prefilteredStores.map(x => x.item));

      setFilteredStores(sortedStores);
    } else {
      const sortedStores = sortByActivity(stores);

      setFilteredStores(sortedStores);
    }
  }, [filter, stores]);

  const storeSelected = (storeId: number, name: string) => {
    setStoreId(storeId);

    onClose();

    setTimeout(() => {
      notify(`Switched to ${name}`, { intent: 'info' });
    }, 300);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Enter pressed
    if (event.key === 'Enter') {
      const storeId = Number(filter);

      if (storeId && !Number.isNaN(storeId)) {
        storeSelected(storeId, `#${storeId}`);
        return;
      }

      if (selectedPointer === -1) {
        const firstFilteredStore = filteredStores[0];
        if (firstFilteredStore) {
          storeSelected(firstFilteredStore.id, firstFilteredStore.name);
        }
        return;
      }

      const selectedFilterStore = filteredStores[selectedPointer];
      if (selectedFilterStore) {
        storeSelected(selectedFilterStore.id, selectedFilterStore.name);
      }

      return;
    }

    // Select first result if its the only result
    if (filteredStores.length === 1) {
      setSelectedPointer(0);
    } else {
      setSelectedPointer(-1);
    }

    // Select up
    if (event.key === 'ArrowUp') {
      event.preventDefault();

      if (selectedPointer - 1 >= 0) {
        setSelectedPointer(selectedPointer - 1);
      }
    }

    // Select down
    if (event.key === 'ArrowDown') {
      event.preventDefault();

      if (selectedPointer + 1 < filteredStores.length) {
        setSelectedPointer(selectedPointer + 1);
      }
    }

    // Esc - close account switcher
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const vlistHeight =
    filteredStores.length > 10 ? 500 : filteredStores.length * 48;

  const renderRow = ({ index, style }: ListChildComponentProps) => {
    const store = filteredStores[index];
    const isSelected = index === selectedPointer;
    if (isSelected) {
      prefetchStore(store?.id || 0);
    }
    return store ? (
      <StoreItem
        onClick={() => storeSelected(store.id, store.name)}
        onKeyDown={e =>
          e.key === 'Enter' && storeSelected(store.id, store.name)
        }
        onMouseOver={() => prefetchStore(store.id)}
        selected={isSelected}
        style={style}
        tabIndex={0}
      >
        <TextAvatar label={store.name} />
        <strong>{store.name}</strong>
        <span>
          {(!store.active || store.test) && <Inactive />}
          {store.id}
        </span>
      </StoreItem>
    ) : null;
  };

  return (
    <>
      <StoreFilter>
        <StyledInput
          ref={inputRef}
          autoFocus
          onChange={e => {
            setFilter(e.target.value);
          }}
          onKeyDown={keyPress}
          placeholder="Search for accounts by name and ID..."
          value={filter}
        />
      </StoreFilter>

      {filteredStores.length > 0 ? (
        <StyledList
          height={vlistHeight}
          itemCount={filteredStores.length}
          itemKey={i => filteredStores[i]?.id || ''}
          itemSize={48}
          overscanCount={10}
          width={400}
        >
          {renderRow}
        </StyledList>
      ) : (
        <NoStores>No accounts for that search</NoStores>
      )}
    </>
  );
};
