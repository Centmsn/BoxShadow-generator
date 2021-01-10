import PropTypes from "prop-types";
import styled from "styled-components";

const ColorInput = ({ description = "", onChange, value }) => {
  return (
    <Wrapper>
      <p>{description.toUpperCase()}</p>
      <Input
        type="color"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </Wrapper>
  );
};

ColorInput.propTypes = {
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
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

  border: none;
  border-radius: 5px;
  outline: none;

  background: none;
  padding: 0 2px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.darkBlue};
  }
`;

export default ColorInput;
