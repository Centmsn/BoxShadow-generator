import styled from "styled-components";

const CodeOutput = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  grid-area: 11/2/13/3;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;
`;

export default CodeOutput;
