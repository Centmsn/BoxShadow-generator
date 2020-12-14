import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useRef } from "react";

import { removeBoxShadow, changeActiveId } from "../../actions";

const ListElement = ({
  code,
  list,
  id,
  activeId,
  removeBoxShadow,
  changeActiveId,
}) => {
  const listItem = useRef(null);

  const handleRemoveListItem = () => {
    if (list.length - 1 === 0) {
      return;
    }

    if (activeId >= id) {
      changeActiveId(activeId - 1);
    }
    removeBoxShadow(id);
  };

  const handleActiveIdChange = (e, id) => {
    if (e.target !== listItem.current) {
      return;
    }
    changeActiveId(id);
  };

  return (
    <Wrapper
      onClick={(e) => handleActiveIdChange(e, id)}
      ref={listItem}
      active={id === activeId}
    >
      {id + 1}
      <span>
        <FontAwesomeIcon icon={faWindowClose} onClick={handleRemoveListItem} />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

  padding: 0 5px;

  transition: 200ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${({ theme }) => theme.darkBlue};
  }

  span {
    color: ${({ theme }) => theme.lightBlue};

    &:hover {
      color: ${({ theme }) => theme.darkBlue};
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
  };
};

export default connect(mapStateToProps, { removeBoxShadow, changeActiveId })(
  ListElement
);
