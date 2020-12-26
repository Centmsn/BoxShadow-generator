import { connect } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { convertHexToRgb, convertRgbToHex, throttle } from "../../helpers";
import { setShadowColor } from "../../actions";

const RGBColor = ({ list, activeId, setShadowColor }) => {
  const [hexColor, setHexColor] = useState("#000000");
  const size = Object.keys(list).length;

  useEffect(() => {
    const { r, g, b } = list[activeId].color;
    const hex = convertRgbToHex(r, g, b);

    setHexColor(hex);
  }, [activeId, size]);

  const handleColorChange = throttle((e, val) => {
    const color = convertHexToRgb(val);
    setShadowColor(activeId, color);
    setHexColor(val);
  }, 50);

  return (
    <Wrapper>
      <p>SHADOW COLOR</p>
      <ColorInput
        type="color"
        onChange={(e) => handleColorChange(e, e.target.value)}
        value={hexColor}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 80%;

  display: flex;

  label {
    flex-basis: 10%;
    min-width: 40px;
    display: flex;

    color: rgb(235, 235, 235);
  }

  p {
    margin-right: 15px;
  }
`;

const ColorInput = styled.input`
  width: 25%;

  border: none;
  border-radius: 5px;
  outline: none;

  background: none;
  padding: 0 2px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 1px black;
    /* background-color: white; */
  }
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, { setShadowColor })(RGBColor);
