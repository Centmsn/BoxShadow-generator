import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

import DisplayResult from "./DisplayResult";
import Gallery from "./Gallery";
import { generateCode } from "../../helpers";
import Info from "./Info";
import PreviewSettings from "./PreviewSettings";

const Preview = ({ bg, example, list }) => {
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
    <Wrapper r={bg.r} g={bg.g} b={bg.b}>
      <OptionBar>
        <Gallery
          visibility={galleryVisibility}
          setVisibility={() => toggleVisibility(0)}
        />
        <PreviewSettings
          visibility={settingsVisibility}
          setVisibility={() => toggleVisibility(1)}
        />
        <Info />
      </OptionBar>
      <DisplayResult
        r={example.r}
        g={example.g}
        b={example.b}
        code={generateCode(list)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 1/2/11/3;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border-radius: 5px;

  background-color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
`;

const OptionBar = styled.div`
  flex-basis: 100%;
  justify-content: flex-end;
  height: 15%;

  font-size: 3rem;
  display: flex;
`;

const mapStateToProps = (state) => {
  const { bg, example } = state.preview;

  return {
    list: state.boxShadowList,
    bg,
    example,
  };
};

export default connect(mapStateToProps, null)(Preview);
