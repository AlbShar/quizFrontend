import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, set, push } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";
import arrowleft from "../../../images/icons/arrowleft.png";
import { getTotalQuestionsNumb } from "../../../index";

const Button = ({
  currentPage,
  currentQuestionNumb,
  setCurrentQuestionNumb,
}) => {
  const { t } = useTranslation();

  const [uniqueIdUser, setUniqueIdUser] = useState(`${Date.now()}`);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  let timeQuestion;

  const getBtnHomePage = () => {
    return (
      <Link className="btn__link" to="quiz">
        <button
          className="btn"
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

  const getBtnsQuizPage = () => {
    let referenceUserAnswers = ref(
      db,
      `user${uniqueIdUser}/answer${currentQuestionNumb}`
    );

    const getTimeQuestion = () => {
      timeQuestion = ((Date.now() - questionStartTime) / 1000).toFixed(2);
      setQuestionStartTime(Date.now());
    };

    const setUniqueIdAnswer = () => {
      const answerId = push(referenceUserAnswers).key;
      return answerId;
    };

    const sendDataDb = (
      currentQuestionNumb,
      question,
      userAnswer,
      theme,
      timeQuestion
    ) => {
      let rightAnswerDb;
      onValue(
        ref(db, `questions/question${currentQuestionNumb}/rightAnswer`),
        (snapshot) => {
          rightAnswerDb = snapshot.val();
        }
      );
      set(referenceUserAnswers, {
        id: setUniqueIdAnswer(),
        question: question,
        userAnswer: userAnswer,
        theme: theme,
        point: rightAnswerDb === userAnswer ? 1 : 0,
        time: timeQuestion,
      });
    };

    const highlightPreviousAnswer = () => {
        onValue(
          ref(db, `user${uniqueIdUser}/answer${currentQuestionNumb}`),
          (snapshot) => {
             setTimeout(() => {
              document
                .querySelectorAll(".list-answers__item")
                .forEach((answerItem) => {
                  if (answerItem.textContent === snapshot.val().userAnswer) {
                    answerItem.classList.add("list-answers__item-active");
                  }
                });
            }, 1);     
    
          }, {
            onlyOnce: true
          }
        ); 
    };

    return (
      <article className="quiz-btns">
        {!(currentQuestionNumb === 1) && (
          <button
            className="back-btn"
            onClick={(e) => {
              setCurrentQuestionNumb(--currentQuestionNumb);
              e.target.closest(".back-btn").style.display = "none";
              highlightPreviousAnswer();
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

            document
              .querySelectorAll(".list-answers__item")
              .forEach((asnwerItem) => {
                if (
                  asnwerItem.classList.contains("list-answers__item-active")
                ) {
                  getTotalQuestionsNumb().then((totalQuestionsNumb) => {
                    setCurrentQuestionNumb(
                      currentQuestionNumb === totalQuestionsNumb
                        ? totalQuestionsNumb
                        : currentQuestionNumb + 1
                    );
                  });
                  sendDataDb(
                    currentQuestionNumb,
                    question,
                    asnwerItem.textContent,
                    theme,
                    timeQuestion
                  );
                } else {
                  return false;
                }
                if (currentQuestionNumb >= 2) {
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
    <>{currentPage === "Homepage" ? getBtnHomePage() : getBtnsQuizPage()}</>
  );
};

export default Button;
