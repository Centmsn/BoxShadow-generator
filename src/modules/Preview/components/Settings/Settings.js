import { useSelector } from "react-redux";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useState } from "react";

import Container from "modules/Shared/Container";
import { validateNumberInput } from "helpers";
import { useActions } from "hooks/useActions";

const Settings = ({ visibility, setVisibility }) => {
  // local state
  const [colorError, setColorError] = useState({});
  const [resetError, setResetError] = useState("");

  // redux state
  const radius = useSelector((state) => state.preview.radius);
  const bg = useSelector((state) => state.preview.bg);
  const example = useSelector((state) => state.preview.example);
  const { setBgCol, setBoxCol, setBoxRadius } = useActions();

  const handleBoxColorChange = (e, index, type) => {
    // 1 - R
    // 2 - G
    // 3 - B
    const { error, value } = validateNumberInput(0, 255, e.target.value);

    if (error && !Object.keys(colorError).length) {
      setColorError({ type, index, error });

      setTimeout(() => {
        setColorError({});
      }, 3500);
    }

    if (type === "box") {
      const { r, g, b } = example;

      switch (index) {
        case 1:
          setBoxCol(value, g, b);
          break;

        case 2:
          setBoxCol(r, value, b);
          break;

        case 3:
          setBoxCol(r, g, value);
          break;

        default:
          throw new Error("Index does not exist");
      }
    } else {
      const { r, g, b } = bg;

      switch (index) {
        case 1:
          setBgCol(value, g, b);
          break;

        case 2:
          setBgCol(r, value, b);
          break;

        case 3:
          setBgCol(r, g, value);
          break;

        default:
          throw new Error("Index does not exist");
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
      radius === 0 &&
      !resetError
    ) {
      setResetError("Already using default values");

      setTimeout(() => {
        setResetError("");
      }, 5000);
    }

    setBgCol(255, 255, 255);
    setBoxCol(175, 193, 222);
    setBoxRadius(0);
  };

  const handleRadiusChange = (e) => {
    // TODO: add error handling
    const { error, value } = validateNumberInput(0, 100, e.target.value);
    setBoxRadius(value);
  };

  // TODO refactor required
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
            <Input
              value={example.r}
              onChange={(e) => handleBoxColorChange(e, 1, "box")}
              type="number"
              error={colorError.type === "box" && colorError.index === 1}
            />
          </label>

          <label>
            G
            <Input
              value={example.g}
              onChange={(e) => handleBoxColorChange(e, 2, "box")}
              type="number"
              error={colorError.type === "box" && colorError.index === 2}
            />
          </label>

          <label>
            B
            <Input
              value={example.b}
              onChange={(e) => handleBoxColorChange(e, 3, "box")}
              type="number"
              error={colorError.type === "box" && colorError.index === 3}
            />
          </label>
          <Tooltip>{colorError.type === "box" && colorError.error}</Tooltip>
        </Section>

        <Section>
          <h2>Background color</h2>

          <label>
            R
            <Input
              value={bg.r}
              onChange={(e) => handleBoxColorChange(e, 1, "bg")}
              type="number"
              error={colorError.type === "bg" && colorError.index === 1}
            />
          </label>

          <label>
            G
            <Input
              value={bg.g}
              onChange={(e) => handleBoxColorChange(e, 2, "bg")}
              type="number"
              error={colorError.type === "bg" && colorError.index === 2}
            />
          </label>

          <label>
            B
            <Input
              value={bg.b}
              onChange={(e) => handleBoxColorChange(e, 3, "bg")}
              type="number"
              error={colorError.type === "bg" && colorError.index === 3}
            />
          </label>

          <Tooltip>{colorError.type === "bg" && colorError.error}</Tooltip>
        </Section>

        <Section>
          <h2>Border radius</h2>

          <label>
            Radius
            <Input value={radius} onChange={handleRadiusChange} type="number" />
            %
          </label>
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
    color: props.active ? props.theme.lightBlue : null,
  },
}))`
  display: flex;
  align-items: center;
  color: white;

  cursor: pointer;
  transition: 300ms;

  &::before {
    content: "Options";
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

const Input = styled.input`
  width: 30px;
  margin-left: 5px;

  border-bottom: 2px solid
    ${({ theme, error }) => (error ? "red" : theme.colors.lightBlue)};

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
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const ResetBtn = styled.button`
  font-size: 2rem;

  background: none;
  color: white;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const Tooltip = styled.p`
  flex-basis: 100%;
  height: 1rem;

  text-align: center;

  color: ${({ theme }) => theme.colors.lightGray};
`;

export default Settings;
