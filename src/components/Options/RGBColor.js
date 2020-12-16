import { connect } from "react-redux";
import styled from "styled-components";

import { setShadowColor } from "../../actions";

const RGBColor = ({ list, activeId, setShadowColor }) => {
  const handleShadowColorChange = (e, id) => {
    // 1 - R
    // 2 - G
    // 3 - B
    // 4 - A
    const { r, g, b, a } = list[activeId].color;
    const limit = id === 4 ? 100 : 255;
    let val = e.target.value;
    let color;

    if (!val) {
      val = 0;
    } else if (val > limit) {
      val = limit;
    } else if (val.match(/^0{2,}/)) {
      val = val.slice(0, 1);
    } else if (val.match(/^0\d/)) {
      val = val.slice(1);
    }

    switch (id) {
      case 1:
        color = { r: val, g, b, a };
        break;

      case 2:
        color = { r, g: val, b, a };
        break;

      case 3:
        color = { r, g, b: val, a };
        break;

      case 4:
        color = { r, g, b, a: val / 100 };
        break;
    }

    setShadowColor(activeId, color);
  };

  return (
    <Wrapper>
      <p>SHADOW COLOR</p>
      <label>
        R
        <ColorInput
          type="number"
          value={list[activeId].color.r}
          onChange={(e) => handleShadowColorChange(e, 1)}
        />
      </label>
      <label>
        G
        <ColorInput
          type="number"
          value={list[activeId].color.g}
          onChange={(e) => handleShadowColorChange(e, 2)}
        />
      </label>
      <label>
        B
        <ColorInput
          type="number"
          value={list[activeId].color.b}
          onChange={(e) => handleShadowColorChange(e, 3)}
        />
      </label>
      <label>
        A
        <ColorInput
          type="number"
          value={Math.floor(list[activeId].color.a * 100)}
          onChange={(e) => handleShadowColorChange(e, 4)}
        />
      </label>
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
  width: 100%;

  border-top: none;
  border-left: none;
  border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
  border-right: none;
  outline: none;

  background: none;

  font-family: ${({ theme }) => theme.font};
  font-size: 1rem;

  padding-left: 3px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, { setShadowColor })(RGBColor);
