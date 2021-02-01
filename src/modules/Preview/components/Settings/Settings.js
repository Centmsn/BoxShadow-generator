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
  const [inputErrors, setInputErrors] = useState({});
  const [resetError, setResetError] = useState("");

  // redux state
  const { radius, bg: background, example } = useSelector(
    (state) => state.preview
  );
  const { setBgCol, setBoxCol, setBoxRadius } = useActions();

  const exampleInputs = [
    { label: "r", name: "box", value: example.r },
    { label: "g", name: "box", value: example.g },
    { label: "b", name: "box", value: example.b },
  ];

  const backgroundInputs = [
    { label: "r", name: "bg", value: background.r },
    { label: "g", name: "bg", value: background.g },
    { label: "b", name: "bg", value: background.b },
  ];

  /**
   * Handles color change for background and output box
   * @param {Event} e - event object
   * @param {number} index - elementy index
   * @param {"r" | "g" | "b"} prop - color symbol
   * @param {string} type - identifies which element should be changed
   * @returns {undefined}
   */
  const handleBoxColorChange = (e, index, prop, type) => {
    const { error, value } = validateNumberInput(0, 255, e.target.value);

    if (error && !Object.keys(inputErrors).length) {
      setInputErrors({ name: type, index, error });

      setTimeout(() => {
        setInputErrors({});
      }, 3500);
    }

    if (type === "bg") setBgCol(prop, value);
    else setBoxCol(prop, value);
  };

  const handleSettingsReset = () => {
    if (
      background.r === 255 &&
      background.g === 255 &&
      background.b === 255 &&
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

    setBgCol();
    setBoxCol();
    setBoxRadius(0);
  };

  const handleRadiusChange = (e) => {
    const { error, value } = validateNumberInput(0, 100, e.target.value);

    if (error && !Object.keys(inputErrors).length) {
      setInputErrors({ name: "radius", error });

      setTimeout(() => {
        setInputErrors("");
      }, 5000);
    }
    setBoxRadius(value);
  };

  const renderInputs = (list) => {
    return list.map((el, index) => {
      return (
        <label key={index}>
          {el.label.toUpperCase()}
          <Input
            value={el.value}
            onChange={(e) => handleBoxColorChange(e, index, el.label, el.name)}
            name={el.name}
            error={inputErrors.name === el.name && inputErrors.index === index}
          />
        </label>
      );
    });
  };

  return (
    <>
      <Nav active={visibility}>
        <FontAwesomeIcon icon={faCog} onClick={setVisibility} />
      </Nav>

      <Container visible={visibility}>
        <Section>
          <h2>Central box color</h2>

          {renderInputs(exampleInputs)}

          <Tooltip>{inputErrors.name === "box" && inputErrors.error}</Tooltip>
        </Section>

        <Section>
          <h2>Background color</h2>

          {renderInputs(backgroundInputs)}

          <Tooltip>{inputErrors.name === "bg" && inputErrors.error}</Tooltip>
        </Section>

        <Section>
          <h2>Border radius</h2>

          <label>
            Radius
            <Input
              value={radius}
              onChange={handleRadiusChange}
              error={inputErrors.name === "radius"}
            />
            %
          </label>

          <Tooltip>
            {inputErrors.name === "radius" && inputErrors.error}
          </Tooltip>
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
