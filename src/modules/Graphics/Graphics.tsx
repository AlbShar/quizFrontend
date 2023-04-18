import React from "react";

import Container from "../../components/Container/Container";
import Graphic from "../../components/Graphic/Grpahic";

import { StyledSection } from "./Graphics.Styled";

const Graphics = () => {
  return (
    <Container>
      <StyledSection>
          <Graphic />
          <Graphic />
      </StyledSection>
    </Container>
  );
};

export default Graphics;
