import { useState } from 'react';

import { Button } from '@zonos/amino/components/button/Button';
import { Dialog } from '@zonos/amino/components/dialog/Dialog';
import { NestedDataTable } from '@zonos/amino/components/nested-data-table/NestedDataTable';
import { PlusCircleIcon } from '@zonos/amino/icons/PlusCircleIcon';

import { Loading } from 'src/components/Loading';
import { ImportSchemaWrapper } from 'src/components/schema-validator/_ImportSchemaWrapper';
import { DeployedSchemaImport } from 'src/components/schema-validator/DeployedSchemaImport';
import { LoadingWrapper } from 'src/components/ui/LoadingWrapper';
import { useGraphHubDeployedSchemaChunk } from 'src/hooks/useGraphHubDeployedSchemaChunk';

export const DeployedValidatorPage = () => {
  const [addNewDialogOpen, setAddNewDialogOpen] = useState(false);

  const { currentPage, data, handlePagination, isLoading, refetch } =
    useGraphHubDeployedSchemaChunk();

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  const tableData = data?.json?.graphHub_deployedSchemaChunk || [];

  const modifiedTableData = tableData.map(row => {
    // just imported and has schema api reference result but not yet validated (data is empty)
    const justImported =
      !!row.chatCompletionOption?.result && !row.apiReferenceDataLabel;
    if (justImported) {
      return {
        state: 'Imported ✅',
        validatedResult: '',
        ...row,
      };
    }

    // api reference result is set and has chatbot result
    const validated =
      !!row.apiReferenceDataLabel && !!row.chatCompletionOption?.result;
    if (validated) {
      return {
        state: 'Validated ✅',
        validatedResult: row.chatCompletionOption?.result,
        ...row,
      };
    }

    return {
      state: 'Processing...',
      validatedResult: '',
      ...row,
    };
  });

  return (
    <ImportSchemaWrapper
      actions={
        <Button
          icon={<PlusCircleIcon />}
          onClick={() => setAddNewDialogOpen(true)}
        >
          Refetch and validate
        </Button>
      }
      title="Draft schema"
    >
      <Dialog
        label="Import new deployed schema"
        onClose={() => setAddNewDialogOpen(false)}
        open={addNewDialogOpen}
        width={500}
      >
        <DeployedSchemaImport
          onFinish={async () => {
            await refetch();
            setAddNewDialogOpen(false);
          }}
        />
      </Dialog>

      <NestedDataTable
        currentPage={currentPage}
        handlePagination={handlePagination}
        isFetching={isLoading}
        loadingComponent={<Loading />}
        tableData={modifiedTableData}
      />
    </ImportSchemaWrapper>
  );
};
