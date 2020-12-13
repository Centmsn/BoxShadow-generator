import styled from "styled-components";

const DisplayResult = ({ r, g, b }) => {
  return <ExampleBox r={r} g={g} b={b}></ExampleBox>;
};

const ExampleBox = styled.div`
  width: 200px;
  height: 200px;

  background-color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
`;

export default DisplayResult;
