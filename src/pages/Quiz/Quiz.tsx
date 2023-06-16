import { useState, useRef } from 'react';

import Container from '../../components/Container/Container';
import Answers from '../../modules/Answers/index';
import NameQuestionAndImg from '../../modules/NameQuestionAndImg/index';
import QuantityThemeQuestions from '../../modules/QuantityThemeQuestions/index';
import Timer from '../../modules/Timer/index';
import ScrollBar from '../../modules/ScrollBar/index';
import { StyledMain } from '../../styles/Main.Styled';
import Context from '../../components/Context';
import ButtonsQuiz from '../../modules/ButtonsQuiz/index';

import { StyledSection, StyledArticle } from './Quiz.Styled';

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState<number>(1);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [isButtonAcceptVisibility, setButtonAcceptVisibility] =
    useState<boolean>(false);

  const showButtonAccept = () => {
    setButtonAcceptVisibility(true);
  };

  const hideButtonAccept = () => {
    setButtonAcceptVisibility(false);
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
            <Answers showButtonAccept={showButtonAccept} />
            <ButtonsQuiz
              showButtonAccept={showButtonAccept}
              isButtonAcceptVisibility={isButtonAcceptVisibility}
              hideButtonAccept={hideButtonAccept}
            />
          </Context>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
