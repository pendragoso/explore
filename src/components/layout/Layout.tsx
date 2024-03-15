import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { AppSkeleton } from 'src/components/AppSkeleton';
import { useStore } from 'src/hooks/useStore';
import { useUser } from 'src/hooks/useUser';

type Props = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const NotAuthorized = () => (
  <div>You must be a Zonos user to access this tool.</div>
);

export const Layout = ({ children }: Props) => {
  const { user } = useUser();
  const { store } = useStore();

  const doneLoading = !!user && !!store;

  const [initialLoadFinished, setInitialLoadFinished] = useState(doneLoading);

  useEffect(() => {
    if (!initialLoadFinished && doneLoading) {
      setInitialLoadFinished(true);
    }
  }, [doneLoading, initialLoadFinished]);

  const renderContent = () => {
    if (!initialLoadFinished) {
      return <AppSkeleton />;
    }

    if (!user?.isZonos) {
      return <NotAuthorized />;
    }

    return children;
  };

  return <Wrapper>{renderContent()}</Wrapper>;
};
