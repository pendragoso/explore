import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Dashboard/src/settings/integrate/CreateCredential',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const createCredential: IStory = {
  args: {
    query: `mutation createCredential($createCredentialInput: CreateCredentialInput!) {
  createCredential(createCredentialInput: $createCredentialInput) {
    id
    name
    assignableRoles
  }
}`,
    schemaLabel: 'auth',
    storeId: 7145,
    variables: `{
  "createCredentialInput": {
    "mode": "LIVE",
    "organization": "organizationId",
    "type": "API_TOKEN",
    "assignableRoles": "roles",
    "name": "keyName",
    "expiredAt": "2027-07-03T07:00:00.000Z"
  }
}`,
  },
};
