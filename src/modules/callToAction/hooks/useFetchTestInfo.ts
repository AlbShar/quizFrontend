import { useEffect, useState, useContext } from 'react';

import { ContextLanguage, ContextProfession } from 'components/context';
import { getTotalQuestionsNumb } from 'api/getTotalQuestionsNumb';

import { getQuantityThemes } from '../api/getQuantityThemes';

export const useFetchTestInfo = () => {
  let [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);
  const [lang, ] =
    useContext(ContextLanguage);

  const [isLoading, setIsLoading] = useState(true);
  const [quantityQuestions, setQuantityQuestions] = useState(0);
  const [quantityThemes, setQuantityThemes] = useState(0);
  const [isError, setIsError] = useState(false);

  const dataHasLoaded = (dataTest: [number, number]) => {
    const [quantityQuestions, quantityThemes] = dataTest;
    setIsLoading(false);
    setQuantityQuestions(quantityQuestions);
    setQuantityThemes(quantityThemes);
  };

  const onError = (error) => {
    setIsError(true);
    setIsLoading(false);
    console.error(error);
  };

  useEffect(() => {
    if (profession) {
      const url = `${profession}/questions`;
      Promise.all([getTotalQuestionsNumb(url), getQuantityThemes(url, lang)])
        .then(dataHasLoaded)
        .catch(onError);
    } else {
      setIsLoading(false)
    }
  }, [profession, lang]);

  return { isLoading, isError, quantityQuestions, quantityThemes };
};
