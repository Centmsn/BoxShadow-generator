import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "./Container";

const Gallery = ({ visibility, setVisibility }) => {
  return (
    <>
      <Nav active={visibility}>
        <FontAwesomeIcon icon={faImage} onClick={setVisibility} />
      </Nav>

      <Container visible={visibility}></Container>
    </>
  );
};

const Nav = styled.div.attrs((props) => ({
  style: { color: props.active ? props.theme.darkBlue : null },
}))`
  margin-right: 15px;

  color: ${({ theme }) => theme.lightBlue};
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export default Gallery;
