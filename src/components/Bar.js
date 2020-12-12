import styled from "styled-components";

import Draggable from "./Draggable";

const Bar = ({ text }) => {
  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar>
        <Draggable />
      </OptionBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: flex-end;
  flex-basis: 100%;
  display: flex;
`;

const OptionBar = styled.div`
  position: relative;
  flex-basis: 75%;
  height: 30px;

  border: 2px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;
`;

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
`;

export default Bar;
