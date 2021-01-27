import styled from "styled-components";
import { useEffect } from "react";

import CodeOutput from "./Output/CodeOutput";
import GlobalStyle from "../GlobalStyles";
import List from "./List/List";
import Options from "./Options/Options";
import Preview from "./Preview/Preview";
import Theme from "../Theme";

const App = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", displayAlert);

    return () => {
      window.removeEventListener("beforeunload", displayAlert);
    };
  }, []);

  const displayAlert = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  return (
    <>
      <Theme>
        <GlobalStyle />
        <Wrapper>
          <List />
          <Options />
          <Preview />
          <CodeOutput />
        </Wrapper>
      </Theme>
    </>
  );
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
