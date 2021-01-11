import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Baloo 2', cursive;
  }

  input {
    border: none;
    background: none;
    outline: none;
  }

  button {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
