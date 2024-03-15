import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Dashboard/src/settings/integrate/GetCredentials',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const getCredentials: IStory = {
  args: {
    query: `query getCredentials(
  $first: Int!
  $after: String
  $filter: CredentialFilter
) {
  credentials(first: $first, after: $after, filter: $filter) {
    edges {
      node {
        id
        name
        organization
        roles
        type
        updatedAt
        createdAt
        user {
          id
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}`,
    schemaLabel: 'auth',
    storeId: 7145,
    variables: `{
  "first": 10,
  "after": null,
  "filter": null
}`,
  },
};
