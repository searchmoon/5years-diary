import { createGlobalStyle } from "styled-components";
// import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ol, ul, li{
    list-style: none;
  }
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles;