import styled from "styled-components";

const DisplayResult = () => {
  return <ExampleBox></ExampleBox>;
};

const ExampleBox = styled.div`
  width: 200px;
  height: 200px;

  background-color: ${({ theme }) => theme.lightBlue};
`;

export default DisplayResult;
