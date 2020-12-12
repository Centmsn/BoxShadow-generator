import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "./Container";

const PreviewSettings = ({ visiblity, setVisibility }) => {
  return (
    <>
      <Nav active={visiblity}>
        <FontAwesomeIcon icon={faCog} onClick={setVisibility} />
      </Nav>

      <Container visible={visiblity}></Container>
    </>
  );
};

const Nav = styled.div.attrs((props) => ({
  style: {
    color: props.active ? props.theme.darkBlue : props.theme.lightBlue,
  },
}))`
  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export default PreviewSettings;
