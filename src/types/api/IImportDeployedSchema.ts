import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';

export type IImportDeployedSchemaRequest = {
  schemaContent: string;
  schemaLabel: GraphHub_DeployedSchemaLabel_Enum;
};
