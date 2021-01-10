import { connect } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";

import Bar from "./Slider";
import Checkbox from "./Checkbox";
import { convertHexToRgb, convertRgbToHex, throttle } from "../../helpers";
import ColorInput from "./ColorInput";
import { setInset, setShadowColor } from "../../actions";

const sliders = [
  { name: "offset x", min: -100, max: 100 },
  { name: "offset y", min: -100, max: 100 },
  { name: "spread", min: -100, max: 100 },
  { name: "blur", min: 0, max: 100 },
  { name: "opacity", min: 0, max: 100 },
];

const Options = ({ setInset, setShadowColor, activeId, list }) => {
  // inset state
  const [checkbox, setCheckbox] = useState(false);

  // color state
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const { r, g, b } = list[activeId].color;
    const hex = convertRgbToHex(r, g, b);

    // update current settings on active ID change
    setCheckbox(list[activeId].inset);
    setColor(hex);
  }, [activeId]);

  const handleInset = (value) => {
    setCheckbox(value);
    setInset(activeId, value);
  };

  const handleColorChange = throttle((val) => {
    const color = convertHexToRgb(val);
    setShadowColor(activeId, color);
    setColor(val);
  }, 50);

  const randerSliders = () => {
    return sliders.map((el, index) => {
      const { name, min, max } = el;
      return (
        <Bar text={name} index={index + 1} min={min} max={max} key={index} />
      );
    });
  };

  return (
    <Wrapper>
      {randerSliders()}
      <SubContainer>
        <ColorInput
          description="shadow color"
          onChange={handleColorChange}
          value={color}
        />
        <Checkbox description="inset" onClick={handleInset} value={checkbox} />
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

export default connect(mapStateToProps, { setInset, setShadowColor })(Options);
