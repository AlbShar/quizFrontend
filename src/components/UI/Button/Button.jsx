import React, { useState } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import arrowleft from "../../../images/icons/arrowleft.png";
import { sendUserAnswerDB, highlightPreviousAnswer, checkIsUserData, sendUserInfoDB, createIdUser, getIdUser } from "../../../index";
import {
  StyledButton,
  StyledArticle,
  StyledButtonBack,
  StyledImg,
  StyledSpan,
  StyledButtonQuiz,
  
} from "./Button.Styled";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import { db } from "../../../index";


const Button = ({
  type,
  goToPage,
  textBtn,
  currentQuestionNumb,
  setCurrentQuestionNumb,
  pageName
}) => {
  const { t } = useTranslation();
  let totalQuestionsNumbers;
  onValue(ref(db, `questions`), (snapshot) => {
    totalQuestionsNumbers = Object.entries(snapshot.val()).length;
  });

  const btnLinkToPage = (pageTo, text, currentPageName) => {
    return (
      <Link
        className="btn__link"
        to={pageTo ? pageTo : goToPage}
        onClick={(e) => {
          console.log('btn')
          switch(currentPageName ? currentPageName : pageName) {
            case 'homepage':
              createIdUser();
            break;

            case 'quiz':
              if (totalQuestionsNumbers === currentQuestionNumb) {
                const answersItem = document.querySelectorAll("#answersAll ul li");
                answersItem.forEach((asnwerItem) => {
                  if (asnwerItem.dataset.useranswer) {
                    sendUserAnswerDB(
                      currentQuestionNumb,
                      "#questionTitle",
                      asnwerItem.textContent,
                      "#themeQuestion",
                      getIdUser()
                    );
                    setCurrentQuestionNumb(currentQuestionNumb + 1);
                  } else {
                    return false;
                  }
                });
              }
            break;

            case 'contact':
              if (checkIsUserData()) {
                sendUserInfoDB(getIdUser());
              } else {
                e.preventDefault();
              }
            break;
          }
        }}
      >
        <StyledButton>{text ? text : textBtn}</StyledButton>
      </Link>
    );
  };

  const btnsQuizPage = () => {
    return (
      <StyledArticle>
        {!(currentQuestionNumb === 1) && (
          <StyledButtonBack
            id="BtnBack"
            onClick={(e) => {
              setCurrentQuestionNumb(--currentQuestionNumb);
              e.target.closest("#BtnBack").style.display = "none";
              highlightPreviousAnswer(
                getIdUser(),
                currentQuestionNumb,
                "#answersAll ul li"
              );
            }}
          >
            <StyledImg src={arrowleft} alt="Кнопка назад" />
            <StyledSpan>Назад</StyledSpan>
          </StyledButtonBack>
        )}
        {totalQuestionsNumbers === currentQuestionNumb ? (
          btnLinkToPage("/contact", "Закончить тест", 'quiz')
        ) : (
          <StyledButtonQuiz
            onClick={() => {
              const answersItem =
                document.querySelectorAll("#answersAll ul li");
              answersItem.forEach((asnwerItem) => {
                if (asnwerItem.dataset.useranswer) {
                  setCurrentQuestionNumb(currentQuestionNumb + 1);
                  sendUserAnswerDB(
                    currentQuestionNumb,
                    "#questionTitle",
                    asnwerItem.textContent,
                    "#themeQuestion",
                    getIdUser()
                  );
                } else {
                  return false;
                }
              });
            }}
          >
            {t("Принять")}
          </StyledButtonQuiz>
        )}
      </StyledArticle>
    );
  };

  return <>{type === "Link" ? btnLinkToPage() : btnsQuizPage()}</>;
};

export default Button;
