import React, { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/UI/Button/Button";
import "./quiz.css";
import Answers from "../../components/UI/Answers";
import Quiestion from "../../components/Quiestion";
import QuantityQuestions from "../../components/QuantityQuestions";
import Timer from "../../components/Timer";
import ScrollBar from "../../components/ScrollBar";
import { GlobalStyles } from "../../components/styles/Global";
import { StyledMain } from "../Main.Styled";

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState(1);

  return (
    <StyledMain>
      <Container>
        <GlobalStyles/>
        <section className="quiz" id="quiz">
          <ScrollBar currentQuestionNumb={currentQuestionNumb} />
          <article className="quiz-top">
            <QuantityQuestions currentQuestionNumb={currentQuestionNumb} />
            <Timer />
          </article>
          <Quiestion currentQuestionNumb={currentQuestionNumb} />
          <Answers currentQuestionNumb={currentQuestionNumb} />
          <Button
            currentPage="Quiz"
            currentQuestionNumb={currentQuestionNumb}
            setCurrentQuestionNumb={setCurrentQuestionNumb}
          />
        </section>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
