import {FC} from "react";

import Container from "../../components/Container/Container";
import Graphic from "../../components/Graphic/Grpahic";

import { StyledSection } from "./Graphics.Styled";

type GraphicsProps = {
  rightAnswers: number
};

const Graphics: FC<GraphicsProps> = ({rightAnswers}) => {
  return (
    <Container>
      <StyledSection>
          <Graphic rightAnswers={rightAnswers}/>
          <Graphic rightAnswers={rightAnswers}/>
      </StyledSection>
    </Container>
  );
};

export default Graphics;
