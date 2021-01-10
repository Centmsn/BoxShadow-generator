import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Checkbox = ({ description = "", onClick, initialValue = false }) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    setIsChecked(initialValue);
  }, [initialValue]);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);

    // pass current state to callback
    onClick(!isChecked);
  };

  const status = <FontAwesomeIcon icon={isChecked ? faCheck : faTimes} />;

  return (
    <Wrapper onClick={toggleCheckbox}>
      <Info>{description.toUpperCase()}</Info>
      <Box isChecked={isChecked}>{status}</Box>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  initialValue: PropTypes.bool,
};

const Wrapper = styled.div`
  flex-basis: 20%;

  display: flex;
  justify-content: right;
`;

const Box = styled.div`
  height: 25px;
  width: 25px;

  margin-left: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;

  color: ${({ theme }) => theme.darkBlue};
  background-color: ${({ isChecked }) =>
    isChecked ? "rgb(255, 207, 77)" : "none"};

  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

const Info = styled.p`
  line-height: 25px;
  user-select: none;
`;

export default Checkbox;
