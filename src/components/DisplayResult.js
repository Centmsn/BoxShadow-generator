import styled from "styled-components";

const DisplayResult = ({ r, g, b, list }) => {
  return <ExampleBox r={r} g={g} b={b} code={list}></ExampleBox>;
};

const ExampleBox = styled.div.attrs((props) => ({
  style: {
    boxShadow: props.code,
  },
}))`
  width: 200px;
  height: 200px;

  background-color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
`;

export default DisplayResult;
