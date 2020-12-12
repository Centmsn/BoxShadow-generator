import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const PreviewSettings = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faCog} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex-basis: 100%;

  display: flex;
  justify-content: space-around;
`;

export default PreviewSettings;
