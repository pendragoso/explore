import React from 'react';
import '@zonos/amino/theme.css';
import '@zonos/amino/reset.css';
import '@zonos/amino/amino.css';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { SWRConfig } from 'swr';
import { fetcher } from '../src/utils/fetcher';
import { AlertContextProvider } from '@zonos/amino/components/alert-dialog/AlertContext';
import { ConfirmContextProvider } from '@zonos/amino/components/confirm-dialog/ConfirmContext';
import { ToastContextProvider } from '@zonos/amino/components/toast/ToastContext';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  Story => (
    <SWRConfig value={{ fetcher }}>
      <ConfirmContextProvider>
        <AlertContextProvider>
          <ToastContextProvider>
            <Story />
          </ToastContextProvider>
        </AlertContextProvider>
      </ConfirmContextProvider>
    </SWRConfig>
  ),
];
