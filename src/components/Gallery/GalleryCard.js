import _ from "lodash";
import { connect } from "react-redux";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useState } from "react";

import { setList, changeActiveId } from "../../actions";
import Button from "../Shared/Button";
import { generateCode } from "../../helpers";
import Modal from "../Shared/Modal";

const GalleryCard = ({ preset, setList, setVisibility, changeActiveId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePresetDisplay = () => {
    setList(_.omit(preset, "position"));
    changeActiveId(0);
    setIsModalVisible(false);
    setVisibility(false);
  };

  return (
    <>
      <Card onClick={() => setIsModalVisible(true)}>
        <PresetDisplay
          preset={generateCode(_.omit(preset, "position"))}
          position={preset.position}
        />
      </Card>

      <Modal isVisible={isModalVisible}>
        <ModalIcon>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </ModalIcon>

        <ModalDesc>
          Selecting this preset will overwrite your current settings.
        </ModalDesc>
        <ModalDesc>Do You want to continue?</ModalDesc>

        <Button
          text={"Confirm"}
          onClick={handlePresetDisplay}
          color={`rgb(0, 130, 0)`}
        />
        <Button
          text={"Cancel"}
          onClick={() => setIsModalVisible(false)}
          color={`rgb(150, 0, 0)`}
        />
      </Modal>
    </>
  );
};

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.lightBlue};
  background-color: whitesmoke;

  cursor: pointer;

  &::before {
    content: "Choose preset";
    z-index: 999;
    position: absolute;

    top: -10%;

    border-radius: 5px;

    text-align: center;
    font-size: 1.25rem;

    color: ${({ theme }) => theme.colors.darkBlue};
    background-color: ${({ theme }) => theme.colors.lightBlue};

    opacity: 0;
    visibility: hidden;
    transition: 300ms;
    overflow: hidden;
    padding: 0 5px;
  }

  &:hover {
    &::before {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const PresetDisplay = styled.div`
  width: 100px;
  height: 100px;

  transform: ${(props) =>
    props.position === "center" ? "translate(0)" : "translate(-25%, -25%)"};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  box-shadow: ${(props) => props.preset};
`;

const ModalDesc = styled.p`
  flex-basis: 70%;
`;

const ModalIcon = styled.div`
  flex-basis: 30%;

  font-size: 4rem;
`;

export default connect(null, { setList, changeActiveId })(GalleryCard);
