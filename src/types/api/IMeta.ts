export type ISchemaImportMeta = {
  bulkRequestType?: 'importSchema' | 'validateSchema';
  chunkFieldName?: string;
  chunkType?: 'requiredFieldOnly' | 'optionalFieldOnly';
};
