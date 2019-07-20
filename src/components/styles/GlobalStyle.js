import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    font-family: 'Hind', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;
