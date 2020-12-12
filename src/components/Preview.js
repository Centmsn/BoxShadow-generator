import styled from "styled-components";

import Gallery from "./Gallery";
import PreviewSettings from "./PreviewSettings";

const Preview = () => {
  return (
    <Wrapper>
      <OptionBar>
        <Gallery />
        <PreviewSettings />
      </OptionBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: 1/2/11/3;

  display: flex;
  flex-wrap: wrap;

  background-color: purple;
`;

const OptionBar = styled.div`
  flex-basis: 100%;

  display: flex;
`;

export default Preview;
