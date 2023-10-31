import { useEffect, useState, useContext } from 'react';
import {
  ContextCurrentQuestionNumb,
  ContextProfession,
  ContextLanguage,
} from 'components/context';

import { getAnswersOptions } from '../api/getAnswersOptions';

import type { AnswersType } from '../type';

const useFetchAnswersOptions = () => {
  const [answers, setAnsewrs] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [profession] =
    useContext(ContextProfession);
  const [currentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang] = useContext(ContextLanguage);
  const answersHasLoaded = (response: AnswersType) => {
    const answers = Object.entries(response).map((item) => item.join('. '));
    if (Array.isArray(answers)) {
      setAnsewrs(answers);
      setIsLoading(false);
    }
  };

  const onErrorHandler = (error) => {
    setIsLoading(false);
    setIsError(true);
    throw new Error(`${error.message}`);
  };

  useEffect(() => {
    const url = `${profession}/answers/answers${currentQuestionNumb}/${lang}`;

    getAnswersOptions(url).then(answersHasLoaded).catch(onErrorHandler);
  }, [currentQuestionNumb, lang, profession]);

  return { isError, isLoading, answers };
};

export default useFetchAnswersOptions;
