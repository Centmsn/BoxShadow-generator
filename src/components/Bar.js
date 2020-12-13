import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import Draggable from "./Draggable";

const Bar = ({ text, min, max, position, initial, setPosition }) => {
  const [innerBarWidth, setInnerBarWidth] = useState(0);
  const [barInfo, setBarInfo] = useState(0);
  const bar = useRef(null);

  useEffect(() => {
    const { width } = bar.current.getBoundingClientRect();

    if (initial === "center") {
      setPosition(width / 2);
      setInnerBarWidth(width / 2 + 5);
    } else if (initial === "left") {
      setPosition(-2);
    }
  }, []);

  const handlePositionChange = (e) => {
    const { width, left } = bar.current.getBoundingClientRect();
    let positionX = e.clientX - left - 10;

    if (positionX > width - 30) {
      positionX = width - 30;
    } else if (positionX < -2) {
      positionX = -2;
    }
    setPosition(positionX);
    setInnerBarWidth(positionX + 5);
  };

  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar ref={bar}>
        <InnerBar width={innerBarWidth} />
        <Draggable
          position={position}
          setPosition={handlePositionChange}
          text={barInfo}
        />
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
  height: 25px;

  border: 2px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;
`;

const InnerBar = styled.div.attrs((props) => ({
  style: { width: props.width },
}))`
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightBlue};
`;

const BarInfo = styled.p`
  position: absolute;
  z-index: 999;

  user-select: none;
`;

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
  user-select: none;
`;

export default Bar;
