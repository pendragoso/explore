import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Dashboard/src/settings/integrate/GetCredentialById',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const getCredentialById: IStory = {
  args: {
    query: `query getCredentialById($id: ID!) {
  credential(id: $id) {
    id
    name
    organization
    roles
    assignableRoles
    type
    user {
      id
    }
  }
}`,
    schemaLabel: 'auth',
    storeId: 7145,
    variables: `{
  "id": "<CREDENTIAL_TOKEN>"
}`,
  },
};
