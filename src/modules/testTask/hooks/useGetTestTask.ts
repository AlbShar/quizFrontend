import { useEffect, useContext, useState } from 'react';

import {
  ContextLanguage,
  ContextProfession,
  ContextCurrentQuestionNumb,
} from 'components/context';
import { fetchData } from 'api/fetchData';

export const useGetTestTask = () => {
  const [questionName, setQuestionName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [srcImg, setSrcImg] = useState('');
  const [isError, setIsError] = useState(false);
  const [profession] =
    useContext(ContextProfession);
  const [lang] = useContext(ContextLanguage);

  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const urls = [
    `${profession}/questions/question${currentQuestionNumb}/${lang}/img`,
    `${profession}/questions/question${currentQuestionNumb}/${lang}/name`,
  ];

  const dataLoaded = (result) => {
    result.forEach((result, num) => {
      if (result.status === 'rejected') {
        throw new Error(`${urls[num]}: ${result.reason}`);
      }
    });

    type TDataInfo = {
      src: string;
      question: string;
    };

    const dataInfo: TDataInfo = { src: '', question: '' };

    result.forEach((item) => {
      if (item.value.startsWith('http')) {
        dataInfo.src = item.value;
      }
      if (item.value === 'No') {
        dataInfo.src = '';
      }
      if (typeof item.value === 'string') {
        dataInfo.question = item.value;
      }
    });

    setQuestionName(dataInfo.question);
    setIsLoading(false);
    setSrcImg(dataInfo.src);
  };

  const onErrorHandler = (error): never => {
    setIsLoading(false);
    setIsError(true);

    throw new Error(error);
  };

  useEffect(() => {
    Promise.allSettled(urls.map((url) => fetchData(url)))
      .then(dataLoaded)
      .catch(onErrorHandler);
  }, [currentQuestionNumb, lang]);

  return { isLoading, isError, questionName, srcImg };
};
