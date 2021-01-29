import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Functional React component - renders button on the screen
 * @returns {JSX.Element}
 */
const Button = ({ text, onClick, color }) => {
  return (
    <Btn onClick={onClick} color={color}>
      {text}
    </Btn>
  );
};

Button.propTypes = {
  /**
   * Text displayed in the button
   */
  text: PropTypes.string.isRequired,
  /**
   * Button color - optional
   */
  color: PropTypes.string,
  /**
   * Function called on button click
   */
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  /**
   * default color value
   */
  color: "rgba(0, 0, 0, 1)",
};

const Btn = styled.button`
  min-width: 150px;

  border: 2px solid ${(props) => props.color};
  border-radius: 5px;

  font-size: 2rem;

  color: ${(props) => props.color};
  background-color: white;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 0 ${(props) => props.color};
  }

  &:focus {
    box-shadow: 0 0 0 1px black;
  }
`;

export default Button;
