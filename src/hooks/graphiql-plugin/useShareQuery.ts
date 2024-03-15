import { useCallback, useEffect, useState } from 'react';

import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { useGraphHub } from 'src/components/graph-hub/useGraphHub';
import { useNavigate } from 'src/hooks/useNavigate';
import { gqlRequest } from 'src/utils/gqlRequest';

const draftPath = '/draft-instance';
const deployedPath = '/deployed-instance';

type Props = {
  categoryId: number | null;
  query: string;
  userId: string;
  variables: string;
  setQuery: (query: string) => void;
  setVariables: (variables: string) => void;
};

export function useShareQuery({
  categoryId,
  query,
  setQuery,
  setVariables,
  userId,
  variables,
}: Props) {
  const [firstTime, setFirstTime] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const notify = useNotify();
  const navigate = useNavigate();

  const { deployedInstance, draftInstance } = useGraphHub();

  useEffect(() => {
    // init query and variables from data for the first time
    if (deployedInstance && firstTime) {
      setQuery(deployedInstance.query);
      setVariables(deployedInstance.variables);
      setShareUrl(`${deployedPath}/${deployedInstance.id}`);
      setFirstTime(false);
    }
  }, [deployedInstance, firstTime, setQuery, setVariables]);

  useEffect(() => {
    // init query and variables from data for the first time
    if (draftInstance && firstTime) {
      setQuery(draftInstance.query);
      setVariables(draftInstance.variables);
      setShareUrl(`${draftPath}/${draftInstance.id}`);
      setFirstTime(false);
    }
  }, [draftInstance, firstTime, setQuery, setVariables]);

  const invalidErrors = [
    !query.trim() && "Query can't be empty.",
    !categoryId && "Category can't be empty.",
    !userId && 'User id is required',
  ].filter(Boolean);

  const firstError = invalidErrors.find(Boolean) || '';

  const shareQueryDeployedSchema = useCallback(
    async ({ deployedSchemaId }: { deployedSchemaId: number }) => {
      setIsSubmitting(true);

      const result = await gqlRequest({
        endpoint: 'frontend/insertGraphHubDeployedInstance',
        variables: {
          objects: [
            {
              categoryId,
              deployedSchemaId,
              query,
              userId,
              variables,
            },
          ],
        },
      });

      setIsSubmitting(false);
      const error = result.errors.find(Boolean);
      if (error) {
        notify(error.message, {
          intent: 'error',
        });
        return null;
      }

      const newId =
        result.json?.insert_graphHub_deployedInstance?.returning[0]?.id || null;
      if (!newId) {
        notify('Fail to generate new id for this query.', {
          intent: 'error',
        });
        return null;
      }

      const newUrl = `${deployedPath}/${newId}`;
      navigate(newUrl);

      setShareUrl(newUrl);
      return result;
    },
    [categoryId, navigate, notify, query, userId, variables]
  );

  const shareQueryDraftSchema = useCallback(
    async ({ draftSchemaId }: { draftSchemaId: number }) => {
      setIsSubmitting(true);

      const result = await gqlRequest({
        endpoint: 'frontend/insertGraphHubDraftInstance',
        variables: {
          objects: [
            {
              categoryId,
              draftSchemaId,
              query,
              userId,
              variables,
            },
          ],
        },
      });

      setIsSubmitting(false);
      const error = result.errors.find(Boolean);
      if (error) {
        notify(error.message, {
          intent: 'error',
        });
        return null;
      }

      const newId =
        result.json?.insert_graphHub_draftInstance?.returning[0]?.id || null;
      if (!newId) {
        notify('Fail to generate new id for this query.', {
          intent: 'error',
        });
        return null;
      }

      const newUrl = `${draftPath}/${newId}`;
      navigate(newUrl);

      setShareUrl(newUrl);
      return result;
    },
    [categoryId, navigate, notify, query, userId, variables]
  );

  return {
    firstError,
    invalidErrors,
    isSubmitting,
    shareQueryDeployedSchema,
    shareQueryDraftSchema,
    shareUrl,
  };
}
