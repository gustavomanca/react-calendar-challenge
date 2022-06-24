import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ${({ theme }) => css`
    html {
      font-size: 10px;
    }
  `}
`;

export default GlobalStyles;
