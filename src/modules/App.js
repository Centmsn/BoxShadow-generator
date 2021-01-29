import styled from "styled-components";
import { useEffect } from "react";

// style
import Theme from "style/Theme";
import GlobalStyle from "style/GlobalStyles";

// components
import CodeOutput from "modules/Output/CodeOutput";
import List from "modules/List/components/List";
import Options from "modules/Options/components/Options";
import Preview from "modules/Preview/components/Preview";

/**
 * Functional React component - main app components, contains all other components
 * @returns {JSX.Element}
 */
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
