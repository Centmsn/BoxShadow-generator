import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Checkbox = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const status = isChecked && (
    <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
  );

  return (
    <Wrapper>
      <Info>{text.toUpperCase()}</Info>
      <Box onClick={toggleCheckbox} isChecked={isChecked}>
        {status}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  background-color: ${(props) =>
    props.isChecked ? props.theme.lightBlue : "none"};

  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

const Info = styled.p`
  line-height: 25px;
  user-select: none;
`;

export default Checkbox;
