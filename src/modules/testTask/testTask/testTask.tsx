import { useEffect, useContext, useState } from 'react';
import {ErrorMessage} from 'UI/errorMessage';
import {
  ContextLanguage,
  ContextProfession,
  ContextCurrentQuestionNumb,
} from 'components/context';

import SkeletonQuestion from '../UI/skeletonQuestion';
import { fetchData } from '../../../api/fetchData';

import {
  StyledH2,
  StyledArticleQuestion,
  StyledPicture,
  StyledImg,
} from './testTask.Styled';

const TestTask = () => {
  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [profession]: [string, (lang: string) => void] =
      useContext(ContextProfession);

  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const [questionName, setQuestionName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [srcImg, setSrcImg] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const error = isError ? <ErrorMessage /> : null;
  const spinner = isLoading ? <SkeletonQuestion /> : null;

  const urls = [
    `${profession}/questions/question${currentQuestionNumb}/${lang}/img`,
    `${profession}/questions/question${currentQuestionNumb}/${lang}/name`,
  ];

  const view = () => {
    if (!srcImg) {
      return (
        <StyledArticleQuestion>
          <StyledH2 id='questionTitle' tabIndex={0}>
            {questionName}
          </StyledH2>
        </StyledArticleQuestion>
      );
    }
    return (
      <StyledArticleQuestion>
        <StyledH2 id='questionTitle' tabIndex={0}>
          {questionName}
        </StyledH2>
        <StyledPicture>
          <source
            type='image/png'
            media='(min-width: 320px)'
            srcSet={srcImg}
            width='120'
            height='auto'
          ></source>
          <source
            type='image/png'
            media='(min-width: 487px)'
            srcSet={srcImg}
            width='768'
            height='auto'
          ></source>
          <source
            type='image/png'
            media='(min-width: 769px)'
            srcSet={srcImg}
            width='1024'
            height='auto'
          ></source>
          <StyledImg src={srcImg} width='1024' height='auto' alt='Код на JS' />
        </StyledPicture>
      </StyledArticleQuestion>
    );
  };

  const content = !(isLoading || isError) ? view() : null;

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

  return (
    <>
      {spinner} {content} {error}
    </>
  );
};

export default TestTask;
