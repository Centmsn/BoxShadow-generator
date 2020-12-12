import styled from "styled-components";

const Draggable = ({ func, position }) => {
  const startDrag = () => {
    document.addEventListener("mousemove", func);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", func);
    document.removeEventListener("mouseup", stopDrag);
  };

  return <DraggableEl onMouseDown={startDrag} position={position} />;
};

const DraggableEl = styled.div.attrs((props) => ({
  style: {
    left: props.position,
  },
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
