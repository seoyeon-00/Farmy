import { createGlobalStyle } from 'styled-components';
import layout from './LayoutGuide';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${layout};

  a {
    color: #333;
    text-decoration: none;
  }

  :root {
    // Colors
    --color-main: #F86800;
    --color-sub: #FFBC8C;
    --color-pastel: #FFEDE0;
    --color-font-main: #333;
    --color-gray: #FCFCFC;

    // Font size
    --font-title: clamp(3rem, 5.5vw, 4rem);
    --font-sub-title: clamp(2.2rem, 4.17vw, 3rem);
    --font-body-large: clamp(2rem, 3.34vw, 2.4rem);
    --font-body-medium: clamp(1.8rem, 2.78vw, 2rem);
    --font-body-regular: clamp(1.4rem, 2.23vw, 1.6rem);
    --font-body-small: clamp(1.3rem, 1.94vw, 1.4rem);
    --font-body-xsmall: clamp(1.1rem, 1.8vw, 1.2rem);
    --font-body-micro: clamp(0.8rem, 1.67vw, 1rem);

    // Font weight
    --weight-bold: 900;
    --weight-semi-bold: 700;
    --weight-regular: 500;
    --weight-normal: 400;
    --weight-light: 300;
  }
`;

export default GlobalStyle;
