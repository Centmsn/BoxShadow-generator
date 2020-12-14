import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRef, useState } from "react";

import { removeBoxShadow, changeActiveId } from "../../actions";

const ListElement = ({
  code,
  list,
  listNum,
  id,
  activeId,
  removeBoxShadow,
  changeActiveId,
}) => {
  const [listError, setListError] = useState("");
  const listItem = useRef(null);

  const handleRemoveListItem = () => {
    if (list.length - 1 === 0) {
      setListError("You can't remove last element");

      if (!listError)
        setTimeout(() => {
          setListError("");
        }, 3500);
      return;
    }

    if (activeId >= id) {
      changeActiveId(activeId === 0 ? 0 : activeId - 1);
    }
    removeBoxShadow(id);
  };

  const handleActiveIdChange = (e, id) => {
    if (e.target !== listItem.current) {
      return;
    }
    changeActiveId(id);
  };

  const error = listError && <Error>{listError}</Error>;
  const color = code.slice(code.match(/rgba/).index);

  return (
    <Wrapper
      onClick={(e) => handleActiveIdChange(e, id)}
      ref={listItem}
      active={id === activeId}
      color={color}
      key={id}
    >
      {listNum + 1}
      <span>
        <FontAwesomeIcon icon={faWindowClose} onClick={handleRemoveListItem} />
      </span>

      {error}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto 15px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0 0 0 2px white, 0 0 0 4px ${({ theme }) => theme.lightBlue},
    0 0 0 6px
      ${(props) => (props.active ? props.theme.darkBlue : "transparent")};

  font-size: 2rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;

  background-color: ${(props) => props.color};

  padding: 0 5px;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px white,
      0 0 0 4px
        ${(props) =>
          props.active ? props.theme.lightBlue : props.theme.darkBlue},
      0 0 0 6px
        ${(props) =>
          props.active ? props.theme.darkBlue : props.theme.lightBlue};
  }

  span {
    color: ${({ theme }) => theme.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.darkBlue};
    }
  }
`;

const Error = styled.p`
  position: absolute;

  bottom: -40px;
  left: 0;

  font-size: 1.25rem;
  -webkit-text-stroke-width: 0;

  color: ${({ theme }) => theme.lightGray};
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
  };
};

export default connect(mapStateToProps, { removeBoxShadow, changeActiveId })(
  ListElement
);
