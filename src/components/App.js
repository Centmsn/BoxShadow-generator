import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Options from "./Options/Options";
import List from "./List/List";
import CodeOutput from "./CodeOutput";
import Preview from "./Preview/Preview";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <List />
          <Options />
          <Preview />
          <CodeOutput />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const theme = {
  font: "'Baloo 2', cursive",
  darkBlue: "rgb(0, 32, 84)",
  darkBlueTransparent: "rgb(0, 32, 84, 0.9)",
  lightBlue: "rgb(175, 193, 222)",
  lightGray: "rgb(160, 160, 160)",
  border: "4px solid rgb(0, 32, 84)",
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100vh;

  margin: 0 auto;

  display: grid;
  grid-template-columns: 35% 1fr;
  grid-template-rows: repeat(12, 1fr);
  gap: 10px;

  padding: 10px;
  overflow: hidden;
`;

export default App;
