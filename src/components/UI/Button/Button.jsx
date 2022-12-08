import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, set, push } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";
import arrowleft from "../../../images/icons/arrowleft.png";

const Button = ({ currentPage, numbQuestion, setNumbQuestion }) => {
  const { t } = useTranslation();
  let totalQuestions;
  let timeQuestion;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestions = Object.entries(snapshot.val()).length;
  });
  const [uniqueIdUser, setUniqueIdUser] = useState(`${Date.now()}`);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  const getTimeQuestion = () => {
    timeQuestion = ((Date.now() - questionStartTime)/1000).toFixed(2);
    setQuestionStartTime(Date.now());
  };


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
      <Link className="btn__link" to="quiz" >
        <button className="btn"
          onClick={() => {
            setUniqueIdUser(uniqueIdUser * Math.random());
            setQuestionStartTime(Date.now());
          }}
        >
          {t("Начать_тест")}
        </button>
      </Link>
    );
  };

  const getContentForBtnQuiz = () => {
    let referenceUserAnswers = ref(
      db,
      `user${uniqueIdUser}/answer${numbQuestion}`
    );
    const answerId = push(referenceUserAnswers).key;
    const answersItem = document.querySelectorAll(".list-answers__item");

    const sendDataDb = (
      numbQuestion,
      question,
      userAnswer,
      theme,
      timeQuestion
    ) => {
      let rightAnswerDb;
      onValue(
        ref(db, `questions/question${numbQuestion}/rightAnswer`),
        (snapshot) => {
          rightAnswerDb = snapshot.val();
        }
      );
      set(referenceUserAnswers, {
        id: answerId,
        question: question,
        userAnswer: userAnswer,
        theme: theme,
        point: rightAnswerDb === userAnswer ? 1 : 0,
        time: timeQuestion,
      });
    };

    const highlightPreviousAnswer = (numbQuestion) => {
      onValue(
        ref(db, `user${uniqueIdUser}/answer${numbQuestion}`),

        (snapshot) => {
          let previousAnswerUser = snapshot.val().userAnswer;
          answersItem.forEach((answerItem) => {
            setTimeout(() => {
              if (answerItem.textContent === previousAnswerUser) {
                answerItem.classList.add("list-answers__item-active");
              }
            }, 0);
          });
        }
      );
    };

    return (
      <article className="quiz-btns">
        {!(numbQuestion === 1) && (
          <button
            className="back-btn"
            onClick={(e) => {
              setNumbQuestion(--numbQuestion);
              e.target.closest(".back-btn").style.display = "none";
              highlightPreviousAnswer(numbQuestion);
            }}
          >
            <img className="back-btn__img" src={arrowleft} alt="Кнопка назад" />
            <span className="back-btn__text">Назад</span>
          </button>
        )}

        <button
          className="btn"
          onClick={() => {
            const theme =
              document.querySelector(".quantity__theme").textContent;
            const question =
              document.querySelector(".question__title").textContent;
              getTimeQuestion();

            answersItem.forEach((asnwerItem) => {
              if (asnwerItem.classList.contains("list-answers__item-active")) {
                setNumbQuestion(
                  numbQuestion === totalQuestions
                    ? totalQuestions
                    : numbQuestion + 1
                );
                sendDataDb(
                  numbQuestion,
                  question,
                  asnwerItem.textContent,
                  theme,
                  timeQuestion
                );
              } else {
                return false;
              }
              if (numbQuestion >= 2) {
                document.querySelector(".back-btn").style.display = "flex";
              }
            });
          }}
        >
          Принять
        </button>
      </article>
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
