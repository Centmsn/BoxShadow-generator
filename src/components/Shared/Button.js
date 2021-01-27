import styled from "styled-components";

const Button = ({ text, callback, color }) => {
  return (
    <Btn onClick={callback} color={color}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  min-width: 150px;

  border: 2px solid ${(props) => props.color};
  border-radius: 5px;

  font-size: 2rem;

  color: ${(props) => props.color};
  background-color: white;

  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px 0 ${(props) => props.color};
  }

  &:focus {
    box-shadow: 0 0 0 1px black;
  }
`;

export default Button;
