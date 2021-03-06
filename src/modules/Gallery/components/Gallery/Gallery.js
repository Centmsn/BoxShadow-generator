import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "../../../Shared/Container";
import GalleryCard from "../Card/GalleryCard";
import { PRESETS } from "consts";

const Gallery = ({ visibility, setVisibility }) => {
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < PRESETS.length; i++) {
      const preset = JSON.parse(JSON.stringify(PRESETS[i]));
      cards.push(
        <GalleryCard preset={preset} setVisibility={setVisibility} key={i} />
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
  display: flex;
  align-items: center;

  color: white;
  cursor: pointer;
  transition: 300ms;

  &::before {
    content: "Presets";
    position: absolute;

    left: 5px;
    top: 5px;

    font-size: 2rem;

    color: ${({ theme }) => theme.colors.lightGray};
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};

    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default Gallery;
