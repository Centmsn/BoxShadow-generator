import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { removeBoxShadow } from "../../actions";

const ListElement = ({ code, list, id, removeBoxShadow }) => {
  const handleRemoveListItem = () => {
    if (list.length - 1 === 0) {
      return;
    }
    removeBoxShadow(id);
  };

  return (
    <Wrapper>
      {id + 1}
      <span>
        <FontAwesomeIcon icon={faWindowClose} onClick={handleRemoveListItem} />
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  border-radius: 5px;

  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.lightBlue};

    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.darkBlue};
    }
  }
`;

export default connect(null, { removeBoxShadow })(ListElement);
