import React, { useState, useEffect } from "react";
import { reference } from "../../index";
import { onValue } from "firebase/database";
import Container from "../../components/Container/Container";
import Button from "../../components/UI/Button/Button";
import BackBtn from "../../components/UI/BackBtn/BackBtn";
import "./quiz.css";
import Answers from "../../components/UI/Answers/Answers";
import Quiestion from "../../components/Quiestion/Quiestion";
import QuantityQuestions from "../../components/QuantityQuestions/QuantityQuestions";
import Timer from "../../components/Timer/Timer";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

const Quiz = () => {
  const [numbQuestion, setNumbQuestion] = useState(1);

  // useEffect(() => {
  //     onValue(reference, (snapshot) => {
  //         const data = snapshot.val();
  //         console.log(data)
  //     })
  // })
  return (
    <main style={{ flex: "1 1 auto" }}>
      <Container>
        <section className="quiz">
          <ScrollBar numbQuestion={numbQuestion}/>
          <article className="quiz-top">
            <QuantityQuestions numbQuestion={numbQuestion}/>
            <Timer />
          </article>
          <Quiestion />
          <Answers />
          <article className="quiz-btns">
            <BackBtn />
            <Button currentPage="Quiz" numbQuestion={numbQuestion} setNumbQuestion={setNumbQuestion}/>
          </article>
        </section>
      </Container>
    </main>
  );
};

export default Quiz;
