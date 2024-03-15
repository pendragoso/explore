import { useEffect, useState } from 'react';

import { useGraphQl } from 'src/hooks/useGraphQl';

type Props = {
  setSelectedCategoryId: (id: number) => void;
};

export const useGraphHubCategory = ({ setSelectedCategoryId }: Props) => {
  const { data } = useGraphQl({
    endpoint: 'frontend/getGraphHubCategory',
  });

  const [firstTime, setFirstTime] = useState(true);
  const options =
    data?.json?.graphHub_category.map(item => ({
      label: item.label,
      value: item.id.toString(),
    })) || [];
  const firstCategory = options[0] || null;

  useEffect(() => {
    // load category for the first time
    if (firstTime && firstCategory) {
      const intId = parseInt(firstCategory.value, 10);
      setSelectedCategoryId(intId);
      setFirstTime(false);
    }
  }, [firstTime, firstCategory, setSelectedCategoryId]);

  return {
    firstCategory,
    options,
  };
};
