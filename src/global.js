import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    border-radius: 8px;
  }

  h1 {
    text-align:center;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 700;
    color: #355c7d;
    margin: 8px;
  }
  h3 {
    text-align:center;
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 700;
    color: #355c7d;
    margin: 8px;
  }

`;

export default GlobalStyle;