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
  const [numbQuestion, setNumbQuestion] = useState(1);

  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <section className="quiz">
          <ScrollBar numbQuestion={numbQuestion}/>
          <article className="quiz-top">
            <QuantityQuestions numbQuestion={numbQuestion}/>
            <Timer />
          </article>
          <Quiestion numbQuestion={numbQuestion}/>
          <Answers numbQuestion={numbQuestion}/>
            <Button currentPage="Quiz" numbQuestion={numbQuestion} setNumbQuestion={setNumbQuestion}/>
        </section>
      </Container>
    </main>
  );
};

export default Quiz;
