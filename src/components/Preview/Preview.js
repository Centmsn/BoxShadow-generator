import styled from "styled-components";
import { useState } from "react";

import Gallery from "./Gallery";
import PreviewSettings from "./PreviewSettings";
import DisplayResult from "../DisplayResult";

const Preview = () => {
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const [galleryVisibility, setGalleryVisibility] = useState(false);

  const toggleVisibility = (id) => {
    // 0 - gallery is visible
    // 1 - settings are visible

    if (id === 0) {
      setSettingsVisibility(false);
      galleryVisibility
        ? setGalleryVisibility(false)
        : setGalleryVisibility(true);
    } else {
      setGalleryVisibility(false);
      settingsVisibility
        ? setSettingsVisibility(false)
        : setSettingsVisibility(true);
    }
  };

  return (
    <Wrapper>
      <OptionBar>
        <Gallery
          visibility={galleryVisibility}
          setVisibility={() => toggleVisibility(0)}
        />
        <PreviewSettings
          visibility={settingsVisibility}
          setVisibility={() => toggleVisibility(1)}
        />
      </OptionBar>
      <DisplayResult />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 1/2/11/3;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const OptionBar = styled.div`
  flex-basis: 100%;
  justify-content: flex-end;
  height: 15%;

  font-size: 3rem;
  display: flex;
`;

export default Preview;
