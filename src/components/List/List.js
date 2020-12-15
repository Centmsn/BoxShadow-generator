import { connect } from "react-redux";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import ListElement from "./ListElement";
import { addBoxShadow } from "../../actions";

const List = ({ addBoxShadow, list }) => {
  const handleBoxShadowAdd = () => {
    addBoxShadow();
  };

  const renderList = () => {
    const boxShadowList = Object.entries(list);
    const keys = Object.keys(list);
    const code = [];
    boxShadowList
      .flatMap((el) => el[1])
      .forEach((el) =>
        code.push(
          `${el.inset ? "inset" : null}, ${el.x}, ${el.y}, ${el.s}, ${el.b}, ${
            el.c
          }`
        )
      );

    return code.map((el, index) => (
      <ListElement
        code={code[index]}
        id={parseInt(keys[index])}
        list={code}
        listNum={index}
      />
    ));
  };

  return (
    <Wrapper>
      <AddBtn onClick={handleBoxShadowAdd}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </AddBtn>

      {renderList()}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 6/1/13/2;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;

  font-family: ${({ theme }) => theme.font};

  overflow-y: auto;
  overflow-x: hidden;
`;

const AddBtn = styled.button`
  width: 100%;
  height: 28px;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;

  background-color: ${({ theme }) => theme.darkBlue};
  color: white;

  font-size: 1.4rem;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.lightBlue};
  }
`;

const mapStateToProps = (state) => {
  return {
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, { addBoxShadow })(List);
