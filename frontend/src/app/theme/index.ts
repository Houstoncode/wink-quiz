import { CSSObject } from 'styled-components';

import { TypographyVariant } from '@/shared/lib/typography';

export * from './fonts';
export * from './global';
export * from './normalize';

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;

    white: string;
    bg: string;
    font: string;
  };

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

  sizes: {
    header: { height: number };
    container: { width: number };
    footer: { height: number };
    modal: { width: number };
  };

  durations: {
    ms300: number;
  };

  order: {
    header: number;
    modal: number;
  };
}

export const baseTheme: ITheme = {
  colors: {
    primary: '#7986cb',
    secondary: '#2b2b2b',
    success: '#4caf50',
    danger: '#f44336 ',

    white: '#ffffff',
    bg: '#E5E4E8',
    font: '#19191B',
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

  // in px
  sizes: {
    header: { height: 56 },
    container: { width: 1200 },
    footer: { height: 128 },
    modal: { width: 540 },
  },

  // in ms
  durations: {
    ms300: 300,
  },

  // z-index
  order: {
    header: 50,
    modal: 100,
  },
};
