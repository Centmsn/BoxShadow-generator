import { connect, useEffect } from "react-redux";
import styled from "styled-components";

import { generateCode } from "../helpers";

const CodeOutput = ({ list }) => {
  return <Wrapper>box-shadow: {generateCode(list)}</Wrapper>;
};

const Wrapper = styled.div`
  grid-area: 11/2/13/3;

  border: ${({ theme }) => theme.border};
  border-radius: 5px;

  font-family: ${({ theme }) => theme.font};
  font-size: 1.25rem;

  background-color: ${({ theme }) => theme.darkBlue};
  color: white;

  overflow-x: hidden;
  overflow-y: auto;
`;

const mapStateToProps = (state) => {
  return {
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, null)(CodeOutput);
