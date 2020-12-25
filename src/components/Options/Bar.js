import { connect } from "react-redux";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

import Draggable from "./Draggable";
import {
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
  setShadowColor,
  changeActiveId,
} from "../../actions";

const Bar = ({
  list,
  text,
  min,
  max,
  index,
  activeId,
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
  setShadowColor,
  changeActiveId,
}) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [innerBarWidth, setInnerBarWidth] = useState(0);
  const [barInfo, setBarInfo] = useState(0);
  const bar = useRef(null);
  const size = Object.keys(list).length;

  // ((width / range) * (range + 2 * prop)) / 2 -
  // 15 * (1 + prop / 100) -
  // (prop < 0 ? width / range : 0);

  // !incorrent value for range 0 - 100
  // *correct for -100 - 100
  const updateBar = (prop, range) => {
    const { width } = bar.current.getBoundingClientRect();
    const position =
      ((width / range) * (range > 100 ? range + 2 * prop : prop)) /
        (range > 100 ? 2 : 1) -
      15 * (1 + prop / 100) -
      (prop < 0 ? width / range : 0);
    setSliderPosition(position);
    setInnerBarWidth(position + 15);
    setBarInfo(prop);
  };

  useEffect(() => {
    // 1 - offsetX
    // 2 - offsetY
    // 3 - spread
    // 4 - blur
    // 5 - opacity
    const range = parseInt(Math.abs(min) + max);

    if (!list[activeId]) {
      changeActiveId(Object.keys(list)[0]);
      return;
    }

    switch (index) {
      case 1:
        updateBar(list[activeId].x, range);
        break;

      case 2:
        updateBar(list[activeId].y, range);
        break;

      case 3:
        updateBar(list[activeId].s, range);
        break;

      case 4:
        updateBar(list[activeId].b, range);
        break;

      case 5:
        updateBar(list[activeId].color.a * 100, range);
        break;

      default:
        throw new Error("Incorrect index number");
    }
  }, [activeId, size, min, max, index, changeActiveId]);

  const handlePositionChange = (e) => {
    const { width, left } = bar.current.getBoundingClientRect();

    let positionX = e.clientX - left - 15;

    if (positionX > width - 30) {
      positionX = width - 30;
    } else if (positionX < -2) {
      positionX = -2;
    }
    setSliderPosition(positionX);
    setInnerBarWidth(positionX + 5);

    updateBarInfo(width, left, e);
  };

  const updateBarInfo = (width, left, e) => {
    const base = (Math.abs(min) + max) / (width - 30);
    let info;

    if (min === 0) {
      info = Math.floor((e.clientX - left) * base);
    } else {
      const middle = width / 2;

      info = Math.floor((e.clientX - left - middle) * base);
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
    // 5 - opacity

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

      case 5:
        const { r, g, b } = list[activeId].color;
        setShadowColor(activeId, { r, g, b, a: offset / 100 });
        break;

      default:
        throw new Error("Incorrect index number");
    }
  };

  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar ref={bar}>
        <InnerBar width={innerBarWidth} />
        <Draggable
          position={sliderPosition}
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

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
  user-select: none;
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, {
  setOffsetX,
  setOffsetY,
  setSpread,
  setBlur,
  setShadowColor,
  changeActiveId,
})(Bar);
