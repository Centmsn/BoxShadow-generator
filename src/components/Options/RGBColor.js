import { connect } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";

import { setShadowColor } from "../../actions";

const RGBColor = ({ list, activeId }) => {
  return (
    <Wrapper>
      <label>
        R
        <ColorInput type="number" />
      </label>

      <label>
        G
        <ColorInput type="number" />
      </label>

      <label>
        B
        <ColorInput type="number" />
      </label>

      <label>
        A
        <ColorInput type="number" />
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 60%;

  display: flex;

  label {
    flex-basis: 15%;
    min-width: 35px;
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
