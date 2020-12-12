import styled from "styled-components";

const Container = ({ visible, children }) => {
  return <Wrapper visible={visible}>{children}</Wrapper>;
};

const Wrapper = styled.div.attrs((props) => ({
  style: {
    transform: props.visible ? "scale(1)" : "scale(0)",
  },
}))`
  position: absolute;
  top: 15%;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;

  font-family: ${({ theme }) => theme.font};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.darkBlueTransparent};
  color: white;

  transition: 300ms;
`;

export default Container;
