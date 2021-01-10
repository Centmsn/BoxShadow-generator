import { connect } from "react-redux";
import styled from "styled-components";

import Bar from "./Bar";
import Checkbox from "./Checkbox";
import RGBColor from "./RGBColor";
import { setInset } from "../../actions";

const bars = [
  { name: "offset x", min: -100, max: 100 },
  { name: "offset y", min: -100, max: 100 },
  { name: "spread", min: -100, max: 100 },
  { name: "blur", min: 0, max: 100 },
  { name: "opacity", min: 0, max: 100 },
];

const Options = ({ setInset, activeId, list }) => {
  const handleInset = (value) => {
    setInset(activeId, value);
  };

  const renderBars = () => {
    return bars.map((el, index) => {
      const { name, min, max } = el;
      return (
        <Bar text={name} index={index + 1} min={min} max={max} key={index} />
      );
    });
  };

  return (
    <Wrapper>
      {renderBars()}
      <SubContainer>
        <RGBColor />
        <Checkbox
          description="Inset"
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

export default connect(mapStateToProps, { setInset })(Options);
