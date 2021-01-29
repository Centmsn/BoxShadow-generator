import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";

import VisualOutput from "modules/Preview/components/VisualOutput";
import Gallery from "modules/Gallery/components/Gallery";
import { generateCode } from "helpers";
import Info from "modules/Preview/components/Info";
import Settings from "modules/Preview/components/Settings";

const Preview = ({ bg, example, radius, list }) => {
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const [galleryVisibility, setGalleryVisibility] = useState(false);
  const [infoVisibility, setInfoVisibility] = useState(false);

  const toggleVisibility = (id) => {
    // 0 - gallery is visible
    // 1 - settings are visible
    // 2 - info is visible

    if (id === 0) {
      setSettingsVisibility(false);
      setInfoVisibility(false);
      galleryVisibility
        ? setGalleryVisibility(false)
        : setGalleryVisibility(true);
    } else if (id === 1) {
      setGalleryVisibility(false);
      setInfoVisibility(false);
      settingsVisibility
        ? setSettingsVisibility(false)
        : setSettingsVisibility(true);
    } else {
      setSettingsVisibility(false);
      setGalleryVisibility(false);
      infoVisibility ? setInfoVisibility(false) : setInfoVisibility(true);
    }
  };

  return (
    <Wrapper r={bg.r} g={bg.g} b={bg.b}>
      <OptionBar>
        <Gallery
          visibility={galleryVisibility}
          setVisibility={() => toggleVisibility(0)}
        />
        <Settings
          visibility={settingsVisibility}
          setVisibility={() => toggleVisibility(1)}
        />
        <Info
          visibility={infoVisibility}
          setVisibility={() => toggleVisibility(2)}
        />
      </OptionBar>
      <VisualOutput
        r={example.r}
        g={example.g}
        b={example.b}
        radius={radius}
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
  height: 60px;

  display: flex;
  justify-content: flex-end;

  border-bottom: ${({ theme }) => theme.others.border};
  border-radius: 5px;
  font-size: 3rem;

  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding-right: 10px;
`;

const mapStateToProps = (state) => {
  const { bg, example, radius } = state.preview;

  return {
    list: state.boxShadowList,
    bg,
    example,
    radius,
  };
};

export default connect(mapStateToProps, null)(Preview);
