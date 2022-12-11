import React, { useEffect } from "react";
import "./question.css";
import { getNameQuestion, getImageSrc } from "../../index";

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
    const wrapperImg = document.querySelector('.wrapper-img');
    getNameQuestion(currentQuestionNumb).then(nameQuestion => {
      document.querySelector(".question__title").textContent = nameQuestion;
    })
    getImageSrc(currentQuestionNumb).then(imgSrc => {
      wrapperImg.style.display = 'block';
      document.querySelector('.img').src = imgSrc;
    }).catch(() => {
      wrapperImg.style.display = 'none';
    })
  });

  return (
    <article className="question">
      <h2 className="question__title"></h2> 
        <div className="wrapper-img">
          <img alt="Код на JS" className="img" />
        </div>
    </article>
  );
};

export default Quiestion;
