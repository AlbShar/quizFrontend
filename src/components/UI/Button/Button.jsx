import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrowleft from "../../../images/icons/arrowleft.png";
import { sendDataDb, highlightPreviousAnswer } from "../../../index";
import { StyledButton, StyledArticle, StyledButtonBack, StyledImg, StyledSpan, StyledButtonQuiz } from "./Button.Styled";


const Button = ({
  currentPage,
  currentQuestionNumb,
  setCurrentQuestionNumb,
}) => {
  const { t } = useTranslation();

  const [uniqueIdUser, setUniqueIdUser] = useState(`${Date.now()}`);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

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
    const answersItem = document.querySelectorAll('#answersAll ul li');
    let timeQuestion;
    const setTimeQuestion = () => {
      timeQuestion = ((Date.now() - questionStartTime) / 1000).toFixed(2);
      setQuestionStartTime(Date.now());
    };

    return (
      <StyledArticle>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack id="BtnBack"
            onClick={(e) => {
              setCurrentQuestionNumb(--currentQuestionNumb);
              e.target.closest("#BtnBack").style.display = "none";
              highlightPreviousAnswer(uniqueIdUser, currentQuestionNumb, '#answersAll ul li');
            }}
          >
            <StyledImg src={arrowleft} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}

        <StyledButtonQuiz
          onClick={() => {
            setTimeQuestion();
            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb + 1);
                  sendDataDb(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent,
                    "#themeQuestion",
                    timeQuestion,
                    uniqueIdUser
                  );
                } else {
                  return false;
                }
              });
          }}
        >
          {t("Принять")}
        </StyledButtonQuiz>
      </StyledArticle>
    );
  };

  return (
    <>{currentPage === "Homepage" ? btnHomePage() : btnsQuizPage()}</>
  );
};

export default Button;
