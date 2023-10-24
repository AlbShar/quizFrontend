import { useEffect, useState, useContext } from 'react';
import {
  ContextCurrentQuestionNumb,
  ContextProfession,
} from 'components/context';
import { ContextLanguage } from 'components/context';
import {ErrorMessage} from 'UI/ErrorMessage/ErrorMessage';

import Answer from '../components/Answer/Answer';
import SkeletonAnswers from '../UI/SkeletonAnswers';
import { getAnswersOptions } from '../api/getAnswersOptions';
import { removeAllAttributes } from '../helpers/removeAllAttributes';

import { StyledArticle, StyledUl } from './AnswerOptions.Styled';

import type { AnswersType } from '../type';

type AnswerOptionsProps = {
  setIsBtnNextDisabled: (item: boolean) => void;
  setUserAnswer: (item: string) => void;
};

const AnswerOptions = ({
  setIsBtnNextDisabled,
  setUserAnswer,
}: AnswerOptionsProps): JSX.Element => {
  const [answers, setAnsewrs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
    const [profession]: [string, (lang: string) => void] =
      useContext(ContextProfession);


  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

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

  const answersHasLoaded = (response: AnswersType) => {
    const answers = Object.entries(response).map((item) => item.join('. '));
    if (Array.isArray(answers)) {
      setAnsewrs(answers);
      setIsLoading(false);
    }
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

  const onErrorHandler = (error) => {
    setIsLoading(false);
    setIsError(true);
    throw new Error(`${error.message}`);
  };

  useEffect(() => {
    const url = `${profession}/answers/answers${currentQuestionNumb}/${lang}`;

    getAnswersOptions(url).then(answersHasLoaded).catch(onErrorHandler);
  }, [currentQuestionNumb, lang, profession]);

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
