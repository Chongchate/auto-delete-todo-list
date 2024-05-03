import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  type: string;
  index?: number;
  onClick: (name: string, type: string, index?: number) => void;
}

const StyledButton = styled.button`
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 3px;
`;

const Button = ({ index, name, type, onClick }: Props) => {
  return (
    <StyledButton onClick={() => onClick(name, type, index)}>
      {name}
    </StyledButton>
  );
};

export default Button;
