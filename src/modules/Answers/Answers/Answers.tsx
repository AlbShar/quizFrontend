import { useEffect, useState, useContext } from 'react';

import SkeletonAnswers from '../UI/SkeletonAnswers';
import { getAnswersDb } from '../api/getAnswersDb';
import Answer from '../components/Answer/Answer';
import { ContextCurrentQuestionNumb } from '../../../components/Context';
import { ContextLanguage } from '../../../components/Context';
import { removeAllAttributes } from '../helpers/removeAllAttributes';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';

import { StyledArticle, StyledUl } from './Answers.Styled';

type TState = {
  loading: boolean;
  answers: string[];
  error: boolean;
};

type AnswersProps = {
  setIsBtnNextDisabled: (item: boolean) => void;
};

const Answers = ({ setIsBtnNextDisabled }: AnswersProps): JSX.Element => {
  const [state, setState] = useState<TState>({
    answers: [],
    loading: true,
    error: false,
  });
  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const refAnswers: HTMLLIElement[] = [];
  const setRefAnswer = (elem: HTMLLIElement) => {
    refAnswers.push(elem as HTMLLIElement);
  };

  const onFocusUserAnswer = (id: number) => {
    const style = 'background-color: #B7B7FF';
    const currentAnswer: HTMLLIElement[] = refAnswers.filter(
      (answerItem) => answerItem.dataset.useranswer,
    );
    const isCurrentAnswer: boolean = currentAnswer.length ? true : false;
    if (!isCurrentAnswer) {
      setIsBtnNextDisabled(false);
    }

    removeAllAttributes(refAnswers);
    refAnswers[id].setAttribute('style', style);
    refAnswers[id].setAttribute('data-useranswer', 'true');
    refAnswers[id].focus();
  };

  const answersHasLoaded = (response) => {
    const answers = Object.entries(response).map((item) => item.join('. '));
    if (Array.isArray(answers)) {
      setState((state) => ({
        ...state,
        answers: answers as string[],
        loading: false,
      }));
    }
  };

  const answersItems = state.answers.map((answer, index) => (
    <Answer
      index={index}
      setRef={setRefAnswer}
      onFocusUserAnswer={onFocusUserAnswer}
      key={index + 1}
    >
      {answer}
    </Answer>
  ));

  const skeleton = state.loading ? <SkeletonAnswers /> : null;
  const error = state.error ? <ErrorMessage/> : null;

  const content = !(state.loading || state.error) ? (
    <StyledArticle id='answersAll'>
      <StyledUl>{answersItems}</StyledUl>
    </StyledArticle>
  ) : null;

  const onErrorHandler = (error: unknown) => {
    setState((state) => ({ ...state, error: true, loading: false }));
    
    if (error instanceof Error) {
      throw new Error(`${error.message}`);
    } else {
      throw new Error(`Unknown error caught: ${error}`);
    }
  };

  useEffect(() => {
    removeAllAttributes(refAnswers);
    if (currentQuestionNumb) {
      getAnswersDb(currentQuestionNumb, lang)
        .then(answersHasLoaded)
        .catch(onErrorHandler);
    }
  }, [currentQuestionNumb, lang]);

  return (
    <>
      {' '}
      {skeleton} {content} {error}
    </>
  );
};

export default Answers;
