import React, { useEffect, useState } from "react";
import { removeAttributesAnswers } from "../helpers/removeAttributesAnswers";
import { getAnswersDb } from "../api/getAnswersDb";
import { StyledArticle, StyledUl } from "./Answers.Styled";
import Answer from "../components/Answer/Answer";

const Answers = ({ currentQuestionNumb }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    removeAttributesAnswers("#answersAll ul li");
    getAnswersDb(currentQuestionNumb).then((answersDB) =>
      setAnswers(answersDB)
    );
    // eslint-disable-next-line
  }, [currentQuestionNumb]);

  return (
    <StyledArticle id="answersAll">
      <StyledUl>
        {answers.map((answer, index) => (
          <Answer key={index + 1}>{answer}</Answer>
        ))}
      </StyledUl>
    </StyledArticle>
  );
};

export default Answers;
