import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Options from "./Options";
import List from "./List";
import CodeOutput from "./CodeOutput";
import Preview from "./Preview";

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
  lightBlue: "rgb(175, 193, 222)",
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 35% 1fr;
  grid-template-rows: repeat(12, 1fr);
  gap: 10px;

  overflow: hidden;
`;

export default App;
