import { useState } from "react";
import styled from "styled-components";

const Draggable = () => {
  const [position, setPosition] = useState(0);

  const startDrag = () => {
    document.addEventListener("mousemove", dragElement);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", dragElement);
    document.removeEventListener("mouseup", stopDrag);
  };

  const dragElement = (e) => {
    setPosition(e.clientX);
  };

  return <DraggableEl onMouseDown={startDrag} left={position} />;
};

const DraggableEl = styled.div.attrs((props) => ({
  left: props.left,
}))`
  position: absolute;
  height: 140%;
  width: 15px;

  transform: translateY(-15%);

  background-color: ${({ theme }) => theme.lightBlue};
  border: 1px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;

  cursor: pointer;
`;

export default Draggable;
