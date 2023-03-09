import React from "react";
import { StyledSection } from "./Graphics.Styled";
import Container from "../../components/Container/Container";
import Graphic from "../../components/Graphic/Grpahic";

const Graphics = () => {
  return (
    <Container>
      <StyledSection>
        <Graphic/>
        <Graphic/>
      </StyledSection>
    </Container>
  );
};

export default Graphics;
