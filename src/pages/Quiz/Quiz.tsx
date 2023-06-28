import { useState, useRef, useEffect} from 'react';

import Container from '../../components/Container/Container';
import Answers from '../../modules/Answers/index';
import NameQuestionAndImg from '../../modules/NameQuestionAndImg/index';
import QuantityThemeQuestions from '../../modules/QuantityThemeQuestions/index';
import Timer from '../../modules/Timer/index';
import ScrollBar from '../../modules/ScrollBar/index';
import { StyledMain } from '../../styles/Main.Styled';
import {ContextCurrentQuestionNumb} from '../../components/Context';
import ButtonsQuiz from '../../modules/ButtonsQuiz/index';

import { StyledSection, StyledArticle } from './Quiz.Styled';



const Quiz = () => {

  const [currentQuestionNumb, setCurrentQuestionNumb] = useState<number>(1);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [isBtnNextDisabled, setIsBtnNextDisabled] =
    useState<boolean>(true);

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
          <ContextCurrentQuestionNumb.Provider value={[currentQuestionNumb, setCurrentQuestionNumb]}>
            <ScrollBar quizRef={quizRef} />
            <StyledArticle>
              <QuantityThemeQuestions/>
              <Timer />
            </StyledArticle>
            <NameQuestionAndImg/>
            <Answers setIsBtnNextDisabled={setIsBtnNextDisabled}/>
            <ButtonsQuiz
              setIsBtnNextDisabled={setIsBtnNextDisabled}
              isBtnNextDisabled={isBtnNextDisabled}
            />
          </ContextCurrentQuestionNumb.Provider>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
