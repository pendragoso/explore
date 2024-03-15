import type { Meta, StoryObj } from '@storybook/react';

import { GraphExplorer } from 'src/components/GraphExplorer';
import { useGraphQl } from 'src/hooks/useGraphQl';

const meta: Meta<typeof GraphExplorer> = {
  argTypes: {},
  component: GraphExplorer,
  tags: ['autodocs'],
  title: 'feature',
};

export default meta;

const CustomWrapperGraphExplore = () => {
  const { data, isLoading } = useGraphQl({
    endpoint: 'frontend/filterGraphHubDeployedSchema',
    variables: {
      order_by: {
        label: 'desc',
      },
      where: {
        label: {
          _eq: 'frontend',
        },
      },
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const schema = data?.json?.graphHub_deployedSchema[0];

  if (!schema) {
    return <div>Schema not found</div>;
  }

  return (
    <GraphExplorer
      schema={{
        schemaType: 'deployed',
        ...schema,
      }}
      setSideBarOpen={() => null}
      sidebarOpen={false}
    />
  );
};

type IStory = StoryObj<typeof GraphExplorer>;

export const Primary: IStory = {
  render: () => <CustomWrapperGraphExplore />,
};
