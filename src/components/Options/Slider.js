import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Functional React component - renders range input on the screen
 * @returns {JSX.Element}
 */
const Slider = ({ text, min, max, onChange, value }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const bar = useRef(null);

  useEffect(() => {
    const { width } = bar.current.getBoundingClientRect();
    const range = Math.abs(min) + max;
    setSliderPosition(((width - 30) / range) * (min < 0 ? 100 + value : value));
  }, [value, min, max]);

  // !refactor required
  const handlePositionChange = (e) => {
    const { width, left } = bar.current.getBoundingClientRect();

    let positionX = e.clientX - left - 15;

    if (positionX > width - 30) {
      positionX = width - 30;
    } else if (positionX < -2) {
      positionX = -2;
    }
    updateBarInfo(width, left, e);
  };

  // !refactor required
  const updateBarInfo = (width, left, e) => {
    const base = (Math.abs(min) + max) / (width - 15);
    let info;

    if (min === 0) {
      info = Math.floor((e.clientX - left) * base);
    } else {
      const middle = width / 2;

      info = Math.floor((e.clientX - left - middle) * base);
    }

    if (info > max) info = max;
    else if (info < min) info = min;

    onChange(info);
  };

  const startDrag = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handlePositionChange);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", handlePositionChange);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <Wrapper>
      <Label>{text.toUpperCase()}</Label>
      <OptionBar ref={bar}>
        <InnerBar width={sliderPosition + 5} />
        <Draggable position={sliderPosition} onMouseDown={startDrag}>
          {value}
        </Draggable>
      </OptionBar>
    </Wrapper>
  );
};

Slider.propTypes = {
  /**
   * Optional - slider description
   */
  text: PropTypes.string,
  /**
   * Required - smallest possible input
   */
  min: PropTypes.number.isRequired,
  /**
   * Required - biggest possible input
   */
  max: PropTypes.number.isRequired,
  /**
   * Required - callback which is called on value change
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Required - piece of state which tracks the value
   */
  value: PropTypes.number.isRequired,
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

  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
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
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const Draggable = styled.div.attrs((props) => ({
  style: {
    left: props.position,
  },
}))`
  position: absolute;
  height: 140%;
  width: 30px;
  transform: translateY(-15%);

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 5px;

  cursor: pointer;
  user-select: none;
`;

const Label = styled.p`
  flex-basis: 20%;

  text-align: left;
  user-select: none;
`;

export default Slider;
