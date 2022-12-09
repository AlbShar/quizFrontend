import React, { useState } from "react";
import Container from "../../components/Container/Container";
import Button from "../../components/UI/Button/Button";
import "./quiz.css";
import Answers from "../../components/UI/Answers/Answers";
import Quiestion from "../../components/Quiestion/Quiestion";
import QuantityQuestions from "../../components/QuantityQuestions/QuantityQuestions";
import Timer from "../../components/Timer/Timer";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState(1);


  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <section className="quiz">
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
    </main>
  );
};

export default Quiz;
