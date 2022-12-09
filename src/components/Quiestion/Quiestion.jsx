import React, { useEffect } from "react";
import "./question.css";
import { getNameQuestion } from "../../index";

const Quiestion = ({ currentQuestionNumb }) => {
  let isImg;

  // useEffect(() => {
  //   onValue(reference, (snapshot) => {
  //     const db = snapshot.val();
  //     titleQuestion = db.name;
  //     isImg = db.isImg;
  //     document.querySelector(".question__title").textContent = titleQuestion;
  //   });
  // });
  useEffect(() => {
    getNameQuestion(currentQuestionNumb).then(nameQuestion => {
      document.querySelector(".question__title").textContent = nameQuestion;
    })
  });

  return (
    <article className="question">
      <h2 className="question__title"></h2> 
      {isImg && (
        <div className="wrapper-img">
          <img src={isImg} alt="Код на JS" className="img" />
        </div>
      )}
    </article>
  );
};

export default Quiestion;
