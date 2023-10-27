import { useEffect, useContext } from 'react';

import {
  ContextCurrentQuestionNumb,
} from 'components/context';
import {ErrorMessage} from 'UI/errorMessage';

import Answer from '../components/answer/answer';
import SkeletonAnswers from '../UI/skeletonAnswers';
import { removeAllAttributes } from '../helpers/removeAllAttributes';
import useFetchAnswersOptions from '../hooks/useFetchAnswersOptions';

import { StyledArticle, StyledUl } from './answerOptions.Styled';


type AnswerOptionsProps = {
  setIsBtnNextDisabled: (item: boolean) => void;
  setUserAnswer: (item: string) => void;
};

const AnswerOptions = ({
  setIsBtnNextDisabled,
  setUserAnswer,
}: AnswerOptionsProps): JSX.Element => {
  const { isError, isLoading, answers } = useFetchAnswersOptions();


  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );

  const refAnswers: HTMLLIElement[] = [];
  const setRefAnswer = (elem: HTMLLIElement) => {
    refAnswers.push(elem as HTMLLIElement);
  };

  const onClickAnswer = (id: number, e: MouseEvent) => {
    const style = 'border: 3px solid #5557FF;';

    if (e.target) {
      const targetElement = e.target as HTMLElement;
      const textContent = targetElement.textContent || '';
      setUserAnswer(textContent);
    }

    removeAllAttributes(refAnswers);
    refAnswers[id].setAttribute('style', style);
    refAnswers[id].focus();
    setIsBtnNextDisabled(false);
  };



  const answersItems = answers.map((answer, index) => (
    <Answer
      index={index}
      setRef={setRefAnswer}
      onClickAnswer={onClickAnswer}
      key={index + 1}
    >
      {answer}
    </Answer>
  ));

  const skeleton = isLoading ? <SkeletonAnswers /> : null;
  const error = isError ? <ErrorMessage /> : null;

  const content = !(isLoading || isError) ? (
    <StyledArticle id='answersAll'>
      <StyledUl>{answersItems}</StyledUl>
    </StyledArticle>
  ) : null;

  useEffect(() => {
    removeAllAttributes(refAnswers);
    //eslint-disable-next-line
  }, [currentQuestionNumb]);

  return (
    <>
      {skeleton} {content} {error}
    </>
  );
};

export default AnswerOptions;
