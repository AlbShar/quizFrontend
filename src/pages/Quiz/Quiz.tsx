import { useState, useRef, useEffect, FC } from 'react';

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

type QuizProps = {
  lang: string
};

const Quiz: FC<QuizProps> = ({lang}) => {

  const [currentQuestionNumb, setCurrentQuestionNumb] = useState<number>(1);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [isBtnDisabled, setIsBtnDisabled] =
    useState<boolean>(true);

  const showButtonAccept = () => {
    setIsBtnDisabled(false);
  };

  const hideButtonAccept = () => {
    setIsBtnDisabled(true);
  };

  useEffect(() => {
    const showWarningWindow = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = 'Вы уверены, что хотите покинуть эту страницу? Все несохраненные изменения будут потеряны.';
    };
   
    window.addEventListener("beforeunload", showWarningWindow)
    
    return () => {
      window.removeEventListener("beforeunload", showWarningWindow)
    }
  }, [])

  return (
    <StyledMain>
      <Container>
        <StyledSection ref={quizRef}>
          <Context value={[currentQuestionNumb, setCurrentQuestionNumb]}>
            <ScrollBar quizRef={quizRef} />
            <StyledArticle>
              <QuantityThemeQuestions lang={lang}/>
              <Timer />
            </StyledArticle>
            <NameQuestionAndImg lang={lang}/>
            <Answers showButtonAccept={showButtonAccept} lang={lang}/>
            <ButtonsQuiz
              showButtonAccept={showButtonAccept}
              isBtnDisabled={isBtnDisabled}
              hideButtonAccept={hideButtonAccept}
            />
          </Context>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
