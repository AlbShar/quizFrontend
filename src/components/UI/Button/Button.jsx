import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ref, set, push } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";
import arrowleft from "../../../images/icons/arrowleft.png";
import { getTotalQuestionsNumb } from "../../../index";
import { StyledButton, StyledArticle, StyledButtonBack, StyledImg, StyledSpan, StyledButtonQuiz } from "./Button.Styled";


const Button = ({
  currentPage,
  currentQuestionNumb,
  setCurrentQuestionNumb,
}) => {
  const { t } = useTranslation();
  const answersItem = document.querySelectorAll('#answersAll ul li');

  const [uniqueIdUser, setUniqueIdUser] = useState(`${Date.now()}`);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  let timeQuestion;

  const btnHomePage = () => {
    return (
      <Link className="btn__link" to="quiz">
        <StyledButton
          onClick={() => {
            setUniqueIdUser(uniqueIdUser * Math.random());
            setQuestionStartTime(Date.now());
          }}
        >
          {t("Начать_тест")}
        </StyledButton>
      </Link>
    );
  };

  const btnsQuizPage = () => {
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
              answersItem.forEach((answerItem) => {
                  if (answerItem.textContent === snapshot.val().userAnswer) {
                    answerItem.style.border = '2px solid rgb(103, 104, 215)';
                    answerItem.setAttribute('data-useranswer', true);
                  }
                });
            }, 1);     
    
          }, {
            onlyOnce: true
          }
        ); 
    };

    return (
      <StyledArticle>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack id="BtnBack"
            onClick={(e) => {
              setCurrentQuestionNumb(--currentQuestionNumb);
              e.target.closest("#BtnBack").style.display = "none";
              highlightPreviousAnswer();
            }}
          >
            <StyledImg src={arrowleft} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}

        <StyledButtonQuiz
          onClick={() => {
            const theme =
              document.querySelector("#themeQuestion").textContent;
            const question =
              document.querySelector("#questionName").textContent;
            getTimeQuestion();

            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
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
                  document.querySelector("#BtnBack").style.display = "flex";
                }
              });
          }}
        >
          Принять
        </StyledButtonQuiz>
      </StyledArticle>
    );
  };

  return (
    <>{currentPage === "Homepage" ? btnHomePage() : btnsQuizPage()}</>
  );
};

export default Button;
