import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, set } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";

const Button = ({ currentPage, numbQuestion, setNumbQuestion }) => {
  const { t } = useTranslation();
  let totalQuestions;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestions = Object.entries(snapshot.val()).length;
  });

  /*
  Get totalPoints
  onValue(
    ref(db, `userAnswers`),
    (snapshot) => {
      let answersUser = Object.values(snapshot.val());
      console.log(answersUser.map(answerUser => answerUser.point).reduce((sum, current) => sum + current, 0))
    }
  );*/

  const getContentForBtnHomePage = () => {
    return (
      <button className="btn">
        <Link className="btn__link" to="quiz">
          {t("Начать_тест")}
        </Link>
      </button>
    );
  };

  const getContentForBtnQuiz = () => {
    const sendDataDb = (numbQuestion, question, userAnswer, theme) => {
      let rightAnswerDb;
      onValue(
        ref(db, `questions/question${numbQuestion}/rightAnswer`),
        (snapshot) => {
          rightAnswerDb = snapshot.val();
        }
      );
      set(ref(db, `userAnswers/answer${numbQuestion}`), {
        question: question,
        userAnswer: userAnswer,
        theme: theme,
        point: rightAnswerDb === userAnswer ? 1 : 0,
      });
    };

    return (
      <button
        className="btn"
        onClick={() => {
          const answersItem = document.querySelectorAll(".list-answers__item");
          const theme = document.querySelector(".quantity__theme").textContent;
          const question =
            document.querySelector(".question__title").textContent;
          answersItem.forEach((asnwerItem) => {
            if (asnwerItem.classList.contains("list-answers__item-active")) {
              setNumbQuestion(
                numbQuestion === totalQuestions
                  ? totalQuestions
                  : numbQuestion + 1
              );
              sendDataDb(numbQuestion, question, asnwerItem.textContent, theme);
            } else {
              return false;
            }
          });
        }}
      >
        Принять
      </button>
    );
  };

  return (
    <>
      {currentPage === "Homepage"
        ? getContentForBtnHomePage()
        : getContentForBtnQuiz()}
    </>
  );
};

export default Button;
