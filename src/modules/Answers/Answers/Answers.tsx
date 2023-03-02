import React, { useEffect, useState, useContext } from "react";
import { removeAttributesAnswers } from "../helpers/removeAttributesAnswers";
import { getAnswersDb } from "../api/getAnswersDb";
import { StyledArticle, StyledUl } from "./Answers.Styled";
import Answer from "../components/Answer/Answer";
import { ContextQuestionNumb } from "../../../components/Context";

const Answers = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const answersItems = answers.map((answer, index) => (
    <Answer key={index + 1}>{answer}</Answer>
  ));

  useEffect(() => {
    removeAttributesAnswers("#answersAll ul li");

    if (currentQuestionNumb) {
      getAnswersDb(currentQuestionNumb).then((answersDB) =>
        setAnswers(answersDB as string[])
      );
    }
    // eslint-disable-next-line
  }, [currentQuestionNumb]);

  return (
    <StyledArticle id="answersAll">
      <StyledUl>{answersItems}</StyledUl>
    </StyledArticle>
  );
};

export default Answers;
