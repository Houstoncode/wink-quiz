import { CSSObject } from 'styled-components';

import { TypographyVariant } from '@/shared/lib/typography';

export * from './fonts';
export * from './global';
export * from './normalize';

type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'white' | 'purple';

export interface ITheme {
  colors: Record<Colors, string>;

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };

  typography: {
    sizes: Record<TypographyVariant, string>;
    colors: Record<TypographyVariant, string>;
    weights: Record<TypographyVariant, CSSObject['fontWeight']>;
  };
}

export const baseTheme: ITheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#F52F57',
    white: '#ffffff',
    purple: '#6F31BE',
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },

  typography: {
    sizes: {
      h1: '40px',
      h2: '28px',
      h3: '16px',
      subtitle: '16px',
      body: '16px',
      link: '16px',
    },
    weights: {
      h1: 'bold',
      h2: 'bold',
      h3: 'normal',
      subtitle: 'normal',
      body: 'normal',
      link: 'bold',
    },
    colors: {
      h1: '#fff',
      h2: '#fff',
      h3: '#fff',
      subtitle: '#919193',
      body: '#fff',
      link: '#fff',
    },
  },
};
