import styled from "styled-components";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ListElement from "./ListElement";

const List = () => {
  return (
    <Wrapper>
      <AddBtn>
        <FontAwesomeIcon icon={faPlusSquare} />
      </AddBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 6/1/13/2;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;
`;

const AddBtn = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;

  top: -15px;
  right: -15px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  outline: none;

  background-color: ${({ theme }) => theme.darkBlue};
  color: white;

  font-size: 1.75rem;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.lightBlue};
  }
`;

export default List;
