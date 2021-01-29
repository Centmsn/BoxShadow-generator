import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRef, useState } from "react";

import { useActions } from "hooks/useActions";

//TODO add default props, disconnect from redux
const ListElement = ({ list, listNum, id, color, activeId }) => {
  const [listError, setListError] = useState("");
  const listItem = useRef(null);
  const { removeBoxShadow, changeActiveId } = useActions;

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

const Wrapper = styled.div.attrs(({ color }) => ({
  style: {
    backgroundColor: color,
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
      ${({ theme, active }) =>
        active ? theme.colors.darkBlue : theme.colors.lightBlue},
    0 0 0 6px
      ${({ theme, active }) => (active ? theme.colors.darkBlue : "transparent")};

  font-size: 2rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;

  padding: 0 5px;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px white,
      0 0 0 4px ${({ theme }) => theme.colors.darkBlue},
      0 0 0 6px
        ${({ theme, active }) =>
          active ? theme.colors.darkBlue : theme.colors.lightBlue};
  }

  span {
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.lightBlue};

    &::after {
      content: "remove shadow";
      position: absolute;
      right: 50%;

      transform: translateX(50%);

      border-radius: 5px;

      font-size: 1.25rem;
      -webkit-text-stroke-width: 0px;

      color: white;
      background-color: ${({ theme }) => theme.colors.lightBlue};

      opacity: 0;
      display: none;
      padding: 0 5px;
      transition: 200ms;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.darkBlue};
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

  color: ${({ theme }) => theme.colors.lightGray};
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, {})(ListElement);
