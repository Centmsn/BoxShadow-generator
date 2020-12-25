import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRef, useState } from "react";

import { removeBoxShadow, changeActiveId } from "../../actions";

const ListElement = ({
  list,
  listNum,
  id,
  color,
  activeId,
  removeBoxShadow,
  changeActiveId,
}) => {
  const [listError, setListError] = useState("");
  const listItem = useRef(null);

  const handleRemoveListItem = () => {
    const keys = Object.keys(list).map((key) => +key);

    if (keys.length - 1 === 0) {
      setListError("You can't remove last element");

      if (!listError)
        setTimeout(() => {
          setListError("");
        }, 3500);
      return;
    }
    if (activeId === keys[0] && id === keys[0]) {
      changeActiveId(parseInt(keys[1]));
    } else if (activeId === id) {
      changeActiveId(parseInt(keys[0]));
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
        <FontAwesomeIcon icon={faMinusSquare} onClick={handleRemoveListItem} />
      </span>

      {error}
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color,
  },
}))`
  position: relative;
  width: 95%;
  margin: 0 auto 15px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  box-shadow: 0 0 0 2px white,
    0 0 0 4px
      ${(props) =>
        props.active ? props.theme.darkBlue : props.theme.lightBlue},
    0 0 0 6px
      ${(props) => (props.active ? props.theme.darkBlue : "transparent")};

  font-size: 2rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;

  padding: 0 5px;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${(props) => props.theme.darkBlue},
      0 0 0 6px
        ${(props) =>
          props.active ? props.theme.darkBlue : props.theme.lightBlue};
  }

  span {
    line-height: 2rem;
    color: ${({ theme }) => theme.lightBlue};

    &::after {
      content: "remove shadow";
      position: absolute;
      right: 50%;

      transform: translateX(50%);

      border-radius: 5px;

      font-size: 1.25rem;
      -webkit-text-stroke-width: 0px;

      color: white;
      background-color: ${({ theme }) => theme.lightBlue};

      opacity: 0;
      display: none;
      padding: 0 5px;
      transition: 200ms;
    }

    &:hover {
      color: ${({ theme }) => theme.darkBlue};
      &::after {
        opacity: 1;
        display: inline;
      }
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
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, { removeBoxShadow, changeActiveId })(
  ListElement
);
