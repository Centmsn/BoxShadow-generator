import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ children, isVisible }) => {
  return createPortal(
    <Wrapper isVisible={isVisible}>
      <InnerContainer>{children}</InnerContainer>
    </Wrapper>,
    document.getElementById("modal")
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  font-size: 1.25rem;
  text-align: center;

  background-color: rgba(0, 32, 84, 0.6);
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

const InnerContainer = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  width: 25%;
  min-width: 400px;
  height: 25%;
  min-height: 250px;
  transform: translate(-50%, -50%);

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px black;

  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export default Modal;
