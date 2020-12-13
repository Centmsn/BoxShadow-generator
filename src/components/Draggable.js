import styled from "styled-components";

const Draggable = ({ setPosition, position, text }) => {
  const startDrag = () => {
    document.addEventListener("mousemove", setPosition);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", setPosition);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <DraggableEl onMouseDown={startDrag} position={position}>
      <p>{text}</p>
    </DraggableEl>
  );
};

const DraggableEl = styled.div.attrs((props) => ({
  style: {
    left: props.position,
  },
}))`
  position: absolute;
  height: 140%;
  width: 30px;
  transform: translateY(-15%);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.lightBlue};
  border: 1px solid ${({ theme }) => theme.darkBlue};
  border-radius: 5px;

  cursor: pointer;

  p {
    font-family: ${({ theme }) => theme.font};
    color: white;

    user-select: none;
  }
`;

export default Draggable;
