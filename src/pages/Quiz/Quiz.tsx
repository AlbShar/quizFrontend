import { useState, useRef, useEffect } from 'react';

import Container from '../../components/Container/Container';
import AnswerOptions from '../../modules/TestAnswerOptions/index';
import TestTask from '../../modules/TestTask/index';
import TestInfo from '../../modules/TestInfo/index';
import { ContextCurrentQuestionNumb } from '../../components/Context';
import TestButtons from '../../modules/TestButtons/index';

import { StyledSection, StyledMain } from './Quiz.Styled';

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState<number>(1);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState<boolean>(true);

  useEffect(() => {
    const showWarningWindow = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue =
        'Вы уверены, что хотите покинуть эту страницу? Все несохраненные изменения будут потеряны.';
    };

    window.addEventListener('beforeunload', showWarningWindow);

    return () => {
      window.removeEventListener('beforeunload', showWarningWindow);
    };
  }, []);

  return (
    <StyledMain>
      <Container>
        <StyledSection ref={quizRef}>
          <ContextCurrentQuestionNumb.Provider
            value={[currentQuestionNumb, setCurrentQuestionNumb]}
          >
            <TestInfo />
            <TestTask />
            <AnswerOptions
              setIsBtnNextDisabled={setIsBtnNextDisabled}
              setUserAnswer={setUserAnswer}
            />
            <TestButtons
              setIsBtnNextDisabled={setIsBtnNextDisabled}
              isBtnNextDisabled={isBtnNextDisabled}
              userAnswer={userAnswer}
            />
          </ContextCurrentQuestionNumb.Provider>
        </StyledSection>
      </Container>
    </StyledMain>
  );
};

export default Quiz;
