import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

import Bar from "./Bar";
import Checkbox from "./Checkbox";
import RGBColor from "./RGBColor";

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
        setPosition={setPositionX}
        index={1}
        min={-100}
        max={100}
      />
      <Bar
        text="Offset Y"
        position={positionY}
        setPosition={setPositionY}
        index={2}
        min={-100}
        max={100}
      />
      <Bar
        text="Spread"
        position={positionSpread}
        setPosition={setPositionSpread}
        index={3}
        min={0}
        max={100}
      />
      <Bar
        text="Blur"
        position={positionBlur}
        setPosition={setPositionBlur}
        index={4}
        min={0}
        max={100}
      />
      <SubContainer>
        <RGBColor />
        <Checkbox text="Inset" />
      </SubContainer>
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

const SubContainer = styled.div`
  flex-basis: 100%;

  display: flex;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightBlue};

  padding: 5px;
`;

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Options);
