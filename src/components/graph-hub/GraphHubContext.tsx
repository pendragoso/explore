import { type ReactNode, createContext, useMemo } from 'react';
import { useRouter } from 'next/router';

import {
  type IGraphHubDeployedInstance,
  useGraphHubDeployedInstance,
} from 'src/hooks/useGraphHubDeployedInstance';
import { useGraphHubDraftInstance } from 'src/hooks/useGraphHubDraftInstance';

type IGraphHubDraftInstance = {
  categoryId: number;
  createdAt: string;
  draftSchema: {
    id: number;
    label: string;
    schemaDefinition: string;
  };
  draftSchemaId: number;
  id: number;
  query: string;
  updatedAt: string;
  variables: string;
};

type GraphHubProps = {
  deployedGraphHubId: number | null;
  deployedGraphLoading: boolean;
  deployedInstance: IGraphHubDeployedInstance | null;
  draftGraphHubId: number | null;
  draftGraphLoading: boolean;
  draftInstance: IGraphHubDraftInstance | null;
};

export const GraphHubContext = createContext<GraphHubProps>({
  /** Deployed instance context */
  deployedGraphHubId: null,
  deployedGraphLoading: false,
  deployedInstance: null,

  /** Draft instance context */
  draftGraphHubId: null,
  draftGraphLoading: false,
  draftInstance: null,
});

export const GraphHubContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { query } = useRouter();

  const {
    deployedGraphHubId: _deployedGraphHubId,
    draftGraphHubId: _draftGraphHubId,
  } = query;
  const deployedGraphHubId =
    _deployedGraphHubId && typeof _deployedGraphHubId === 'string'
      ? parseInt(_deployedGraphHubId, 10)
      : null;
  const draftGraphHubId =
    _draftGraphHubId && typeof _draftGraphHubId === 'string'
      ? parseInt(_draftGraphHubId, 10)
      : null;

  const { deployedInstance, isLoading: deployedGraphLoading } =
    useGraphHubDeployedInstance({
      deployedGraphHubId,
    });

  const { draftInstance, isLoading: draftGraphLoading } =
    useGraphHubDraftInstance({
      draftGraphHubId,
    });

  const context: GraphHubProps = useMemo(
    () => ({
      /** Deployed instance context */
      deployedGraphHubId,
      deployedGraphLoading,
      deployedInstance,

      /** Draft instance context */
      draftGraphHubId,
      draftGraphLoading,
      draftInstance,
    }),
    [
      deployedGraphHubId,
      deployedGraphLoading,
      deployedInstance,
      draftGraphHubId,
      draftGraphLoading,
      draftInstance,
    ]
  );

  return (
    <GraphHubContext.Provider value={context}>
      {children}
    </GraphHubContext.Provider>
  );
};
