import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Button = ({ currentPage, numbQuestion, setNumbQuestion }) => {
  const { t } = useTranslation();
  const totalQuestions = +document
    .querySelector(".quantity-all")
    ?.textContent.match(/\d/g)
    .join("");

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
    return (
      <button
        className="btn"
        onClick={() => {
          const answersItem = document.querySelectorAll(".list-answers__item");
          answersItem.forEach(asnwerItem => {
            if (asnwerItem.classList.contains('list-answers__item-active')) {
              setNumbQuestion(
                numbQuestion === totalQuestions
                  ? totalQuestions
                  : numbQuestion + 1
              );
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
