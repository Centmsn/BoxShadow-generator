import { connect } from "react-redux";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useState } from "react";

import { generateCode } from "../../helpers";

const CodeOutput = ({ list }) => {
  const [infoVisibility, setInfoVisibility] = useState(false);
  const code = `box-shadow: ${generateCode(list)}`;

  const handleCopyCode = () => {
    const el = document.createElement("textarea");
    el.value = code;
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px" };
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    if (!infoVisibility) {
      setInfoVisibility(true);
      setTimeout(() => setInfoVisibility(false), 3000);
    }
  };

  return (
    <Wrapper onClick={handleCopyCode}>
      {code};
      <Info isVisible={infoVisibility}>
        <span>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
        Copied successfully
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-area: 11/2/13/3;

  border: ${({ theme }) => theme.others.border};
  border-radius: 5px;

  font-size: 1.25rem;

  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: white;

  overflow-x: hidden;
  overflow-y: auto;

  cursor: pointer;

  &::after {
    content: "click to copy";
    position: absolute;

    right: 0;
    bottom: 0;

    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.lightBlue};

    padding: 0 3px;
    visibility: hidden;
  }

  &:hover&::after {
    visibility: visible;
  }
`;

const Info = styled.div`
  position: absolute;
  z-index: 999;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(-50vh)"};
  transform-origin: bottom;

  font-size: 3rem;

  color: rgb(0, 130, 0);
  background-color: rgba(255, 255, 255, 0.9);

  transition: 300ms;

  span {
    margin-right: 25px;
    font-size: 3.5rem;
  }
`;

const mapStateToProps = (state) => {
  return {
    list: state.boxShadowList,
  };
};

export default connect(mapStateToProps, null)(CodeOutput);
