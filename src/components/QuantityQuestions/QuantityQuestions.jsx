import React, { useEffect } from "react";
import "./quantityQuestions.css";
import { getTotalQuestionsNumb, getThemeQuestion } from "../../index.js";
import { Title } from '../styles/Title.styled';


const QuantityQuestions = ({ currentQuestionNumb }) => {
  useEffect(() => {
    getTotalQuestionsNumb().then((totalQuestionsNumb) => {
      document.querySelector(".quantity-all").textContent = totalQuestionsNumb;
    });
    getThemeQuestion(currentQuestionNumb).then(theme => {
      document.querySelector(".quantity__theme").textContent = theme;
    })
  }, [currentQuestionNumb]);
  return (
    <Title>
      Вопрос {currentQuestionNumb}
      <span className="quantity-all">0</span>
      <span className="quantity__theme">0</span>
    </Title>
  );
};

export default QuantityQuestions;
