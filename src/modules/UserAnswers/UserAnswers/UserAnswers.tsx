import { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../app/store/index';

import Container from '../../../components/Container/Container';
import FilterByRight from '../components/FilterByRight/FilterByRight';
import FilterByThemes from '../components/FilterByThemes/FilterByThemes';
import Spinner from '../../../UI/Spinner/Spinner';
import { ContextLanguage, ContextIdUser } from '../../../components/Context';
import getThemes from '../helpers/getThemes';
import getPointsByThemes from '../helpers/getPointsByThemes';
import ErrorMessage from '../../../UI/ErrorMessage/ErroMessage';
import { fetchUserAnswer } from '../userAnswersSlice';
import { createSelector } from '@reduxjs/toolkit';

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
  TInitialState,
} from '../types/types';
import type { TPointsByThemes } from '../../../types/types';

type UserAnwersProps = {
  setPointsByTheme: (themes: TPointsByThemes) => void;
};

export const UserAnswers = ({ setPointsByTheme }: UserAnwersProps) => {
  const { userAnswersLoadingStatus, userAnswers } = useSelector(
    (state: RootState) => state.userAnswersReducer,
  );

  const filteredUserAnswers = createSelector(
    (state: RootState) => state.filtersReducer.filterByRight,
    (state: RootState) => state.filtersReducer.filterByTheme,
    (state: RootState) => state.userAnswersReducer.userAnswers,
    (filterByRight, filterByTheme, userAnswers) => {
      const arrayUserAnswers = Object.values(userAnswers);
      if (filterByRight === 'Все вопросы' && filterByTheme === 'Все тематики') {
        return arrayUserAnswers;
      } else if (filterByRight !== 'Все вопросы' && filterByTheme !== 'Все тематики') {
        return arrayUserAnswers
          .filter((userAnswer) => userAnswer.userAnswer.point === 0)
          .filter((userAnswer) => userAnswer.theme === filterByTheme);
      } else if (filterByRight !== 'Все вопросы') {
        return arrayUserAnswers.filter(
          (userAnswer) => userAnswer.theme === filterByRight,
        );
      } else if (filterByTheme !== 'Все тематики') {
        return arrayUserAnswers.filter(
          (userAnswer) => userAnswer.theme === filterByTheme,
        );
      }
    },
  );
  const filteredAnswers = useSelector(filteredUserAnswers);

  console.log(filteredAnswers);

  const [lang]: [string, (lang: string) => void] = useContext(ContextLanguage);
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [idUser]: [string, (lang: string) => void] = useContext(ContextIdUser);
  const [infoQuestionsAndAnswers, setInfoQuestionsAndAnswers] =
    useState<null | TInfoQuestionsAndAnswers>(null);

  useEffect(() => {
    dispatch(fetchUserAnswer());
  }, [lang]);

  return (
    <Container>
      <details open>
        <StyledSum>{t('Ответы')}</StyledSum>
        <StyledSection>
          <FilterByThemes
            themesNames={getThemes(
              infoQuestionsAndAnswers as TInfoQuestionsAndAnswers,
            )}
          />
          <FilterByRight />
        </StyledSection>
        <StyledUl>
          {filteredAnswers ? (
            filteredAnswers.map((userAnswerArr) => {
              const {
                descr,
                img,
                id,
                name,
                rightAnswer,
                theme,
                answerOptions,
                userAnswer,
              } = userAnswerArr;
              const isRight = userAnswer?.point ? true : false;
              const color = isRight ? 'green' : 'red';
              const className = {
                borderRadius: 10,
                border: `1px solid ${color}`,
              };
              return (
                <StyledListAnswers style={className} key={id}>
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
                      {descr.startsWith('http') ? (
                        <a href={descr} target='_blank' rel='noreferrer'>
                          {t('Ссылка')}
                        </a>
                      ) : (
                        descr
                      )}
                    </StyledLi>
                  </StyledUl>
                </StyledListAnswers>
              );
            })
          ) : (
            <p>filteredAnswers is undefined</p>
          )}
        </StyledUl>
      </details>
    </Container>
  );
};
