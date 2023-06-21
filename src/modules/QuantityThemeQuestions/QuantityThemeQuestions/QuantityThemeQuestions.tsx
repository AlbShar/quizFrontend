import { useEffect, useContext, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextQuestionNumb } from '../../../components/Context';
import Spinner from '../../../UI/Spinner/Spinner';
import { getThemeQuestion } from '../api/getThemeQuestion';
import { getTotalQuestionsNumb } from '../../../api/getTotalQuestionsNumb';

import {
  StyledH1,
  StyledSpanThemeQuestion,
  StyledSpanQuestionQuantity,
} from './QuantityThemeQuestions.Styled';

type TState = {
  loading: boolean;
  questionTheme: string | null;
  totalQuestionNumber: number | null;
};

type QuantityThemeQuestionsProps = {
  lang: string
};

const QuantityThemeQuestions: FC<QuantityThemeQuestionsProps> = ({lang}) => {
  const { t } = useTranslation();
  const contextValue: [number, (numb: number) => void] | null =
    useContext(ContextQuestionNumb);
  const currentQuestionNumb = contextValue ? contextValue[0] : 1;

  const [state, setState] = useState<TState>({
    loading: true,
    questionTheme: null,
    totalQuestionNumber: 0,
  });

  const view = () => {
    return (
      <StyledH1 id='questionName'>
        {t('Вопрос')} {currentQuestionNumb}
        <StyledSpanQuestionQuantity id='totalQuestionQuantity' tabIndex={0}>
          {`/ ${state.totalQuestionNumber}`}
        </StyledSpanQuestionQuantity>
        <StyledSpanThemeQuestion id='themeQuestion'>
          {state.questionTheme}
        </StyledSpanThemeQuestion>
      </StyledH1>
    );
  };
  const spinner = state.loading ? (
    <Spinner width={50} height={50} color='#1f2ce0' margin='' />
  ) : null;
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
    Promise.allSettled([
      getThemeQuestion(currentQuestionNumb, lang),
      getTotalQuestionsNumb(),
    ]).then(dataLoaded);
  }, [currentQuestionNumb, lang]);

  return (
    <>
      {spinner}
      {content}
    </>
  );
};

export default QuantityThemeQuestions;
