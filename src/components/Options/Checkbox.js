import { connect } from "react-redux";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useState, useEffect } from "react";

import { setInset } from "../../actions";

const Checkbox = ({ text, list, setInset, activeId }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (list[activeId].inset) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [activeId]);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);

    setInset(activeId, !isChecked);
  };

  const status = isChecked && <FontAwesomeIcon icon={faCheck} />;

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

  background-color: ${(props) =>
    props.isChecked ? props.theme.lightBlue : "none"};
  color: ${({ theme }) => theme.darkBlue};

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

const mapStateToprops = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToprops, { setInset })(Checkbox);
