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

  border: ${({ theme }) => theme.others.border};
  border-radius: 5px;

  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.darkBlueTransparent};
  color: white;

  transition: 300ms;
  overflow-y: auto;
`;

export default Container;
