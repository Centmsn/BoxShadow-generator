import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faInfoCircle} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 15px;
  color: ${({ theme }) => theme.lightBlue};

  cursor: pointer;

  &:hover {
    margin-left: 15px;
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export default Info;
