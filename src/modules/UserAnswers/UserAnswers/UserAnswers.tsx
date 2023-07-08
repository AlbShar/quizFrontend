import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../../../components/Container/Container';
import FilterByRight from '../components/FilterByRight/FilterByRight';
import FilterByThemes from '../components/FilterByThemes/FilterByThemes';
import { getAnswerOptions } from '../api/getAnswerOptions';
import { getUserAnswers } from '../api/getUserAnswers';
import { getInfoQuestions } from '../api/getInfoQuestions';
import Spinner from '../../../UI/Spinner/Spinner';
import { getNumberFromKey } from '../helpers/getNumberFromKey';
import { ContextLanguage, ContextIdUser } from '../../../components/Context';
import filterByRightAnswer from '../helpers/filterByRightAnswer';
import filterByThemes from '../helpers/filterByThemes';
import getThemes from '../helpers/getThemes';
import getPointsByThemes from '../helpers/getPointsByThemes';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';

import {
  StyledLi,
  StyledListAnswers,
  StyledUl,
  StyledSpan,
  StyledSpanResult,
  StyledSum,
  StyledSection,
} from './UserAnswers.Styled';

import type {
  TInfoQuestionsAndAnswers,
  TAnswersDB,
  TAnswerOptionsLangDB,
  TInfoQuiestionsDB,
  TQuestionAndAnswer,
} from '../types/types';
import type { TPointsByThemes } from '../../../types/types';



type UserAnwersProps = {
  setPointsByTheme: (themes: TPointsByThemes) => void;
};
const UserAnswers = ({ setPointsByTheme }: UserAnwersProps): JSX.Element => {
  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);

  const { t } = useTranslation();
  const [infoQuestionsAndAnswers, setInfoQuestionsAndAnswers] =
    useState<null | TInfoQuestionsAndAnswers>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filterTheme, setFilterTheme] = useState<string>('');
  const [filterRight, setFilterRight] = useState<string>('');

  const loading = isLoading ? (
    <Spinner width={50} height={50} color={'#1f2ce0'} margin='0 auto' />
  ) : (
    false
  );
  const error = isError ? <ErrorMessage /> : false;
  const view = () => {
    if (infoQuestionsAndAnswers) {
      const visibleData: TInfoQuestionsAndAnswers = filterByRightAnswer(
        filterByThemes(infoQuestionsAndAnswers, filterTheme),
        filterRight,
      );
      return (
        <StyledUl>
          {Object.entries(visibleData as TQuestionAndAnswer[]).map(
            (userAnswerArr, index) => {
              const {
                descr,
                img,
                id,
                name,
                rightAnswer,
                theme,
                answerOptions,
                userAnswer,
              } = userAnswerArr[1];
              const isRight = userAnswer.point ? true : false;
              const color = isRight ? 'green' : 'red';
              const className = {
                borderRadius: 10,
                border: `1px solid ${color}`,
              };

              return (
                <StyledListAnswers style={className} key={index + 1}>
                  <StyledUl>
                    <StyledSpanResult isRight={isRight}>
                      {isRight ? '\u2714' : '\u2718'}
                    </StyledSpanResult>
                    <StyledLi>
                      <StyledSpan>{`Вопрос № ${id}: `}</StyledSpan>
                      {`${name} (${theme})`}
                    </StyledLi>
                    {img === 'No' ? (
                      false
                    ) : (
                      <StyledLi>
                        <img
                          style={{ maxWidth: '100%' }}
                          src={img}
                          alt='code'
                        />
                      </StyledLi>
                    )}
                    <StyledLi>
                      <StyledSpan>{`${t('Варианты_ответов')}: `}</StyledSpan>
                      {Object.entries(answerOptions)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(', ')}
                    </StyledLi>
                    <StyledLi>
                      <StyledSpan>{`${t('Ваш_ответ')}: `}</StyledSpan>{' '}
                      {userAnswer.userAnswer}
                    </StyledLi>
                    {isRight ? (
                      false
                    ) : (
                      <StyledLi>
                        <StyledSpan>{`${t('Правильный_ответ')}: `}</StyledSpan>
                        {rightAnswer}
                      </StyledLi>
                    )}
                    <StyledLi>
                      <StyledSpan>{`${t('Объяснение')}: `} </StyledSpan>
                      {descr}
                    </StyledLi>
                  </StyledUl>
                </StyledListAnswers>
              );
            },
          )}
        </StyledUl>
      );
    }
  };
  const content = !(isLoading || isError) ? view() : null;

  const transformUserAnswers = (res: TAnswersDB) => {
    const updateUserAnswers = Object.fromEntries(
      Object.entries(res).map(([key, value]) => [
        getNumberFromKey(key),
        { point: value.point, userAnswer: value.userAnswer },
      ]),
    );
    return updateUserAnswers;
  };

  const transformData = (
    res: TAnswerOptionsLangDB | TInfoQuiestionsDB,
    lang: string,
  ) => {
    const updateAnswerOptions = Object.fromEntries(
      Object.entries(res).map(([key, value]) => [
        getNumberFromKey(key),
        value[`${lang}`],
      ]),
    );
    return updateAnswerOptions;
  };

  const transformQuestionsAndAnswersDB = (
    res: (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[],
  ) => {
    const [userAnswers, answerOptions, infoQuestions] = res;

    const data = {
      userAnswers: transformUserAnswers(userAnswers as TAnswersDB),
      answerOptions: transformData(answerOptions as TAnswerOptionsLangDB, lang),
      infoQuestions: transformData(infoQuestions as TInfoQuiestionsDB, lang),
    };

    const generalInfo = {};

    for (const key in data.infoQuestions) {
      generalInfo[key] = {
        ...data.infoQuestions[key],
        userAnswer: data.userAnswers[key],
        answerOptions: data.answerOptions[key],
      };
    }

    setInfoQuestionsAndAnswers(generalInfo);
    setIsLoading(false);
  };

  const onError = (error: any): never => {
    setIsError(true);
    setIsLoading(false);
    throw new Error(error);
  };

  const setFilterByTheme = (newFilter: string): void => {
    setFilterTheme(newFilter);
  };

  const setFilterByRightAnswer = (newFilter: string): void => {
    setFilterRight(newFilter);
  };

  useEffect(() => {
    Promise.all([
      getUserAnswers(idUser),
      getAnswerOptions(),
      getInfoQuestions(),
    ])
      .then((value) =>
        transformQuestionsAndAnswersDB(
          value as (TAnswersDB | TAnswerOptionsLangDB | TInfoQuiestionsDB)[],
        ),
      )
      .catch(onError);
  }, [lang]);

  useEffect(() => {
    if (infoQuestionsAndAnswers) {
      setPointsByTheme(getPointsByThemes(infoQuestionsAndAnswers));
    }
  }, [infoQuestionsAndAnswers]);

  return (
    <Container>
      <details open>
        <StyledSum>{t('Ответы')}</StyledSum>
        <StyledSection>
          <FilterByThemes
            themesNames={getThemes(
              infoQuestionsAndAnswers as TInfoQuestionsAndAnswers,
            )}
            setFilterByTheme={setFilterByTheme}
          />
          <FilterByRight setFilterByRightAnswer={setFilterByRightAnswer} />
        </StyledSection>
        {loading} {error} {content}
      </details>
    </Container>
  );
};

export default UserAnswers;
