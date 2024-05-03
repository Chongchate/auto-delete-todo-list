import React from "react";
import styled from "styled-components";
import { IButton } from "../types";
import Button from "./Button";

interface Props {
  buttons: IButton[];
  onButtonClicked: (name: string, type: string, index: number) => void;
}

const StyledContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  flex: 1 1 0;
  height: 100%;
`;

const ButtonList = ({ buttons, onButtonClicked }: Props) => {
  return (
    <StyledContainer>
      {buttons.map((button, index) => (
        <Button
          key={index + button.name}
          name={button.name}
          type={button.type}
          onClick={onButtonClicked}
          index={index}
        />
      ))}
    </StyledContainer>
  );
};

export default ButtonList;
