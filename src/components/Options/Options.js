import { useSelector } from "react-redux";
import styled from "styled-components";

import Bar from "./Slider";
import Checkbox from "./Checkbox";
import ColorInput from "./ColorInput";
import { useActions } from "../../hooks/useActions";

const Options = () => {
  const activeID = useSelector((state) => state.activeId);
  const boxShadowList = useSelector((state) => state.boxShadowList);
  const {
    setInset,
    setShadowColor,
    setOffsetX,
    setOffsetY,
    setBlur,
    setSpread,
  } = useActions();

  const handleInset = (value) => {
    setInset(value, activeID);
  };

  const handleColor = (color) => {
    setShadowColor(color, activeID);
  };

  const handleOffsetX = (value) => {
    setOffsetX(value, activeID);
  };

  const handleOffsetY = (value) => {
    setOffsetY(value, activeID);
  };

  const handleSpread = (value) => {
    setSpread(value, activeID);
  };

  const handleBlur = (value) => {
    setBlur(value, activeID);
  };

  const handleShadow = (value) => {
    const { r, g, b } = boxShadowList[activeID].color;
    setShadowColor({ r, g, b, a: value / 100 }, activeID);
  };

  const randerSliders = () => {
    const sliders = [
      {
        name: "offset x",
        min: -100,
        max: 100,
        callback: handleOffsetX,
        value: boxShadowList[activeID].x,
      },
      {
        name: "offset y",
        min: -100,
        max: 100,
        callback: handleOffsetY,
        value: boxShadowList[activeID].y,
      },
      {
        name: "spread",
        min: -100,
        max: 100,
        callback: handleSpread,
        value: boxShadowList[activeID].s,
      },
      {
        name: "blur",
        min: 0,
        max: 100,
        callback: handleBlur,
        value: boxShadowList[activeID].b,
      },
      {
        name: "opacity",
        min: 0,
        max: 100,
        callback: handleShadow,
        value: Math.floor(boxShadowList[activeID].color.a * 100),
      },
    ];

    return sliders.map((el, index) => {
      const { name, min, max, callback, value } = el;
      return (
        <Bar
          text={name}
          index={index + 1}
          min={min}
          max={max}
          key={index}
          onChange={callback}
          value={value}
        />
      );
    });
  };

  return (
    <Wrapper>
      {randerSliders()}
      <SubContainer>
        <ColorInput
          description="shadow color"
          onChange={handleColor}
          value={boxShadowList[activeID].color}
        />

        <Checkbox
          description="inset"
          onClick={handleInset}
          initialValue={boxShadowList[activeID].inset}
        />
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

  border: ${({ theme }) => theme.others.border};
  border-radius: 5px;

  padding: 10px;
`;

const SubContainer = styled.div`
  flex-basis: 100%;

  display: flex;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.lightBlue};

  padding: 5px;
`;

export default Options;
