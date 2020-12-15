import { connect } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";

import { setShadowColor } from "../../actions";

const RGBColor = ({ list, activeId, setShadowColor }) => {
  const handleShadowColorChange = (e, id) => {
    // 1 - R
    // 2 - G
    // 3 - B
    // 4 - A
    const { r, g, b, a } = list[activeId].color;
    let color;

    switch (id) {
      case 1:
        color = { r: e.target.value, g, b, a };
        break;

      case 2:
        color = { r, g: e.target.value, b, a };
        break;

      case 3:
        color = { r, g, b: e.target.value, a };
        break;

      case 4:
        color = { r, g, b, a: e.target.value };
        break;
    }

    setShadowColor(activeId, color);
  };

  return (
    <Wrapper>
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
          value={list[activeId].color.a}
          onChange={(e) => handleShadowColorChange(e, 4)}
        />
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 60%;

  display: flex;

  label {
    flex-basis: 10%;
    min-width: 40px;
    display: flex;

    color: ${({ theme }) => theme.lightGray};
  }
`;

const ColorInput = styled.input`
  width: 100%;

  border-top: none;
  border-left: none;
  border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
  border-right: none;
  outline: none;

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
