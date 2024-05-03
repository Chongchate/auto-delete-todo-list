import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em 2em;
  min-height: 100vh;
  gap: 10px;
`;

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
