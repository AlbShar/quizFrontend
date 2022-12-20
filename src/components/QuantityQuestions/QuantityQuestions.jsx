import React, { useEffect } from "react";
import "./quantityQuestions.css";
import { getTotalQuestionsNumb, getThemeQuestion } from "../../index.js";

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
    <h2 className="quantity">
      Вопрос {currentQuestionNumb}
      <span className="quantity-all">0</span>
      <span className="quantity__theme">0</span>
    </h2>
  );
};

export default QuantityQuestions;
