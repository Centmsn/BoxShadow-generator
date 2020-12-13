import { connect } from "react-redux";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Container from "./Container";
import { setBgCol, setBoxCol } from "../../actions";

const PreviewSettings = ({
  visibility,
  setVisibility,
  setBgCol,
  setBoxCol,
  bg,
  example,
}) => {
  const handleBoxColorChange = (e, index, type) => {
    // 1 - R
    // 2 - G
    // 3 - B

    let val = e.target.value;

    // validate input
    if (!val) {
      val = 0;
    } else if (val > 255) {
      val = 255;
    } else if (val.match(/^0{2,}/)) {
      val = 0;
    } else if (val.match(/^0\d/)) {
      val = val.slice(1);
    }

    if (type === "box") {
      const { r, g, b } = example;

      switch (index) {
        case 1:
          setBoxCol(val, g, b);
          break;

        case 2:
          setBoxCol(r, val, b);
          break;

        case 3:
          setBoxCol(r, g, val);
          break;
      }
    } else {
      const { r, g, b } = bg;

      switch (index) {
        case 1:
          setBgCol(val, g, b);
          break;

        case 2:
          setBgCol(r, val, b);
          break;

        case 3:
          setBgCol(r, g, val);
          break;
      }
    }
  };

  const handleSettingsReset = () => {
    setBgCol(255, 255, 255);
    setBoxCol(175, 193, 222);
  };

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
            <ColorInput
              value={example.r}
              onChange={(e) => handleBoxColorChange(e, 1, "box")}
              maxLength={3}
            />
          </label>

          <label>
            G
            <ColorInput
              value={example.g}
              onChange={(e) => handleBoxColorChange(e, 2, "box")}
              maxLength={3}
            />
          </label>

          <label>
            B
            <ColorInput
              value={example.b}
              onChange={(e) => handleBoxColorChange(e, 3, "box")}
              maxLength={3}
            />
          </label>
        </Section>

        <Section>
          <h2>Background color</h2>

          <label>
            R
            <ColorInput
              value={bg.r}
              onChange={(e) => handleBoxColorChange(e, 1, "bg")}
              maxLength={3}
            />
          </label>

          <label>
            G
            <ColorInput
              value={bg.g}
              onChange={(e) => handleBoxColorChange(e, 2, "bg")}
              maxLength={3}
            />
          </label>

          <label>
            B
            <ColorInput
              value={bg.b}
              onChange={(e) => handleBoxColorChange(e, 3, "bg")}
              maxLength={3}
            />
          </label>
        </Section>

        <Section>
          <h2>Reset settings</h2>
          <ResetBtn onClick={handleSettingsReset}>
            <FontAwesomeIcon icon={faEraser} />
          </ResetBtn>
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

const ResetBtn = styled.button`
  border: none;
  outline: none;

  font-size: 2rem;

  background: none;
  color: white;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.lightBlue};
  }
`;

const mapStateToProps = (state) => {
  const { bg, example } = state.preview;

  return { bg, example };
};

export default connect(mapStateToProps, { setBoxCol, setBgCol })(
  PreviewSettings
);
