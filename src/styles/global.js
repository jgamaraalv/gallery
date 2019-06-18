import { createGlobalStyle } from "styled-components";

import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
  }

  html {
    font-size: 10px;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
