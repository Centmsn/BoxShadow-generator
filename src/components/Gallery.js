import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faImage} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 50%;
`;

export default Gallery;
