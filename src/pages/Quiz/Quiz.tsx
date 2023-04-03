import { useState, useRef } from "react";
import Container from "../../components/Container/Container";
import Answers from "../../modules/Answers/index";
import NameQuestionAndImg from "../../modules/NameQuestionAndImg/index";
import QuantityThemeQuestions from "../../modules/QuantityThemeQuestions/index";
import Timer from "../../modules/Timer/index";
import ScrollBar from "../../modules/ScrollBar/index";
import { StyledMain } from "../../styles/Main.Styled";
import { StyledSection, StyledArticle } from "./Quiz.Styled";
import Context from "../../components/Context";
import ButtonsQuiz from "../../modules/ButtonsQuiz/index";

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState<number>(54);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [isUserChoseAnswer, setUserChoseAnswer] = useState<boolean>(false);

  const userChoseAnswer = () => {
    // const answersItem =
    //   document.querySelectorAll<HTMLLIElement>("#answersAll ul li");
    // answersItem.forEach((answerItem) => {
    //   if (answerItem.dataset.useranswer) {
    //     return;
    //   }
    // });
    setUserChoseAnswer(true);
  };

  const userDidntChooseAnswer = () => {
    setUserChoseAnswer(false);
  };

  return (
    <StyledMain>
      <Container>
        <StyledSection ref={quizRef}>
          <Context value={[currentQuestionNumb, setCurrentQuestionNumb]}>
            <ScrollBar quizRef={quizRef} />
            <StyledArticle>
              <QuantityThemeQuestions />
              <Timer />
            </StyledArticle>
            <NameQuestionAndImg />
            <Answers userChoseAnswer={userChoseAnswer} />
            <ButtonsQuiz userChoseAnswer={userChoseAnswer} isUserChoseAnswer={isUserChoseAnswer} userDidntChooseAnswer={userDidntChooseAnswer}/>
          </Context>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
