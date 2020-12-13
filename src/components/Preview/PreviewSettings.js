import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "./Container";

const PreviewSettings = ({ visibility, setVisibility }) => {
  return (
    <>
      <Nav active={visibility}>
        <FontAwesomeIcon icon={faCog} onClick={setVisibility} />
      </Nav>

      <Container visible={visibility}>
        <Section>
          <h2>Central box color</h2>

          <label>
            R
            <ColorInput />
          </label>

          <label>
            G
            <ColorInput />
          </label>

          <label>
            B
            <ColorInput />
          </label>
        </Section>

        <Section>
          <h2>Background color</h2>

          <label>
            R
            <ColorInput />
          </label>

          <label>
            G
            <ColorInput />
          </label>

          <label>
            B
            <ColorInput />
          </label>
        </Section>
      </Container>
    </>
  );
};

const Nav = styled.div.attrs((props) => ({
  style: {
    color: props.active ? props.theme.darkBlue : null,
  },
}))`
  color: ${({ theme }) => theme.lightBlue};

  cursor: pointer;
  transition: 300ms;

  &:hover {
    color: ${({ theme }) => theme.darkBlue};
  }
`;

const ColorInput = styled.input`
  width: 35px;
  margin-left: 5px;

  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid ${({ theme }) => theme.lightBlue};
  outline: none;

  font-family: ${({ theme }) => theme.font};
  font-size: 1.1rem;
  color: white;
`;

const Section = styled.section`
  flex-basis: 100%;

  label {
    color: ${({ theme }) => theme.lightGray};
  }
`;

export default PreviewSettings;
