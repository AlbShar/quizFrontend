import { useState, useRef, useEffect } from 'react';

import {Container} from 'components/container';
import AnswerOptions from 'modules/testAnswerOptions';
import TestTask from 'modules/testTask';
import TestInfo from 'modules/testInfo';
import { ContextCurrentQuestionNumb } from 'components/context';
import TestButtons from 'modules/testButtons';
import { Main } from 'components/main';

import { StyledSection } from './quiz.Styled';

const Quiz = () => {
  const [currentQuestionNumb, setCurrentQuestionNumb] = useState(1);
  const quizRef = useRef<HTMLTableSectionElement>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isBtnNextDisabled, setIsBtnNextDisabled] = useState(true);

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
    <Main>
      <Container>
        <StyledSection ref={quizRef} id='quiz'>
          <ContextCurrentQuestionNumb.Provider
            value={[currentQuestionNumb, setCurrentQuestionNumb]}
          >
            <TestInfo quizRef={quizRef} />
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
    </Main>
  );
};

export default Quiz;