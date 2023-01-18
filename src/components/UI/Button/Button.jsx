import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrowleft from "../../../images/icons/arrowleft.png";
import { sendDataDb, highlightPreviousAnswer, getTotalQuestionsNumb } from "../../../index";
import { StyledButton, StyledArticle, StyledButtonBack, StyledImg, StyledSpan, StyledButtonQuiz } from "./Button.Styled";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";



const Button = ({
  currentPage,
  currentQuestionNumb,
  setCurrentQuestionNumb,
}) => {
  const { t } = useTranslation();
  const [uniqueIdUser, setUniqueIdUser] = useState(`${Date.now()}`);
  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });


  const btnLinkToPage = (pageTo, text, action) => {
    return (
      <Link className="btn__link" to={pageTo}>
        <StyledButton
          onClick={() => {
            setUniqueIdUser(uniqueIdUser * Math.random());
          }}
        >
          {text}
        </StyledButton>
      </Link>
    );
  };

  const btnsQuizPage = () => {
    const answersItem = document.querySelectorAll('#answersAll ul li');


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
          {
          totalQuestionsNumbers === currentQuestionNumb ? btnLinkToPage('/contact', 'Закончить тест') : 
          <StyledButtonQuiz
          onClick={() => {
            answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb+1);
                  sendDataDb(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent,
                    "#themeQuestion",
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
        }
      </StyledArticle>
    );
  };

  return (
    <>{currentPage === "Homepage" ? btnLinkToPage('quiz', t("Начать_тест"), ) : btnsQuizPage()}</>
  );
};

export default Button;
