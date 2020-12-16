import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "./Container";
import GalleryCard from "./GalleryCard";

const presets = [
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "inset 0px 0px 0px 4px rgba(0, 0, 0, 1),inset 0px 0px 0px 8px rgba(75, 75, 75, 1),inset 0px 0px 0px 12px rgba(125, 125, 125, 1),inset 0px 0px 0px 16px rgba(175, 175, 175, 1),inset 0px 0px 0px 20px rgba(225, 225, 225, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
  "6px 6px 0px 0px rgba(0, 75, 180, 1), 12px 12px 0px 0px rgba(50, 75, 200, 1), 18px 18px 0px 0px rgba(50, 100, 200, 1), 24px 24px 0px 0px rgba(125, 125, 200, 1), 30px 30px 0px 0px rgba(150, 150, 200, 1)",
];

const Gallery = ({ visibility, setVisibility }) => {
  const renderCards = () =>
    presets.map((preset) => <GalleryCard preset={preset} />);
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
