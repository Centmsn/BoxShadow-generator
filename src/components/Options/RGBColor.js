import { connect } from "react-redux";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { convertHexToRgb, convertRgbToHex } from "../../helpers";
import { setShadowColor } from "../../actions";

const RGBColor = ({ list, activeId, setShadowColor }) => {
  const [thorttle, setThrottle] = useState(true);
  const [hexColor, setHexColor] = useState(null);

  useEffect(() => {
    const { r, g, b } = list[activeId].color;
    const hex = convertRgbToHex(r, g, b);

    setHexColor(hex);
  }, [activeId]);

  const handleColorChange = (e) => {
    if (!thorttle) {
      return;
    }

    setThrottle(false);

    const color = convertHexToRgb(e.target.value);
    setShadowColor(activeId, color);
    setHexColor(e.target.value);
    setTimeout(() => {
      setThrottle(true);
    }, 50);
  };

  return (
    <Wrapper>
      <p>SHADOW COLOR</p>
      <ColorInput type="color" onChange={handleColorChange} value={hexColor} />
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
  outline: none;

  background: none;

  cursor: pointer;
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, { setShadowColor })(RGBColor);
