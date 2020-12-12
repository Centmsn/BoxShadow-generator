import styled from "styled-components";

import Draggable from "./Draggable";

const Bar = ({ text, func }) => {
  const position = 100;

  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar>
        <InnerBar />
        <Draggable func={func} position={position} />
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

const InnerBar = styled.div`
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  transform: scaleX(0);

  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightBlue};
`;

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
`;

export default Bar;
