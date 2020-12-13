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

      <ListElement />
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
  z-index: 999;
  position: absolute;
  width: 28px;
  height: 28px;

  top: -10px;
  right: -10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  outline: none;

  background-color: ${({ theme }) => theme.darkBlue};
  color: white;

  font-size: 1.4rem;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.lightBlue};
  }
`;

export default List;
