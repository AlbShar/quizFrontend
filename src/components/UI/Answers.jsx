import React, { useEffect, useState } from "react";
import { removeAttributesAnswers, setAttributesUserAnswer, getAnswersDb } from "../../index";
import {StyledArticle, StyledUl, StyledLi} from "../styles/Answers.Styled"


const Answers = ({ currentQuestionNumb }) => {
  const [answers, setAnswers] = useState([]);
  
  useEffect(() => {
    removeAttributesAnswers('#answersAll ul li');
    getAnswersDb(currentQuestionNumb).then(answersDB => setAnswers(answersDB))
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
                setAttributesUserAnswer(e,'#answersAll ul li', '2px solid rgb(103, 104, 215)', 'data-useranswer')
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
