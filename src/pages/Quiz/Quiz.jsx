import React, { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/UI/Button/Button";
import Answers from "../../components/UI/Answers";
import Quiestion from "../../components/Quiestion";
import QuantityThemeQuestions from "../../modules/QuantityThemeQuestions/index";
import Timer from "../../modules/Timer/index";
import ScrollBar from "../../modules/ScrollBar/index";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";
import { StyledSection, StyledArticle } from "./Quiz.Styled";

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState(1);

  return (
    <StyledMain>
      <Container>
        <GlobalStyles/>
        <StyledSection id="quiz">
          <ScrollBar currentQuestionNumb={currentQuestionNumb} />
          <StyledArticle>
            <QuantityThemeQuestions currentQuestionNumb={currentQuestionNumb} />
            <Timer />
          </StyledArticle>
          <Quiestion currentQuestionNumb={currentQuestionNumb} />
          <Answers currentQuestionNumb={currentQuestionNumb} />
          <Button
            currentPage="Quiz"
            currentQuestionNumb={currentQuestionNumb}
            setCurrentQuestionNumb={setCurrentQuestionNumb}
          />
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
