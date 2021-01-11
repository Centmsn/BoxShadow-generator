import { connect } from "react-redux";
import styled from "styled-components";

import Bar from "./Slider";
import Checkbox from "./Checkbox";
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
  // manage redux store
  const handleInset = (value) => {
    setInset(activeId, value);
  };

  // manage redux store
  const handleColor = (color) => {
    setShadowColor(activeId, color);
  };

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

export default connect(mapStateToProps, { setInset, setShadowColor })(Options);
