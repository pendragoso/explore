import { useCallback, useMemo, useState } from 'react';

import { Button } from '@zonos/amino/components/button/Button';
import { Dialog } from '@zonos/amino/components/dialog/Dialog';
import {
  type ColumnCell,
  type CustomColumnCells,
  NestedDataTable,
} from '@zonos/amino/components/nested-data-table/NestedDataTable';
import { PlusCircleIcon } from '@zonos/amino/icons/PlusCircleIcon';

import { Loading } from 'src/components/Loading';
import { ImportSchemaWrapper } from 'src/components/schema-validator/_ImportSchemaWrapper';
import { ChatCompletionOptionResultColumn } from 'src/components/schema-validator/customColumns/ChatCompletionOptionResultColumn';
import { RuleValidatedColumn } from 'src/components/schema-validator/customColumns/RuleValidatedColumn';
import { DraftSchemaImport } from 'src/components/schema-validator/DraftSchemaImport';
import { LoadingWrapper } from 'src/components/ui/LoadingWrapper';
import { useGraphHubDraftSchemaChunk } from 'src/hooks/useGraphHubDraftSchemaChunk';
import { extractValidationCompletionResult } from 'src/utils/api/schemaValidate/extractValidationCompletionResult';

export const DraftValidatorPage = () => {
  const [addNewDialogOpen, setAddNewDialogOpen] = useState(false);

  const {
    currentPage,
    data,
    handlePagination,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    refetch,
  } = useGraphHubDraftSchemaChunk();

  const renderRuleViolated: ColumnCell<(typeof modifiedTableData)[number]> =
    useCallback(({ row }) => {
      const columnValue = row.ruleViolated;
      return <RuleValidatedColumn validatedResult={columnValue} />;
    }, []);

  const renderChatCompletionOptionResult: ColumnCell<
    (typeof modifiedTableData)[number]
  > = useCallback(({ column, row }) => {
    // `row` is not yet flattened here, so the key `chatCompletionOption.result` doesn't exist (but it does in the NestedDataTable component)
    const columnValue = row[column.key as keyof typeof row] as string;
    return <ChatCompletionOptionResultColumn result={columnValue} />;
  }, []);

  const customColumnCells: CustomColumnCells<
    (typeof modifiedTableData)[number]
  > = useMemo(
    () => ({
      'chatCompletionOption.result': renderChatCompletionOptionResult,
      ruleViolated: renderRuleViolated,
    }),
    [renderChatCompletionOptionResult, renderRuleViolated]
  );

  if (isLoading) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  const tableData = data?.json?.graphHub_draftSchemaChunk || [];

  const modifiedTableData = tableData.map(row => {
    const chatCompletionResult = row.chatCompletionOption?.result;
    const extractedResult = extractValidationCompletionResult(
      chatCompletionResult || ''
    );
    // just imported and has schema api reference result but not yet validated (data is empty)
    const justImported = !!chatCompletionResult && !extractedResult;
    if (justImported) {
      return {
        state: 'Imported ✅',
        // eslint-disable-next-line sort-keys/sort-keys-fix
        abideStyleGuide: '',
        ruleViolated: '',
        ...row,
      };
    }

    // api reference result is set and has chatbot result
    const validated = !!chatCompletionResult && extractedResult;
    if (validated) {
      return {
        state: 'Validated ✅',
        // eslint-disable-next-line sort-keys/sort-keys-fix
        abideStyleGuide:
          extractedResult.isAbideStyleGuide === 'Yes' ? '✅' : '❌',
        ruleViolated: extractedResult.ruleViolated,
        ...row,
      };
    }

    return {
      state: 'Processing...',
      // eslint-disable-next-line sort-keys/sort-keys-fix
      abideStyleGuide: '',
      ruleViolated: '',
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
          Import and validate schema
        </Button>
      }
      title="Draft schema"
    >
      <Dialog
        label="Import new draft schema"
        onClose={() => setAddNewDialogOpen(false)}
        open={addNewDialogOpen}
        width={500}
      >
        <DraftSchemaImport
          onFinish={async () => {
            await refetch();
            setAddNewDialogOpen(false);
          }}
        />
      </Dialog>

      <NestedDataTable
        currentPage={currentPage}
        customColumnCells={customColumnCells}
        handlePagination={handlePagination}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        isFetching={isLoading}
        loadingComponent={<Loading />}
        tableData={modifiedTableData}
      />
    </ImportSchemaWrapper>
  );
};
