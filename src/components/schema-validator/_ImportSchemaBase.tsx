import { useCallback, useState } from 'react';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { DropZone } from '@zonos/amino/components/drop-zone/DropZone';
import { Input } from '@zonos/amino/components/input/Input';
import { VStack } from '@zonos/amino/components/stack/VStack';
import type { SelectOption } from '@zonos/amino/types/SelectOption';
import { handleFetch } from '@zonos/amino/utils/handleFetch';
import { useNotify } from '@zonos/amino/utils/hooks/useNotify';

import { MultiSelect } from 'src/components/MultiSelect';
import { Tooltip } from 'src/components/ui/Tooltip';
import type {
  IGetSchemaFieldsRequest,
  IGetSchemaFieldsResponse,
} from 'src/types';

const StyledButton = styled(Button)`
  width: 100%;
`;

export const ImportSchemaBase = ({
  onUpload,
  schemaName,
}: {
  schemaName: string;
  onUpload: (props: {
    chunkPercentSampling: number;
    files: File[];
    specificTestFields: string[];
  }) => Promise<void>;
}) => {
  const notify = useNotify();

  const [files, setFiles] = useState<File[]>([]);
  const [specificTestFields, setSpecificTestFields] = useState<string[]>([]);
  const [chunkPercentSampling, setChunkPercentSampling] = useState<number>(100);
  const [fetchingSchemaFields, setFetchingSchemaFields] = useState(false);
  const [schemaFieldOptions, setSchemaFieldOptions] = useState<
    SelectOption<string>[]
  >([]);
  const [error, setError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const isDisabledChunkSampling = specificTestFields.length > 0;

  const getSchemaFieldOptions = useCallback(
    async (_files: File[]) => {
      const schemaContent = await _files[0]?.text();
      if (!schemaContent) {
        return;
      }
      if (fetchingSchemaFields) {
        return;
      }
      setFetchingSchemaFields(true);
      // send request to /api/get-schema-fields to get a list of schema fields
      // return a list of options
      const result = await handleFetch<
        IGetSchemaFieldsResponse,
        IGetSchemaFieldsRequest
      >('/api/get-schema-fields', {
        body: {
          schemaContent,
        },
        method: 'POST',
      });

      const jsonResult = result.json;
      if (result.errors.length || !jsonResult) {
        notify('Failed to parse schema', { intent: 'error' });
        return;
      }
      const queryFieldOptions = jsonResult.queryFieldNames.map(name => ({
        label: name,
        value: name,
      }));
      const mutationFieldOptions = jsonResult.mutationFieldNames.map(name => ({
        label: name,
        value: name,
      }));
      setFetchingSchemaFields(false);
      setSchemaFieldOptions([...queryFieldOptions, ...mutationFieldOptions]);
    },
    [fetchingSchemaFields, notify]
  );

  const handleUpload = async () => {
    setIsUploading(true);
    await onUpload({ chunkPercentSampling, files, specificTestFields });
    setFiles([]);
    setIsUploading(false);
  };

  const handleRemoveFile = (index: number) => {
    setFiles(previousFiles => {
      const newFiles = [...previousFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const commonErrors = [
    files.length === 0 && 'Please upload a file.',
    !schemaName && 'Please select/set name for this schema.',
  ];
  const firstError = commonErrors.find(Boolean);

  return (
    <VStack spacing={8}>
      <DropZone
        dropzoneOptions={{
          accept: '.graphqls',
          // 10 MB
          maxSize: 10 * 1024 * 1024,
          multiple: false,
          onDrop: (acceptedFiles, rejections) => {
            setError(!!rejections.length);
            rejections.forEach(rej => {
              const message = `${rej.file.name}: ${rej.errors[0]?.message}`;
              notify(message, { intent: 'error' });
            });
            setFiles(acceptedFiles);
            getSchemaFieldOptions(acceptedFiles);
          },
        }}
        error={error}
        helpText="Max file size: 10MB"
        instructionText="Drop your GraphQl schema file (graphqls) here"
        onRemoveFile={index => handleRemoveFile(index)}
        uploadedFiles={files.map(f => ({
          name: f.name,
          size: `${f.size} bytes`,
        }))}
      />
      {!!schemaFieldOptions.length && (
        <MultiSelect
          label='You may select specific "query" or "mutation" field to import'
          onChange={changedValue =>
            setSpecificTestFields(changedValue.map(({ value }) => value))
          }
          options={schemaFieldOptions}
          value={schemaFieldOptions.filter(option =>
            specificTestFields.includes(option.value)
          )}
        />
      )}

      <Input
        disabled={isDisabledChunkSampling}
        label="Chunk sampling"
        onChange={e => {
          setChunkPercentSampling(e.target.valueAsNumber);
        }}
        suffix="%"
        type="number"
        value={chunkPercentSampling.toString()}
      />
      <Tooltip showTooltip={!!firstError} subtitle={firstError}>
        <StyledButton
          disabled={!!firstError}
          loading={isUploading}
          onClick={handleUpload}
          variant="primary"
        >
          Upload
        </StyledButton>
      </Tooltip>
    </VStack>
  );
};
