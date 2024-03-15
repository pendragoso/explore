import type { NextApiRequest } from 'next';

import type { ISchemaImportMeta } from 'src/types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export type IDraftChunk = {
  apiReferenceData: string | null;
  apiReferenceDataLabel: string | null;
  chatCompletionOption: {
    meta: ISchemaImportMeta | null;
    result: string | null;
  } | null;
  id: number;
  schemaDefinition: string | null;
  userId: string;
};

export type IDraftSchema = {
  data: string;
  id: number;
  label: string;
};

export const getDraftSchemaWithChunksById = async ({
  draftSchemaId,
  req,
}: {
  draftSchemaId: number;
  req: NextApiRequest;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/getDraftSchemaWithChunksById',
    requestHeaders: headers,
    variables: {
      id: draftSchemaId,
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message);
  }

  return {
    draftSchema: json?.graphHub_draftSchema[0] || null,
    draftSchemaChunks: json?.graphHub_draftSchemaChunk || [],
  };
};
