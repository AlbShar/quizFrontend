import React, { useEffect, useState } from "react";
import { db } from "../../index";
import { ref } from "firebase/database";
import { onValue } from "firebase/database";
import {StyledArticle, StyledUl, StyledLi} from "../styles/Answers.Styled"


const Answers = ({ currentQuestionNumb }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const answersItem = document.querySelectorAll('#answersAll ul li');

    answersItem.forEach(answerItem => {
      if (answerItem.dataset.useranswer) {
        answerItem.style='';
        answerItem.removeAttribute('data-useranswer');
      }
    })
    onValue(ref(db, `answers/answers${currentQuestionNumb}`), (snapshot) => {
      const answersDB = Object.entries(snapshot.val());
      setAnswers(answersDB.map((item) => item.join(". ")));
    });
    // eslint-disable-next-line
  }, [currentQuestionNumb]);

  return (
    <StyledArticle id="answersAll">
      <StyledUl>
        {answers.map((answer, index) => {
          return (
            <StyledLi
              key={index + 1}
              onClick={(e) => {
                document.querySelectorAll('#answersAll ul li').forEach((item) => {
                  item.style = '';
                  item.removeAttribute('data-useranswer');
                });
                e.target.style.border = '2px solid rgb(103, 104, 215)';
                e.target.setAttribute('data-useranswer', true);
              }}
            >
              {answer}
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledArticle>
  );
};

export default Answers;
