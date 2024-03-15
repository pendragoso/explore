import { useCallback, useEffect, useState } from 'react';

import { handleFetch } from '@zonos/amino/utils/handleFetch';

import type { IBulkJobStatusRequest, IBulkJobStatusResponse } from 'src/types';

type IJobCheckData = {
  bulkJobId: number | null;
  chatCompletionOption: {
    errorId: number | null;
    result: string | null;
  } | null;
};

/**
 * Hook to check the status of the schema bulk job.
 */
export const useJobStatusCheck = ({
  data,
  refetch,
}: {
  data: IJobCheckData[];
  refetch: () => void;
}) => {
  const [completedJobIds, setCompletedJobIds] = useState<number[]>([]);
  const handleJobStatusCheck = useCallback(async () => {
    // call to status endpoint to check if the schema bulk job is completed
    // get all chunks that has no result and no error
    const uncompletedChunk = data.filter(chunk => {
      const isCompletedJob =
        !!chunk.bulkJobId && completedJobIds.includes(chunk.bulkJobId);
      const isCompletedChunk =
        !!chunk.chatCompletionOption?.result &&
        !chunk.chatCompletionOption.errorId;

      return !isCompletedJob || !isCompletedChunk;
    });
    if (!uncompletedChunk.length) {
      // do nothing if there is no uncompleted chunk
      return;
    }
    const unfinishedBulkJobs: Record<number, number> = uncompletedChunk.reduce(
      (prev, curr) =>
        curr.bulkJobId
          ? {
              ...prev,
              [curr.bulkJobId]: curr.bulkJobId,
            }
          : prev,
      {}
    );
    const unfinishedBulkJobIds = Object.values(unfinishedBulkJobs);
    const results = await Promise.all(
      unfinishedBulkJobIds.map(async bulkJobId => {
        const { json } = await handleFetch<
          IBulkJobStatusResponse,
          IBulkJobStatusRequest
        >('/api/bulk-job-status', {
          body: {
            bulkJobId,
          },
          method: 'POST',
        });
        if (json?.status === 'completed') {
          setCompletedJobIds(prev => [...prev, bulkJobId]);
        }
        return json?.status === 'completed';
      })
    );
    if (results.some(result => result)) {
      // if any of the bulk jobs is completed, refetch the data
      refetch();
    }
  }, [completedJobIds, data, refetch]);

  useEffect(() => {
    /** Comment out until the endpoint to check status a group of jobId ready */
    // const intervalId = setInterval(() => {
    //   // check every 10 seconds
    //   handleJobStatusCheck();
    // }, 10_000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [data, handleJobStatusCheck, refetch]);
};
