import type { NextApiRequest, NextApiResponse } from 'next';

import { GetSchemaRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { getDeployedSchemaJson } from 'src/utils/api/getDeployedSchemaJson';
import { getGraphHubSchemaById } from 'src/utils/api/getGraphHubSchemaById';
import { convertToInstrospectionQuery } from 'src/utils/api/schemaManipulation/convertToInstrospectionQuery';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const parsedBody = GetSchemaRequest.safeParse(req.query);

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }

  const { schemaId, schemaType } = parsedBody.data;

  const { errors: schemaResultErrors, json: schemaResult } =
    await getGraphHubSchemaById({
      schemaId,
      schemaType,
    });

  if (!schemaResult || schemaResultErrors.length) {
    res.status(400);
    res.json("Couldn't find schema");
    return;
  }

  handleHeaders(req, res);

  if (schemaResult.schemaType === 'draft') {
    const { schemaDefinition } = schemaResult;
    // convert graphqls content to instrosepection schema object
    const query = convertToInstrospectionQuery({
      graphqlsContent: schemaDefinition,
    });
    res.status(200);
    res.json(query);
    return;
  }

  const { label } = schemaResult;
  const { errors, json } = await getDeployedSchemaJson({
    req,
    schema: label,
  });
  if (errors.length) {
    res.status(400);
    res.json(errors);
  } else {
    res.status(200);
    res.json(json);
  }
};

export default handler;
