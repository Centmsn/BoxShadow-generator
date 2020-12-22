import styled from "styled-components";

import Bar from "./Bar";
import Checkbox from "./Checkbox";
import RGBColor from "./RGBColor";

const bars = [
  { prop: "offset x", min: -100, max: 100 },
  { prop: "offset y", min: -100, max: 100 },
  { prop: "spread", min: 0, max: 100 },
  { prop: "blur", min: 0, max: 100 },
  { prop: "opacity", min: 0, max: 100 },
];

const Options = () => {
  const renderBars = () => {
    return bars.map((el, index) => {
      const { prop, min, max } = el;

      return <Bar text={prop} index={index + 1} min={min} max={max} />;
    });
  };

  return (
    <Wrapper>
      {renderBars()}
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

  border: ${({ theme }) => theme.border};
  border-radius: 5px;

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

export default Options;
