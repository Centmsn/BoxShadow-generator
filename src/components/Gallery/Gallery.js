import _ from "lodash";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "../Container";
import GalleryCard from "./GalleryCard";
import presets from "./presets";
import { generateCode } from "../../helpers";

const Gallery = ({ visibility, setVisibility }) => {
  const renderCards = () => {
    const cards = [];

    for (let i = 0; i < presets.length; i++) {
      const preset = presets[i];

      cards.push(
        <GalleryCard
          preset={generateCode(_.omit(preset, "position"))}
          position={preset.position}
        />
      );
    }

    return cards;
  };

  return (
    <>
      <Nav active={visibility}>
        <FontAwesomeIcon icon={faImage} onClick={setVisibility} />
      </Nav>

      <Container visible={visibility}>{renderCards()}</Container>
    </>
  );
};

const Nav = styled.div.attrs((props) => ({
  style: { color: props.active ? props.theme.lightBlue : null },
}))`
  margin-right: 15px;

  color: white;
  cursor: pointer;
  transition: 300ms;

  &::before {
    content: "Presets";
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
    color: ${({ theme }) => theme.lightBlue};

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Gallery;
