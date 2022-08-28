import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { baseTheme, GlobalFonts, GlobalStyles, NormalizeStyles } from '../theme';

export const withTheme = (component: () => ReactNode) => () =>
  (
    <ThemeProvider theme={baseTheme}>
      {component()}
      <NormalizeStyles />
      <GlobalFonts />
      <GlobalStyles />
    </ThemeProvider>
  );
