import { connect } from "react-redux";
import styled from "styled-components";

import Bar from "./Slider";
import Checkbox from "./Checkbox";
import ColorInput from "./ColorInput";
import {
  setInset,
  setShadowColor,
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
} from "../../actions";

const Options = ({
  setInset,
  setShadowColor,
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
  activeId,
  list,
}) => {
  const handleInset = (value) => {
    setInset(value, activeId);
  };

  const handleColor = (color) => {
    setShadowColor(color, activeId);
  };

  const handleOffsetX = (value) => {
    setOffsetX(value, activeId);
  };

  const handleOffsetY = (value) => {
    setOffsetY(value, activeId);
  };

  const handleSpread = (value) => {
    setSpread(value, activeId);
  };

  const handleBlur = (value) => {
    setBlur(value, activeId);
  };

  const handleShadow = (value) => {
    const { r, g, b } = list[activeId].color;
    setShadowColor({ r, g, b, a: value / 100 }, activeId);
  };

  const randerSliders = () => {
    const sliders = [
      {
        name: "offset x",
        min: -100,
        max: 100,
        callback: handleOffsetX,
        value: list[activeId].x,
      },
      {
        name: "offset y",
        min: -100,
        max: 100,
        callback: handleOffsetY,
        value: list[activeId].y,
      },
      {
        name: "spread",
        min: -100,
        max: 100,
        callback: handleSpread,
        value: list[activeId].s,
      },
      {
        name: "blur",
        min: 0,
        max: 100,
        callback: handleBlur,
        value: list[activeId].b,
      },
      {
        name: "opacity",
        min: 0,
        max: 100,
        callback: handleShadow,
        value: Math.floor(list[activeId].color.a * 100),
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
          value={list[activeId].color}
        />

        <Checkbox
          description="inset"
          onClick={handleInset}
          initialValue={list[activeId].inset}
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

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, {
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
  setInset,
  setShadowColor,
})(Options);
