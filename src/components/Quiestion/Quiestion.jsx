import React, { useEffect } from "react";
import "./question.css";
import { getNameQuestion, getImageSrc } from "../../index";
import { Title } from "../styles/Title.styled";

const Quiestion = ({ currentQuestionNumb }) => {

  useEffect(() => {
    const wrapperImg = document.querySelector('.wrapper-img');
    getNameQuestion(currentQuestionNumb).then(nameQuestion => {
      document.querySelector("#questionTitle").textContent = nameQuestion;
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
      <Title as="h2" id="questionTitle">
        <div className="wrapper-img">
          <img alt="Код на JS" className="img" />
        </div>
      </Title>
    </article>
  );
};

export default Quiestion;
