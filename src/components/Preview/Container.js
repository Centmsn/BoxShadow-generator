import styled from "styled-components";

const Container = ({ visible }) => {
  return <Wrapper visible={visible}></Wrapper>;
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

  background-color: ${({ theme }) => theme.darkBlueTransparent};

  border: ${({ theme }) => theme.border};
  border-radius: 5px;

  transition: 300ms;
`;

export default Container;
