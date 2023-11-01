import { useEffect, useContext, useState, RefObject, FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ContextCurrentQuestionNumb,
  ContextProfession,
} from 'components/context';
import { ContextLanguage } from 'components/context';
import SkeletonTheme from 'modules/testInfo/UI/skeletonTheme';
import { getThemeQuestion } from 'modules/testInfo/api/getThemeQuestion';
import { getTotalQuestionsNumb } from 'api/getTotalQuestionsNumb';
import ScrollBar from 'modules/testInfo/components/scrollBar/scrollBar';
import Timer from 'modules/testInfo/components/timer/timer';
import { ErrorMessage } from 'UI/errorMessage';

import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
  StyledArticle,
} from './testInfo.Styled';

type TestInfoProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
};

export const TestInfo: FC<TestInfoProps> = ({ quizRef }) => {
  const { t } = useTranslation();
  const [currentQuestionNumb] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [profession]=
    useContext(ContextProfession);

  const [lang] = useContext(ContextLanguage);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [theme, setTheme] = useState('');
  const [totalQuestionNumber, setTotalQuestionNumber] = useState(0);

  const getTestInfoView = () => {
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
            <StyledSpanThemeQuestion id='themeQuestion'>
              {theme}
            </StyledSpanThemeQuestion>
          </div>
          <Timer />
        </StyledArticle>
      </section>
    );
  };
  const skeleton = isLoading ? <SkeletonTheme /> : null;
  const content = !(isLoading || isError) ? getTestInfoView() : null;
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
