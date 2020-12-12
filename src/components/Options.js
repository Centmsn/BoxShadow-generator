import styled from "styled-components";

import Bar from "./Bar";

const Options = () => {
  return (
    <Wrapper>
      <Bar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: 1/1/6/2;

  background-color: red;
`;

export default Options;
