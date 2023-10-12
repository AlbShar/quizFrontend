import { useEffect, useContext, useState, RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContextCurrentQuestionNumb,
  ContextProfession,
} from '../../../components/Context';
import { ContextLanguage } from '../../../components/Context';
import SkeletonTheme from '../UI/SkeletonTheme';
import { getThemeQuestion } from '../api/getThemeQuestion';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';
import ScrollBar from '../components/ScrollBar/ScrollBar';
import Timer from '../components/Timer/Timer';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';

import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
  StyledArticle,
} from './TestInfo.Styled';

type TestInfoProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
};

const TestInfo = ({ quizRef }: TestInfoProps) => {
  const { t } = useTranslation();

  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [profession]: [string, (lang: string) => void] =
    useContext(ContextProfession);

  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('');
  const [totalQuestionNumber, setTotalQuestionNumber] = useState<number>(0);

  const view = () => {
    return (
      <section>
        <article style={{ backgroundColor: '#EEEEFF' }}>
          <ScrollBar quizRef={quizRef} />
        </article>
        <StyledArticle>
          <div>
            <StyledH1 id='questionName'>
              {t('Вопрос')} {currentQuestionNumb}
            </StyledH1>
            <StyledSpanQuestionQuantity id='totalQuestionQuantity' tabIndex={0}>
              {`/ ${totalQuestionNumber}`}
            </StyledSpanQuestionQuantity>
            {/* <StyledSpanThemeQuestion id='themeQuestion'>
              {theme}
            </StyledSpanThemeQuestion> */}
          </div>
          <Timer />
        </StyledArticle>
      </section>
    );
  };
  const skeleton = isLoading ? <SkeletonTheme /> : null;
  const content = !(isLoading || isError) ? view() : null;
  const error = isError ? <ErrorMessage /> : null;

  const dataLoaded = (res) => {
    type TArrayItems = {
      theme: null | string;
      totalQuestionNumber: number | null;
    };

    const items: TArrayItems = {
      theme: null,
      totalQuestionNumber: null,
    };

    res.forEach((result) => {
      if (typeof result.value === 'number') {
        items.totalQuestionNumber = result.value;
      } else if (typeof result.value === 'string') {
        items.theme = result.value;
      }
    });

    setIsLoading(false);
    setTheme(`${items.theme}`);
    setTotalQuestionNumber(items.totalQuestionNumber as number);

    for (const key in items) {
      if (!items[key]) {
        throw new Error(`Value of ${key} is ${items[key]} in object "items"`);
      }
    }
  };

  const onError = (error: any): never => {
    setIsError(true);
    setIsLoading(false);
    throw new Error(error);
  };

  useEffect(() => {
    const url1 = `${profession}/questions/question${currentQuestionNumb}/${lang}/theme`;
    const url2 = `${profession}/questions`;

    Promise.allSettled([getThemeQuestion(url1), getTotalQuestionsNumb(url2)])
      .then(dataLoaded)
      .catch(onError);
  }, [currentQuestionNumb, lang, profession]);

  return (
    <>
      {skeleton}
      {content}
      {error}
    </>
  );
};

export default TestInfo;
