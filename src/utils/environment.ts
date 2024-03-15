/* eslint-disable no-console */
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const isClientSide = typeof window !== 'undefined';

export const inProdEnvironment = process.env.NODE_ENV === 'production';
export const inTestEnvironment = process.env.NODE_ENV === 'test';

export const inVercel = !!process.env.VERCEL;
const inStorybook = !!process.env.STORYBOOK_PROJECT;

if (inVercel || !!process.env.CI) {
  console.debug(
    JSON.stringify(
      {
        CI: process.env.CI,
        NODE_ENV: process.env.NODE_ENV,
        inStorybook,
        inVercel,
      },
      null,
      2
    )
  );
}

const skipValidation = inTestEnvironment;

if (!skipValidation) {
  console.debug('Checking env variables');
} else {
  console.debug('Skipping env validation');
}

export const env = createEnv({
  skipValidation: inTestEnvironment,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  clientPrefix: 'NEXT_PUBLIC_',
  onInvalidAccess: variable => {
    throw new Error(
      `❌ Attempted to access a server-side environment variable on the client: ${variable}`
    );
  },
  onValidationError: error => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  },
  // eslint-disable-next-line sort-keys/sort-keys-fix
  client: {
    NEXT_PUBLIC_LOGIN_URL: z.string(),
  },
  server: {
    AUTH_GRAPH_TOKEN: z.string(),
    AUTH_GRAPH_URL: z.string().url(),
    AUTH_REST_TOKEN: z.string(),
    AUTH_REST_URL: z.string().url(),
    CHATBOT_SERVICE_TOKEN: z.string(),
    CHATBOT_URL: z.string().url(),
    CONFLUENCE_REST_PASSWORD: z.string(),
    CONFLUENCE_REST_URL: z.string().url(),
    CONFLUENCE_REST_USERNAME: z.string(),
    CUSTOMER_GRAPH_URL: z.string().url(),
    FRONTEND_GRAPH_ADMIN_SECRET: z.string(),
    FRONTEND_GRAPH_URL: z.string().url(),
    INTERNAL_GRAPH_TOKEN: z.string(),
    INTERNAL_GRAPH_URL: z.string().url(),
    INTERNAL_REST_URL: z.string().url(),
    OPEN_AI_API_KEY: z.string(),
    OPEN_AI_ORGANIZATION: z.string(),
    STORYBOOK_EXPLORE_URL: z.string().url(),
    VIEWPORT_GRAPH_ADMIN_SECRET: z.string(),
    VIEWPORT_GRAPH_URL: z.string().url(),
    WEAVIATE_GRAPH_API_KEY: z.string(),
    WEAVIATE_GRAPH_URL: z.string().url(),
  },
  // eslint-disable-next-line sort-keys/sort-keys-fix
  runtimeEnvStrict: {
    AUTH_GRAPH_TOKEN: process.env.AUTH_GRAPH_TOKEN,
    AUTH_GRAPH_URL: process.env.AUTH_GRAPH_URL,
    AUTH_REST_TOKEN: process.env.AUTH_REST_TOKEN,
    AUTH_REST_URL: process.env.AUTH_REST_URL,
    CHATBOT_SERVICE_TOKEN: process.env.CHATBOT_SERVICE_TOKEN,
    CHATBOT_URL: process.env.CHATBOT_URL,
    CONFLUENCE_REST_PASSWORD: process.env.CONFLUENCE_REST_PASSWORD,
    CONFLUENCE_REST_URL: process.env.CONFLUENCE_REST_URL,
    CONFLUENCE_REST_USERNAME: process.env.CONFLUENCE_REST_USERNAME,
    CUSTOMER_GRAPH_URL: process.env.CUSTOMER_GRAPH_URL,
    FRONTEND_GRAPH_ADMIN_SECRET: process.env.FRONTEND_GRAPH_ADMIN_SECRET,
    FRONTEND_GRAPH_URL: process.env.FRONTEND_GRAPH_URL,
    INTERNAL_GRAPH_TOKEN: process.env.INTERNAL_GRAPH_TOKEN,
    INTERNAL_GRAPH_URL: process.env.INTERNAL_GRAPH_URL,
    INTERNAL_REST_URL: process.env.INTERNAL_REST_URL,
    NEXT_PUBLIC_LOGIN_URL: process.env.NEXT_PUBLIC_LOGIN_URL,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    OPEN_AI_ORGANIZATION: process.env.OPEN_AI_ORGANIZATION,
    STORYBOOK_EXPLORE_URL: process.env.STORYBOOK_EXPLORE_URL,
    VIEWPORT_GRAPH_ADMIN_SECRET: process.env.VIEWPORT_GRAPH_ADMIN_SECRET,
    VIEWPORT_GRAPH_URL: process.env.VIEWPORT_GRAPH_URL,
    WEAVIATE_GRAPH_API_KEY: process.env.WEAVIATE_GRAPH_API_KEY,
    WEAVIATE_GRAPH_URL: process.env.WEAVIATE_GRAPH_URL,
  },
});

export const storybookEnv = createEnv({
  skipValidation: !inStorybook,
  // eslint-disable-next-line sort-keys/sort-keys-fix
  clientPrefix: 'STORYBOOK_',
  onInvalidAccess: variable => {
    throw new Error(
      `❌ Attempted to access a server-side environment variable on the client: ${variable}`
    );
  },
  onValidationError: error => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  },
  // eslint-disable-next-line sort-keys/sort-keys-fix
  client: {
    STORYBOOK_EXPLORE_URL: z.string().url(),
  },
  runtimeEnvStrict: {
    STORYBOOK_EXPLORE_URL: process.env.STORYBOOK_EXPLORE_URL,
  },
});
