import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { baseTheme, GlobalStyles } from '@/shared/lib/theme';

export const withTheme = (component: () => ReactNode) => () =>
  (
    <ThemeProvider theme={baseTheme}>
      {component()}
      <GlobalStyles />
    </ThemeProvider>
  );
