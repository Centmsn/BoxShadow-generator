import styled from "styled-components";

import Options from "./Options";
import List from "./List";
import CodeOutput from "./CodeOutput";
import Preview from "./Preview";

const App = () => {
  return (
    <Wrapper>
      <List />
      <Options />
      <Preview />
      <CodeOutput />
    </Wrapper>
  );
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
