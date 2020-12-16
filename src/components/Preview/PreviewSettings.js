import { connect } from "react-redux";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useState } from "react";

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
  const [colorError, setColorError] = useState({});
  const [resetError, setResetError] = useState("");

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
      if (Object.entries(colorError).length === 0) {
        setColorError({ type, index });

        setTimeout(() => {
          setColorError({});
        }, 3500);
      }
    } else if (val.match(/^0{2,}/)) {
      val = val.slice(0, 1);
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
    if (
      bg.r === 255 &&
      bg.g === 255 &&
      bg.b === 255 &&
      example.r === 175 &&
      example.g === 193 &&
      example.b === 222 &&
      !resetError
    ) {
      setResetError("Already using default values");

      setTimeout(() => {
        setResetError("");
      }, 5000);
    }

    setBgCol(255, 255, 255);
    setBoxCol(175, 193, 222);
  };

  const boxTooltip = colorError.type === "box" ? "Range is 0-255" : null;
  const bgTooltip = colorError.type === "bg" ? "Range is 0-255" : null;

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
              type="number"
              error={
                colorError.type === "box" && colorError.index === 1
                  ? true
                  : false
              }
            />
          </label>

          <label>
            G
            <ColorInput
              value={example.g}
              onChange={(e) => handleBoxColorChange(e, 2, "box")}
              type="number"
              error={
                colorError.type === "box" && colorError.index === 2
                  ? true
                  : false
              }
            />
          </label>

          <label>
            B
            <ColorInput
              value={example.b}
              onChange={(e) => handleBoxColorChange(e, 3, "box")}
              type="number"
              error={
                colorError.type === "box" && colorError.index === 3
                  ? true
                  : false
              }
            />
          </label>
          <Tooltip>{boxTooltip}</Tooltip>
        </Section>

        <Section>
          <h2>Background color</h2>

          <label>
            R
            <ColorInput
              value={bg.r}
              onChange={(e) => handleBoxColorChange(e, 1, "bg")}
              type="number"
              error={
                colorError.type === "bg" && colorError.index === 1
                  ? true
                  : false
              }
            />
          </label>

          <label>
            G
            <ColorInput
              value={bg.g}
              onChange={(e) => handleBoxColorChange(e, 2, "bg")}
              type="number"
              error={
                colorError.type === "bg" && colorError.index === 2
                  ? true
                  : false
              }
            />
          </label>

          <label>
            B
            <ColorInput
              value={bg.b}
              onChange={(e) => handleBoxColorChange(e, 3, "bg")}
              type="number"
              error={
                colorError.type === "bg" && colorError.index === 3
                  ? true
                  : false
              }
            />
          </label>
          <Tooltip>{bgTooltip}</Tooltip>
        </Section>

        <Section>
          <h2>Reset settings</h2>
          <ResetBtn onClick={handleSettingsReset}>
            <FontAwesomeIcon icon={faEraser} />
          </ResetBtn>
          <Tooltip>{resetError}</Tooltip>
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
  border-bottom: 2px solid
    ${(props) => (props.error ? "red" : props.theme.lightBlue)};
  outline: none;

  font-family: ${({ theme }) => theme.font};
  font-size: 1.1rem;
  color: white;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Section = styled.section`
  flex-basis: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h2 {
    flex-basis: 100%;

    text-align: center;
  }

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

const Tooltip = styled.p`
  flex-basis: 100%;
  height: 1rem;

  text-align: center;

  color: ${({ theme }) => theme.lightGray};
`;

const mapStateToProps = (state) => {
  const { bg, example } = state.preview;

  return { bg, example };
};

export default connect(mapStateToProps, { setBoxCol, setBgCol })(
  PreviewSettings
);
