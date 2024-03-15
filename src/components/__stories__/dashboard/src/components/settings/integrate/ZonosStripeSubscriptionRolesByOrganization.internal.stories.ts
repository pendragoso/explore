import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title:
    'Dashboard/src/settings/integrate/ZonosStripeSubscriptionRolesByOrganization',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const ZonosStripeSubscriptionRolesByOrganization: IStory = {
  args: {
    query: `query zonosStripeSubscriptionRolesByOrganization($organizationId: ID!) {
  zonosStripeSubscriptionRolesByOrganization(organization: $organizationId) {
    roleId
    roleName
    roleReadName
    roleReadId
  }
}`,
    schemaLabel: 'internal',
    storeId: 7145,
    variables: `{
  "organizationId": "organization_e1bda167-425c-4ae9-ab1b-c9105bb77d2b"
}`,
  },
};
