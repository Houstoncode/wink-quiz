import { css } from 'styled-components';

import RostelecomBasisBoldFont from './fonts/RostelecomBasis-Bold.otf';
import RostelecomBasisLightFont from './fonts/RostelecomBasis-Light.otf';
import RostelecomBasisMediumFont from './fonts/RostelecomBasis-Medium.otf';
import RostelecomBasisRegularFont from './fonts/RostelecomBasis-Regular.otf';

export const fonts = css`
  @font-face {
    font-family: 'RostelecomBasis';
    src: url(${RostelecomBasisRegularFont}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'RostelecomBasis';
    src: url(${RostelecomBasisLightFont}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'RostelecomBasis';
    src: url(${RostelecomBasisBoldFont}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'RostelecomBasis';
    src: url(${RostelecomBasisMediumFont}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }
`;
