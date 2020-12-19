import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

import { convertHexToRgb } from "../../helpers";
import { setShadowColor } from "../../actions";

const RGBColor = ({ activeId, setShadowColor }) => {
  const [thorttle, setThrottle] = useState(true);

  const handleColorChange = (e) => {
    if (!thorttle) {
      return;
    }

    setThrottle(false);

    const color = convertHexToRgb(e.target.value);
    setShadowColor(activeId, color);
    setTimeout(() => {
      setThrottle(true);
    }, 50);
  };

  return (
    <Wrapper>
      <p>SHADOW COLOR</p>
      <ColorInput type="color" onChange={handleColorChange} />
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
  };
};

export default connect(mapStateToProps, { setShadowColor })(RGBColor);
