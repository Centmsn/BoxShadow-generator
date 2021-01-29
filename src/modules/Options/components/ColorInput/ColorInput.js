import PropTypes from "prop-types";
import styled from "styled-components";

import { convertHexToRgb, convertRgbToHex, throttle } from "helpers";
import { useState, useEffect } from "react";

/**
 * Functional React component - renders HTML color input with provided description
 * @function
 * @param {object} props - react props
 * @returns {JSX.Element}
 */
const ColorInput = ({ description, onChange, value }) => {
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const { r, g, b } = value;
    const hex = convertRgbToHex(r, g, b);
    setColor(hex);
  }, [value]);

  const handleColorChange = throttle((value) => {
    const color = convertHexToRgb(value);
    onChange(color);
  }, 50);

  return (
    <Wrapper>
      <p>{description.toUpperCase()}</p>
      <Input
        type="color"
        onChange={(e) => handleColorChange(e.target.value)}
        value={color}
      />
    </Wrapper>
  );
};

ColorInput.propTypes = {
  /**
   * Input description
   */
  description: PropTypes.string,

  /**
   * A function which is called on every color change
   */
  onChange: PropTypes.func.isRequired,

  /**
   * RGB color value
   */
  value: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
  }).isRequired,
};

ColorInput.defaultProps = {
  description: "",
  value: "#000000",
};

const Wrapper = styled.div`
  flex-basis: 80%;

  display: flex;

  p {
    margin-right: 15px;
  }
`;

const Input = styled.input`
  width: 25%;

  border-radius: 5px;

  padding: 0 2px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.darkBlue};
  }
`;

export default ColorInput;
