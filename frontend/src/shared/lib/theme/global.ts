import { createGlobalStyle } from 'styled-components';

import { fonts } from './fonts';
import { normalize } from './normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}
${fonts}

body { 
    background-color: #16151A;
    font-family: 'RostelecomBasis';
}
`;
