import styled from "styled-components";

const DisplayResult = ({ r, g, b, radius, code }) => {
  return <ExampleBox r={r} g={g} b={b} code={code} radius={radius} />;
};

const ExampleBox = styled.div.attrs((props) => ({
  style: {
    boxShadow: props.code,
  },
}))`
  width: 200px;
  height: 200px;

  background-color: ${({ r, g, b }) => `rgb(${r}, ${g}, ${b})`};
  border-radius: ${({ radius }) => radius}%;
`;

export default DisplayResult;
