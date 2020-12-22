import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "../Container";

const Info = ({ visibility, setVisibility }) => {
  return (
    <>
      <Nav active={visibility}>
        <FontAwesomeIcon icon={faInfoCircle} onClick={setVisibility} />
      </Nav>

      <Container visible={visibility}>
        <Section>
          <h1>Suggestions</h1>
          <p>
            If You want to see new feature, develope existing one, or just
            improve something feel free to send a message:{" "}
          </p>
          <a
            href="mailto:generator@boxshadowgenerator.online"
            style={{ color: "white", fontSize: "1.25rem" }}
          >
            generator@boxshadowgenerator.online
          </a>
        </Section>

        <Section>
          <h2>Still in development</h2>
          <p>
            Please kindly note that this tool is still in development and some
            features might not work properly or be unavailable.
          </p>
        </Section>

        <Section>
          <p style={{ color: "gray" }}>
            &copy;2020 Wojciech Rygorowicz All Rights Reserved
          </p>
        </Section>
      </Container>
    </>
  );
};

const Nav = styled.div.attrs((props) => ({
  style: {
    color: props.active ? props.theme.lightBlue : null,
  },
}))`
  margin-left: 15px;
  color: white;

  cursor: pointer;

  &::before {
    content: "Informations";
    position: absolute;

    left: 5px;
    top: 5px;

    font-family: ${({ theme }) => theme.font};
    font-size: 2rem;

    color: ${({ theme }) => theme.lightGray};
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    margin-left: 15px;
    color: ${({ theme }) => theme.lightBlue};

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Section = styled.section`
  flex-basis: 100%;

  text-align: center;
`;

export default Info;
