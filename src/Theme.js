import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    darkBlue: "rgb(0, 32, 84)",
    darkBlueTransparent: "rgb(0, 32, 84, 0.9)",
    lightBlue: "rgb(175, 193, 222)",
    lightGray: "rgb(160, 160, 160)",
  },
  fonts: {
    main: "'Baloo 2', cursive",
  },
  others: {
    border: "4px solid rgb(0, 32, 84)",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
