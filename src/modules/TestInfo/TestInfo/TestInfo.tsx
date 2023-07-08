import { useEffect, useContext, useState, RefObject } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextCurrentQuestionNumb } from '../../../components/Context';
import { ContextLanguage } from '../../../components/Context';
import SkeletonTheme from '../UI/SkeletonTheme';
import { getThemeQuestion } from '../api/getThemeQuestion';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';
import ScrollBar from '../components/ScrollBar/ScrollBar';
import Timer from '../components/Timer/Timer';

import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
} from './TestInfo.Styled';

type TState = {
  loading: boolean;
  questionTheme: string | null;
  totalQuestionNumber: number | null;
};

type TestInfoProps = {
  quizRef: RefObject<HTMLTableSectionElement>;
};

const TestInfo = ({ quizRef }: TestInfoProps) => {
  const { t } = useTranslation();

  const [currentQuestionNumb]: [number, (numb: number) => void] = useContext(
    ContextCurrentQuestionNumb,
  );
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);

  const [state, setState] = useState<TState>({
    loading: true,
    questionTheme: null,
    totalQuestionNumber: 0,
  });

  const view = () => {
    return (
      <>
        <ScrollBar quizRef={quizRef} />
        <StyledH1 id='questionName'>
          {t('Вопрос')} {currentQuestionNumb}
        </StyledH1>
        <StyledSpanQuestionQuantity id='totalQuestionQuantity' tabIndex={0}>
          {`/ ${state.totalQuestionNumber}`}
        </StyledSpanQuestionQuantity>
        <StyledSpanThemeQuestion id='themeQuestion'>
          {state.questionTheme}
        </StyledSpanThemeQuestion>
        <Timer/>
      </>
    );
  };
  const skeleton = state.loading ? <SkeletonTheme /> : null;
  const content = !state.loading ? view() : null;

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

    setState({
      loading: false,
      questionTheme: `${items.theme}`,
      totalQuestionNumber: items.totalQuestionNumber,
    });

    for (const key in items) {
      if (!items[key]) {
        throw new Error(`Value of ${key} is ${items[key]} in object "items"`);
      }
    }
  };

  useEffect(() => {
    const url = 'questions';
    Promise.allSettled([
      getThemeQuestion(currentQuestionNumb, lang),
      getTotalQuestionsNumb(url),
    ]).then(dataLoaded);
  }, [currentQuestionNumb, lang]);

  return (
    <>
      {skeleton}
      {content}
    </>
  );
};

export default TestInfo;
