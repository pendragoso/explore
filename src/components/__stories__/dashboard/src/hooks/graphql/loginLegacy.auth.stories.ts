import type { Meta, StoryObj } from '@storybook/react';

import { BaseGraphStories } from 'src/components/__stories__/BaseGraphStories';

const meta: Meta<typeof BaseGraphStories> = {
  component: BaseGraphStories,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
  title: 'Dashboard/src/hooks/graphql/loginLegacy',
};

export default meta;

type IStory = StoryObj<typeof BaseGraphStories>;

export const loginLegacy: IStory = {
  args: {
    query: `mutation loginLegacy($input: UserLoginLegacyInput) {
  loginLegacy(input: $input) {
    credential
  }
}`,
    schemaLabel: 'auth',
    storeId: 909,
    variables: ``,
  },
};
