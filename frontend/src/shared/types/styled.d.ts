import 'styled-components';

import { ITheme } from '@/shared/lib/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
