import styled from "styled-components";
import { IButton } from "../types";
import ButtonList from "./ButtonList";

interface Props {
  title: string;
  buttons: IButton[];
  onButtonClicked: (name: string, type: string) => void;
}

const StyledColumn = styled.div`
  box-sizing: border-box;
  border: 1px solid grey;
  flex: 1 1 0;
`;

const StyledHeader = styled.div`
  padding: 1em;
  background-color: lightblue;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const Column = ({ title, buttons, onButtonClicked }: Props) => {
  return (
    <StyledColumn>
      <StyledHeader>{title}</StyledHeader>
      <ButtonList buttons={buttons} onButtonClicked={onButtonClicked} />
    </StyledColumn>
  );
};

export default Column;
