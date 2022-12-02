import React, { useEffect } from "react";
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
          <ScrollBar/>
          <article className="quiz-top">
          <QuantityQuestions />
            <Timer />
          </article>
          <Quiestion />
          <Answers />
          <article className="quiz-btns">
            <BackBtn />
            <Button value="Принять" />
          </article>
        </section>
      </Container>
    </main>
  );
};

export default Quiz;
