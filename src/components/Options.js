import styled from "styled-components";
import { useState } from "react";

import Bar from "./Bar";
import Checkbox from "./Checkbox";

const Options = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionSpread, setPositionSpread] = useState(0);
  const [positionBlur, setPositionBlur] = useState(0);

  return (
    <Wrapper>
      <Bar
        text="Offset X"
        position={positionX}
        initial="center"
        setPosition={setPositionX}
        min={-50}
        max={50}
      />
      <Bar
        text="Offset Y"
        position={positionY}
        initial="center"
        setPosition={setPositionY}
      />
      <Bar
        text="Spread"
        position={positionSpread}
        initial="left"
        setPosition={setPositionSpread}
      />
      <Bar
        text="Blur"
        position={positionBlur}
        initial="left"
        setPosition={setPositionBlur}
      />
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
