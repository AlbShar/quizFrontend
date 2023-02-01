import React, { useState } from "react";
import Container from "../../components/Container";
import Answers from "../../modules/Answers/index";
import NameQuestionAndImg from "../../modules/NameQuestionAndImg/index";
import QuantityThemeQuestions from "../../modules/QuantityThemeQuestions/index";
import Timer from "../../modules/Timer/index";
import ScrollBar from "../../modules/ScrollBar/index";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";
import { StyledSection, StyledArticle } from "./Quiz.Styled";
import Context from "../../components/Context";
import ButtonsQuiz from "../../modules/ButtonsQuiz/index";


const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState(1);
  return (
    <StyledMain>
      <Container>
        <GlobalStyles />
        <StyledSection id="quiz">
          <Context value={[currentQuestionNumb, setCurrentQuestionNumb]}>
            <ScrollBar />
            <StyledArticle>
              <QuantityThemeQuestions/>
              <Timer />
            </StyledArticle>
            <NameQuestionAndImg />
            <Answers />
            <ButtonsQuiz/>
          </Context>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
