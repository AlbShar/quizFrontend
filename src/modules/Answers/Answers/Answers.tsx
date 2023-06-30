import { useEffect, useState, useContext } from 'react';

import SkeletonAnswers from '../UI/SkeletonAnswers';
import { getAnswersDb } from '../api/getAnswersDb';
import Answer from '../components/Answer/Answer';
import { ContextCurrentQuestionNumb } from '../../../components/Context';
import { ContextLanguage } from '../../../components/Context';
import { removeAllAttributes } from '../helpers/removeAllAttributes';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';

import { StyledArticle, StyledUl } from './Answers.Styled';

import type { AnswersType } from '../type';


type AnswersProps = {
  setIsBtnNextDisabled: (item: boolean) => void;
};

const Answers = ({ setIsBtnNextDisabled }: AnswersProps): JSX.Element => {
  const [answers, setAnsewrs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const refAnswers: HTMLLIElement[] = [];
  const setRefAnswer = (elem: HTMLLIElement) => {
    refAnswers.push(elem as HTMLLIElement);
  };

  const onClickAnswer = (id: number, e) => {
    const style = 'background-color: #B7B7FF';
    const currentAnswer: HTMLLIElement[] = refAnswers.filter(
      (answerItem) => answerItem.dataset.useranswer,
    );
    console.log(e.target.textContent);
    const isCurrentAnswer: boolean = currentAnswer.length ? true : false;
    if (!isCurrentAnswer) {
      setIsBtnNextDisabled(false);
    }

    removeAllAttributes(refAnswers);
    refAnswers[id].setAttribute('style', style);
    refAnswers[id].setAttribute('data-useranswer', 'true');
    refAnswers[id].focus();
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

  const onErrorHandler = (error: unknown) => {
    setIsLoading(false);
    setIsError(true);
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Unknown error caught: ${error}`);
    }
  };

  useEffect(() => {
    getAnswersDb(currentQuestionNumb, lang)
      .then(answersHasLoaded)
      .catch(onErrorHandler);
  }, [currentQuestionNumb, lang]);

  useEffect(() => {
    removeAllAttributes(refAnswers);
  }, [currentQuestionNumb]);

  return (
    <>
      {skeleton} {content} {error}
    </>
  );
};

export default Answers;
