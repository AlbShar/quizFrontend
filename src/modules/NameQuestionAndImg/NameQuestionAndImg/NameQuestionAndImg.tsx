import { useEffect, useContext, FC, useState } from 'react';

import { ContextQuestionNumb } from '../../../components/Context';
import { getSrcImg } from '../api/getSrcImg';
import { getNameQuestion } from '../api/getNameQuestion';
import SkeletonQuestion from '../UI/SkeletonQuestion';

import {
  StyledH2,
  StyledArticleQuestion,
  StyledPicture,
  StyledImg,
} from './NameQuestionAndImg.Styled';

type IState = {
  question: string;
  loading?: boolean;
  srcImg?: string | undefined;
  error: boolean;
};

type NameQuestionAndImgProps = {
  lang: string
}

const NameQuestionAndImg: FC<NameQuestionAndImgProps> = ({lang}) => {
  const contextValue = useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;
  const [state, setState] = useState<IState>({
    question: '',
    loading: true,
    srcImg: '',
    error: false,
  });
  const errorMessage = 'ERROR!!';
  const error = state.error ? errorMessage : null;
  const spinner = state.loading ? (
    <SkeletonQuestion/>
  ) : null;

  const view = () => {
    if (!state.srcImg) {
      return (
        <StyledArticleQuestion>
          <StyledH2 id='questionTitle' tabIndex={0}>
            {state.question}
          </StyledH2>
        </StyledArticleQuestion>
      );
    }
    return (
      <StyledArticleQuestion>
        <StyledH2 id='questionTitle' tabIndex={0}>
          {state.question}
        </StyledH2>
        <StyledPicture>
          <source
            type='image/png'
            media='(min-width: 320px)'
            srcSet={state.srcImg}
            width='120'
            height='auto'
          ></source>
          <source
            type='image/png'
            media='(min-width: 487px)'
            srcSet={state.srcImg}
            width='768'
            height='auto'
          ></source>
          <source
            type='image/png'
            media='(min-width: 769px)'
            srcSet={state.srcImg}
            width='1024'
            height='auto'
          ></source>
          <StyledImg
            src={state.srcImg}
            width='1024'
            height='auto'
            alt='Код на JS'
          />
        </StyledPicture>
      </StyledArticleQuestion>
    );
  };

  const content = !(state.loading || state.error) ? view() : null;

  const dataLoaded = (result) => {
    type TDataInfo = {
      [key: string]: string;
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

    setState((state) => ({
      ...state,
      loading: false,
      question: dataInfo.question,
      srcImg: dataInfo.src,
    }));
  };

  const onErrorHandler = (error): never => {
    setState((state) => ({ ...state, loading: false, error: true }));
    throw new Error(error);
  };

  useEffect(() => {

    Promise.allSettled([
      getSrcImg(currentQuestionNumb, lang),
      getNameQuestion(currentQuestionNumb, lang),
    ])
      .then(dataLoaded)
      .catch(onErrorHandler);
  }, [currentQuestionNumb, lang]);

  return (
    <>
      {spinner} {content} {error}
    </>
  );
};

export default NameQuestionAndImg;
