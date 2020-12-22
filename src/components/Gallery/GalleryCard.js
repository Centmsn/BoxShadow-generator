import _ from "lodash";
import { connect } from "react-redux";
import styled from "styled-components";

import { setList, changeActiveId } from "../../actions";
import { generateCode } from "../../helpers";

const GalleryCard = ({ preset, setList, setVisibility, changeActiveId }) => {
  const handlePresetDisplay = () => {
    setList(_.omit(preset, "position"));
    changeActiveId(0);
    setVisibility(false);
  };

  return (
    <Card onClick={handlePresetDisplay}>
      <PresetDisplay
        preset={generateCode(_.omit(preset, "position"))}
        position={preset.position}
      />
    </Card>
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
  box-shadow: 0 0 0 3px ${({ theme }) => theme.lightBlue};
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

    color: ${({ theme }) => theme.darkBlue};
    background-color: ${({ theme }) => theme.lightBlue};

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

  background-color: ${({ theme }) => theme.lightBlue};
  box-shadow: ${(props) => props.preset};
`;

export default connect(null, { setList, changeActiveId })(GalleryCard);
