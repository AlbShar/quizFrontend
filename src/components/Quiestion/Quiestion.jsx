import React from "react";
import "./question.css";
import codeJS from "../../images/codeJS.png";

const Quiestion = () => {
  return (
    <article className="question">
      <h2 className="question__title">Что выведет код?</h2>
      <div className="question__wrapper-img">
        <img src={codeJS} alt="Код на JS" className="question__img"/>
      </div>
    </article>
  );
};

export default Quiestion;
