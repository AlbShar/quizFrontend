import React from "react";
import {
  StyledArticle
} from "./ButtonsQuiz.Styled";
import BtnBack from "../components/BtnBack/BtnBack";
import ButtonQuiz from "../components/ButtonQuiz/ButtonQuiz";

const ButtonsQuiz = () => {
  return (
    <StyledArticle>
      <BtnBack />
      <ButtonQuiz />
    </StyledArticle>
  );
};

export default ButtonsQuiz;
