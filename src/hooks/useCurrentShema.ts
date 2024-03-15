import { useEffect, useState } from 'react';

import { useGraphHub } from 'src/components/graph-hub/useGraphHub';
import { useGraphHubSchema } from 'src/hooks/useGraphHubSchema';
import { useStorage } from 'src/hooks/useStorage';

type ICurrentSchemaType = {
  id: number;
  label: string;
  schemaType: 'deployed' | 'draft';
};

export const useCurrentSchema = (): [
  ICurrentSchemaType | null,
  (schema: ICurrentSchemaType) => void
] => {
  const { deployedInstance, draftInstance } = useGraphHub();
  const { deployedSchemas } = useGraphHubSchema();
  const [firstTime, setFirstTime] = useState(true);

  const [schema, setSchema] = useStorage<ICurrentSchemaType | null>({
    defaultValue: null,
    json: true,
    key: 'current-schema',
    type: 'local',
  });
  useEffect(() => {
    // set schema if there is deployed query instance (first load only)
    if (deployedInstance?.deployedSchema && firstTime) {
      const { id, label } = deployedInstance.deployedSchema;
      // save schema object to local storage
      setSchema({
        id,
        label,
        schemaType: 'deployed',
      });
      setFirstTime(false);
    }
  }, [setSchema, deployedInstance?.deployedSchema, schema, firstTime]);

  useEffect(() => {
    // set schema if there is draft query instance (first load only)
    if (draftInstance?.draftSchema && !firstTime) {
      const { id, label } = draftInstance.draftSchema;
      // save schema object to local storage
      setSchema({
        id,
        label,
        schemaType: 'draft',
      });
      setFirstTime(false);
    }
  }, [setSchema, draftInstance?.draftSchema, firstTime]);

  useEffect(() => {
    const firstSchema = deployedSchemas[0];
    // find schema in the deployed schema list, if it matches, it's valid schema.
    const schemaValid = deployedSchemas.find(
      s => typeof schema === 'object' && s.id === schema?.id
    );

    // set schema to default if there is no schema or schema is not valid and we have schema to set
    const shouldSetToDefault =
      firstSchema &&
      firstTime &&
      (!schema || !schemaValid) &&
      deployedSchemas.length > 0;
    // set schema if there is deployed schema
    if (shouldSetToDefault) {
      setSchema({
        schemaType: 'deployed',
        ...firstSchema,
      });
      setFirstTime(false);
    }
  }, [deployedSchemas, firstTime, schema, setSchema]);

  return [schema, setSchema];
};
