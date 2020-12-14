import { connect } from "react-redux";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import Draggable from "./Draggable";
import { setOffsetX, setOffsetY, setSpread, setBlur } from "../../actions";

const Bar = ({
  text,
  min,
  max,
  index,
  activeId,
  position,
  initial,
  setPosition,
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
}) => {
  const [innerBarWidth, setInnerBarWidth] = useState(0);
  const [barInfo, setBarInfo] = useState(0);
  const bar = useRef(null);

  useEffect(() => {
    const { width } = bar.current.getBoundingClientRect();

    if (initial === "center") {
      setPosition(width / 2 - 15);
      setInnerBarWidth(width / 2 + 5);
    } else if (initial === "left") {
      setPosition(-2);
    }
  }, []);

  const handlePositionChange = (e) => {
    const { width, left } = bar.current.getBoundingClientRect();

    let positionX = e.clientX - left - 15;

    if (positionX > width - 30) {
      positionX = width - 30;
    } else if (positionX < -2) {
      positionX = -2;
    }
    setPosition(positionX);
    setInnerBarWidth(positionX + 5);

    updateBarInfo(width, left, e);
  };

  const updateBarInfo = (width, left, e) => {
    const base = (Math.abs(min) + max) / width;
    let info;

    if (min === 0) {
      info = Math.floor((e.clientX - left) * base);
    } else {
      const middle = width / 2 - 15;

      info = Math.floor((e.clientX - middle) * base) - 41;
    }

    if (info > max) info = max;
    else if (info < min) info = min;

    setBarInfo(info);
    updateBoxShadow(info);
  };

  const updateBoxShadow = (offset) => {
    // 1 - offsetX
    // 2 - offsetY
    // 3 - spread
    // 4 - blur

    switch (index) {
      case 1:
        setOffsetX(offset, activeId);
        break;

      case 2:
        setOffsetY(offset, activeId);
        break;

      case 3:
        setSpread(offset, activeId);
        break;

      case 4:
        setBlur(offset, activeId);
        break;
    }
  };

  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar ref={bar}>
        <InnerBar width={innerBarWidth} />
        <Draggable
          position={position}
          setPosition={handlePositionChange}
          text={barInfo}
        />
      </OptionBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: flex-end;
  flex-basis: 100%;
  display: flex;
`;

const OptionBar = styled.div`
  position: relative;
  flex-basis: 75%;
  height: 25px;

  border: 2px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;
`;

const InnerBar = styled.div.attrs((props) => ({
  style: { width: props.width },
}))`
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.lightBlue};
`;

const BarInfo = styled.p`
  position: absolute;
  z-index: 999;

  user-select: none;
`;

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
  user-select: none;
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
  };
};

export default connect(mapStateToProps, {
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
})(Bar);
