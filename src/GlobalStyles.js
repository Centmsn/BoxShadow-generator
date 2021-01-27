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

  ::-webkit-scrollbar {
    width: 1em;

  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.lightBlue};
    outline: 1px solid slategrey;
  }
`;

export default GlobalStyle;
