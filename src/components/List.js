import styled from "styled-components";

const List = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  grid-area: 6/1/13/2;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;
`;

export default List;
