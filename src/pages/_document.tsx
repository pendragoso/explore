/* eslint-disable react/no-danger */
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('amino:theme') || 'day';
              document.documentElement.dataset.theme = theme;
              const graphiqlTheme = theme === 'day' ? 'light' : 'dark';
              window.localStorage.setItem('graphiql:theme', graphiqlTheme)
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
