import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { GraphMatrix } from '@zonos/amino/components/graph-matrix/GraphMatrix';

import { Loading } from 'src/components/Loading';
import { useFetchedSchema } from 'src/hooks/useFetchedSchema';
import { useGraphiqlFetcher } from 'src/hooks/useGraphiqlFetcher';
import { useGraphQl } from 'src/hooks/useGraphQl';
import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

type Props = {
  query: string;
  schemaLabel: GraphHub_DeployedSchemaLabel_Enum;
  storeId?: number;
  /**
   * story will replace `<CREDENTIAL_TOKEN>` with user credential token
   */
  variables: string;
};
export const BaseGraphStories = ({
  query: _query = '',
  schemaLabel,
  storeId: _storeId,
  variables: _variables = '',
}: Props) => {
  const [variables, setVariables] = useState(_variables);
  const [query, setQuery] = useState(_query);
  const [firstTime, setFirstTime] = useState(true);
  const [previousReplacedCred, setPreviousReplacedCred] =
    useState<string>('<CREDENTIAL_TOKEN>');

  const { data } = useGraphQl({
    endpoint: 'frontend/filterGraphHubDeployedSchema',
    variables: {
      order_by: {
        label: 'desc',
      },
      where: {
        label: {
          _eq: schemaLabel,
        },
      },
    },
  });

  const deployedSchema = data?.json?.graphHub_deployedSchema[0];

  const { credentialToken, graphiqlFetcher, setStoreId } = useGraphiqlFetcher();
  const { fetchedSchema } = useFetchedSchema({
    schemaId: deployedSchema?.id || null,
    schemaType: 'deployed',
  });

  useEffect(() => {
    if (_storeId && firstTime) {
      // set storeId to default for the first time
      setFirstTime(false);
      setStoreId(_storeId);
    }
  }, [firstTime, setStoreId, _storeId]);

  useEffect(() => {
    // if user change storeId, replace the placeholder <CREDENTIAL_TOKEN> with the new credential token
    if (credentialToken && previousReplacedCred !== credentialToken) {
      setVariables(variables.replace(previousReplacedCred, credentialToken));
      // save current token for later replacement
      setPreviousReplacedCred(credentialToken);
    }
  }, [credentialToken, previousReplacedCred, variables]);

  return (
    <StyledWrapper>
      {graphiqlFetcher && (
        <GraphMatrix
          fetcher={graphiqlFetcher}
          loadingComponent={<Loading />}
          onEditQuery={setQuery}
          onEditVariables={setVariables}
          query={query}
          schema={fetchedSchema}
          schemaName={schemaLabel}
          url={`/api/graphql/${schemaLabel}`}
          variables={variables}
        />
      )}
    </StyledWrapper>
  );
};
