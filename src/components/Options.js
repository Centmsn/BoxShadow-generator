import styled from "styled-components";

import Bar from "./Bar";
import Checkbox from "./Checkbox";

const Options = () => {
  return (
    <Wrapper>
      <Bar text="Offset X" />
      <Bar text="Offset Y" />
      <Bar text="Spread" />
      <Bar text="Blur" />
      <Checkbox text="Inset" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: 1/1/6/2;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.font};

  padding: 10px;
`;

export default Options;
