import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import Viewport from './viewport';
import Seo from './seo';
import { Theme } from '@material-ui/core';

type AppProps = {
  children: React.ReactNode;
  theme: Theme;
};

export default function TopLayout({ children, theme }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Seo
        meta={[
          { name: 'viewport' },
          {
            content:
              'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
          }
        ]}
      />

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
